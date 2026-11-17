import { areas, cardsForTask, codeLabel, taskApplies, taskByKey } from "../lib/deck";
import { markBriefed, useStore } from "../lib/store";
import { back, go } from "../lib/router";
import { BackBar, toast } from "../components/Layout";
import { Rich } from "../components/CardFaces";
import { ICheck, IChevR } from "../components/icons";

function ago(t?: number) {
  if (!t) return null;
  const d = Math.floor((Date.now() - t) / 86400000);
  return d <= 0 ? "Briefed today" : d === 1 ? "Briefed yesterday" : `Briefed ${d} days ago`;
}

/** Flight tab: every Task with Skill elements, grouped by Area. */
export function FlightHome() {
  const briefed = useStore((s) => s.briefed);
  useStore((s) => s.settings.engines); // re-render when the airplane class changes
  return (
    <div>
      <p className="small muted" style={{ margin: "4px 2px 4px" }}>
        Skill (S) elements are what you show in the airplane. Read a Task's briefing before a lesson or the checkride flight: the standards,
        the steps, and what the examiner watches.
      </p>
      {areas.map((a) => {
        const tasks = a.tasks
          .map((t) => ({ t, key: `${a.id}.${t.id}` }))
          .filter(({ key }) => taskApplies(key))
          .map((x) => ({ ...x, n: cardsForTask(x.key).filter((c) => c.type === "S").length }))
          .filter((x) => x.n > 0);
        if (!tasks.length) return null;
        return (
          <div key={a.id}>
            <div className="eyebrow">Area {a.id} · {a.name}</div>
            <div className="list">
              {tasks.map(({ t, key, n }) => (
                <button key={key} className="list-item" onClick={() => go(`/brief/${key}`)}>
                  <span className="numeral">{t.id}</span>
                  <span className="grow">
                    <div className="li-title">{t.name}</div>
                    <div className="li-sub">
                      {n} {n === 1 ? "skill" : "skills"}
                      {briefed[key] ? <> · <span style={{ color: "var(--green)", fontWeight: 650 }}>{ago(briefed[key])}</span></> : null}
                    </div>
                  </span>
                  <IChevR className="chev" />
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** A Task's Skill elements as one readable pre-flight briefing. */
export function Briefing({ taskKey }: { taskKey: string }) {
  const briefed = useStore((s) => s.briefed[taskKey]);
  const task = taskByKey(taskKey);
  const [areaId] = taskKey.split(".");
  const skills = cardsForTask(taskKey).filter((c) => c.type === "S");
  if (!task) return <div className="empty">Not found.</div>;
  return (
    <div className="fade-in">
      <BackBar label="Flight" fallback="/study/flight" />
      <div className="eyebrow" style={{ marginTop: 4 }}>Flight briefing · Area {areaId} · Task {task.id}</div>
      <h1 style={{ margin: "0 2px 6px", fontSize: 27, lineHeight: 1.15 }}>{task.name}</h1>
      <p className="small muted" style={{ margin: "0 2px 14px" }}>{skills.length} {skills.length === 1 ? "skill" : "skills"} the examiner evaluates in the airplane.</p>

      {skills.map((c, i) => (
        <div key={c.id} className="panel brief-item card-back">
          <div className="row" style={{ gap: 10, alignItems: "flex-start" }}>
            <span className="brief-num">{i + 1}</span>
            <div className="grow">
              <button className="tiny" style={{ color: "var(--accent)", fontWeight: 700 }} onClick={() => go(`/card/${c.id}`)}>{codeLabel(c)}</button>
              <div className="brief-title">{c.title}</div>
            </div>
          </div>
          {c.content ? (
            <>
              {c.content.core && <div className="core">{c.content.core}</div>}
              {c.content.sections.map((sec, j) => (
                <div className="sec" key={j}>
                  <ul>
                    {sec.b.map((b, k) =>
                      b.startsWith("- ") ? <li key={k} className="sub"><Rich text={b.slice(2)} /></li> : <li key={k}><Rich text={b} /></li>,
                    )}
                  </ul>
                </div>
              ))}
              {c.content.mnemonic && (
                <div className="mnemo">
                  <div className="mnemo-name">{c.content.mnemonic.name}</div>
                  <ol>{c.content.mnemonic.lines.map((l, k) => <li key={k}>{l}</li>)}</ol>
                </div>
              )}
            </>
          ) : (
            <div className="placeholder">ACS text only.</div>
          )}
        </div>
      ))}

      <button
        className="btn primary"
        style={{ marginTop: 16 }}
        onClick={() => {
          markBriefed(taskKey);
          toast("Marked as briefed");
          back("/study/flight");
        }}
      >
        <ICheck /> {briefed ? "Briefed again" : "Mark as briefed"}
      </button>
      {briefed && <p className="small muted center" style={{ marginTop: 8 }}>{ago(briefed)}</p>}
    </div>
  );
}
