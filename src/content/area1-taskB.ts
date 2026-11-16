import type { ContentMap } from "./types";

// Area I, Task B — Weather Information
export const area1TaskB: ContentMap = {
  "IR.I.B.K1": {
    core: "Use official FAA and National Weather Service sources — Flight Service and the NWS Aviation Weather Center — or apps that redistribute their data.",
    sections: [
      {
        h: "Primary sources",
        b: [
          "**Flight Service** (Leidos): **1-800-WX-BRIEF** and **1800wxbrief.com**. Briefings are recorded, which documents that you got one",
          "**NWS Aviation Weather Center:** **aviationweather.gov** — METARs, TAFs, GFA, AIRMETs, SIGMETs, icing and turbulence products",
          "**NWS Storm Prediction Center** — convective outlooks",
          "**EFB apps** (ForeFlight, Garmin Pilot, etc.) redistribute NWS/FAA data and can be used for planning",
        ],
      },
      {
        h: "Briefing types (Flight Service)",
        b: [
          "**Standard** — no previous briefing; the full picture",
          "**Abbreviated** — update to a previous briefing, or specific items",
          "**Outlook** — departure 6 or more hours away",
        ],
      },
      {
        h: "Why it matters",
        b: [
          "**91.103** requires the PIC to become familiar with **all available information**, including weather reports and forecasts, for an IFR flight",
        ],
      },
    ],
    examiner: [
      {
        q: "Is a ForeFlight briefing an acceptable weather briefing?",
        a: "Yes, it uses NWS and FAA data. 91.103 requires me to be familiar with all available information; it doesn't require a specific source. A Flight Service briefing (including through ForeFlight's 1800wxbrief integration) also creates a record that I got one.",
      },
    ],
    refs: ["14 CFR 91.103", "AC 91-92", "FAA-H-8083-28 (Aviation Weather Handbook)", "AIM 7-1"],
  },

  "IR.I.B.K2a": {
    core: "METARs are hourly observations, SPECIs are special observations for significant changes, and PIREPs are pilot reports — the only direct source for icing, turbulence and cloud tops.",
    sections: [
      {
        h: "METAR / SPECI format",
        b: [
          "Type · station · date/time (Z) · **wind** (dddffGffKT; VRB; 180V240) · **visibility** (SM) · RVR · **weather** · **sky** · temp/dewpoint · **altimeter** · remarks",
          "**Weather:** intensity (- light, + heavy, VC vicinity), descriptor (TS, SH, FZ), precip (RA, SN, DZ), obscuration (BR mist, FG fog, HZ haze, FU smoke)",
          "**Sky:** FEW (1–2/8), SCT (3–4/8), **BKN (5–7/8)**, **OVC (8/8)**, **VV** (vertical visibility), heights in hundreds of feet **AGL**",
          "**Ceiling** = lowest **BKN, OVC or VV** layer",
          "M = minus (temperatures); A2992 = altimeter 29.92",
          "Remarks: AO2 (automated with precip sensor), SLP, T-group (exact temps)",
        ],
      },
      {
        h: "PIREPs",
        b: [
          "**UA** = routine, **UUA** = urgent (tornado, severe icing or turbulence, LLWS, hail, volcanic ash)",
          "Format: /OV location · /TM time · /FL altitude · /TP aircraft type · /SK sky · /WX · /TA temp · /WV wind · /TB turbulence · /IC icing · /RM remarks",
          "Give PIREPs to ATC or Flight Service, especially for unforecast weather, icing, turbulence and tops",
        ],
      },
    ],
    examiner: [
      {
        q: "Decode: KCNY 121753Z 21012G22KT 6SM -RA BR BKN014 OVC025 08/06 A2995",
        a: "Moab, 12th at 1753Z: wind 210° at 12 gusting 22 knots, 6 SM in light rain and mist, ceiling 1,400 broken, overcast 2,500, temp 8°C, dewpoint 6°C, altimeter 29.95.",
      },
    ],
    refs: ["AIM 7-1", "FAA-H-8083-28 (Aviation Weather Handbook)", "AC 91-92"],
  },

  "IR.I.B.K2b": {
    core: "The surface analysis shows fronts and pressure systems right now; the CVA shows where ceilings and visibility are VFR, MVFR, IFR or LIFR.",
    sections: [
      {
        h: "Surface Analysis Chart",
        b: [
          "Issued every **3 hours**; observed (not forecast) conditions",
          "Highs, lows, **fronts**, troughs, **isobars** (every 4 mb), station models",
          "Use it for the big picture: where the fronts are and what's driving the weather",
          "Tight isobars = strong pressure gradient = strong winds",
        ],
      },
      {
        h: "Ceiling and Visibility Analysis (CVA)",
        b: [
          "Shows current flight categories over an area, from METARs plus satellite between stations",
          "**LIFR:** ceiling < 500 ft and/or visibility < 1 SM",
          "**IFR:** ceiling 500 to < 1,000 ft and/or visibility 1 to < 3 SM",
          "**MVFR:** ceiling 1,000–3,000 ft and/or visibility 3–5 SM",
          "**VFR:** ceiling > 3,000 ft and visibility > 5 SM",
        ],
      },
    ],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "aviationweather.gov"],
  },

  "IR.I.B.K2c": {
    core: "A TAF forecasts conditions within 5 SM of the airport for 24 or 30 hours, issued four times a day.",
    sections: [
      {
        h: "Basics",
        b: [
          "Covers **5 SM** around the runway complex",
          "Valid **24 or 30 hours**; issued 4×/day (0000, 0600, 1200, 1800Z), amended as needed",
          "Valid period written DDHH/DDHH; all times Z",
          "**P6SM** = visibility more than 6 SM; **WS** = low-level wind shear",
        ],
      },
      {
        h: "Change groups",
        b: [
          "**FM** (from) — rapid, significant change starting at that time",
          "**TEMPO** — temporary fluctuations, each lasting less than 1 hour, covering less than half the period",
          "**PROB30 / PROB40** — probability of thunderstorms or precipitation",
          "**BECMG** — gradual change over a period (usually ≤ 2 hours)",
        ],
      },
      {
        h: "Alternate planning",
        b: ["Use the TAF for **1 hour before to 1 hour after ETA** to apply 91.169 (1-2-3 rule) — including TEMPO conditions"],
      },
    ],
    examiner: [
      {
        q: "Your destination TAF shows FM1800 BKN030 with TEMPO 1820/1824 1SM BR OVC006 around your ETA of 1930Z. Do you need an alternate?",
        a: "Yes. Conditions within 1 hour of ETA include a temporary ceiling of 600 ft and 1 SM, which is below 2,000 and 3. Conservatively, I treat the TEMPO conditions as forecast.",
      },
    ],
    refs: ["14 CFR 91.169", "FAA-H-8083-28 (Aviation Weather Handbook)", "AIM 7-1"],
  },

  "IR.I.B.K2d": {
    core: "The Graphical Forecasts for Aviation (GFA) is the interactive aviationweather.gov tool that replaced the text area forecast for the lower 48.",
    sections: [
      {
        h: "What it shows",
        b: [
          "Observations and forecasts on one map, for the contiguous U.S.",
          "Layers: **clouds** (bases, tops, coverage), **surface** (visibility, weather, winds), **flight category**, **thunderstorms**, **icing**, **turbulence**, winds aloft, PIREPs, AIRMETs/SIGMETs",
          "Forecast time steps out to **18 hours**",
          "Altitudes from the surface into the flight levels",
        ],
      },
      {
        h: "Use",
        b: [
          "Route-wide picture of clouds, freezing levels and icing between airports with no TAF",
          "Check cloud tops for icing exposure and whether you can climb on top",
        ],
      },
    ],
    refs: ["AC 91-92", "FAA-H-8083-28 (Aviation Weather Handbook)", "aviationweather.gov/gfa"],
  },

  "IR.I.B.K2e": {
    core: "Winds and temperatures aloft (FB) forecasts give wind direction (true), speed (knots) and temperature (°C) at set altitudes.",
    sections: [
      {
        h: "Reading the FB",
        b: [
          "Format **DDff±TT**: 2715-05 = 270° true at 15 kt, −5 °C",
          "**No wind** forecast within **1,500 ft** of station elevation",
          "**No temperature** at the **3,000 ft** level, or within **2,500 ft** of station elevation",
          "Above **24,000 ft**, temperatures are always negative (sign omitted)",
          "**9900** = light and variable (< 5 kt)",
          "**Winds 100–199 kt:** direction coded +50. 7319 = (73−50) = 230° at (19+100) = **119 kt**",
          "Directions are **true**; issued 4×/day for 6, 12 and 24-hour periods",
        ],
      },
      {
        h: "Use",
        b: ["Choose altitude for groundspeed and fuel", "Find the freezing level by temperature", "Spot strong winds aloft that suggest turbulence or mountain wave"],
      },
    ],
    examiner: [
      { q: "Decode 731948 at 39,000 ft.", a: "Direction 73 is more than 36, so subtract 50 and add 100 to the speed: 230° true at 119 knots. Above 24,000 ft temperatures are negative: −48 °C." },
      { q: "Decode 2817-09 at 9,000.", a: "280° true at 17 knots, minus 9 °C." },
    ],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "AC 91-92"],
  },

  "IR.I.B.K2f": {
    core: "The Storm Prediction Center's Convective Outlook forecasts where thunderstorms and severe thunderstorms are expected over the next 1–8 days.",
    sections: [
      {
        h: "Products",
        b: [
          "**Day 1, Day 2, Day 3** categorical outlooks; Day 4–8 probabilistic",
          "Risk categories: **TSTM** (general thunderstorms) → **1 MRGL** (marginal) → **2 SLGT** (slight) → **3 ENH** (enhanced) → **4 MDT** (moderate) → **5 HIGH**",
          "Severe = tornado, hail **≥ 1 inch**, or wind gusts **≥ 50 kt**",
        ],
      },
      {
        h: "Use",
        b: ["A planning tool for days ahead — not a substitute for current radar, Convective SIGMETs and PIREPs", "Even a SLGT risk along the route means plan alternates and outs"],
      },
    ],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "spc.noaa.gov"],
  },

  "IR.I.B.K2g": {
    core: "AIRMETs warn of conditions hazardous to light aircraft, SIGMETs of severe hazards to all aircraft, and Convective SIGMETs of severe thunderstorm activity.",
    sections: [
      {
        h: "AIRMET (issued every 6 hr, valid 6 hr)",
        b: [
          "**Sierra:** IFR conditions (ceiling < 1,000 and/or vis < 3 SM) over large areas; **mountain obscuration**",
          "**Tango:** **moderate turbulence**, sustained surface winds **≥ 30 kt**, non-convective low-level wind shear",
          "**Zulu:** **moderate icing** and **freezing levels**",
          "G-AIRMETs are the graphical version, in 3-hour snapshots",
        ],
      },
      {
        h: "SIGMET (non-convective, valid up to 4 hr)",
        b: [
          "**Severe icing** not associated with thunderstorms",
          "**Severe or extreme turbulence** or CAT not associated with thunderstorms",
          "Dust or sandstorms lowering visibility below **3 SM**",
          "**Volcanic ash** (valid up to 6 hr, as are tropical cyclone SIGMETs)",
        ],
      },
      {
        h: "Convective SIGMET (issued hourly at H+55, valid 2 hr)",
        b: [
          "**Tornadoes**, hail **≥ ¾ inch**, surface winds/gusts **≥ 50 kt**",
          "**Embedded** thunderstorms; **lines** of thunderstorms; areas of heavy-precipitation thunderstorms",
          "Implies severe turbulence, severe icing and low-level wind shear — no separate SIGMET is issued for those",
        ],
      },
      {
        h: "Also",
        b: ["**Center Weather Advisory (CWA):** short-term (up to 2 hr) warning from an ARTCC's weather unit"],
      },
    ],
    mnemonic: { name: "AIRMET letters", lines: ["Sierra = IFR & mountain obscuration (S for 'see')", "Tango = Turbulence & surface wind", "Zulu = icing (Zero °C) & freezing level"] },
    examiner: [
      { q: "There's an AIRMET Zulu along your route. Can you go?", a: "An AIRMET Zulu means moderate icing is forecast. In an airplane without known-icing approval (FIKI), I'd avoid the affected altitudes or not go — check freezing levels, tops, PIREPs and outs before deciding." },
    ],
    refs: ["AIM 7-1", "FAA-H-8083-28 (Aviation Weather Handbook)"],
  },

  "IR.I.B.K3a": {
    core: "Stable air resists vertical motion (smooth air, stratus, poor visibility); unstable air promotes it (cumulus, showers, turbulence, good visibility).",
    sections: [
      {
        h: "Composition and standard atmosphere",
        b: ["About **78% nitrogen, 21% oxygen**, 1% other gases", "Standard sea level: **15 °C, 29.92 in Hg**; standard lapse rate **2 °C per 1,000 ft**"],
      },
      {
        h: "Stability",
        b: [
          "Determined by the **lapse rate**: the faster temperature drops with height, the more unstable",
          "Dry adiabatic lapse rate **3 °C/1,000 ft**; moist adiabatic lower (about 1.1–2.8 °C)",
          "**Stable:** stratiform clouds, steady precipitation, smooth air, haze and poor visibility",
          "**Unstable:** cumuliform clouds, showery precipitation, turbulence, good visibility",
          "**Inversion** (temperature rising with height) = very stable; traps haze and fog, can cause wind shear",
          "Warm moist air near the surface + cooling aloft = instability",
          "Estimated cloud base (convective) ≈ **(temp − dewpoint) ÷ 2.5 °C × 1,000 ft** AGL",
        ],
      },
    ],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "FAA-H-8083-25 (PHAK) ch. 12"],
  },

  "IR.I.B.K3b": {
    core: "Wind comes from pressure differences, is bent by the Coriolis force and slowed by friction. Know wind shear and mountain wave hazards.",
    sections: [
      {
        h: "Factors affecting wind",
        b: [
          "**Pressure gradient** drives wind from high to low; tighter isobars = stronger wind",
          "**Coriolis** deflects wind to the right (Northern Hemisphere) — aloft it flows parallel to isobars",
          "**Friction** near the surface slows wind and turns it across isobars toward low pressure",
          "Northern Hemisphere: **clockwise and outward around highs, counterclockwise and inward around lows**",
        ],
      },
      {
        h: "Wind shear",
        b: [
          "Sudden change in wind speed or direction; most dangerous **close to the ground**",
          "Sources: thunderstorms/microbursts, fronts, temperature inversions, mountain terrain, jet stream",
          "Watch for: LLWS in TAFs (WS), PIREPs, LLWAS alerts, large airspeed fluctuations on approach",
        ],
      },
      {
        h: "Mountain wave",
        b: [
          "Strong wind (about **25 kt+**) blowing **perpendicular to a ridge** in stable air",
          "Signs: **lenticular** (standing lens-shaped) clouds, **rotor** clouds, cap clouds — but may be invisible in dry air",
          "Downdrafts on the lee side can exceed the airplane's climb rate; rotors bring severe turbulence",
          "Cross ridges at a **45° angle**, with **3,000–5,000 ft** clearance above the ridge",
        ],
      },
    ],
    examiner: [{ q: "Flying east of the Wasatch with 40 kt westerlies at ridge level — what's your concern?", a: "Mountain wave: strong downdrafts and rotor turbulence on the lee side. I'd plan higher altitudes, a 45° approach to ridges, and check PIREPs and AIRMET Tango." }],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "AIM 7-1"],
  },

  "IR.I.B.K3c": {
    core: "The sun heats the earth and the earth heats the air. Temperature drives stability, fog, icing — and altimeter error in cold weather.",
    sections: [
      {
        h: "Heat exchange",
        b: [
          "**Radiation** (sun to earth; earth cools at night), **conduction** (contact with the surface), **convection** (rising warm air), **advection** (horizontal movement of air)",
          "Clear, calm nights cool the surface fastest — radiation fog and inversions",
          "Different surfaces heat unevenly (pavement vs. water vs. forest) — thermals and turbulence",
        ],
      },
      {
        h: "Temperature and your altimeter",
        b: [
          "**Colder than standard: true altitude is lower than indicated** — \"high to low, look out below\"",
          "**Cold Temperature Airports** (snowflake symbol with a temperature on the approach plate): apply altitude corrections at or below the published temperature",
          "Warmer than standard: true altitude higher than indicated; higher density altitude = worse performance",
        ],
      },
    ],
    examiner: [{ q: "It's −20 °C at an airport with a cold-temperature restriction. What do you do?", a: "Apply the cold-temperature altitude correction to the required segments (using the AIM table/ICAO correction), and tell ATC the corrected altitudes on the intermediate and missed approach segments when required." }],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "AIM 7-3 (Cold Temperature Barometric Altimeter Errors)", "FAA-H-8083-15 (IFH)"],
  },

  "IR.I.B.K3d": {
    core: "Moisture changes state by gaining or releasing heat. When temperature reaches dewpoint you get clouds, fog and precipitation.",
    sections: [
      {
        h: "Moisture",
        b: [
          "**Dewpoint** = temperature at which air becomes saturated",
          "**Small temperature/dewpoint spread** (within about 2 °C / 4 °F) = expect fog or low clouds",
          "Change of state: evaporation, condensation, sublimation, deposition (frost); condensation releases heat and fuels storms",
        ],
      },
      {
        h: "Precipitation",
        b: [
          "Usually needs clouds about **4,000 ft thick** or more for significant precipitation",
          "**Freezing rain** = rain falling from a warm layer into below-freezing air near the surface — severe icing; a warm layer exists above you",
          "**Ice pellets** = freezing rain exists above",
          "**Virga** = precipitation evaporating before reaching the ground (often with downdrafts)",
          "Showers (SH) = unstable air; steady rain = stable air",
        ],
      },
    ],
    examiner: [{ q: "You encounter ice pellets in flight. What does it tell you?", a: "Freezing rain is falling above me from a warmer layer. Climbing into the warm layer, or getting out of the precipitation, can be the escape — tell ATC immediately." }],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "FAA-H-8083-25 (PHAK) ch. 12"],
  },

  "IR.I.B.K3e": {
    core: "Air masses take on the character of where they form; fronts are the boundaries between them, and that's where much of the weather is.",
    sections: [
      {
        h: "Air masses",
        b: ["Classified by source: **continental (c)** dry vs. **maritime (m)** moist; **polar (P)**, **tropical (T)**, **arctic (A)**", "Cold air moving over warm ground becomes unstable; warm air moving over cold ground becomes stable"],
      },
      {
        h: "Fronts",
        b: [
          "**Cold front:** fast, steep; narrow band of **cumuliform** clouds, showers, thunderstorms, **squall lines** ahead; clearing behind",
          "**Warm front:** slow, shallow slope; widespread **stratiform** clouds, **low ceilings, fog**, steady precipitation, possible **freezing rain** — long periods of IFR",
          "**Stationary front:** little movement; weather can persist for days",
          "**Occluded front:** cold front overtakes warm front; combination of both, often with embedded thunderstorms",
          "Frontal passage signs: **temperature/dewpoint change, wind shift (veering in NH), pressure change**",
        ],
      },
    ],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "FAA-H-8083-25 (PHAK) ch. 12"],
  },

  "IR.I.B.K3f": {
    core: "Cloud type tells you the stability of the air and what hazards (turbulence, icing, thunderstorms) to expect.",
    sections: [
      {
        h: "Cloud families",
        b: [
          "**Low** (surface to about 6,500 ft): stratus, stratocumulus, nimbostratus — low ceilings, icing if cold",
          "**Middle** (about 6,500–20,000 ft): altostratus, altocumulus — icing possible",
          "**High** (above about 20,000 ft): cirrus, cirrostratus, cirrocumulus — ice crystals, little icing",
          "**Vertical development:** cumulus, **towering cumulus**, **cumulonimbus** — turbulence, icing, thunderstorms",
        ],
      },
      {
        h: "Clues",
        b: [
          "\"Cumulo-\" = unstable, turbulent; \"strato-\" = stable, smooth, widespread",
          "\"Nimbo-\" / \"-nimbus\" = precipitation",
          "Lenticular = mountain wave; castellanus = mid-level instability, thunderstorms later",
        ],
      },
    ],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)"],
  },

  "IR.I.B.K3g": {
    core: "Turbulence comes from convection, terrain, wind shear, fronts, wakes and the jet stream. Slow down and hold attitude, not altitude.",
    sections: [
      {
        h: "Types",
        b: ["**Convective** (thermals, cumulus)", "**Mechanical** (wind over terrain and buildings; mountain wave)", "**Frontal** and **wind shear**", "**Clear air turbulence (CAT)** near the jet stream", "**Wake turbulence** from other aircraft"],
      },
      {
        h: "Intensity (for PIREPs)",
        b: [
          "**Light:** slight erratic changes; seatbelt slight strain",
          "**Moderate:** changes in altitude/attitude but control maintained; airspeed variations",
          "**Severe:** large abrupt changes; momentary loss of control",
          "**Extreme:** violent; practically impossible to control; structural damage possible",
        ],
      },
      {
        h: "What to do",
        b: ["Slow to **maneuvering speed (VA)** or below (for current weight) or the turbulent-air penetration speed", "**Hold attitude, not altitude**; ask ATC for a block altitude", "Secure loose items and passengers; report a PIREP"],
      },
    ],
    refs: ["AIM 7-1", "FAA-H-8083-28 (Aviation Weather Handbook)"],
  },

  "IR.I.B.K3h": {
    core: "Thunderstorms need moisture, unstable air and a lifting force. Avoid severe storms by at least 20 NM; microbursts can overwhelm any airplane.",
    sections: [
      {
        h: "Thunderstorms",
        b: [
          "Ingredients: **moisture, unstable lapse rate, lifting** (fronts, terrain, heating)",
          "Stages: **cumulus** (updrafts) → **mature** (updrafts + downdrafts, precipitation begins, most intense) → **dissipating** (downdrafts)",
          "Hazards: severe turbulence, icing, hail (even in clear air near the storm), lightning, wind shear, altimeter errors",
          "Avoid severe storms by **at least 20 NM**; don't fly under the anvil; never try to fly through **embedded** storms or squall lines",
          "Datalink radar is for **strategic avoidance**, not for picking a path through cells",
        ],
      },
      {
        h: "Microbursts",
        b: [
          "Small, intense downdraft — about **2.5 mi** across or less, downdrafts up to **6,000 fpm**, usually lasting about **15 minutes**",
          "Sequence on approach: **headwind increase** (airspeed and performance up) → **downdraft** → **tailwind** (sudden airspeed loss)",
          "Escape: **max power**, pitch for best climb (up to stall warning), **don't change configuration** until clear of the shear",
          "Clues: virga, dust rings, LLWAS alerts, heavy rain from convective clouds",
        ],
      },
    ],
    examiner: [{ q: "On a 3-mile final you see a sudden 15-knot airspeed increase, then a strong sink. What's happening and what do you do?", a: "Classic microburst encounter. Go around immediately: max power, pitch up toward the stall warning as needed, keep configuration until clear, and report it." }],
    refs: ["AIM 7-1", "AC 00-24 (Thunderstorms)", "FAA-H-8083-28 (Aviation Weather Handbook)"],
  },

  "IR.I.B.K3i": {
    core: "Structural icing needs visible moisture and an airframe at or below 0 °C. Know the types, where they form, and how to get out.",
    sections: [
      {
        h: "Types",
        b: [
          "**Rime:** small droplets freeze on contact; rough, milky; stratiform clouds",
          "**Clear:** large droplets flow back before freezing; smooth, heavy, hardest to remove — cumuliform clouds and **freezing rain**",
          "**Mixed:** both",
          "**Supercooled large droplets (SLD)** / freezing rain/drizzle — can build ice beyond the protected areas",
          "Most structural icing occurs from **0 °C to about −10 °C**",
        ],
      },
      {
        h: "Freezing level information",
        b: ["Winds/temps aloft (FB), GFA freezing level, **AIRMET Zulu**, **CIP/FIP** (current/forecast icing products), PIREPs", "Look for a way out: a warm layer below, tops you can climb above, or a clear area"],
      },
      {
        h: "If you pick up ice",
        b: [
          "Tell ATC and **change altitude** (to above-freezing air, or out of the cloud) or **turn around**",
          "Use any anti-ice/deice equipment; pitot heat on",
          "Expect higher stall speed and more drag; fly the approach faster, avoid full flaps (POH), don't use the autopilot to hide trends",
          "Without **FIKI** approval, avoid known or forecast icing (most POH/AFM limitations prohibit it)",
        ],
      },
    ],
    examiner: [{ q: "You're at 8,000 ft in cloud, OAT −4 °C, and see ice forming on the wing. What do you do?", a: "Tell ATC I'm picking up ice and request a lower altitude where the temperature is above freezing (or a climb out of the tops if close), or a turn back. Pitot heat on, fly faster on approach, and don't wait for it to get worse." }],
    refs: ["AIM 7-1", "AC 91-74 (Pilot Guide: Flight in Icing Conditions)", "FAA-H-8083-28 (Aviation Weather Handbook)"],
  },

  "IR.I.B.K3j": {
    core: "Fog is a cloud on the ground that forms when the air cools to its dewpoint (or moisture is added). It can drop an airport below minimums fast.",
    sections: [
      {
        h: "Types",
        b: [
          "**Radiation fog:** clear, calm nights; low-lying areas; burns off after sunrise",
          "**Advection fog:** moist air moving over a cooler surface (coasts); can persist with wind up to about 15 kt",
          "**Upslope fog:** moist, stable air pushed up rising terrain",
          "**Precipitation-induced fog:** warm rain falling through cool air — often with warm fronts",
          "**Steam fog:** cold air over warmer water",
          "**Ice fog:** very cold temperatures; ice crystals",
        ],
      },
      {
        h: "Watch for",
        b: [
          "Temperature/dewpoint spread narrowing toward evening",
          "METAR: **BR (mist)** = visibility 5/8 to 6 SM; **FG (fog)** = visibility less than 5/8 SM",
          "Have an alternate that's not likely to fog in at the same time",
        ],
      },
    ],
    refs: ["FAA-H-8083-28 (Aviation Weather Handbook)", "FAA-H-8083-25 (PHAK) ch. 12"],
  },

  "IR.I.B.K3k": {
    core: "Frost on the wings — even a thin layer — can keep an airplane from flying. Take off only with a clean wing.",
    sections: [
      {
        h: "Formation",
        b: ["Forms by **deposition** when the surface cools below a dewpoint that's below freezing — clear nights", "Can form on the airframe in flight when descending from cold altitudes into moist air"],
      },
      {
        h: "Effect",
        b: [
          "Frost as rough as medium sandpaper can cut lift by up to about **30%** and increase drag by about **40%** (AC 20-117)",
          "Raises stall speed and lengthens the takeoff roll — the airplane may not lift off at normal speed",
          "**Clean aircraft concept:** remove all frost, ice and snow from wings, tail and control surfaces before takeoff",
        ],
      },
    ],
    refs: ["AC 20-117", "FAA-H-8083-25 (PHAK)", "FAA-H-8083-28 (Aviation Weather Handbook)"],
  },

  "IR.I.B.K3l": {
    core: "Haze, smoke, dust, sand and volcanic ash reduce visibility — and slant-range visibility in flight is often worse than surface reports.",
    sections: [
      {
        h: "Types (METAR codes)",
        b: ["**HZ** haze (stable air, inversions)", "**FU** smoke (wildfires — common in the West in summer)", "**DU** dust, **SA** sand, **VA** volcanic ash", "**BR** mist, **FG** fog"],
      },
      {
        h: "Hazards",
        b: [
          "Slant-range visibility on approach can be much worse than the reported surface visibility, especially into the sun",
          "Smoke and haze can hide terrain and other traffic; plan as if IFR",
          "**Volcanic ash:** avoid entirely; it can cause engine flameout, abrade windshields and clog pitot-static systems. Report it immediately",
        ],
      },
    ],
    refs: ["AIM 7-1", "FAA-H-8083-28 (Aviation Weather Handbook)"],
  },

  "IR.I.B.K4": {
    core: "Datalink weather (FIS-B, SiriusXM) is great for strategic planning but it's delayed — never use it to pick a path through storms.",
    sections: [
      {
        h: "Sources",
        b: [
          "**FIS-B** via **ADS-B In** (978 MHz UAT): free; needs line of sight to ground stations",
          "Products: NEXRAD (regional and CONUS), METARs, TAFs, PIREPs, AIRMETs/SIGMETs, winds aloft, TFRs, NOTAMs, SUA status",
          "**SiriusXM** satellite weather: subscription; works at low altitude and in remote areas",
        ],
      },
      {
        h: "Limitations",
        b: [
          "**Latency:** the NEXRAD time stamp is when the mosaic was made — the actual data can be older (up to ~15–20 minutes)",
          "Storms can move and build a lot in that time",
          "Coverage gaps (FIS-B at low altitude, in mountains)",
          "**Strategic, not tactical:** use it to stay well clear and plan diversions",
          "Know how your display shows age of data and failures",
        ],
      },
    ],
    examiner: [{ q: "Your ADS-B NEXRAD shows a gap between two cells. Do you fly through it?", a: "No. Datalink radar is delayed by several minutes, so the gap may have closed. I'd deviate around the whole area by at least 20 NM and ask ATC what they're seeing." }],
    refs: ["AC 00-63 (Use of Cockpit Displays of Digital Weather and Aeronautical Information)", "AIM 7-1"],
  },

  "IR.I.B.R1a": {
    core: "Divert early when the plan no longer works — weather, fuel, equipment, or you.",
    sections: [
      {
        h: "When diverting is prudent",
        b: [
          "Destination or route weather **below minimums or personal minimums**, or trending that way",
          "**Fuel** less than planned (stronger headwinds, delays, holding)",
          "**Ice** accumulating, or turbulence/convection building ahead",
          "**Equipment failure** (vacuum, alternator, nav receiver, autopilot)",
          "**Pilot** fatigue, illness, or rising workload; passenger problems",
        ],
      },
      {
        h: "How to make it easy",
        b: ["Identify **outs** along the route before departure", "Set decision points (\"if X by here, then Y\")", "Divert sooner rather than later — and tell ATC early"],
      },
    ],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)", "AC 91-92"],
  },

  "IR.I.B.R1b": {
    core: "Personal weather minimums are your go/no-go limits for ceiling, visibility, wind, icing and convective weather — set before the flight.",
    sections: [
      {
        h: "What to include",
        b: [
          "Ceiling and visibility for **departure, approach and alternate**",
          "Crosswind and gusts",
          "Icing and thunderstorm limits",
          "Night and mountain-terrain adjustments",
          "Margins above legal minimums that shrink only as experience grows",
        ],
      },
      {
        h: "Using them",
        b: ["Compare the forecast to them; if the forecast is close, plan as if it will be worse", "Re-check at each decision point en route"],
      },
    ],
    refs: ["FAA Personal Minimums Checklist", "FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.I.B.R1c": {
    core: "Known or forecast icing, turbulence and convective weather are the big no-go and divert triggers for light IFR aircraft.",
    sections: [
      {
        h: "Icing",
        b: [
          "Check AIRMET Zulu, CIP/FIP, freezing levels, tops and PIREPs",
          "Without FIKI: no flight into known or forecast icing (POH/AFM limitations)",
          "Even with FIKI: avoid freezing rain and SLD",
          "Have an out — warm air below or tops below your service ceiling",
        ],
      },
      {
        h: "Turbulence and convection",
        b: [
          "AIRMET Tango, SIGMETs, Convective SIGMETs, convective outlook, PIREPs",
          "Embedded thunderstorms in IMC = no-go for a light airplane without radar",
          "Moderate or worse turbulence with passengers = consider waiting or changing altitude",
        ],
      },
    ],
    refs: ["AC 91-74", "AIM 7-1", "FAA-H-8083-28"],
  },

  "IR.I.B.R2a": {
    core: "Onboard weather equipment helps you avoid weather, but each type has limits — none of it makes penetrating storms safe.",
    sections: [
      {
        h: "Equipment and limits",
        b: [
          "**Airborne radar:** shows precipitation, not turbulence; **attenuation** — heavy rain can hide storms behind it; needs proper tilt and gain",
          "**Lightning detectors** (Stormscope, Strikefinder): show electrical activity; range and bearing can be inaccurate; no lightning doesn't mean no storm",
          "**Datalink weather** (FIS-B, SiriusXM): delayed, not real-time",
          "**OAT gauge and ice detectors:** know your freezing level, but the OAT can lag",
        ],
      },
    ],
    refs: ["AC 00-63", "AC 00-24", "AIM 7-1"],
  },

  "IR.I.B.R2b": {
    core: "Reports are snapshots and forecasts are educated guesses — plan for the weather to be worse than forecast.",
    sections: [
      {
        h: "Limitations",
        b: [
          "**METAR:** one point at one time; may be an hour old",
          "**ASOS/AWOS:** sensors look straight up; can miss a ceiling forming nearby; may not report all weather",
          "**TAF:** only 5 SM around the airport; accuracy drops with time",
          "**GFA/AIRMETs:** cover large areas; actual conditions vary within them",
          "**PIREPs:** subjective and aircraft-dependent; old PIREPs lose value fast",
        ],
      },
      {
        h: "Mitigation",
        b: ["Cross-check several products and look at the **trend**", "Get updates en route", "Build margins into minimums and fuel"],
      },
    ],
    refs: ["AC 91-92", "FAA-H-8083-28"],
  },

  "IR.I.B.R2c": {
    core: "In flight, get weather from ATC, Flight Service, ATIS/ASOS/AWOS, datalink and other pilots — and know each one's limits.",
    sections: [
      {
        h: "Sources",
        b: [
          "**Flight Service** on 122.2 or local RCO frequencies (Flight Watch / EFAS 122.0 was discontinued in 2015)",
          "**ATC:** provides weather and radar precipitation info when workload permits; ATC radar shows precipitation intensity, not turbulence",
          "**ATIS, ASOS, AWOS** at nearby airports",
          "**FIS-B / SiriusXM** datalink",
          "**PIREPs** from other pilots on frequency",
        ],
      },
      {
        h: "Limitations",
        b: ["ATC's primary job is separation — weather help is \"workload permitting\"", "Datalink is delayed; FSS needs radio coverage; ASOS is one point"],
      },
    ],
    refs: ["AIM 7-1", "AIM 4-1"],
  },

  "IR.I.B.S1": {
    core: "Get a complete briefing — adverse conditions first — that covers departure, route, destination and alternate.",
    sections: [
      {
        h: "Standard briefing contents",
        b: [
          "**Adverse conditions** (and \"VFR flight not recommended\")",
          "**Synopsis**",
          "**Current conditions**",
          "**En route forecast**",
          "**Destination forecast**",
          "**Winds and temperatures aloft**",
          "**NOTAMs**",
          "**ATC delays** and other information",
        ],
      },
      {
        h: "On the checkride",
        b: ["Be ready to show the products you used and explain what they mean for the flight", "Tie each hazard to a decision"],
      },
    ],
    refs: ["AIM 7-1", "AC 91-92"],
  },

  "IR.I.B.S2": {
    core: "Pick at least three weather conditions (K3a–K3l) the examiner gives you, and explain what each means for your flight.",
    sections: [
      {
        h: "How to answer",
        b: [
          "**Identify** the condition from the products (e.g., freezing level 6,000 ft, moisture in the clouds)",
          "**Explain the hazard** (structural icing between 6,000 and the tops)",
          "**Give the decision or mitigation** (file at 5,000; tops are 9,000 — no climb on top; abort if picking up ice)",
        ],
      },
      { h: "Good candidates to prepare", b: ["Icing and freezing levels", "Fog at destination", "Thunderstorms and fronts", "Mountain wave and winds", "Stability"] },
    ],
    refs: ["ACS IR.I.B.K3", "FAA-H-8083-28"],
  },

  "IR.I.B.S3": {
    core: "Put all the weather together and make a clear go/no-go decision — and explain why.",
    sections: [
      {
        h: "Process",
        b: [
          "Compare to **legal minimums** and **personal minimums**",
          "Check **hazards**: icing, convection, turbulence, wind",
          "Confirm **outs** and alternate",
          "Decide **go, no-go, or delay** — and set en-route decision points",
        ],
      },
      { h: "Examiner wants", b: ["A decision, not just a list of facts", "Willingness to say no-go when it's warranted"] },
    ],
    refs: ["FAA-H-8083-2", "AC 91-92"],
  },

  "IR.I.B.S4": {
    core: "Use the 1-2-3 rule to decide whether you need an alternate, then check the alternate meets 600-2 / 800-2 or its published alternate minimums.",
    sections: [
      {
        h: "Is an alternate required? (91.169)",
        b: [
          "Required **unless**: the destination has a standard instrument approach, **and** from **1 hour before to 1 hour after ETA**, forecast ceiling **≥ 2,000 ft above airport elevation** and visibility **≥ 3 SM**",
        ],
      },
      {
        h: "Alternate weather minimums (at ETA)",
        b: [
          "**Precision approach:** ceiling **600 ft**, visibility **2 SM**",
          "**Non-precision:** ceiling **800 ft**, visibility **2 SM**",
          "**No instrument approach:** ceiling and visibility allow descent from the MEA, approach and landing under **basic VFR**",
          "**Non-standard alternate minimums** shown by the **A (triangle)** symbol; **A NA** = not authorized as an alternate",
        ],
      },
      {
        h: "GPS and alternates (AIM 1-1-17, 1-1-18)",
        b: [
          "**Non-WAAS GPS:** can plan a GPS approach at the destination **or** the alternate, **not both**",
          "**WAAS:** can plan GPS approaches at both; at the alternate, plan using **LNAV or circling** minimums (non-precision)",
        ],
      },
      { h: "Fuel (91.167)", b: ["Enough to reach destination, fly to the alternate, then **45 minutes** at normal cruise"] },
    ],
    mnemonic: { name: "1-2-3 rule", lines: ["1 hour before to 1 hour after ETA", "2,000 ft ceiling", "3 SM visibility"] },
    examiner: [
      { q: "Destination forecast at ETA ±1 hr: OVC025, 4 SM. Need an alternate?", a: "No — 2,500 and 4 meets the 1-2-3 rule (assuming the destination has an instrument approach)." },
      { q: "Your alternate only has an RNAV (GPS) approach and you have a non-WAAS GPS. Destination also has only GPS approaches. Legal?", a: "No. With non-WAAS GPS I can't plan GPS approaches at both the destination and the alternate. I need an alternate with a non-GPS approach, or WAAS." },
    ],
    refs: ["14 CFR 91.167", "14 CFR 91.169", "AIM 1-1-17", "AIM 1-1-18", "TPP Alternate Minimums section"],
  },
};
