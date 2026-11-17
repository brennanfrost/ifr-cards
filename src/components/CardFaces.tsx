import { useState, type ReactNode } from "react";
import { type Card, TYPE_LABEL, areaById, codeLabel, taskByKey } from "../lib/deck";
import { IFlip, IQuestion } from "./icons";
import { regForRef } from "../content/regs";
import { go } from "../lib/router";

/** Renders **bold** inside a string. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? <b key={i}>{p.slice(2, -2)}</b> : <span key={i}>{p}</span>,
      )}
    </>
  );
}

export function Crumb({ card }: { card: Card }) {
  const area = areaById(card.areaId);
  const task = taskByKey(card.taskKey);
  return (
    <div className="crumb">
      Area {area.id} · Task {task.id}: {task.name}
    </div>
  );
}

export function CardHead({ card, right }: { card: Card; right?: ReactNode }) {
  return (
    <div className="face-head">
      <span className={`chip ${card.type}`}>{TYPE_LABEL[card.type]}</span>
      <span className="chip code">{codeLabel(card)}</span>
      <span className="grow" />
      {right}
    </div>
  );
}

export function FrontBody({ card }: { card: Card }) {
  return (
    <div className="front-body">
      {card.parent && <div className="front-parent">{card.parent}</div>}
      <div className="front-title">{card.title}</div>
      <div className="front-code">{codeLabel(card)}</div>
    </div>
  );
}

export function CardFront({ card }: { card: Card }) {
  return (
    <>
      <CardHead card={card} />
      <Crumb card={card} />
      <FrontBody card={card} />
      <div className="tap-hint">
        <IFlip /> Tap to flip
      </div>
    </>
  );
}

export function BackContent({ card }: { card: Card }) {
  const c = card.content;
  const task = taskByKey(card.taskKey);
  if (!c) {
    return (
      <div className="placeholder">
        <b>Not written yet.</b> This card shows the ACS element only. Study it from the task references:
        <div className="small muted" style={{ marginTop: 8 }}>{task.references}</div>
      </div>
    );
  }
  return (
    <div className="card-back">
      {c.core && <div className="core">{c.core}</div>}
      {c.sections.some((s) => s.b.length) && <div className="back-label">Key points</div>}
      {c.sections.map((s, i) => (
        <div className="sec" key={i}>
          {s.h && <h4>{s.h}</h4>}
          <ul>
            {s.b.map((b, j) =>
              b.startsWith("- ") ? (
                <li className="sub" key={j}><Rich text={b.slice(2)} /></li>
              ) : (
                <li key={j}><Rich text={b} /></li>
              ),
            )}
          </ul>
        </div>
      ))}
      {c.mnemonic && (
        <div className="mnemo">
          <div className="mnemo-name">{c.mnemonic.name}</div>
          <ol>{c.mnemonic.lines.map((l, i) => <li key={i}>{l}</li>)}</ol>
        </div>
      )}
      {c.examiner?.length ? (
        <div className="exq">
          <div className="back-label">Examiner might ask</div>
          {c.examiner.map((q, i) => <ExaminerItem key={i} q={q.q} a={q.a} />)}
        </div>
      ) : null}
      {c.refs?.length ? (
        <div className="refs-line">
          <span>References</span>
          {c.refs.map((r, i) => {
            const reg = regForRef(r);
            return (
              <span key={r} className="ref-item">
                {i > 0 && " · "}
                {reg ? (
                  <button
                    className="ref-link"
                    onPointerDown={(e) => e.stopPropagation()}
                    onClick={(e) => { e.stopPropagation(); go(`/reg/${reg.id}`); }}
                  >
                    {r}
                  </button>
                ) : (
                  r
                )}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function ExaminerItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="exq-item">
      <button
        className="exq-q"
        onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
        onPointerDown={(e) => e.stopPropagation()}
        aria-expanded={open}
      >
        <IQuestion />
        <span>{q}</span>
      </button>
      {open ? <div className="exq-a">{a}</div> : <div className="exq-a tiny muted">Tap to see a good answer</div>}
    </div>
  );
}

export function CardBack({ card }: { card: Card }) {
  return (
    <>
      <CardHead card={card} />
      <div className="back-scroll">
        {card.parent && <div className="back-parent">{card.parent}</div>}
        <div className="back-title">{card.title}</div>
        <BackContent card={card} />
      </div>
    </>
  );
}
