import { forwardRef, useImperativeHandle, useRef, type ReactNode } from "react";

export interface SwipeHandle {
  fly: (dir: "left" | "right") => void;
}

interface Props {
  flipped: boolean;
  onFlip: () => void;
  onSwipe: (dir: "left" | "right") => void;
  front: ReactNode;
  back: ReactNode;
}

const THRESHOLD = 90;

export const SwipeCard = forwardRef<SwipeHandle, Props>(function SwipeCard({ flipped, onFlip, onSwipe, front, back }, ref) {
  const el = useRef<HTMLDivElement>(null);
  const good = useRef<HTMLDivElement>(null);
  const bad = useRef<HTMLDivElement>(null);
  const g = useRef({ x: 0, y: 0, t: 0, dx: 0, lock: "" as "" | "h" | "v", id: -1, done: false });

  const setX = (dx: number, animate = false) => {
    const node = el.current;
    if (!node) return;
    node.classList.toggle("animating", animate);
    node.style.transform = `translateX(${dx}px) rotate(${dx / 22}deg)`;
    const k = Math.min(1, Math.abs(dx) / THRESHOLD);
    if (good.current) good.current.style.opacity = dx > 0 ? String(k) : "0";
    if (bad.current) bad.current.style.opacity = dx < 0 ? String(k) : "0";
  };

  const fly = (dir: "left" | "right") => {
    if (g.current.done) return;
    g.current.done = true;
    const w = window.innerWidth;
    setX(dir === "right" ? w * 1.2 : -w * 1.2, true);
    if (el.current) el.current.style.opacity = "0";
    window.setTimeout(() => onSwipe(dir), 220);
  };

  useImperativeHandle(ref, () => ({ fly }));

  return (
    <div
      ref={el}
      className="swipe"
      onPointerDown={(e) => {
        if (g.current.done) return;
        g.current = { ...g.current, x: e.clientX, y: e.clientY, t: Date.now(), dx: 0, lock: "", id: e.pointerId };
      }}
      onPointerMove={(e) => {
        const s = g.current;
        if (s.id !== e.pointerId || s.done) return;
        const dx = e.clientX - s.x;
        const dy = e.clientY - s.y;
        if (!s.lock) {
          if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
            s.lock = "h";
            try { el.current?.setPointerCapture(e.pointerId); } catch { /* ignore */ }
          } else if (Math.abs(dy) > 8) s.lock = "v";
        }
        if (s.lock === "h") {
          s.dx = dx;
          setX(dx);
        }
      }}
      onPointerUp={(e) => {
        const s = g.current;
        if (s.id !== e.pointerId || s.done) return;
        s.id = -1;
        const dt = Date.now() - s.t;
        if (s.lock === "h") {
          const v = Math.abs(s.dx) / Math.max(dt, 1);
          if (Math.abs(s.dx) > THRESHOLD || (v > 0.6 && Math.abs(s.dx) > 40)) fly(s.dx > 0 ? "right" : "left");
          else setX(0, true);
          return;
        }
        if (!s.lock && dt < 450) {
          const target = e.target as HTMLElement;
          if (!target.closest("button, a, input")) onFlip();
        }
      }}
      onPointerCancel={() => {
        g.current.id = -1;
        if (!g.current.done) setX(0, true);
      }}
    >
      <div ref={good} className="stamp good">Got it</div>
      <div ref={bad} className="stamp bad">Again</div>
      <div className={`flip${flipped ? " flipped" : ""}`}>
        <div className="face front" aria-hidden={flipped}>{front}</div>
        <div className="face back" aria-hidden={!flipped}>{back}</div>
      </div>
    </div>
  );
});
