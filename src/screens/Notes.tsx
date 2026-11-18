import { useState } from "react";
import { addNote, deleteNote, updateNote, useStore, type Note } from "../lib/store";
import { areas, cardById, codeLabel } from "../lib/deck";
import { go } from "../lib/router";
import { BackBar, Header, Sheet, toast } from "../components/Layout";
import { ICheck, IClose, IPlus } from "../components/icons";

export const SOURCES = ["King Schools", "Jeppesen", "Lesson", "Other"];

/** Form for a new note. Remembers the last source used, since you usually add several from one video or chapter. */
export function NoteComposer({ cardId, area, onSaved, autoFocus }: { cardId?: string; area?: string; onSaved?: () => void; autoFocus?: boolean }) {
  const last = useStore((s) => s.notes?.[0]?.source);
  const [text, setText] = useState("");
  const [source, setSource] = useState<string | undefined>(last ?? "King Schools");
  const [noteArea, setNoteArea] = useState<string | undefined>(area);
  const card = cardId ? cardById.get(cardId) : undefined;
  const save = () => {
    const t = text.trim();
    if (!t) return;
    addNote({ text: t, source, area: noteArea, cardId });
    setText("");
    toast("Added to your notes");
    onSaved?.();
  };
  return (
    <div className="stack">
      {card && <div className="small muted">From card <b style={{ color: "var(--text-2)" }}>{codeLabel(card)}</b></div>}
      <textarea
        className="input"
        placeholder="What do you want to come back to? e.g. “Why does the altimeter read high with alternate static?”"
        value={text}
        autoFocus={autoFocus}
        onChange={(e) => setText(e.target.value)}
        aria-label="Note"
      />
      <div>
        <div className="field-label">Where it came up</div>
        <div className="pills">
          {SOURCES.map((src) => (
            <button key={src} className={`pill-opt${source === src ? " on" : ""}`} onClick={() => setSource(source === src ? undefined : src)}>{src}</button>
          ))}
        </div>
      </div>
      {!card && (
        <div>
          <div className="field-label">ACS Area (optional)</div>
          <div className="pills">
            {areas.map((a) => (
              <button key={a.id} className={`pill-opt${noteArea === a.id ? " on" : ""}`} title={a.name} onClick={() => setNoteArea(noteArea === a.id ? undefined : a.id)}>{a.id}</button>
            ))}
          </div>
          {noteArea && <div className="tiny muted" style={{ marginTop: 6 }}>{areas.find((a) => a.id === noteArea)?.name}</div>}
        </div>
      )}
      <button className="btn primary" disabled={!text.trim()} onClick={save}><IPlus /> Add note</button>
    </div>
  );
}

/** "Add a note" button for the back of a card; opens the composer in a sheet. */
export function AddNoteButton({ cardId, area }: { cardId: string; area: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="note-add-btn"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => { e.stopPropagation(); setOpen(true); }}
      >
        <IPlus width={16} /> Add to my study notes
      </button>
      <Sheet open={open} onClose={() => setOpen(false)}>
        <h2>Study note</h2>
        <p className="small muted" style={{ marginTop: 0 }}>Something to come back to on this topic.</p>
        <NoteComposer cardId={cardId} area={area} autoFocus onSaved={() => setOpen(false)} />
      </Sheet>
    </>
  );
}

function NoteRow({ n }: { n: Note }) {
  const card = n.cardId ? cardById.get(n.cardId) : undefined;
  const area = n.area ?? card?.areaId;
  const [confirm, setConfirm] = useState(false);
  return (
    <div className={`note-row${n.done ? " done" : ""}`}>
      <button
        className={`note-check${n.done ? " on" : ""}`}
        role="checkbox"
        aria-checked={!!n.done}
        aria-label={n.done ? "Mark not studied" : "Mark studied"}
        onClick={() => updateNote(n.id, { done: n.done ? undefined : Date.now() })}
      >
        {n.done && <ICheck width={14} />}
      </button>
      <div className="grow">
        <div className="note-text">{n.text}</div>
        <div className="note-meta">
          {n.source && <span className="chip">{n.source}</span>}
          {area && <button className="chip" onClick={() => go(`/browse/${area}`)}>Area {area}</button>}
          {card && <button className="chip code" onClick={() => go(`/card/${card.id}`)}>{codeLabel(card)}</button>}
          <span className="tiny muted">{new Date(n.created).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</span>
        </div>
      </div>
      {confirm ? (
        <button className="note-del confirm" onClick={() => deleteNote(n.id)}>Delete</button>
      ) : (
        <button className="note-del" aria-label="Delete note" onClick={() => { setConfirm(true); setTimeout(() => setConfirm(false), 3000); }}><IClose width={16} /></button>
      )}
    </div>
  );
}

export function NotesScreen() {
  const notes = useStore((s) => s.notes ?? []);
  const [adding, setAdding] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const shown = notes.filter((n) => filter === "All" || n.source === filter);
  const open = shown.filter((n) => !n.done);
  const done = shown.filter((n) => n.done);
  const sources = ["All", ...SOURCES.filter((s) => notes.some((n) => n.source === s))];
  return (
    <div className="fade-in">
      <BackBar label="Home" fallback="/" />
      <Header title="Study notes" sub="Topics to come back to from videos, the textbook and lessons" />
      {adding ? (
        <div className="panel">
          <NoteComposer autoFocus onSaved={() => setAdding(false)} />
          <button className="btn ghost" style={{ marginTop: 8 }} onClick={() => setAdding(false)}>Cancel</button>
        </div>
      ) : (
        <button className="btn primary" onClick={() => setAdding(true)}><IPlus /> New note</button>
      )}

      {notes.length > 0 && sources.length > 2 && (
        <div className="pills" style={{ marginTop: 16 }}>
          {sources.map((s) => (
            <button key={s} className={`pill-opt${filter === s ? " on" : ""}`} onClick={() => setFilter(s)}>{s}</button>
          ))}
        </div>
      )}

      <div className="eyebrow">To study ({open.length})</div>
      {open.length ? (
        <div className="list">{open.map((n) => <NoteRow key={n.id} n={n} />)}</div>
      ) : (
        <div className="empty small">
          {notes.length ? "Nothing open. Nice work." : "When a concept needs more time, jot it here. You can also add one from the back of any card."}
        </div>
      )}

      {done.length > 0 && (
        <details className="about-task" style={{ marginTop: 18 }}>
          <summary>Studied ({done.length})</summary>
          <div className="list" style={{ marginTop: 8 }}>{done.map((n) => <NoteRow key={n.id} n={n} />)}</div>
        </details>
      )}
      <p className="tiny muted" style={{ marginTop: 18 }}>Notes are saved on this device and included in More → Settings → Backup.</p>
    </div>
  );
}

/** Small Home card: open notes count and a quick way in. */
export function NotesHomeCard() {
  const notes = useStore((s) => s.notes ?? []);
  const open = notes.filter((n) => !n.done);
  return (
    <button className="panel notes-card" onClick={() => go("/notes")}>
      <div className="row">
        <div className="grow">
          <div className="li-title">Study notes</div>
          <div className="li-sub">
            {open.length ? `${open.length} to study · latest: ${open[0].text.slice(0, 48)}${open[0].text.length > 48 ? "…" : ""}` : "Jot down topics to come back to"}
          </div>
        </div>
        <span className="note-plus"><IPlus width={20} /></span>
      </div>
    </button>
  );
}
