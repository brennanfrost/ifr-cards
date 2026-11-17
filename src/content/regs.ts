// FAR and AIM sections an instrument-airplane applicant should know.
// Summaries are written from the official text: 14 CFR via eCFR (ecfr.gov, current as of Nov 13, 2026)
// and the Aeronautical Information Manual on faa.gov. Quotes are verbatim official wording
// (U.S. government works, public domain).

export interface Reg {
  id: string;
  /** How it's cited on cards, e.g. "14 CFR 91.185" or "AIM 5-3-8". Card refs starting with this link here. */
  cite: string;
  title: string;
  group: "Part 61" | "Part 91" | "AIM";
  url: string;
  summary: string[];
  /** Key official wording, verbatim. */
  quote?: string;
  /** Extra ref strings that should also link to this entry. */
  also?: string[];
}

const cfr = (s: string) => `https://www.ecfr.gov/current/title-14/section-${s}`;
const aim = (ch: number, sec: number) => `https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap${ch}_section_${sec}.html`;

export const regs: Reg[] = [
  // ---------------- Part 61 ----------------
  {
    id: "61.3e", cite: "14 CFR 61.3(e)", title: "When an instrument rating is required", group: "Part 61", url: cfr("61.3"),
    summary: [
      "You need an instrument rating to act as **PIC under IFR**, in weather **below VFR minimums**, or in **Class A** airspace",
      "Also required for **special VFR at night** (see 91.157)",
    ],
  },
  {
    id: "61.51g", cite: "14 CFR 61.51(g)", title: "Logging instrument time", group: "Part 61", url: cfr("61.51"),
    summary: [
      "Log instrument time only when flying **solely by reference to instruments** (actual or simulated)",
      "To use it for currency, log the **location and type of each approach** and the **safety pilot's name** if simulated",
      "Device time: log the **type and identification** of the FFS, FTD or ATD",
    ],
  },
  {
    id: "61.57cd", cite: "14 CFR 61.57(c)", title: "Instrument currency and the IPC", group: "Part 61", url: cfr("61.57"), also: ["14 CFR 61.57(d)", "14 CFR 61.57"],
    summary: [
      "To act as PIC under IFR: within the preceding **6 calendar months**, **6 instrument approaches**, **holding procedures and tasks**, and **intercepting and tracking courses** (6-HIT)",
      "Can be done in an aircraft, FFS, FTD or ATD",
      "Not current within the following 6 months: regain by flying 6-HIT (safety pilot, device or instructor)",
      "More than **12 calendar months** without currency: you need an **instrument proficiency check (IPC)**",
    ],
  },
  {
    id: "61.65", cite: "14 CFR 61.65", title: "Instrument rating requirements", group: "Part 61", url: cfr("61.65"),
    summary: [
      "At least a **private pilot certificate**; English proficiency; knowledge test; endorsements for both tests",
      "**50 hr cross-country PIC**, 10 hr in airplanes",
      "**40 hr actual or simulated instrument**, 15 hr from a CFII; **3 hr within 2 calendar months** before the test",
      "Long IFR cross-country with a CFII: **250 NM**, an approach at **each airport**, **3 different kinds** of approaches",
      "Devices: max **10 hr BATD** or **20 hr AATD**; max **20 hr total** from all devices (30 hr in an FFS/FTD under part 142)",
    ],
    quote: "A flight of 250 nautical miles along airways or by directed routing from an air traffic control facility; An instrument approach at each airport; and Three different kinds of approaches with the use of navigation systems.",
  },
  {
    id: "61.113i", cite: "14 CFR 61.113(i)", title: "BasicMed operating limits", group: "Part 61", url: cfr("61.113"), also: ["14 CFR 61.23(c)(3)", "14 CFR part 68"],
    summary: [
      "Aircraft certificated for **7 occupants or fewer**, carrying no more than **6 passengers**, max takeoff weight **12,500 lb or less**",
      "At or below **18,000 ft MSL**, no more than **250 KIAS**",
      "Not for compensation or hire. **IFR is allowed**",
    ],
  },
  {
    id: "61.133b", cite: "14 CFR 61.133(b)", title: "Commercial pilot without an instrument rating", group: "Part 61", url: cfr("61.133"),
    summary: ["Without an instrument rating, a commercial airplane pilot can't carry passengers for hire on cross-countries **over 50 NM** or **at night**"],
  },

  // ---------------- Part 91 ----------------
  {
    id: "91.3", cite: "14 CFR 91.3", title: "PIC responsibility and emergency authority", group: "Part 91", url: cfr("91.3"),
    summary: [
      "The PIC is **directly responsible for, and the final authority** as to, the operation of the aircraft",
      "In an in-flight emergency requiring immediate action, the PIC **may deviate from any rule** of part 91 to the extent required",
      "Send a **written report** of the deviation only **if the Administrator requests** it",
    ],
    quote: "In an in-flight emergency requiring immediate action, the pilot in command may deviate from any rule of this part to the extent required to meet that emergency.",
  },
  {
    id: "91.103", cite: "14 CFR 91.103", title: "Preflight action", group: "Part 91", url: cfr("91.103"),
    summary: [
      "Before an IFR flight, become familiar with **all available information**, including:",
      "- **Weather** reports and forecasts, **fuel requirements**, **alternatives** if the flight can't be completed, and **known traffic delays** from ATC",
      "- **Runway lengths** and **takeoff and landing distance** data",
    ],
  },
  {
    id: "91.109c", cite: "14 CFR 91.109(c)", title: "Safety pilot for simulated instrument flight", group: "Part 91", url: cfr("91.109"),
    summary: [
      "The other control seat must hold a **safety pilot** with at least a **private pilot certificate** and the right **category and class** ratings",
      "The safety pilot needs **adequate vision forward and to each side**, or a competent observer must make up for it",
      "Except in single-engine airplanes, the aircraft needs dual controls",
    ],
  },
  {
    id: "91.123", cite: "14 CFR 91.123", title: "Compliance with ATC clearances", group: "Part 91", url: cfr("91.123"),
    summary: [
      "Don't deviate from a clearance unless you get an **amended clearance**, there's an **emergency**, or you're responding to a **TCAS RA**",
      "If **uncertain** of a clearance, **immediately request clarification**",
      "If you deviate in an emergency, **notify ATC as soon as possible**",
      "Given priority in an emergency? Submit a detailed report within **48 hours** to the facility manager **if requested**",
      "Don't follow a clearance issued to **another aircraft**",
    ],
    quote: "When a pilot is uncertain of an ATC clearance, that pilot shall immediately request clarification from ATC.",
  },
  {
    id: "91.167", cite: "14 CFR 91.167", title: "IFR fuel requirements", group: "Part 91", url: cfr("91.167"),
    summary: [
      "Enough fuel to fly to the **destination**, then to the **alternate** (if one is required), then **45 minutes** at normal cruising speed",
    ],
  },
  {
    id: "91.169", cite: "14 CFR 91.169", title: "IFR flight plan and alternate requirements", group: "Part 91", url: cfr("91.169"),
    summary: [
      "No alternate needed if the destination has an instrument approach and, from **1 hour before to 1 hour after ETA**, the forecast is at least **2,000 ft ceiling and 3 SM** (1-2-3 rule)",
      "Alternate minimums at ETA: **600-2** (precision approach), **800-2** (non-precision), or published non-standard minimums",
      "No approach at the alternate: weather must allow descent from the MEA and landing under **basic VFR**",
    ],
  },
  {
    id: "91.171", cite: "14 CFR 91.171", title: "VOR equipment check for IFR", group: "Part 91", url: cfr("91.171"),
    summary: [
      "Required within the preceding **30 days** to use VOR under IFR",
      "**VOT** or **ground checkpoint**: **±4°**",
      "**Airborne checkpoint**, or over a ground point on an airway centerline: **±6°**",
      "**Dual VOR** check: **4°** between the two",
      "Log it: **date, place, bearing error, signature**",
    ],
    quote: "Each person making the VOR operational check... shall enter the date, place, bearing error, and sign the aircraft log or other record.",
  },
  {
    id: "91.173", cite: "14 CFR 91.173", title: "ATC clearance and flight plan required", group: "Part 91", url: cfr("91.173"),
    summary: ["No IFR in **controlled airspace** unless you've **filed an IFR flight plan** and received an **ATC clearance**"],
  },
  {
    id: "91.175", cite: "14 CFR 91.175", title: "Takeoff and landing under IFR", group: "Part 91", url: cfr("91.175"),
    summary: [
      "Authorized DA/DH or MDA is the **highest** of: the procedure's, the pilot's, or the one for the **equipment available and used**",
      "Below DA/MDA only if: continuously in position for a **normal descent and landing**, **flight visibility** at least the published minimum, and **one of the required visual references** distinctly visible",
      "Using only the **approach lights**: no lower than **100 ft above TDZE** unless the **red terminating bars or red side row bars** are also visible",
      "**Missed approach immediately** if those aren't met below MDA, at the MAP/DA, or if you lose sight of the airport while circling",
      "**No procedure turn** when on radar vectors, a timed approach, or \"No PT\", unless ATC clears it",
      "On vectors or an unpublished route, **maintain the last assigned altitude until established** on a published segment",
      "Takeoff minimums (91.175(f)) apply to **parts 121, 125, 129 and 135**, not part 91",
    ],
    quote: "The aircraft is continuously in a position from which a descent to a landing on the intended runway can be made at a normal rate of descent using normal maneuvers.",
  },
  {
    id: "91.177", cite: "14 CFR 91.177", title: "Minimum altitudes for IFR", group: "Part 91", url: cfr("91.177"),
    summary: [
      "Fly at or above the published minimum altitudes (parts 95 and 97). You may go **below the MEA down to the MOCA** if the nav signal is available; with VOR, only **within 22 NM** of the VOR",
      "No published altitude: **2,000 ft** above the highest obstacle within **4 NM** in designated mountainous areas, **1,000 ft** elsewhere",
      "Climb to a higher MEA **immediately after passing** the point where it applies, unless an **MCA** requires crossing the fix higher",
    ],
  },
  {
    id: "91.179", cite: "14 CFR 91.179", title: "IFR cruising altitudes", group: "Part 91", url: cfr("91.179"),
    summary: [
      "In controlled airspace: the altitude **ATC assigns**",
      "In uncontrolled airspace below 18,000 MSL: magnetic course **0–179°, odd thousands**; **180–359°, even thousands**",
    ],
  },
  {
    id: "91.183", cite: "14 CFR 91.183", title: "IFR communications", group: "Part 91", url: cfr("91.183"),
    summary: [
      "Keep a **continuous watch** on the appropriate frequency",
      "Report: **time and altitude** passing reporting points (in radar contact, only the ones ATC requests), **unforecast weather**, and anything about **safety of flight**",
    ],
  },
  {
    id: "91.185", cite: "14 CFR 91.185", title: "Two-way radio communications failure", group: "Part 91", url: cfr("91.185"),
    summary: [
      "**VFR conditions** (or you find them): continue **VFR and land as soon as practicable**",
      "**IFR route**, first that applies: **A**ssigned → **V**ectored (direct to the fix you were vectored to) → **E**xpected → **F**iled",
      "**Altitude**: the **highest** of the **M**inimum IFR altitude, **E**xpected and **A**ssigned, for each segment",
      "Clearance limit is where an approach begins: start the approach as close as possible to the **EFC**, or if none, the **ETA**",
      "Clearance limit isn't: leave it at the EFC (or on arrival if none), go to the approach fix, and start the approach at the **ETA**",
    ],
    quote: "If the failure occurs in VFR conditions, or if VFR conditions are encountered after the failure, each pilot shall continue the flight under VFR and land as soon as practicable.",
  },
  {
    id: "91.187", cite: "14 CFR 91.187", title: "Malfunction reports", group: "Part 91", url: cfr("91.187"),
    summary: [
      "Under IFR in controlled airspace, report **as soon as practical** any in-flight malfunction of **nav, approach or comm** equipment",
      "Include: **aircraft ID**, **equipment affected**, **degree of impairment**, and **assistance desired** from ATC",
    ],
  },
  {
    id: "91.205d", cite: "14 CFR 91.205(d)", title: "IFR instruments and equipment", group: "Part 91", url: cfr("91.205"), also: ["14 CFR 91.205"],
    summary: [
      "In addition to day (and night) VFR equipment: **G**enerator/alternator, two-way **R**adio and nav for the route, sensitive **A**ltimeter, **B**all (slip-skid), **C**lock (hours, minutes, seconds), **A**ttitude indicator, **R**ate-of-turn indicator, **D**irectional gyro",
      "At or above **FL240** with VOR navigation, you also need **DME** or a suitable RNAV system (91.205(e))",
    ],
  },
  {
    id: "91.213", cite: "14 CFR 91.213", title: "Inoperative instruments and equipment", group: "Part 91", url: cfr("91.213"),
    summary: [
      "With an **MEL**: follow it and the letter of authorization",
      "**Without an MEL** (91.213(d)), the inoperative item must **not** be: part of **VFR-day type certification**, on the **equipment list or KOEL**, required by **91.205 or another rule** for this flight, or required by an **AD**",
      "Then **remove** it or **deactivate and placard it \"Inoperative\"**, and a pilot or mechanic decides it's **not a hazard**",
      "Otherwise you need a **special flight permit**",
    ],
  },
  {
    id: "91.411", cite: "14 CFR 91.411", title: "Altimeter and static system check", group: "Part 91", url: cfr("91.411"),
    summary: ["For IFR in controlled airspace, the **altimeter, static system and altitude reporting** must have been tested within the preceding **24 calendar months**"],
  },
  {
    id: "91.413", cite: "14 CFR 91.413", title: "Transponder check", group: "Part 91", url: cfr("91.413"),
    summary: ["The **transponder** must have been tested and inspected within the preceding **24 calendar months**"],
  },

  // ---------------- AIM ----------------
  {
    id: "aim1-1-4", cite: "AIM 1-1-4", title: "VOR receiver checks", group: "AIM", url: aim(1, 1), also: ["AIM 1-1-3"],
    summary: [
      "IFR flight must not be attempted if a ground check shows more than **±4°** or an airborne check more than **±6°**",
      "Dual VOR: max **4°** between the two",
      "Identify a VOR by its **Morse code** (or voice) ID. During maintenance it may send **T-E-S-T** or no ID. Don't use a NAVAID that's NOTAMed out of service, even if it identifies",
    ],
  },
  {
    id: "aim1-1-9", cite: "AIM 1-1-9", title: "Instrument landing system (ILS)", group: "AIM", url: aim(1, 1),
    summary: [
      "**Localizer**: 108.10–111.95 MHz, course width typically **700 ft at the threshold**",
      "**Glide slope**: 329.15–335.00 MHz, beam **1.4° wide**, normally **3°**",
      "Markers: **outer = blue**, **middle = amber**, **inner = white**",
      "Glide slope out: it becomes a **localizer** (non-precision) approach",
    ],
  },
  {
    id: "aim1-1-17", cite: "AIM 1-1-17", title: "GPS, RAIM and databases", group: "AIM", url: aim(1, 1),
    summary: [
      "**RAIM** = the receiver checking its own integrity; needs **5 satellites**, or **4 plus baro-aiding**",
      "Check RAIM availability before flight; if predicted unavailable, use other navigation, reroute, delay or cancel",
      "If RAIM is lost **before the FAWP**, don't complete the approach",
      "Databases **must be current for IFR**",
      "CDI scaling: en route **±5 NM**, terminal **±1 NM**, approach narrows to **±0.3 NM** at the FAWP. Approach mode arms at **30 NM**, goes active within **2 NM** of the FAWP",
      "Non-WAAS GPS: plan a GPS approach at the destination **or** the alternate, **not both**",
    ],
  },
  {
    id: "aim1-1-18", cite: "AIM 1-1-18", title: "WAAS", group: "AIM", url: aim(1, 1),
    summary: [
      "WAAS approach minima: **LPV** (vertical guidance, DA as low as **200 ft**), **LP** (lateral only, like a localizer), **LNAV/VNAV**, **LNAV**",
      "**LP** can have lower minimums than **LNAV** because of a narrower obstacle clearance area",
      "Planning an alternate with WAAS: use the **LNAV or circling** line (or a conventional approach), with part 91 non-precision alternate weather",
    ],
  },
  {
    id: "aim2-1", cite: "AIM 2-1", title: "Airport lighting", group: "AIM", url: aim(2, 1),
    summary: [
      "Approach lights extend **2,400–3,000 ft** (precision) or **1,400–1,500 ft** (non-precision)",
      "**VASI/PAPI**: red and white. Red over white = on glide path (VASI), normally **3°**",
      "Instrument runway edge lights turn **yellow** for the last **2,000 ft** (or half the runway)",
      "Centerline lights: **alternating red/white** from **3,000 ft** remaining, **all red** for the last **1,000 ft**",
      "Pilot-controlled lighting: **7 clicks** high, **5** medium, **3** low, within **5 seconds**; stays on **15 minutes**",
    ],
  },
  {
    id: "aim4-4", cite: "AIM 4-4", title: "ATC clearances", group: "AIM", url: aim(4, 4), also: ["AIM 4-4-1", "AIM 4-4-7", "AIM 4-4-10"],
    summary: [
      "The pilot is responsible to **accept or refuse** a clearance; ask for an amended one if it would break a rule or endanger the aircraft",
      "**Read back** altitudes, altitude restrictions and vectors in the order given, with your **call sign**",
      "**VFR-on-top** doesn't cancel IFR: follow VFR altitudes and cloud clearances, and see and avoid",
      "Assigned speeds: hold within **±10 knots**",
      "If you deviate in an emergency, **notify ATC as soon as possible** and get an amended clearance",
    ],
  },
  {
    id: "aim5-2-7", cite: "AIM 5-2-7", title: "Void times, hold for release, release times", group: "AIM", url: aim(5, 2), also: ["AIM 5-2-6"],
    summary: [
      "**Void time**: if not airborne by then, tell ATC your intentions as soon as possible, **within 30 minutes**, or search and rescue begins",
      "**Hold for release**: don't depart on that IFR clearance until released",
      "**Release time**: the earliest you may depart",
      "\"Cleared as filed\" **doesn't include the altitude**; it's stated separately",
    ],
  },
  {
    id: "aim5-2-9", cite: "AIM 5-2-9", title: "Departure procedures (ODP and SID)", group: "AIM", url: aim(5, 2),
    summary: [
      "**ODP**: obstacle clearance only; may be flown **without ATC clearance** unless ATC assigns something else",
      "**SID**: an ATC procedure; **needs a clearance**",
      "Standard climb gradient **200 ft/NM**; cross the departure end at least **35 ft** above it and reach **400 ft** above it before turning, unless the procedure says otherwise",
      "A **T** on the chart means non-standard takeoff minimums or a departure procedure; see the TPP takeoff minimums section",
    ],
  },
  {
    id: "aim5-3-3", cite: "AIM 5-3-3", title: "Additional reports", group: "AIM", url: aim(5, 3),
    summary: [
      "Always report: **leaving an altitude**, **VFR-on-top altitude change**, **unable to climb/descend 500 fpm**, **missed approach**, **TAS change of 5% or 10 knots**, **reaching** and **leaving a holding fix**, **loss of nav or comm**, **anything affecting safety**",
      "Not in radar contact, also: **leaving the FAF or outer marker inbound**, and **corrected estimates** more than **2 minutes** off",
    ],
  },
  {
    id: "aim5-3-8", cite: "AIM 5-3-8", title: "Holding", group: "AIM", url: aim(5, 3),
    summary: [
      "Max holding speeds: **200 KIAS** to 6,000 MSL, **230** from 6,001–14,000 (may be limited to **210**), **265** above 14,000",
      "Start slowing within **3 minutes** of the fix",
      "Inbound leg: **1 minute** at or below 14,000 MSL, **1½ minutes** above",
      "Standard = **right** turns; non-standard = **left**",
      "Entries: **direct**, **teardrop** (30°), **parallel**",
      "Report **time and altitude** reaching the fix and when leaving it",
    ],
  },
  {
    id: "aim5-4-7", cite: "AIM 5-4-7", title: "Approach categories", group: "AIM", url: aim(5, 4),
    summary: [
      "Based on **VREF** (or **1.3 VSO**) at max landing weight: **A** < 91 kt, **B** 91–120, **C** 121–140, **D** 141–165, **E** 166+",
      "Flying faster than your category? Use the **higher category's** minimums",
    ],
  },
  {
    id: "aim5-4-9", cite: "AIM 5-4-9", title: "Procedure turns", group: "AIM", url: aim(5, 4),
    summary: [
      "Required when depicted, **unless** \"**NoPT**\", **radar vectors** to final, a **timed approach** from a holding fix, or ATC clears straight-in",
      "Stay within the charted distance, normally **10 NM**; max **200 KIAS**",
      "The PT altitude is a **minimum until established inbound**",
    ],
  },
  {
    id: "aim5-4-20", cite: "AIM 5-4-20", title: "Circling and straight-in minimums", group: "AIM", url: aim(5, 4),
    summary: [
      "Circling areas are arcs from each runway end; newer procedures with a **C in a black box** use **expanded** radii that grow with altitude",
      "Obstacle clearance is provided only **at or above MDA** inside the circling area",
      "Straight-in minimums need a final course within **30°** of the runway",
      "Circling isn't allowed from an ILS without a localizer line, a GLS, or an RNAV without an LNAV line",
    ],
  },
  {
    id: "aim5-4-21", cite: "AIM 5-4-21", title: "Missed approach", group: "AIM", url: aim(5, 4),
    summary: [
      "Protection assumes the missed approach starts **at the DA or MAP**, not below MDA",
      "Climb gradient at least **200 ft/NM** unless a higher one is published",
      "Going missed early: **fly to the MAP** at or above MDA/DA before turning",
      "Lose sight while circling: **climbing turn toward the landing runway**, then the published missed approach",
    ],
  },
  {
    id: "aim5-5", cite: "AIM 5-5", title: "Pilot and controller responsibilities", group: "AIM", url: aim(5, 5),
    summary: [
      "**See and avoid** is always the pilot's job when weather permits, on any flight plan",
      "**Contact approach**: pilot must request it; clear of clouds, **1 SM** flight visibility",
      "**Visual approach**: airport or preceding aircraft in sight; ATC needs **1,000 ft ceiling and 3 SM**",
      "**Minimum fuel** is an advisory, not an emergency; declare an emergency if you need priority",
    ],
  },
  {
    id: "aim6-4-1", cite: "AIM 6-4-1", title: "Lost communications", group: "AIM", url: aim(6, 4), also: ["AIM 6-4-2", "AIM 6-4-3", "AIM 6-4"],
    summary: [
      "Squawk **7600**",
      "Same route, altitude and timing rules as **14 CFR 91.185**",
      "Try to re-establish contact: previous frequency, FSS, **121.5**, and listen on NAVAID voice",
    ],
  },
];

export const regById = new Map(regs.map((r) => [r.id, r]));

/** The reg entry a card reference points to, if any. */
export function regForRef(ref: string): Reg | undefined {
  const norm = ref.trim();
  for (const r of regs) {
    for (const c of [r.cite, ...(r.also ?? [])]) {
      if (norm === c) return r;
      if (norm.startsWith(c)) {
        const next = norm[c.length];
        // "14 CFR 91.17" must not match "14 CFR 91.171"; "AIM 5-3" must not match "AIM 5-3-8"
        if (next && !/[0-9-]/.test(next)) return r;
      }
    }
  }
  return undefined;
}
