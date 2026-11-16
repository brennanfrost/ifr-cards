import { useEffect } from "react";
import { useRoute } from "./lib/router";
import { setSettings, useLoaded, useStore } from "./lib/store";
import { BottomNav, Sheet, ToastHost } from "./components/Layout";
import { Home } from "./screens/Home";
import { Session, StudyHome } from "./screens/Study";
import { AreaView, BrowseHome, CardView, TaskView } from "./screens/Browse";
import { Oral } from "./screens/Oral";
import { About, Mnemonics, MoreHome, Report, Settings } from "./screens/More";
import { daysUntil } from "./lib/scheduler";
import { ICards, Mark } from "./components/icons";
import { isIOS, isStandalone } from "./lib/install";

function useTheme() {
  const theme = useStore((s) => s.settings.theme);
  useEffect(() => {
    const apply = () => {
      const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0a111e" : "#eef2f8");
    };
    apply();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, [theme]);
}

function Screen({ route }: { route: string }) {
  const [path] = route.split("?");
  const parts = path.split("/").filter(Boolean);
  switch (parts[0]) {
    case undefined: return <Home />;
    case "study": return <StudyHome />;
    case "session": return <Session />;
    case "oral": return <Oral />;
    case "browse":
      if (!parts[1]) return <BrowseHome />;
      return parts[1].includes(".") ? <TaskView taskKey={parts[1]} /> : <AreaView id={parts[1]} />;
    case "card": return <CardView id={decodeURIComponent(parts[1] ?? "")} />;
    case "more":
      if (parts[1] === "mnemonics") return <Mnemonics />;
      if (parts[1] === "report") return <Report />;
      if (parts[1] === "settings") return <Settings />;
      if (parts[1] === "about") return <About />;
      return <MoreHome />;
    default: return <Home />;
  }
}

function Welcome() {
  const s = useStore((x) => x.settings);
  const loaded = useLoaded();
  const open = loaded && !s.onboarded;
  const done = () => setSettings({ onboarded: true });
  const days = daysUntil(s.checkride);
  return (
    <Sheet open={open} onClose={done}>
      <div className="row" style={{ marginBottom: 10 }}>
        <div className="brand-mark" style={{ width: 44, height: 44, borderRadius: 13 }}><Mark style={{ width: 28, height: 28 }} /></div>
        <div>
          <h2>Welcome to IFR Cards</h2>
          <div className="small muted">Checkride prep, one ACS element at a time</div>
        </div>
      </div>
      <div className="stack small" style={{ color: "var(--text-2)", marginTop: 14 }}>
        <div className="row" style={{ alignItems: "flex-start" }}>
          <span className="chip" style={{ color: "var(--green)" }}>→</span>
          <span><b style={{ color: "var(--text)" }}>Swipe right</b> when you know it. It comes back in a few days, then less often.</span>
        </div>
        <div className="row" style={{ alignItems: "flex-start" }}>
          <span className="chip" style={{ color: "var(--red)" }}>←</span>
          <span><b style={{ color: "var(--text)" }}>Swipe left</b> when you don't. You'll see it again this session, and it goes to Weak spots.</span>
        </div>
        <div className="row" style={{ alignItems: "flex-start" }}>
          <span className="chip">Tap</span>
          <span>Tap a card to flip it. No ratings, no settings to fiddle with — the app schedules everything.</span>
        </div>
      </div>
      <label className="field" style={{ marginTop: 18 }}>
        <span className="field-label">When's your checkride? (optional)</span>
        <input type="date" className="input" value={s.checkride ?? ""} onChange={(e) => setSettings({ checkride: e.target.value || undefined })} />
      </label>
      {days !== null && days >= 0 && <p className="small muted" style={{ margin: "8px 0 0" }}>{days} days to go. Reviews will tighten up as it gets close.</p>}
      {!isStandalone() && (
        <p className="small muted" style={{ marginTop: 14 }}>
          Tip: {isIOS() ? "tap Share → Add to Home Screen in Safari" : "install it from your browser menu"} to use it like an app, offline.
        </p>
      )}
      <button className="btn primary" style={{ marginTop: 16 }} onClick={done}><ICards /> Let's go</button>
    </Sheet>
  );
}

export default function App() {
  const route = useRoute();
  const loaded = useLoaded();
  useTheme();
  const fullscreen = route.startsWith("/session");
  if (!loaded) return null;
  return (
    <>
      <main className={`app${fullscreen ? " no-nav" : ""}`}>
        <Screen route={route} />
      </main>
      {!fullscreen && <BottomNav route={route} />}
      <ToastHost />
      <Welcome />
    </>
  );
}
