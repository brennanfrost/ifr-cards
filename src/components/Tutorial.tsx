import { useState, type ReactNode } from "react";
import { setSettings, useLoaded, useStore } from "../lib/store";
import { daysUntil } from "../lib/scheduler";
import { isIOS, isStandalone } from "../lib/install";
import { EngineChoice } from "./EngineChoice";
import { go } from "../lib/router";
import { ICards, IChevL, IChevR, IMic, Mark } from "./icons";

interface Step {
  label: string;
  title: string;
  body: ReactNode;
}

function CodeDiagram() {
  const parts: [string, string, string][] = [
    ["IR", "Instrument Rating", "var(--muted)"],
    ["I", "Area I", "var(--brand)"],
    ["B", "Task B", "var(--brand)"],
    ["K2", "Knowledge, element 2", "var(--sky)"],
    ["c", "Part c", "var(--sky)"],
  ];
  return (
    <div className="code-diagram" aria-label="IR.I.B.K2c">
      {parts.map(([t, label, color], i) => (
        <span key={t} style={{ flexDirection: "row", alignItems: "flex-start" }}>
          {i > 0 && i < 4 && <b className="dotsep">.</b>}
          <span>
            <em style={{ color, background: `color-mix(in srgb, ${color} 12%, transparent)` }}>{t}</em>
            <small>{label}</small>
          </span>
        </span>
      ))}
    </div>
  );
}

function Kinds() {
  return (
    <div className="kinds">
      <div className="kind">
        <span className="type-badge K">K</span>
        <div>
          <div className="kind-t">Knowledge <span className="kind-tag">Oral</span></div>
          <div className="kind-d">Facts and rules the examiner asks about. Weather products, regulations, systems.</div>
        </div>
      </div>
      <div className="kind">
        <span className="type-badge R">R</span>
        <div>
          <div className="kind-t">Risk management <span className="kind-tag">Oral</span></div>
          <div className="kind-d">Judgment. "What would you do if…" questions about hazards and how you'd handle them.</div>
        </div>
      </div>
      <div className="kind">
        <span className="type-badge S">S</span>
        <div>
          <div className="kind-t">Skill <span className="kind-tag">Flight</span></div>
          <div className="kind-d">What you demonstrate in the airplane. Read these like a briefing before you fly.</div>
        </div>
      </div>
    </div>
  );
}

function CheckrideSetup() {
  const s = useStore((x) => x.settings);
  const days = daysUntil(s.checkride);
  return (
    <>
      <label className="field">
        <span className="field-label">When's your checkride? (optional)</span>
        <input type="date" className="input" value={s.checkride ?? ""} onChange={(e) => setSettings({ checkride: e.target.value || undefined })} />
      </label>
      {days !== null && days >= 0 && <p className="small muted" style={{ margin: "8px 0 0" }}>{days} days to go. Reviews tighten up as it gets close.</p>}
    </>
  );
}

const steps: Step[] = [
  {
    label: "Welcome",
    title: "Get ready for the instrument checkride",
    body: (
      <>
        <div className="tut-visual row" style={{ gap: 14 }}>
          <div className="brand-mark" style={{ width: 52, height: 52, borderRadius: 12 }}><Mark style={{ width: 34, height: 34 }} /></div>
          <div>
            <div className="brand-name">IFR <span>Cards</span></div>
            <div className="small muted">Instrument Rating – Airplane · free · works offline</div>
          </div>
        </div>
        <p>
          The examiner tests you from a checklist called the <b>ACS</b> (Airman Certification Standards). This app turns that checklist into
          flashcards and practice oral questions, so you study exactly what's on the test.
        </p>
        <p>This walkthrough takes about a minute. You can replay it any time from <b>More</b>.</p>
      </>
    ),
  },
  {
    label: "Your airplane",
    title: "What will you fly on the checkride?",
    body: (
      <>
        <p>
          A multiengine checkride adds two engine-out Tasks (Area VII, Tasks B and C). If you're testing in a single-engine airplane, those cards are
          hidden so you only study what's on your test.
        </p>
        <div className="tut-visual"><EngineChoice /></div>
        <p className="small muted">You can change this later in More → Settings.</p>
      </>
    ),
  },
  {
    label: "How it's organized",
    title: "Areas, Tasks and elements",
    body: (
      <>
        <p>
          The ACS has <b>8 Areas of Operation</b>. Each Area has <b>Tasks</b>, and each Task lists the specific things you're tested on, called{" "}
          <b>elements</b>. <b>Every card is one element.</b>
        </p>
        <div className="tut-visual tree">
          <div className="l1">Area I · Preflight Preparation</div>
          <div className="l2">Task B · Weather Information</div>
          <div className="l3">K2c · Terminal Aerodrome Forecasts (TAF)</div>
          <div className="l3">K3h · Thunderstorms and microbursts</div>
          <div className="l3">R1 · Go/no-go and continue/divert decisions</div>
        </div>
      </>
    ),
  },
  {
    label: "Reading a code",
    title: "Every card has a code",
    body: (
      <>
        <div className="tut-visual"><CodeDiagram /></div>
        <p>
          It tells you exactly where the card sits in the ACS. Your <b>knowledge test report</b> lists missed topics with these same codes, and the
          examiner has to re-test them. Enter them under <b>More → Knowledge test report</b> to get a study set.
        </p>
      </>
    ),
  },
  {
    label: "Three kinds of element",
    title: "Knowledge, Risk, Skill",
    body: (
      <>
        <p>Every element is one of three kinds. The letter in the code tells you which.</p>
        <div className="tut-visual"><Kinds /></div>
        <p>
          The oral exam comes mostly from <b>K</b> and <b>R</b>. In <b>Browse</b>, each Task groups its cards into these three. Tap a group to open it.
        </p>
      </>
    ),
  },
  {
    label: "Studying",
    title: "Tap to flip, swipe to sort",
    body: (
      <>
        <div className="tut-visual">
          <div className="mini-card">
            <div className="row" style={{ gap: 6 }}>
              <span className="chip K">Knowledge</span>
              <span className="chip code">IR.I.B.K2c</span>
            </div>
            <div style={{ fontWeight: 800, fontSize: 19, marginTop: 10 }}>Terminal Aerodrome Forecasts (TAF)</div>
          </div>
          <div className="swipe-demo">
            <div style={{ background: "var(--red-soft)", color: "var(--red)" }}>← Again</div>
            <div style={{ background: "var(--green-soft)", color: "var(--green)" }}>Got it →</div>
          </div>
        </div>
        <p>
          Say the answer, then <b>tap the card</b> to check. <b>Swipe right</b> if you knew it, <b>left</b> if you didn't. You can also use the
          buttons under the card.
        </p>
        <p>
          There's nothing to rate. The app decides when you see each card again, and shows cards more often as your checkride gets closer. Missed
          cards come back later in the same session and collect in <b>Weak spots</b>.
        </p>
      </>
    ),
  },
  {
    label: "Mock oral",
    title: "Practice answering out loud",
    body: (
      <>
        <div className="tut-visual">
          <div className="dpe">
            <div className="dpe-avatar"><IMic /></div>
            <div style={{ fontWeight: 700 }}>Examiner</div>
          </div>
          <div style={{ fontWeight: 750, fontSize: 17, lineHeight: 1.35 }}>Your destination TAF shows TEMPO 1SM BR OVC006 around your ETA. Do you need an alternate?</div>
        </div>
        <p>
          The <b>Oral</b> tab asks scenario questions like the examiner will. Answer <b>out loud</b> first, then tap <b>Reveal answer</b> and grade
          yourself honestly: <b>Nailed it</b> or <b>Missed it</b>. Missed questions come up first next time.
        </p>
      </>
    ),
  },
  {
    label: "Last step",
    title: "When's your checkride?",
    body: (
      <>
        <p>Set the date and the app paces your reviews so everything is fresh on the day. You can change it later in Settings.</p>
        <div className="tut-visual"><CheckrideSetup /></div>
        {!isStandalone() && (
          <p className="small">
            <b>Install it:</b> {isIOS() ? "in Safari, tap Share → Add to Home Screen" : "use your browser menu → Install app"}. It opens full screen and
            works offline, even in airplane mode.
          </p>
        )}
      </>
    ),
  },
];

export function Tutorial() {
  const s = useStore((x) => x.settings);
  const loaded = useLoaded();
  // Mounting the steps fresh each time it opens restarts the walkthrough at step 1.
  return loaded && !s.onboarded ? <TutorialSteps /> : null;
}

function TutorialSteps() {
  const [i, setI] = useState(0);
  const engines = useStore((x) => x.settings.engines);
  const step = steps[i];
  const last = i === steps.length - 1;
  const finish = () => {
    setSettings({ onboarded: true, engines: engines ?? "single" });
    go("/", true);
  };

  return (
    <div className="tut" role="dialog" aria-modal="true" aria-label="How to use IFR Cards">
      <div className="tut-inner">
        <div className="tut-top">
          <span className="tut-step-label">{i + 1} of {steps.length} · {step.label}</span>
          {!last && <button className="tut-skip" onClick={finish}>Skip</button>}
        </div>
        <div className="tut-body fade-in" key={i}>
          <h2>{step.title}</h2>
          {step.body}
        </div>
        <div className="tut-dots" aria-hidden>
          {steps.map((_, j) => <i key={j} className={j === i ? "on" : ""} />)}
        </div>
        <div className="tut-nav">
          <button className="btn" onClick={() => setI((x) => Math.max(0, x - 1))} disabled={i === 0} aria-label="Back"><IChevL /></button>
          {last ? (
            <button className="btn primary" onClick={finish}><ICards /> Start studying</button>
          ) : (
            <button className="btn primary" disabled={step.label === "Your airplane" && !engines} onClick={() => setI((x) => x + 1)}>Next <IChevR /></button>
          )}
        </div>
      </div>
    </div>
  );
}
