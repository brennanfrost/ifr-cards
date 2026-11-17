import { useEffect } from "react";
import { useRoute } from "./lib/router";
import { useLoaded, useStore } from "./lib/store";
import { BottomNav, ToastHost } from "./components/Layout";
import { Tutorial } from "./components/Tutorial";
import { Home } from "./screens/Home";
import { Session, StudyHome } from "./screens/Study";
import { AreaView, BrowseHome, CardView, TaskView } from "./screens/Browse";
import { Oral, OralSession } from "./screens/Oral";
import { RegsHome, RegView } from "./screens/Regs";
import { About, Mnemonics, MoreHome, Report, Settings } from "./screens/More";

function useTheme() {
  const theme = useStore((s) => s.settings.theme);
  useEffect(() => {
    const apply = () => {
      const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.dataset.theme = dark ? "dark" : "light";
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#5a0d02" : "#680f02");
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
    case "oral": return parts[1] === "run" ? <OralSession /> : <Oral />;
    case "browse":
      if (!parts[1]) return <BrowseHome />;
      return parts[1].includes(".") ? <TaskView taskKey={parts[1]} /> : <AreaView id={parts[1]} />;
    case "card": return <CardView id={decodeURIComponent(parts[1] ?? "")} />;
    case "reg": return <RegView id={decodeURIComponent(parts[1] ?? "")} />;
    case "more":
      if (parts[1] === "mnemonics") return <Mnemonics />;
      if (parts[1] === "report") return <Report />;
      if (parts[1] === "settings") return <Settings />;
      if (parts[1] === "about") return <About />;
      if (parts[1] === "regs") return <RegsHome />;
      return <MoreHome />;
    default: return <Home />;
  }
}

export default function App() {
  const route = useRoute();
  const loaded = useLoaded();
  useTheme();
  const fullscreen = route.startsWith("/session") || route.startsWith("/oral/run");
  if (!loaded) return null;
  return (
    <>
      <main className={`app${fullscreen ? " no-nav" : ""}`}>
        <Screen route={route} />
      </main>
      {!fullscreen && <BottomNav route={route} />}
      <ToastHost />
      <Tutorial />
    </>
  );
}
