import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { loadState } from "./lib/store";
import { registerSW } from "virtual:pwa-register";

loadState();

try {
  registerSW({ immediate: true });
} catch {
  /* service workers unavailable (e.g., sandboxed preview) */
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
