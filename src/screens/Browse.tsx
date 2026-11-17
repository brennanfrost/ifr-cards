import { areaById, areas, cardById, taskApplies, cardsForArea, cardsForTask, codeLabel, taskByKey, TYPE_LABEL, type ElemType } from "../lib/deck";
import { mastery, readiness, inGround } from "../lib/scheduler";
import { useStore } from "../lib/store";
import { go, startSession } from "../lib/router";
import { BackBar, Header } from "../components/Layout";
import { BackContent, CardHead } from "../components/CardFaces";
import { ICards, IChevR, IPlane } from "../components/icons";

function Legend() {
  return (
    <div className="legend" style={{ margin: "16px 2px 0" }}>
      <span><i className="dot" /> New</span>
      <span><i className="dot missed" /> Missed</span>
      <span><i className="dot learning" /> Learning</span>
      <span><i className="dot solid" /> Solid</span>
      <span><i className="dot mastered" /> Mastered</span>
    </div>
  );
}

export function BrowseHome() {
  const s = useStore((x) => x);
  return (
    <div className="fade-in">
      <Header title="Browse the ACS" sub="All 8 Areas of Operation" />
      <div className="list">
        {areas.map((a) => {
          const cards = cardsForArea(a.id);
          const written = cards.filter((c) => c.content).length;
          const r = readiness(cards, s);
          return (
            <button key={a.id} className="list-item" onClick={() => go(`/browse/${a.id}`)}>
              <span className="numeral">{a.id}</span>
              <span className="grow">
                <div className="li-title">{a.name}</div>
                <div className="li-sub">
                  {a.tasks.length} tasks · {cards.length} elements{written ? ` · ${Math.round((r ?? 0) * 100)}% ready` : " · ACS text only"}
                </div>
              </span>
              <IChevR className="chev" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function AreaView({ id }: { id: string }) {
  const s = useStore((x) => x);
  const area = areaById(id);
  if (!area) return <BackBar fallback="/browse" />;
  return (
    <div className="fade-in">
      <BackBar label="Browse" fallback="/browse" />
      <div className="eyebrow" style={{ marginTop: 4 }}>Area of Operation {area.id}</div>
      <h1 style={{ margin: "0 2px 14px", fontSize: 26, letterSpacing: "-0.02em" }}>{area.name}</h1>
      <div className="list">
        {area.tasks.filter((t) => taskApplies(`${area.id}.${t.id}`)).map((t) => {
          const key = `${area.id}.${t.id}`;
          const cards = cardsForTask(key);
          const written = cards.filter((c) => c.content).length;
          const r = readiness(cards, s);
          return (
            <button key={t.id} className="list-item" onClick={() => go(`/browse/${key}`)}>
              <span className="numeral">{t.id}</span>
              <span className="grow">
                <div className="li-title">{t.name}</div>
                {written ? (
                  <div className="row" style={{ marginTop: 7, gap: 10 }}>
                    <div className="bar grow"><i style={{ width: `${(r ?? 0) * 100}%` }} /></div>
                    <span className="tiny muted mono">{cards.length} cards</span>
                  </div>
                ) : (
                  <div className="li-sub">{cards.length} elements · ACS text only</div>
                )}
              </span>
              <IChevR className="chev" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

const TYPE_HINT: Record<ElemType, string> = {
  K: "Facts the examiner quizzes you on",
  R: "Hazards, judgment and what you'd do",
  S: "What you show in the airplane",
};

export function TaskView({ taskKey }: { taskKey: string }) {
  const s = useStore((x) => x);
  const [areaId] = taskKey.split(".");
  const task = taskByKey(taskKey);
  const cards = cardsForTask(taskKey);
  const groundCount = cards.filter((c) => inGround(c, s)).length;
  const skillCount = cards.filter((c) => c.type === "S").length;
  const groups: ElemType[] = ["K", "R", "S"];
  return (
    <div className="fade-in">
      <BackBar label={`Area ${areaId}`} fallback={`/browse/${areaId}`} />
      <div className="eyebrow" style={{ marginTop: 4 }}>Area {areaId} · Task {task.id}</div>
      <h1 style={{ margin: "0 2px 6px", fontSize: 27, letterSpacing: "-0.01em", lineHeight: 1.15 }}>{task.name}</h1>

      <details className="about-task">
        <summary><IChevR /> Objective and references</summary>
        <div className="panel small" style={{ marginTop: 8 }}>
          <div className="muted">{task.objective}</div>
          <div style={{ fontWeight: 700, margin: "12px 0 4px" }}>References</div>
          <div className="muted">{task.references}</div>
          {task.notes.map((n, i) => (
            <div key={i} className="muted" style={{ marginTop: 10 }}><b style={{ color: "var(--text-2)" }}>Note:</b> {n}</div>
          ))}
        </div>
      </details>

      {groundCount > 0 && (
        <button className="btn primary" style={{ marginTop: 12 }} onClick={() => startSession({ kind: "task", key: taskKey, label: `Task ${taskKey}: ${task.name}` })}>
          <ICards /> Study this task ({groundCount} cards)
        </button>
      )}
      {skillCount > 0 && (
        <button className="btn" style={{ marginTop: 10 }} onClick={() => go(`/brief/${taskKey}`)}>
          <IPlane /> Flight briefing ({skillCount} skills)
        </button>
      )}

      {groups.map((g) => {
        const list = cards.filter((c) => c.type === g);
        if (!list.length) return null;
        const states = list.map((c) => mastery(s.progress[c.id]));
        const done = states.filter((m) => m === "solid" || m === "mastered").length;
        return (
          <details key={g} className="group">
            <summary>
              <span className={`type-badge ${g}`}>{g}</span>
              <span className="grow">
                <div className="li-title">{TYPE_LABEL[g]} <span className="muted" style={{ fontWeight: 600 }}>· {list.length}</span></div>
                <div className="li-sub">{TYPE_HINT[g]}</div>
                <div className="row" style={{ marginTop: 8, gap: 10 }}>
                  <div className="bar grow"><i style={{ width: `${(done / list.length) * 100}%` }} /></div>
                  <span className="tiny muted mono">{done}/{list.length}</span>
                </div>
              </span>
              <IChevR className="chev" />
            </summary>
            <div className="list">
              {list.map((c, idx) => {
                const showParent = c.parent && c.parent !== list[idx - 1]?.parent;
                return (
                  <div key={c.id}>
                    {showParent && <div className="sub-head">{c.part ? c.acs : c.acs.replace(/[a-z]$/, "")} · {c.parent!.replace(/ such as$| including$|:$/, "")}</div>}
                    <button className={`list-item${c.parent ? " nested" : ""}`} onClick={() => go(`/card/${c.id}`)}>
                      <span className={`dot ${mastery(s.progress[c.id])}`} />
                      <span className="grow">
                        <div className="tiny" style={{ color: "var(--accent)", fontWeight: 700 }}>{codeLabel(c)}</div>
                        <div className="li-title" style={{ fontWeight: 600, fontSize: 15.5 }}>{c.title}</div>
                        {!c.content && <div className="li-sub">ACS text only</div>}
                      </span>
                      <IChevR className="chev" />
                    </button>
                  </div>
                );
              })}
            </div>
          </details>
        );
      })}
      <Legend />
    </div>
  );
}

export function CardView({ id }: { id: string }) {
  const card = cardById.get(id);
  const p = useStore((x) => x.progress[id]);
  if (!card) return <BackBar fallback="/browse" />;
  const m = mastery(p);
  return (
    <div className="fade-in">
      <BackBar label={`Task ${card.taskKey}`} fallback={`/browse/${card.taskKey}`} />
      <div className="panel" style={{ padding: 0, overflow: "hidden" }}>
        <CardHead card={card} right={<span className={`dot ${m}`} title={m} />} />
        <div style={{ padding: "12px 18px 4px" }}>
          {card.parent && <div className="front-parent">{card.parent}</div>}
          <div className="front-title" style={{ fontSize: 22 }}>{card.title}</div>
        </div>
        <div style={{ padding: "0 18px 20px" }}>
          <BackContent card={card} />
        </div>
      </div>
      {p && (
        <p className="small muted center" style={{ marginTop: 12 }}>
          Seen {p.seen}× · got it {p.right} · missed {p.wrong}
        </p>
      )}
    </div>
  );
}
