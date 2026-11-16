import { useMemo, useRef, useState } from "react";
import { mnemonics } from "../content";
import { acsVersion, allCards, cardById, codeMatches, extractCodes, writtenCards } from "../lib/deck";
import { exportState, importState, resetProgress, setSettings, update, useStore, type Theme } from "../lib/store";
import { go, startSession } from "../lib/router";
import { BackBar, Header, toast } from "../components/Layout";
import { IChevR, IClose, IDoc, IDownload, IGear, IInfo, IKey, IPlus, IQuestion, IShare } from "../components/icons";
import { isIOS, isStandalone, useInstall } from "../lib/install";

export function MoreHome() {
  const install = useInstall();
  return (
    <div className="fade-in">
      <Header title="More" />
      <div className="list">
        <Item icon={<IQuestion width={20} />} color="var(--brand)" title="How to use IFR Cards" sub="Replay the walkthrough" onClick={() => setSettings({ onboarded: false })} />
        <Item icon={<IKey width={20} />} color="var(--brand)" title="Memory aids" sub={`${mnemonics.length} mnemonics to drill`} to="/more/mnemonics" />
        <Item icon={<IDoc width={20} />} color="var(--sky)" title="Knowledge test report" sub="Study the codes you missed on the written" to="/more/report" />
        <Item icon={<IGear width={20} />} color="var(--text-2)" title="Settings" sub="Checkride date, goals, theme, backup" to="/more/settings" />
        <Item icon={<IInfo width={20} />} color="var(--text-2)" title="About and sources" sub={`${writtenCards.length} written cards · ${acsVersion}`} to="/more/about" />
      </div>
      {!isStandalone() && (
        <div className="panel" style={{ marginTop: 14 }}>
          <div className="row" style={{ alignItems: "flex-start" }}>
            <div className="numeral" style={{ color: "var(--brand)" }}><IShare width={20} /></div>
            <div className="grow">
              <div className="li-title">Put it on your home screen</div>
              <div className="small muted" style={{ marginTop: 4 }}>
                {isIOS()
                  ? "In Safari, tap the Share button, then “Add to Home Screen.” It opens full screen and works offline."
                  : "Install it to open full screen and study offline — even in airplane mode."}
              </div>
              {install.canInstall && <button className="btn sm primary" style={{ marginTop: 10 }} onClick={install.prompt}>Install</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Item({ icon, color, title, sub, to, onClick }: { icon: React.ReactNode; color: string; title: string; sub: string; to?: string; onClick?: () => void }) {
  return (
    <button className="list-item" onClick={() => (onClick ? onClick() : to && go(to))}>
      <span className="numeral" style={{ color }}>{icon}</span>
      <span className="grow">
        <div className="li-title">{title}</div>
        <div className="li-sub">{sub}</div>
      </span>
      <IChevR className="chev" />
    </button>
  );
}

export function Mnemonics() {
  const [hidden, setHidden] = useState(true);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  return (
    <div className="fade-in">
      <BackBar label="More" fallback="/more" />
      <Header
        title="Memory aids"
        sub={hidden ? "Tap a card to check yourself" : "Showing all answers"}
        right={<button className="btn sm" onClick={() => { setHidden((h) => !h); setOpen({}); }}>{hidden ? "Show all" : "Quiz me"}</button>}
      />
      <div className="stack">
        {mnemonics.map((m) => {
          const show = !hidden || open[m.id];
          return (
            <button key={m.id} className="panel" style={{ textAlign: "left", width: "100%", display: "block" }} onClick={() => setOpen((o) => ({ ...o, [m.id]: !o[m.id] }))}>
              <div className="row">
                <div className="grow">
                  <div style={{ fontWeight: 800, fontSize: 18, color: "var(--brand)" }}>{m.name}</div>
                  <div className="small muted">{m.what}</div>
                </div>
                {m.ref && <span className="chip">{m.ref.split(",")[0]}</span>}
              </div>
              {show ? (
                <ol style={{ margin: "12px 0 0", paddingLeft: 20 }}>
                  {m.lines.map((l, i) => <li key={i} style={{ margin: "4px 0", fontSize: 15 }}>{l}</li>)}
                </ol>
              ) : (
                <div className="small" style={{ marginTop: 10, color: "var(--sky)", fontWeight: 600 }}>Say it, then tap to check</div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Report() {
  const codes = useStore((s) => s.testCodes);
  const [text, setText] = useState("");
  const matched = useMemo(() => allCards.filter((c) => codes.some((code) => codeMatches(code, c))), [codes]);
  const written = matched.filter((c) => c.content).length;

  const add = () => {
    const found = extractCodes(text);
    if (!found.length) {
      toast("No ACS codes found — they look like IR.I.B.K3");
      return;
    }
    const valid = found.filter((code) => allCards.some((c) => codeMatches(code, c)));
    update((s) => ({ ...s, testCodes: [...new Set([...s.testCodes, ...valid])] }));
    setText("");
    toast(`Added ${valid.length} code${valid.length === 1 ? "" : "s"}${valid.length < found.length ? ` (${found.length - valid.length} not in this ACS)` : ""}`);
  };

  return (
    <div className="fade-in">
      <BackBar label="More" fallback="/more" />
      <Header title="Knowledge test report" />
      <div className="panel small" style={{ color: "var(--text-2)" }}>
        Your Airman Knowledge Test Report lists an <b>ACS code</b> for every topic you missed. The examiner is required to re-test those areas on your checkride, so study them first.
      </div>

      <label className="field" style={{ marginTop: 16 }}>
        <span className="field-label">Type or paste codes from your report</span>
        <textarea className="input mono" value={text} onChange={(e) => setText(e.target.value)} placeholder={"IR.I.B.K3\nIR.I.C.K1\nIR.VI.A.K2"} />
      </label>
      <button className="btn" style={{ marginTop: 10 }} onClick={add} disabled={!text.trim()}><IPlus /> Add codes</button>

      {codes.length > 0 && (
        <>
          <div className="eyebrow">Your codes ({codes.length})</div>
          <div className="pills">
            {codes.map((c) => (
              <span className="code-pill" key={c}>
                {c}
                <button aria-label={`Remove ${c}`} onClick={() => update((s) => ({ ...s, testCodes: s.testCodes.filter((x) => x !== c) }))}><IClose /></button>
              </span>
            ))}
          </div>
          <p className="small muted">
            Matches {matched.length} cards{matched.length > written ? ` (${written} written so far — the rest show the ACS text)` : ""}.
          </p>
          <button className="btn primary" onClick={() => startSession({ kind: "codes", label: "Knowledge test report" })} disabled={!matched.length}>
            Study these cards
          </button>
          <div className="eyebrow">Cards covered</div>
          <div className="list">
            {matched.map((c) => (
              <button key={c.id} className="list-item" onClick={() => go(`/card/${c.id}`)}>
                <span className="grow">
                  <div className="mono tiny" style={{ color: "var(--brand)" }}>{c.id}</div>
                  <div className="li-title" style={{ fontWeight: 560, fontSize: 15 }}>{c.title}</div>
                </span>
                <IChevR className="chev" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function Settings() {
  const s = useStore((x) => x.settings);
  const [confirmReset, setConfirmReset] = useState(false);
  const file = useRef<HTMLInputElement>(null);

  const download = async () => {
    const json = exportState();
    const name = `ifr-cards-backup-${new Date().toISOString().slice(0, 10)}.json`;
    try {
      const f = new File([json], name, { type: "application/json" });
      if (navigator.canShare?.({ files: [f] })) {
        await navigator.share({ files: [f], title: "IFR Cards backup" });
        return;
      }
    } catch { /* fall through */ }
    try {
      const url = URL.createObjectURL(new Blob([json], { type: "application/json" }));
      const a = document.createElement("a");
      a.href = url; a.download = name; a.click();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast("Backup downloaded");
    } catch {
      await navigator.clipboard?.writeText(json);
      toast("Backup copied to clipboard");
    }
  };

  return (
    <div className="fade-in">
      <BackBar label="More" fallback="/more" />
      <Header title="Settings" />

      <div className="panel stack">
        <label className="field">
          <span className="field-label">Checkride date</span>
          <input type="date" className="input" value={s.checkride ?? ""} onChange={(e) => setSettings({ checkride: e.target.value || undefined })} />
        </label>
        <div className="row">
          <div className="grow"><div style={{ fontWeight: 650 }}>Daily goal</div><div className="small muted">Cards per day</div></div>
          <Stepper value={s.dailyGoal} step={5} min={5} max={200} onChange={(v) => setSettings({ dailyGoal: v })} />
        </div>
        <div className="row">
          <div className="grow"><div style={{ fontWeight: 650 }}>Session length</div><div className="small muted">Cards per smart session</div></div>
          <Stepper value={s.sessionSize} step={5} min={5} max={100} onChange={(v) => setSettings({ sessionSize: v })} />
        </div>
        <div className="row">
          <div className="grow"><div style={{ fontWeight: 650 }}>Include unwritten cards</div><div className="small muted">Show ACS-only elements (no answer yet) in sessions</div></div>
          <button className={`toggle${s.includeUnwritten ? " on" : ""}`} role="switch" aria-checked={s.includeUnwritten} onClick={() => setSettings({ includeUnwritten: !s.includeUnwritten })} />
        </div>
        <div>
          <div style={{ fontWeight: 650, marginBottom: 8 }}>Theme</div>
          <div className="seg">
            {(["dark", "light", "system"] as Theme[]).map((t) => (
              <button key={t} className={s.theme === t ? "on" : ""} onClick={() => setSettings({ theme: t })}>{t[0].toUpperCase() + t.slice(1)}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="eyebrow">Your progress</div>
      <div className="panel stack">
        <p className="small muted" style={{ margin: 0 }}>Progress is saved on this device. Back it up to move it to a new phone.</p>
        <button className="btn" onClick={download}><IDownload /> Back up progress</button>
        <button className="btn" onClick={() => file.current?.click()}>Restore from backup</button>
        <input
          ref={file} type="file" accept="application/json,.json" hidden
          onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            try { importState(await f.text()); toast("Progress restored"); } catch (err) { toast((err as Error).message || "Couldn't read that file"); }
            e.target.value = "";
          }}
        />
        {confirmReset ? (
          <div className="grid2">
            <button className="btn" onClick={() => setConfirmReset(false)}>Cancel</button>
            <button className="btn bad" onClick={() => { resetProgress(); setConfirmReset(false); toast("Progress reset"); }}>Yes, reset</button>
          </div>
        ) : (
          <button className="btn ghost" style={{ color: "var(--red)" }} onClick={() => setConfirmReset(true)}>Reset all progress</button>
        )}
      </div>
    </div>
  );
}

function Stepper({ value, step, min, max, onChange }: { value: number; step: number; min: number; max: number; onChange: (v: number) => void }) {
  return (
    <div className="stepper">
      <button aria-label="Decrease" onClick={() => onChange(Math.max(min, value - step))}>−</button>
      <span className="v">{value}</span>
      <button aria-label="Increase" onClick={() => onChange(Math.min(max, value + step))}>+</button>
    </div>
  );
}

export function About() {
  const areasWritten = new Set(writtenCards.map((c) => c.areaId));
  return (
    <div className="fade-in">
      <BackBar label="More" fallback="/more" />
      <Header title="About" />
      <div className="panel stack small" style={{ color: "var(--text-2)" }}>
        <p style={{ margin: 0 }}>
          <b style={{ color: "var(--text)" }}>IFR Cards</b> is a free study aid built on the FAA's <b>Instrument Rating – Airplane Airman Certification Standards ({acsVersion})</b>. Every card is one ACS element, with the same code the examiner uses.
        </p>
        <p style={{ margin: 0 }}>
          {allCards.length} ACS elements are loaded. {writtenCards.length} have full answers so far (Area {[...areasWritten].join(", ")}). The rest show the ACS text and references until they're written.
        </p>
        <p style={{ margin: 0 }}>
          <b style={{ color: "var(--text)" }}>How scheduling works:</b> swipe right and a card comes back in a few days, then a week, then a few weeks. Swipe left and it comes back later in the same session and goes to Weak spots. As your checkride gets close, intervals shrink so everything gets reviewed.
        </p>
      </div>
      <div className="panel small" style={{ marginTop: 12, borderColor: "color-mix(in srgb, var(--brand) 40%, transparent)" }}>
        <b>Not FAA material.</b> Card answers summarize 14 CFR, the AIM and FAA handbooks in plain language. Regulations change — confirm anything you'll rely on in the current eCFR and AIM, and with your CFII.
      </div>
      <div className="eyebrow">Primary sources</div>
      <div className="list">
        {[
          ["Instrument Rating – Airplane ACS", "https://www.faa.gov/training_testing/testing/acs"],
          ["14 CFR (eCFR)", "https://www.ecfr.gov/current/title-14"],
          ["Aeronautical Information Manual", "https://www.faa.gov/air_traffic/publications/atpubs/aim_html/"],
          ["FAA Handbooks & Manuals", "https://www.faa.gov/regulations_policies/handbooks_manuals"],
          ["Aviation Weather Center", "https://aviationweather.gov"],
        ].map(([t, u]) => (
          <a key={u} className="list-item" href={u} target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
            <span className="grow li-title">{t}</span>
            <IChevR className="chev" />
          </a>
        ))}
      </div>
      <p className="tiny muted center" style={{ marginTop: 18 }}>Works offline once loaded. Progress stays on your device.</p>
      <p className="tiny muted center">{cardById.size} cards indexed</p>
    </div>
  );
}
