import { type Card, allCards, codeMatches, writtenCards, oralQuestions } from "./deck";
import { type CardProgress, type State, update } from "./store";

const DAY = 86_400_000;
/** Days until the next review for each box after a correct answer. */
const INTERVAL_DAYS = [0, 1, 3, 7, 16, 35];

export function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function daysUntil(date?: string): number | null {
  if (!date) return null;
  const [y, m, d] = date.split("-").map(Number);
  const target = new Date(y, m - 1, d).getTime();
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((target - start) / DAY);
}

/** Intervals shrink as the checkride gets close, so everything gets seen again before the test. */
function intervalMs(box: number, checkride?: string) {
  let days = INTERVAL_DAYS[box] ?? 35;
  const left = daysUntil(checkride);
  if (left !== null && left > 0) days = Math.min(days, Math.max(1, Math.floor(left / 3)));
  return days * DAY;
}

/** Record a swipe. knew = swiped right ("Got it"). */
export function grade(cardId: string, knew: boolean) {
  const now = Date.now();
  update((s) => {
    const p: CardProgress = s.progress[cardId] ?? { box: 0, due: 0, seen: 0, right: 0, wrong: 0, last: 0 };
    let box: number;
    if (knew) box = p.seen === 0 ? 2 : Math.min(5, p.box + 1);
    else box = 0;
    const next: CardProgress = {
      box,
      due: knew ? now + intervalMs(box, s.settings.checkride) : now,
      seen: p.seen + 1,
      right: p.right + (knew ? 1 : 0),
      wrong: p.wrong + (knew ? 0 : 1),
      last: now,
    };
    const day = todayKey();
    return {
      ...s,
      progress: { ...s.progress, [cardId]: next },
      activity: { ...s.activity, [day]: (s.activity[day] ?? 0) + 1 },
    };
  });
}

export function gradeOral(qId: string, cardId: string, knew: boolean) {
  update((s) => {
    const o = s.oral[qId] ?? { right: 0, wrong: 0, last: 0 };
    return { ...s, oral: { ...s.oral, [qId]: { right: o.right + (knew ? 1 : 0), wrong: o.wrong + (knew ? 0 : 1), last: Date.now() } } };
  });
  grade(cardId, knew);
}

export type Mastery = "new" | "missed" | "learning" | "solid" | "mastered";

export function mastery(p?: CardProgress): Mastery {
  if (!p || p.seen === 0) return "new";
  if (p.box === 0) return "missed";
  if (p.box <= 2) return "learning";
  if (p.box <= 4) return "solid";
  return "mastered";
}

const SCORE = [0.1, 0.35, 0.6, 0.8, 0.92, 1];
export function readiness(cards: Card[], s: State) {
  const pool = cards.filter((c) => c.content);
  if (!pool.length) return null;
  const total = pool.reduce((sum, c) => {
    const p = s.progress[c.id];
    return sum + (p && p.seen ? SCORE[p.box] : 0);
  }, 0);
  return total / pool.length;
}

export function isWeak(p?: CardProgress) {
  return !!p && p.wrong > 0 && (p.box <= 1 || p.wrong >= p.right);
}

export interface Scope {
  kind: "smart" | "weak" | "codes" | "task" | "area";
  key?: string; // task key "I.A" or area id "I"
  types?: ("K" | "R" | "S")[];
  label: string;
}

export function scopePool(scope: Scope, s: State): Card[] {
  const base = s.settings.includeUnwritten || scope.kind === "task" ? allCards : writtenCards;
  let pool = base;
  if (scope.kind === "task") pool = base.filter((c) => c.taskKey === scope.key);
  if (scope.kind === "area") pool = base.filter((c) => c.areaId === scope.key);
  if (scope.kind === "weak") pool = base.filter((c) => isWeak(s.progress[c.id]));
  if (scope.kind === "codes") pool = base.filter((c) => s.testCodes.some((code) => codeMatches(code, c)));
  if (scope.types?.length) pool = pool.filter((c) => scope.types!.includes(c.type));
  return pool;
}

/** Build a study session: due reviews first, then new cards in ACS order, then the weakest of the rest. */
export function buildSession(scope: Scope, s: State, size = s.settings.sessionSize): Card[] {
  const pool = scopePool(scope, s);
  if (scope.kind === "task") return pool; // studying a task = the whole task, in order
  const now = Date.now();
  const due: Card[] = [];
  const fresh: Card[] = [];
  const rest: Card[] = [];
  for (const c of pool) {
    const p = s.progress[c.id];
    if (!p || p.seen === 0) fresh.push(c);
    else if (p.due <= now) due.push(c);
    else rest.push(c);
  }
  due.sort((a, b) => s.progress[a.id].due - s.progress[b.id].due);
  rest.sort((a, b) => s.progress[a.id].box - s.progress[b.id].box || s.progress[a.id].due - s.progress[b.id].due);
  return [...due, ...fresh, ...rest].slice(0, size);
}

export function dueCount(s: State) {
  const now = Date.now();
  const pool = s.settings.includeUnwritten ? allCards : writtenCards;
  let due = 0;
  let fresh = 0;
  for (const c of pool) {
    const p = s.progress[c.id];
    if (!p || !p.seen) fresh++;
    else if (p.due <= now) due++;
  }
  return { due, fresh };
}

export function streak(activity: Record<string, number>) {
  let n = 0;
  const d = new Date();
  if (!activity[todayKey(d)]) d.setDate(d.getDate() - 1);
  while (activity[todayKey(d)]) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}

export { oralQuestions };
