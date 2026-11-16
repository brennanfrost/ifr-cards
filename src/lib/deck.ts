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
  id: string; // ACS code
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
for (const a of areas) {
  for (const t of a.tasks) {
    for (const e of t.elements) {
      const base = { areaId: a.id, taskId: t.id, taskKey: `${a.id}.${t.id}`, type: e.type };
      if (e.subs?.length) {
        for (const s of e.subs) {
          cards.push({ ...base, id: s.code, title: s.text, parent: e.text.replace(/[:,]\s*$/, ""), content: content[s.code], order: order++ });
        }
      } else {
        cards.push({ ...base, id: e.code, title: e.text.replace(/\.$/, ""), content: content[e.code], order: order++ });
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
export function cardsForTask(key: string) {
  return cards.filter((c) => c.taskKey === key);
}
export function cardsForArea(id: string) {
  return cards.filter((c) => c.areaId === id);
}

/** Does a code (element, task "IR.I.B", or area "IR.I") cover this card? */
export function codeMatches(code: string, card: Card) {
  if (/[KRS]\d+[a-z]$/.test(code)) return card.id === code; // sub-element
  if (/[KRS]\d+$/.test(code)) return card.id === code || (card.id.startsWith(code) && /^[a-z]$/.test(card.id.slice(code.length)));
  return card.id.startsWith(code + "."); // task or area
}

export interface OralQ extends ExaminerQ {
  id: string;
  cardId: string;
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
