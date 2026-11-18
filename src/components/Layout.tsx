import { createPortal } from "react-dom";
import { useEffect, useState, type ReactNode } from "react";
import { back, go } from "../lib/router";
import { IBook, ICards, IChevL, IHome, IMic, IMore } from "./icons";

export function Header({ title, sub, right }: { title: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="topbar">
      <div>
        <h1>{title}</h1>
        {sub && <div className="sub">{sub}</div>}
      </div>
      {right}
    </div>
  );
}

export function BackBar({ label = "Back", fallback = "/", right }: { label?: string; fallback?: string; right?: ReactNode }) {
  return (
    <div className="topbar" style={{ minHeight: 44, marginBottom: 2 }}>
      <button className="back-link" onClick={() => back(fallback)}>
        <IChevL /> {label}
      </button>
      {right}
    </div>
  );
}

const TABS = [
  { path: "/", label: "Home", icon: IHome },
  { path: "/study", label: "Study", icon: ICards },
  { path: "/oral", label: "Oral", icon: IMic },
  { path: "/browse", label: "Browse", icon: IBook },
  { path: "/more", label: "More", icon: IMore },
];

export function BottomNav({ route }: { route: string }) {
  const active =
    TABS.slice(1).find((t) => route.startsWith(t.path))?.path ??
    (route.startsWith("/card") ? "/browse" : route.startsWith("/brief") ? "/study" : route.startsWith("/reg") ? "/more" : "/");
  // /notes highlights Home (it lives on the Home screen)
  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-inner">
        {TABS.map((t) => (
          <button key={t.path} className={active === t.path ? "active" : ""} onClick={() => go(t.path, true)} aria-current={active === t.path ? "page" : undefined}>
            <t.icon />
            {t.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export function Sheet({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  // Portal to <body> so a sheet opened from inside a swiping card isn't trapped by its transform.
  return createPortal(
    <>
      <div className="sheet-backdrop" onClick={onClose} />
      <div className="sheet" role="dialog" aria-modal="true">
        <div className="sheet-grab" />
        {children}
      </div>
    </>,
    document.body,
  );
}

let toastSetter: ((m: string | null) => void) | null = null;
export function toast(msg: string) {
  toastSetter?.(msg);
}
export function ToastHost() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => {
    toastSetter = setMsg;
    return () => { toastSetter = null; };
  }, []);
  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 2400);
    return () => clearTimeout(t);
  }, [msg]);
  return msg ? <div className="toast" role="status">{msg}</div> : null;
}

export function Ring({ value, size = 64, stroke = 7, color = "var(--brand)", children }: { value: number; size?: number; stroke?: number; color?: string; children?: ReactNode }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: size, height: size, flex: "none" }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={stroke} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(1, Math.max(0, value)))} style={{ transition: "stroke-dashoffset .6s ease" }}
        />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontWeight: 800, fontSize: 14 }}>{children}</div>
    </div>
  );
}
