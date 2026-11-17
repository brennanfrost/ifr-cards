import { useEffect, useMemo, useRef, useState } from "react";
import { activeCards, cardById, codeLabel, type Card } from "../lib/deck";
import { buildSession, dueCount, grade, isWeak, type Scope } from "../lib/scheduler";
import { getState, useStore } from "../lib/store";
import { back, go, startSession, takeScope } from "../lib/router";
import { SwipeCard, type SwipeHandle } from "../components/SwipeCard";
import { CardBack, CardFront } from "../components/CardFaces";
import { IChevL, IChevR, IClose, ICards, ITarget, IDoc, ICheck, IRedo } from "../components/icons";
import { Header } from "../components/Layout";

/** Study tab landing: choose what to study. */
export function StudyHome() {
  const s = useStore((x) => x);
  const { due, fresh } = dueCount(s);
  const weak = useMemo(() => activeCards().filter((c) => isWeak(s.progress[c.id])).length, [s.progress, s.settings.engines]);
  const smart: Scope = { kind: "smart", label: "Smart session" };
  return (
    <div className="fade-in">
      <Header title="Study" sub="Swipe right if you know it, left if you don't" />
      <button className="btn primary" style={{ height: 60 }} onClick={() => startSession(smart)}>
        <ICards /> Start smart session
      </button>
      <p className="small muted center" style={{ margin: "10px 0 0" }}>
        {due} due for review · {fresh} new · {s.settings.sessionSize} cards per session
      </p>

      <div className="eyebrow">Focused practice</div>
      <div className="list">
        <button className="list-item" onClick={() => weak && startSession({ kind: "weak", label: "Weak spots" })} disabled={!weak}>
          <span className="numeral" style={{ color: "var(--red)" }}><ITarget width={20} /></span>
          <span className="grow">
            <div className="li-title">Weak spots</div>
            <div className="li-sub">{weak ? `${weak} ${weak === 1 ? "card" : "cards"} you've missed` : "Cards you miss land here automatically"}</div>
          </span>
          <IChevR className="chev" />
        </button>
        <button
          className="list-item"
          onClick={() => (s.testCodes.length ? startSession({ kind: "codes", label: "Knowledge test report" }) : go("/more/report"))}
        >
          <span className="numeral" style={{ color: "var(--sky)" }}><IDoc width={20} /></span>
          <span className="grow">
            <div className="li-title">Knowledge test report</div>
            <div className="li-sub">{s.testCodes.length ? `${s.testCodes.length} ACS codes from your report` : "Add the codes you missed on the written"}</div>
          </span>
          <IChevR className="chev" />
        </button>
      </div>

      <div className="eyebrow">By type</div>
      <div className="grid2">
        {(["K", "R"] as const).map((t) => (
          <button key={t} className="stat" style={{ textAlign: "left" }} onClick={() => startSession({ kind: "smart", types: [t], label: t === "K" ? "Knowledge" : "Risk management" })}>
            <span className={`chip ${t}`}>{t === "K" ? "Knowledge" : "Risk Mgmt"}</span>
            <div className="small muted" style={{ marginTop: 10 }}>{t === "K" ? "What you need to know" : "Judgment and scenarios"}</div>
          </button>
        ))}
      </div>
      <p className="small muted" style={{ marginTop: 18 }}>
        To study a single task in order, open it from <a href="#/browse">Browse</a>.
      </p>
    </div>
  );
}

/** The swipe session itself. */
export function Session() {
  const scope = takeScope() ?? { kind: "smart", label: "Smart session" };
  const [queue, setQueue] = useState<Card[]>(() => buildSession(scope, getState()));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<{ id: string; knew: boolean }[]>([]);
  const [total, setTotal] = useState(queue.length);
  const restart = () => {
    const q = buildSession(scope, getState());
    setQueue(q); setTotal(q.length); setIndex(0); setResults([]); setFlipped(false);
    window.scrollTo(0, 0);
  };
  const swipe = useRef<SwipeHandle>(null);
  const card = queue[index];

  const onSwipe = (dir: "left" | "right") => {
    const knew = dir === "right";
    grade(card.id, knew);
    setResults((r) => [...r, { id: card.id, knew }]);
    setFlipped(false);
    if (!knew) {
      // bring it back a few cards later in this session
      setQueue((q) => {
        const next = [...q];
        const at = Math.min(next.length, index + 4);
        next.splice(at, 0, card);
        return next;
      });
    }
    setIndex((i) => i + 1);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!card) return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); setFlipped((f) => !f); }
      if (e.key === "ArrowRight") swipe.current?.fly("right");
      if (e.key === "ArrowLeft") swipe.current?.fly("left");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [card]);

  if (!total) {
    return (
      <div className="session fade-in">
        <div className="session-top">
          <button className="icon-btn" onClick={() => back("/study")} aria-label="Close"><IClose /></button>
        </div>
        <div className="empty" style={{ marginTop: 60 }}>
          <ICheck />
          <h2 style={{ color: "var(--text)" }}>Nothing to study here</h2>
          <p>{scope.kind === "weak" ? "No weak spots — nice work." : "No cards match this selection yet."}</p>
          <button className="btn" onClick={() => back("/study")}>Back</button>
        </div>
      </div>
    );
  }

  if (!card) return <Summary results={results} label={scope.label} onRestart={restart} />;

  const firstPass = results.filter((r, i) => results.findIndex((x) => x.id === r.id) === i).length;
  const progress = Math.min(1, firstPass / total);

  return (
    <div className="session">
      <div className="session-top">
        <button className="icon-btn" onClick={() => back("/study")} aria-label="End session"><IClose /></button>
        <div className="bar"><i style={{ width: `${progress * 100}%` }} /></div>
        <div className="session-count">{Math.min(firstPass + 1, total)}/{total}</div>
      </div>
      <div className="small muted" style={{ margin: "-6px 2px 12px", fontWeight: 600 }}>{scope.label}</div>

      <div className="stage">
        {queue[index + 1] && <div className="peek" />}
        <SwipeCard
          key={`${card.id}-${index}`}
          ref={swipe}
          flipped={flipped}
          onFlip={() => setFlipped((f) => !f)}
          onSwipe={onSwipe}
          front={<CardFront card={card} />}
          back={<CardBack card={card} />}
        />
      </div>

      {flipped ? (
        <div className="session-actions">
          <button className="btn bad" onClick={() => swipe.current?.fly("left")}><IChevL /> Again</button>
          <button className="btn good" onClick={() => swipe.current?.fly("right")}>Got it <IChevR /></button>
        </div>
      ) : (
        <div className="session-actions one">
          <button className="btn" onClick={() => setFlipped(true)}>Show answer</button>
        </div>
      )}
      <p className="tiny muted center kbd-hint" style={{ marginTop: 10 }}>Space to flip · ← again · → got it</p>
    </div>
  );
}

function Summary({ results, label, onRestart }: { results: { id: string; knew: boolean }[]; label: string; onRestart: () => void }) {
  const firstTry = new Map<string, boolean>();
  for (const r of results) if (!firstTry.has(r.id)) firstTry.set(r.id, r.knew);
  const got = [...firstTry.values()].filter(Boolean).length;
  const missed = [...firstTry.entries()].filter(([, k]) => !k).map(([id]) => id);
  const pct = firstTry.size ? Math.round((got / firstTry.size) * 100) : 0;
  return (
    <div className="session fade-in">
      <div className="session-top">
        <button className="icon-btn" onClick={() => go("/", true)} aria-label="Close"><IClose /></button>
      </div>
      <div className="center" style={{ marginTop: 24 }}>
        <div className="eyebrow" style={{ marginTop: 0 }}>{label} complete</div>
        <div className="summary-big" style={{ color: pct >= 80 ? "var(--green)" : pct >= 50 ? "var(--brand)" : "var(--red)" }}>{pct}%</div>
        <p className="muted">known on the first try · {firstTry.size} cards</p>
      </div>
      <div className="grid2" style={{ marginTop: 18 }}>
        <div className="stat"><div className="v" style={{ color: "var(--green)" }}>{got}</div><div className="l">Got it</div></div>
        <div className="stat"><div className="v" style={{ color: "var(--red)" }}>{missed.length}</div><div className="l">Needed another look</div></div>
      </div>
      {missed.length > 0 && (
        <>
          <div className="eyebrow">Missed this round</div>
          <div className="list">
            {missed.map((id) => (
              <button key={id} className="list-item" onClick={() => go(`/card/${id}`)}>
                <span className="dot missed" />
                <span className="grow mono small">{cardById.get(id) ? codeLabel(cardById.get(id)!) : id}</span>
                <IChevR className="chev" />
              </button>
            ))}
          </div>
        </>
      )}
      <div className="stack" style={{ marginTop: 22 }}>
        <button className="btn primary" onClick={onRestart}>
          <IRedo /> Another round
        </button>
        <button className="btn" onClick={() => go("/", true)}>Done</button>
      </div>
    </div>
  );
}
