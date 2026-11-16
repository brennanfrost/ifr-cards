import { useSyncExternalStore } from "react";
import type { Scope } from "./scheduler";

function current() {
  const h = window.location.hash.replace(/^#/, "");
  return h || "/";
}

function subscribe(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export function useRoute() {
  return useSyncExternalStore(subscribe, current);
}

export function go(path: string, replace = false) {
  if (replace) {
    history.replaceState(null, "", "#" + path);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  } else {
    window.location.hash = path;
  }
  window.scrollTo(0, 0);
}

export function back(fallback = "/") {
  const before = current();
  if (history.length > 1) {
    history.back();
    // opened directly with no in-app history: fall back
    setTimeout(() => {
      if (current() === before) go(fallback, true);
    }, 150);
  } else go(fallback, true);
}

/** Scope for the next study session (set before navigating to /study). */
let pending: Scope | null = null;
export function startSession(scope: Scope) {
  pending = scope;
  go("/session");
}
export function takeScope(): Scope | null {
  const s = pending;
  return s;
}
