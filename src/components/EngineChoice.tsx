import { setSettings, useStore } from "../lib/store";

/** Single- vs multiengine checkride. Multiengine-only Tasks (VII.B, VII.C) are hidden for single-engine. */
export function EngineChoice({ compact = false }: { compact?: boolean }) {
  const engines = useStore((s) => s.settings.engines);
  const opts: { v: "single" | "multi"; t: string; d: string }[] = [
    { v: "single", t: "Single-engine", d: "ASEL / ASES" },
    { v: "multi", t: "Multiengine", d: "AMEL / AMES · adds engine-out tasks" },
  ];
  return (
    <div className="engine-choice" role="radiogroup" aria-label="Airplane class for your checkride">
      {opts.map((o) => (
        <button
          key={o.v}
          role="radio"
          aria-checked={engines === o.v}
          className={`engine-opt${engines === o.v ? " on" : ""}`}
          onClick={() => setSettings({ engines: o.v })}
        >
          <span className="engine-radio" />
          <span className="grow">
            <span className="engine-t">{o.t}</span>
            {!compact && <span className="engine-d">{o.d}</span>}
          </span>
        </button>
      ))}
    </div>
  );
}
