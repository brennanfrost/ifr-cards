import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadState } from "./lib/store";
import { registerSW } from "virtual:pwa-register";

loadState();

try {
  registerSW({
    immediate: true,
    onRegisteredSW(_url, reg) {
      if (!reg) return;
      // iOS home-screen apps rarely check for updates on their own: check on every open and hourly.
      const check = () => reg.update().catch(() => {});
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") check();
      });
      setInterval(check, 60 * 60 * 1000);
    },
  });
} catch {
  /* service workers unavailable (e.g., sandboxed preview) */
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
