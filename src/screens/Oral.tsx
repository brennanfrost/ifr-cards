import { useMemo, useState } from "react";
import { cardById, oralQuestions, taskByKey, type OralQ } from "../lib/deck";
import { gradeOral } from "../lib/scheduler";
import { getState, useStore } from "../lib/store";
import { go } from "../lib/router";
import { Header } from "../components/Layout";
import { IChevR, IClose, IMic, IShuffle, IUser, ICheck, IRedo } from "../components/icons";

function shuffle<T>(a: T[]) {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

function pickQuestions(pool: OralQ[], n = 10) {
  const o = getState().oral;
  const unseen = shuffle(pool.filter((q) => !o[q.id]));
  const shaky = shuffle(pool.filter((q) => o[q.id] && o[q.id].wrong >= o[q.id].right));
  const rest = shuffle(pool.filter((q) => o[q.id] && o[q.id].wrong < o[q.id].right));
  return [...shaky, ...unseen, ...rest].slice(0, n);
}

export function Oral() {
  const oral = useStore((s) => s.oral);
  const [run, setRun] = useState<{ qs: OralQ[]; label: string } | null>(null);

  const byTask = useMemo(() => {
    const m = new Map<string, OralQ[]>();
    for (const q of oralQuestions) {
      const key = cardById.get(q.cardId)!.taskKey;
      m.set(key, [...(m.get(key) ?? []), q]);
    }
    return [...m.entries()];
  }, []);

  if (run) return <OralRun qs={run.qs} label={run.label} onExit={() => setRun(null)} onAgain={() => setRun({ ...run, qs: pickQuestions(run.qs.length < 10 ? run.qs : oralQuestions) })} />;

  const answered = Object.keys(oral).length;
  return (
    <div className="fade-in">
      <Header title="Mock oral" sub="The examiner asks, you answer out loud" />
      <div className="hero">
        <div className="dpe">
          <div className="dpe-avatar"><IUser /></div>
          <div>
            <div style={{ fontWeight: 700 }}>Scenario questions</div>
            <div className="small muted">{oralQuestions.length} questions · {answered} practiced</div>
          </div>
        </div>
        <p className="small" style={{ color: "var(--text-2)", margin: "0 0 16px" }}>
          Say your answer out loud like you would to the examiner, then reveal a model answer. Questions you miss come back first next time.
        </p>
        <button className="btn primary" onClick={() => setRun({ qs: pickQuestions(oralQuestions), label: "Mixed oral" })}>
          <IShuffle /> Start a 10-question oral
        </button>
      </div>

      <div className="eyebrow">By task</div>
      <div className="list">
        {byTask.map(([key, qs]) => {
          const t = taskByKey(key);
          return (
            <button key={key} className="list-item" onClick={() => setRun({ qs: pickQuestions(qs, qs.length), label: `Task ${key}: ${t.name}` })}>
              <span className="numeral">{key}</span>
              <span className="grow">
                <div className="li-title">{t.name}</div>
                <div className="li-sub">{qs.length} questions</div>
              </span>
              <IChevR className="chev" />
            </button>
          );
        })}
      </div>
      <p className="small muted" style={{ marginTop: 14 }}>More scenarios are added as each Area of Operation is written.</p>
    </div>
  );
}

function OralRun({ qs, label, onExit, onAgain }: { qs: OralQ[]; label: string; onExit: () => void; onAgain: () => void }) {
  const [i, setI] = useState(0);
  const [shown, setShown] = useState(false);
  const [score, setScore] = useState({ right: 0, wrong: 0 });
  const q = qs[i];

  if (!q) {
    const pct = Math.round((score.right / Math.max(1, qs.length)) * 100);
    return (
      <div className="session fade-in">
        <div className="session-top"><button className="icon-btn" onClick={onExit} aria-label="Close"><IClose /></button></div>
        <div className="center" style={{ marginTop: 30 }}>
          <div className="eyebrow" style={{ marginTop: 0 }}>{label}</div>
          <div className="summary-big" style={{ color: pct >= 80 ? "var(--green)" : pct >= 50 ? "var(--amber)" : "var(--red)" }}>{score.right}/{qs.length}</div>
          <p className="muted">answered well</p>
        </div>
        <div className="stack" style={{ marginTop: 26 }}>
          <button className="btn primary" onClick={() => { setI(0); setShown(false); setScore({ right: 0, wrong: 0 }); onAgain(); }}><IRedo /> Another round</button>
          <button className="btn" onClick={onExit}>Done</button>
        </div>
      </div>
    );
  }

  const card = cardById.get(q.cardId)!;
  const answer = (knew: boolean) => {
    gradeOral(q.id, q.cardId, knew);
    setScore((s) => ({ right: s.right + (knew ? 1 : 0), wrong: s.wrong + (knew ? 0 : 1) }));
    setShown(false);
    setI((x) => x + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="session">
      <div className="session-top">
        <button className="icon-btn" onClick={onExit} aria-label="End oral"><IClose /></button>
        <div className="bar"><i style={{ width: `${(i / qs.length) * 100}%` }} /></div>
        <div className="session-count">{i + 1}/{qs.length}</div>
      </div>
      <div className="panel fade-in" key={q.id} style={{ padding: 20, borderRadius: 22 }}>
        <div className="dpe">
          <div className="dpe-avatar"><IMic /></div>
          <div className="grow">
            <div style={{ fontWeight: 700, fontSize: 14 }}>Examiner</div>
            <button className="chip code" onClick={() => go(`/card/${card.id}`)}>{card.id}</button>
          </div>
        </div>
        <div className="oral-q">{q.q}</div>
        {shown ? (
          <div className="oral-a">
            <div className="tiny" style={{ fontWeight: 750, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--green)", marginBottom: 6 }}>A good answer</div>
            {q.a}
          </div>
        ) : (
          <p className="small muted" style={{ marginTop: 18 }}>Answer out loud first — then check yourself.</p>
        )}
      </div>
      <div style={{ flex: 1 }} />
      {shown ? (
        <div className="session-actions">
          <button className="btn bad" onClick={() => answer(false)}>Missed it</button>
          <button className="btn good" onClick={() => answer(true)}><ICheck /> Nailed it</button>
        </div>
      ) : (
        <div className="session-actions one">
          <button className="btn primary" onClick={() => setShown(true)}>Reveal answer</button>
        </div>
      )}
    </div>
  );
}
