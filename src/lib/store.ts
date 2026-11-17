import { useSyncExternalStore } from "react";
import { get, set } from "idb-keyval";

export interface CardProgress {
  box: number; // 0 = missed recently … 5 = mastered
  due: number; // epoch ms
  seen: number;
  right: number;
  wrong: number;
  last: number;
}

export interface OralProgress {
  right: number;
  wrong: number;
  last: number;
}

export type Theme = "dark" | "light" | "system";

export interface Settings {
  checkride?: string; // YYYY-MM-DD
  dailyGoal: number;
  sessionSize: number;
  includeUnwritten: boolean;
  theme: Theme;
  onboarded: boolean;
  /** Design/tutorial version the saved settings were made under. */
  design?: number;
  /** Airplane class for the checkride. Multiengine-only Tasks are hidden unless "multi". */
  engines?: "single" | "multi";
  /** Include Skill (S) cards in swipe sessions. Off by default: they live in Flight briefings. */
  skillsInSessions?: boolean;
}

export interface State {
  progress: Record<string, CardProgress>;
  oral: Record<string, OralProgress>;
  settings: Settings;
  testCodes: string[];
  activity: Record<string, number>; // YYYY-MM-DD -> cards reviewed
  /** Flight briefings read: task key -> time last marked briefed. */
  briefed: Record<string, number>;
}

const KEY = "ifr-cards:v1";

const defaults: State = {
  progress: {},
  oral: {},
  settings: { dailyGoal: 30, sessionSize: 20, includeUnwritten: false, theme: "light", onboarded: false, design: 2 },
  testCodes: [],
  activity: {},
  briefed: {},
};

let state: State = defaults;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

let saveTimer: ReturnType<typeof setTimeout> | undefined;
function persist() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try {
      await set(KEY, state);
    } catch {
      try {
        localStorage.setItem(KEY, JSON.stringify(state));
      } catch {
        /* storage unavailable — keep in memory */
      }
    }
  }, 250);
}

export async function loadState() {
  let saved: Partial<State> | undefined;
  try {
    saved = await get(KEY);
  } catch {
    /* ignore */
  }
  if (!saved) {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) saved = JSON.parse(raw);
    } catch {
      /* ignore */
    }
  }
  if (saved) state = merge(saved);
  loaded = true;
  try {
    navigator.storage?.persist?.();
  } catch {
    /* ignore */
  }
  emit();
}

function merge(saved: Partial<State>): State {
  const settings = { ...defaults.settings, ...(saved.settings ?? {}) };
  // v2 redesign: switch to the new light theme once and show the new tutorial.
  if ((saved.settings?.design ?? 1) < 2) {
    settings.theme = "light";
    settings.onboarded = false;
    settings.design = 2;
  }
  return { ...defaults, ...saved, settings };
}

export function update(fn: (s: State) => State) {
  state = fn(state);
  persist();
  emit();
}

export function getState() {
  return state;
}

export function isLoaded() {
  return loaded;
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useStore<T>(selector: (s: State) => T): T {
  return useSyncExternalStore(subscribe, () => selector(state));
}

export function useLoaded() {
  return useSyncExternalStore(subscribe, () => loaded);
}

export function exportState(): string {
  return JSON.stringify({ app: "ifr-cards", version: 1, exported: new Date().toISOString(), state }, null, 1);
}

export function importState(json: string) {
  const parsed = JSON.parse(json);
  const s = parsed?.state ?? parsed;
  if (!s || typeof s !== "object" || !("progress" in s)) throw new Error("This doesn't look like an IFR Cards backup.");
  update(() => merge(s));
}

export function resetProgress() {
  update((s) => ({ ...s, progress: {}, oral: {}, activity: {} }));
}

export function markBriefed(taskKey: string) {
  update((s) => ({ ...s, briefed: { ...s.briefed, [taskKey]: Date.now() } }));
}

export function setSettings(patch: Partial<Settings>) {
  update((s) => ({ ...s, settings: { ...s.settings, ...patch } }));
}
