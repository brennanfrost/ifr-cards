import { useMemo } from "react";
import { regById, regForRef, regs, type Reg } from "../content/regs";
import { allCards, codeLabel } from "../lib/deck";
import { go } from "../lib/router";
import { BackBar, Header } from "../components/Layout";
import { Rich } from "../components/CardFaces";
import { IChevR, IMic } from "../components/icons";
import { startOral } from "./Oral";

const GROUPS: Reg["group"][] = ["Part 61", "Part 91", "AIM"];

function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

function drill() {
  const qs = shuffle(regs).slice(0, 12).map((r) => ({
    id: `reg:${r.id}`,
    cardId: "",
    regId: r.id,
    q: `What does ${r.cite} cover?`,
    a: `${r.title}. ${r.summary[0].replace(/^- /, "")}`,
  }));
  startOral(qs, "Regs drill");
}

export function RegsHome() {
  return (
    <div className="fade-in">
      <BackBar label="More" fallback="/more" />
      <Header title="FAR / AIM" sub="The regulations and AIM sections for the instrument rating" />
      <button className="btn primary" onClick={drill}><IMic /> Regs drill (12 questions)</button>
      <p className="small muted" style={{ margin: "10px 2px 0" }}>
        Summaries are written from the official text in the eCFR and the AIM on faa.gov. Tap any entry for the key wording and a link to the full section.
      </p>
      {GROUPS.map((g) => (
        <div key={g}>
          <div className="eyebrow">{g === "AIM" ? "Aeronautical Information Manual" : `14 CFR ${g}`}</div>
          <div className="list">
            {regs.filter((r) => r.group === g).map((r) => (
              <button key={r.id} className="list-item" onClick={() => go(`/reg/${r.id}`)}>
                <span className="grow">
                  <div className="tiny" style={{ color: "var(--accent)", fontWeight: 700 }}>{r.cite}</div>
                  <div className="li-title" style={{ fontWeight: 600, fontSize: 15.5 }}>{r.title}</div>
                </span>
                <IChevR className="chev" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function RegView({ id }: { id: string }) {
  const r = regById.get(id);
  const cards = useMemo(
    () => (r ? allCards.filter((c) => c.content?.refs?.some((ref) => regForRef(ref)?.id === r.id)) : []),
    [r],
  );
  if (!r) return <div className="empty">Not found.</div>;
  return (
    <div className="fade-in">
      <BackBar label="FAR / AIM" fallback="/more/regs" />
      <div className="eyebrow" style={{ marginTop: 4 }}>{r.group}</div>
      <h1 style={{ margin: "0 2px 2px", fontSize: 27, lineHeight: 1.15 }}>{r.cite}</h1>
      <div style={{ fontSize: 19, fontWeight: 700, color: "var(--text-2)", margin: "0 2px 14px" }}>{r.title}</div>

      <div className="panel card-back">
        <div className="back-label" style={{ marginTop: 0 }}>In plain English</div>
        <div className="sec">
          <ul>
            {r.summary.map((b, i) =>
              b.startsWith("- ") ? <li key={i} className="sub"><Rich text={b.slice(2)} /></li> : <li key={i}><Rich text={b} /></li>,
            )}
          </ul>
        </div>
        {r.quote && (
          <>
            <div className="back-label">Official wording</div>
            <blockquote className="reg-quote">“{r.quote}”</blockquote>
          </>
        )}
        <a className="btn" style={{ marginTop: 18 }} href={r.url} target="_blank" rel="noreferrer">
          Read the full text on {r.group === "AIM" ? "faa.gov" : "eCFR"}
        </a>
      </div>

      {cards.length > 0 && (
        <>
          <div className="eyebrow">Cards that use it ({cards.length})</div>
          <div className="list">
            {cards.map((c) => (
              <button key={c.id} className="list-item" onClick={() => go(`/card/${c.id}`)}>
                <span className="grow">
                  <div className="tiny" style={{ color: "var(--accent)", fontWeight: 700 }}>{codeLabel(c)}</div>
                  <div className="li-title" style={{ fontWeight: 600, fontSize: 15.5 }}>{c.title}</div>
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
