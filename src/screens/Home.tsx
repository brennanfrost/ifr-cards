import { useMemo } from "react";
import { areas, cardsForArea, acsVersion } from "../lib/deck";
import { daysUntil, dueCount, isWeak, readiness, streak, todayKey } from "../lib/scheduler";
import { useStore } from "../lib/store";
import { go, startSession } from "../lib/router";
import { Ring } from "../components/Layout";
import { ICalendar, ICards, IChevR, IDoc, IFlame, ITarget, Mark } from "../components/icons";
import { useInstall } from "../lib/install";

export function Home() {
  const s = useStore((x) => x);
  const { due, fresh } = dueCount(s);
  const days = daysUntil(s.settings.checkride);
  const today = s.activity[todayKey()] ?? 0;
  const st = streak(s.activity);
  const weak = useMemo(() => Object.values(s.progress).filter(isWeak).length, [s.progress]);
  const install = useInstall();

  const areaRows = useMemo(
    () => areas.map((a) => ({ a, r: readiness(cardsForArea(a.id), s), n: cardsForArea(a.id).filter((c) => c.content).length })),
    [s],
  );
  const overall = readiness(areas.flatMap((a) => cardsForArea(a.id)), s) ?? 0;

  return (
    <div className="fade-in">
      <div className="topbar">
        <div className="brand">
          <div className="brand-mark"><Mark /></div>
          <div>
            <div className="brand-name">IFR <span>Cards</span></div>
            <div className="tiny muted" style={{ fontWeight: 600 }}>Instrument Rating – Airplane · {acsVersion}</div>
          </div>
        </div>
      </div>

      <div className="hero" style={{ marginTop: 6 }}>
        {days !== null && days >= 0 ? (
          <button style={{ textAlign: "left", width: "100%" }} onClick={() => go("/more/settings")}>
            <div className="hero-label">Checkride in</div>
            <div className="count">{days}<small>{days === 1 ? "day" : "days"}</small></div>
            <div className="small muted" style={{ marginTop: 6 }}>
              {new Date(s.settings.checkride + "T12:00").toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
              {" · "}{Math.round(overall * 100)}% ready on written cards
            </div>
          </button>
        ) : (
          <button style={{ textAlign: "left", width: "100%" }} onClick={() => go("/more/settings")}>
            <div className="row">
              <div className="numeral"><ICalendar width={20} /></div>
              <div className="grow">
                <div className="li-title">Set your checkride date</div>
                <div className="li-sub">Reviews tighten up as the date gets close</div>
              </div>
              <IChevR className="chev" style={{ width: 18, color: "var(--muted)" }} />
            </div>
          </button>
        )}
        <button className="btn primary" style={{ marginTop: 18, height: 56 }} onClick={() => startSession({ kind: "smart", label: "Smart session" })}>
          <ICards /> Start studying
        </button>
        <div className="small muted center" style={{ marginTop: 9 }}>{due} due · {fresh} new</div>
      </div>

      <div className="grid2" style={{ marginTop: 12 }}>
        <div className="stat row">
          <Ring value={today / s.settings.dailyGoal} size={52} stroke={6}>{today}</Ring>
          <div>
            <div className="l">Today</div>
            <div className="small" style={{ fontWeight: 700 }}>goal {s.settings.dailyGoal}</div>
          </div>
        </div>
        <div className="stat row">
          <div className="numeral" style={{ width: 52, height: 52, borderRadius: 14, color: st ? "var(--brand)" : "var(--muted)" }}><IFlame width={24} /></div>
          <div>
            <div className="v">{st}</div>
            <div className="l">day streak</div>
          </div>
        </div>
      </div>

      <div className="list" style={{ marginTop: 12 }}>
        <button className="list-item" onClick={() => (weak ? startSession({ kind: "weak", label: "Weak spots" }) : go("/study"))}>
          <span className="numeral" style={{ color: "var(--red)" }}><ITarget width={20} /></span>
          <span className="grow">
            <div className="li-title">Weak spots</div>
            <div className="li-sub">{weak ? `${weak} ${weak === 1 ? "card" : "cards"} to fix` : "None yet — missed cards collect here"}</div>
          </span>
          <IChevR className="chev" />
        </button>
        <button className="list-item" onClick={() => (s.testCodes.length ? startSession({ kind: "codes", label: "Knowledge test report" }) : go("/more/report"))}>
          <span className="numeral" style={{ color: "var(--sky)" }}><IDoc width={20} /></span>
          <span className="grow">
            <div className="li-title">Knowledge test report</div>
            <div className="li-sub">{s.testCodes.length ? `${s.testCodes.length} codes to review — the examiner will re-test these` : "Add the ACS codes you missed on the written"}</div>
          </span>
          <IChevR className="chev" />
        </button>
      </div>

      {install.canInstall && (
        <button className="btn" style={{ marginTop: 12 }} onClick={install.prompt}>Install the app on this device</button>
      )}

      <div className="eyebrow">Readiness by Area of Operation</div>
      <div className="list">
        {areaRows.map(({ a, r, n }) => (
          <button key={a.id} className="list-item" onClick={() => go(`/browse/${a.id}`)}>
            <span className="numeral">{a.id}</span>
            <span className="grow">
              <div className="li-title">{a.name}</div>
              {n ? (
                <div className="row" style={{ marginTop: 7, gap: 10 }}>
                  <div className="bar grow"><i style={{ width: `${(r ?? 0) * 100}%` }} /></div>
                  <span className="tiny muted mono" style={{ width: 34, textAlign: "right" }}>{Math.round((r ?? 0) * 100)}%</span>
                </div>
              ) : (
                <div className="li-sub">ACS elements only — cards coming</div>
              )}
            </span>
            <IChevR className="chev" />
          </button>
        ))}
      </div>
    </div>
  );
}
