import { useSyncExternalStore } from "react";

interface BIPEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
}

let deferred: BIPEvent | null = null;
const subs = new Set<() => void>();
const emit = () => subs.forEach((s) => s());

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferred = e as BIPEvent;
  emit();
});
window.addEventListener("appinstalled", () => {
  deferred = null;
  emit();
});

export const isStandalone = () =>
  window.matchMedia?.("(display-mode: standalone)").matches || (navigator as unknown as { standalone?: boolean }).standalone === true;

export const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

export function useInstall() {
  const can = useSyncExternalStore(
    (cb) => { subs.add(cb); return () => subs.delete(cb); },
    () => !!deferred,
  );
  return {
    canInstall: can,
    prompt: async () => {
      if (!deferred) return;
      await deferred.prompt();
      await deferred.userChoice.catch(() => undefined);
      deferred = null;
      emit();
    },
  };
}
