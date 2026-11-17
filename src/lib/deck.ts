import { getState } from "./store";
import acs from "../data/acs.json";
import { content, type CardContent, type ExaminerQ } from "../content";

export type ElemType = "K" | "R" | "S";

export interface AcsSub { code: string; letter: string; text: string }
export interface AcsElement { code: string; type: ElemType; num: number; text: string; subs?: AcsSub[] }
export interface AcsTask { id: string; name: string; references: string; objective: string; notes: string[]; elements: AcsElement[] }
export interface AcsArea { id: string; name: string; tasks: AcsTask[] }

export const areas = (acs as { areas: AcsArea[] }).areas;
export const acsVersion = (acs as { acs: string }).acs;

export interface Card {
  /** Unique card id: the ACS code, plus "-n" when an element is split into parts (e.g. IR.I.A.K1-2). */
  id: string;
  /** The ACS element or sub-element code this card belongs to. */
  acs: string;
  /** Set when an element is split into several cards. */
  part?: { n: number; of: number };
  areaId: string;
  taskId: string;
  taskKey: string; // e.g. "I.A"
  type: ElemType;
  /** Main front text (element text, or sub-element text) */
  title: string;
  /** Parent element text when this card is a sub-element */
  parent?: string;
  content?: CardContent;
  order: number;
}

export const TYPE_LABEL: Record<ElemType, string> = { K: "Knowledge", R: "Risk Management", S: "Skill" };

const cards: Card[] = [];
let order = 0;
function addCards(
  base: { areaId: string; taskId: string; taskKey: string; type: ElemType },
  acsCode: string,
  title: string,
  parent: string | undefined,
) {
  const c = content[acsCode];
  if (Array.isArray(c)) {
    // A big element split into focused cards: the question goes on the front,
    // the element text sits above it for context.
    c.forEach((part, i) => {
      cards.push({
        ...base,
        id: `${acsCode}-${i + 1}`,
        acs: acsCode,
        part: { n: i + 1, of: c.length },
        title: part.title ?? title,
        parent: parent ? `${parent}: ${title}` : title,
        content: part,
        order: order++,
      });
    });
  } else {
    const q = c?.title;
    cards.push({
      ...base,
      id: acsCode,
      acs: acsCode,
      title: q ?? title,
      parent: q ? (parent ? `${parent}: ${title}` : title) : parent,
      content: c,
      order: order++,
    });
  }
}

for (const a of areas) {
  for (const t of a.tasks) {
    for (const e of t.elements) {
      const base = { areaId: a.id, taskId: t.id, taskKey: `${a.id}.${t.id}`, type: e.type };
      if (e.subs?.length) {
        for (const s of e.subs) addCards(base, s.code, s.text, e.text.replace(/[:,]\s*$/, ""));
      } else {
        addCards(base, e.code, e.text.replace(/\.$/, ""), undefined);
      }
    }
  }
}

export const allCards = cards;
export const cardById = new Map(cards.map((c) => [c.id, c]));
export const writtenCards = cards.filter((c) => c.content);

export function areaById(id: string) {
  return areas.find((a) => a.id === id)!;
}
export function taskByKey(key: string) {
  const [a, t] = key.split(".");
  return areaById(a).tasks.find((x) => x.id === t)!;
}
/** Tasks tested only on a multiengine checkride (AMEL/AMES). */
export const MULTI_ONLY_TASKS = new Set(["VII.B", "VII.C"]);

/** Is this Task part of the user's checkride (single- vs multiengine)? */
export function taskApplies(key: string) {
  return getState().settings.engines === "multi" || !MULTI_ONLY_TASKS.has(key);
}
export const applies = (c: Card) => taskApplies(c.taskKey);

/** Cards for the user's checkride (multiengine Tasks removed for single-engine applicants). */
export const activeCards = () => cards.filter(applies);
export const activeWritten = () => writtenCards.filter(applies);
export const activeOral = () => oralQuestions.filter((q) => applies(cardById.get(q.cardId)!));

export function cardsForTask(key: string) {
  return cards.filter((c) => c.taskKey === key && applies(c));
}
export function cardsForArea(id: string) {
  return cards.filter((c) => c.areaId === id && applies(c));
}

/** Does a code (element, task "IR.I.B", or area "IR.I") cover this card? */
export function codeMatches(code: string, card: Card) {
  const id = card.acs;
  if (/[KRS]\d+[a-z]$/.test(code)) return id === code; // sub-element
  if (/[KRS]\d+$/.test(code)) return id === code || (id.startsWith(code) && /^[a-z]$/.test(id.slice(code.length)));
  return id.startsWith(code + "."); // task or area
}

/** Display label for a card: its ACS code, plus "· 2 of 4" for split elements. */
export function codeLabel(card: Card) {
  return card.part ? `${card.acs} · ${card.part.n} of ${card.part.of}` : card.acs;
}

export interface OralQ extends ExaminerQ {
  id: string;
  /** Card the question came from (empty for regs drill questions). */
  cardId: string;
  /** Regs drill: the reg entry this question is about. */
  regId?: string;
}

export const oralQuestions: OralQ[] = writtenCards.flatMap((c) =>
  (c.content!.examiner ?? []).map((q, i) => ({ ...q, id: `${c.id}#${i}`, cardId: c.id })),
);

/** Pull ACS codes out of pasted text (e.g. a knowledge test report). */
export function extractCodes(text: string): string[] {
  const found = text.toUpperCase().match(/IR\.[IVX]+\.[A-Z]\.[KRS]\d+[A-Z]?/g) ?? [];
  const norm = found.map((c) => c.replace(/([KRS]\d+)([A-Z])$/, (_, a, b) => a + b.toLowerCase()));
  return [...new Set(norm)];
}
