import type { ContentMap } from "./types";

// Area I, Task C — Cross-Country Flight Planning
export const area1TaskC: ContentMap = {
  "IR.I.C.K1a": {
    core: "Plan around the navigation you'll actually have: VORs and their service volumes, GPS (and its NOTAMs), and the airway structure.",
    sections: [
      {
        h: "Navigation facilities",
        b: [
          "**VOR** service volumes (Terminal, Low, High); check the Chart Supplement for restrictions and unusable radials",
          "**VOR MON** (Minimum Operational Network): many VORs are being shut down; a MON airport with a non-GPS approach is kept within about 100 NM — your GPS-failure backup",
          "**GPS/RNAV:** check database currency, **GPS and WAAS NOTAMs**, and RAIM for non-WAAS units",
          "**NDB/DME/ILS/LOC** for approaches and fixes",
        ],
      },
      {
        h: "Route structure",
        b: [
          "**Victor airways** (VOR, below 18,000 MSL) and **T-routes** (RNAV, low altitude)",
          "**Jet routes** (FL180–FL450) and **Q-routes** (RNAV, high altitude)",
          "**Direct** routing with GPS (RNAV) — ATC may assign an airway route anyway",
        ],
      },
    ],
    examiner: [{ q: "Your GPS fails en route. How do you get to an airport?", a: "Revert to VOR navigation on airways, tell ATC my equipment change (91.187), and plan to the nearest airport with an ILS or VOR approach — the VOR MON is designed to keep one within reach." }],
    refs: ["AIM 1-1", "AIM 5-3", "Chart Supplement", "FAA-H-8083-15 (IFH) ch. 9"],
  },

  "IR.I.C.K1b": {
    core: "Know which special use airspace blocks your route, when it's active, and how ATC handles IFR traffic around it.",
    sections: [
      {
        h: "Types and IFR handling",
        b: [
          "**Prohibited:** no flight, ever (e.g., P-56 Washington)",
          "**Restricted:** when active, ATC won't clear you through — expect a reroute. When released to the controlling agency (inactive), ATC can clear you through",
          "**MOA:** IFR traffic may be cleared through **if ATC can provide IFR separation**; otherwise rerouted",
          "**Warning, Alert, Controlled Firing Areas**",
          "**TFRs** (via FDC NOTAMs) — check every flight",
          "Find times and status on the enroute chart, Chart Supplement and **FIS-B / SUA status** tools",
        ],
      },
    ],
    refs: ["AIM 3-4", "14 CFR 91.133", "14 CFR 91.137–91.145", "IFR Enroute Charts"],
  },

  "IR.I.C.K1c": {
    core: "Preferred routes are the routes ATC expects between busy airports — filing them reduces surprise reroutes.",
    sections: [
      {
        h: "Where to find them",
        b: [
          "**Chart Supplement:** Preferred IFR Routes",
          "**Tower Enroute Control (TEC)** routes: short IFR flights that stay within approach control airspace (e.g., in busy metro areas)",
          "**EFB route tools** showing recently cleared routes",
        ],
      },
      { h: "Why it matters", b: ["File what you'll likely get, so you're not reprogramming at the hold-short line", "Still expect \"cleared as filed\" to change — be ready to copy a full route clearance"] },
    ],
    refs: ["Chart Supplement", "AIM 5-1"],
  },

  "IR.I.C.K1d": {
    core: "Check that your destination and alternate have usable approaches, runways, lighting, fuel and services — and no NOTAMs that break your plan.",
    sections: [
      {
        h: "Destination and alternate checks",
        b: [
          "Instrument approaches available and their **minimums** for your approach category",
          "**Alternate minimums** (A symbol) and whether the airport is **A NA**",
          "**Takeoff minimums and obstacle departure procedures** (T symbol) for departure",
          "Runway length, lighting (pilot-controlled?), fuel, services, operating hours",
          "**NOTAMs:** closed runways, out-of-service lights or navaids, GPS outages",
          "An alternate in a **different weather pattern** — not another airport fogged in by the same system",
        ],
      },
    ],
    refs: ["14 CFR 91.169", "TPP", "Chart Supplement", "AIM 5-1"],
  },

  "IR.I.C.K1e": [
    {
      title: "Which IFR enroute charts are there, and what else is on them?",
      core: "Low (below 18,000 MSL), High (FL180 and up) and Area charts, on a 56-day cycle. Look for changeover points, reporting points and frequencies.",
      sections: [
        {
          b: [
            "**IFR Enroute Low** (below 18,000 MSL), **High** (FL180 and above), **Area** charts for busy terminals",
            "Updated on a **56-day** cycle. Use current charts",
            "**Changeover points** (where to switch VORs)",
            "**Compulsory reporting points** (solid triangle) vs. on-request (open triangle)",
            "MEA gaps, airspace, ARTCC frequencies",
          ],
        },
      ],
      refs: ["AIM 5-3", "Aeronautical Chart User's Guide"],
    },
    {
      title: "MEA, MOCA, OROCA: what does each guarantee?",
      core: "MEA: obstacle clearance and nav signal. MOCA: obstacle clearance, signal only within 22 NM of the VOR. OROCA: obstacle clearance off-route, no nav guarantee.",
      sections: [
        {
          b: [
            "**MEA:** obstacle clearance **and** navigation signal coverage for the whole segment",
            "**MOCA:** obstacle clearance for the segment; nav signal guaranteed only within **22 NM** of the VOR",
            "**OROCA:** off-route obstruction clearance: 1,000 ft (2,000 ft in mountains); no nav guarantee",
            "**GNSS MEA:** lower MEA for GPS (shown with a G)",
          ],
        },
      ],
      examiner: [{ q: "When can you descend to the MOCA instead of the MEA?", a: "When I'm within 22 NM of the VOR, since the MOCA guarantees obstacle clearance but only guarantees the nav signal within 22 NM. ATC must approve the altitude." }],
      refs: ["14 CFR 91.177", "AIM 5-3", "FAA-H-8083-16 (Instrument Procedures Handbook)"],
    },
    {
      title: "What are the MRA, MCA and MAA?",
      core: "MRA: lowest altitude to identify an intersection. MCA: cross the fix at or above it before a higher MEA. MAA: highest usable altitude on the airway.",
      sections: [
        {
          b: [
            "**MRA:** lowest altitude to identify an intersection",
            "**MCA:** cross the fix at or above it when heading to a higher MEA",
            "**MAA:** highest usable altitude (signal interference above)",
          ],
        },
      ],
      refs: ["AIM 5-3", "FAA-H-8083-16 (Instrument Procedures Handbook)"],
    },
  ],

  "IR.I.C.K1f": {
    core: "The Chart Supplement is the airport and facility directory: runways, lighting, frequencies, services, remarks and special notices.",
    sections: [
      {
        h: "What's in it",
        b: [
          "Airport data: runways, elevation, lighting, **pilot-controlled lighting**, fuel, hours",
          "Communications: tower, ground, ATIS, approach, clearance delivery, **FSS/RCO**",
          "**Remarks:** wildlife, noise abatement, unusable runways, special procedures",
          "**VOR receiver check points**",
          "Preferred IFR routes, special notices, ARTCC information",
          "Updated every **56 days**",
        ],
      },
    ],
    refs: ["Chart Supplement", "14 CFR 91.103"],
  },

  "IR.I.C.K1g": {
    core: "NOTAMs tell you what's changed or broken — runways, lights, navaids, GPS, TFRs and procedures. Checking them is part of 91.103.",
    sections: [
      {
        h: "Types",
        b: [
          "**NOTAM (D):** airports, runways, taxiways, lighting, navaids — distributed nationally",
          "**FDC NOTAMs:** regulatory — **TFRs**, changes to instrument approaches and charts, airway changes",
          "**Pointer, SAA** (special activity airspace), **military** and international NOTAMs",
          "**GPS and WAAS NOTAMs** — check for outages affecting your approach",
          "**FICON** (field condition) reports — snow, ice, braking action",
        ],
      },
      {
        h: "Where",
        b: ["Flight Service briefing, **1800wxbrief.com**, FAA NOTAM Search, EFB apps", "Ask for NOTAMs on any airport you might divert to, not just the destination"],
      },
    ],
    refs: ["14 CFR 91.103", "AIM 5-1-3"],
  },

  "IR.I.C.K1h": {
    core: "The Terminal Procedures Publication has the approach plates, departure and arrival procedures, airport diagrams and the takeoff and alternate minimums sections.",
    sections: [
      {
        h: "What's in the TPP",
        b: [
          "**Instrument Approach Procedures (IAPs)**",
          "**Departure procedures:** Obstacle DPs (ODPs) and SIDs",
          "**STARs**",
          "**Airport diagrams** and hot spots",
          "**T (triangle)** — non-standard **takeoff minimums and ODPs** section",
          "**A (triangle)** — non-standard **alternate minimums** section; **A NA** = not authorized",
          "Inoperative components table, rate-of-descent table, LAHSO, legend",
        ],
      },
      { h: "Currency", b: ["Charts change on a regular cycle — check the effective dates and any chart NOTAMs"] },
    ],
    refs: ["TPP", "FAA-H-8083-16 (Instrument Procedures Handbook)"],
  },

  "IR.I.C.K2": {
    core: "Pick an altitude that clears terrain, follows the IFR altitude rules, makes good use of wind, keeps you out of icing and gives you options if the engine quits.",
    sections: [
      {
        h: "Rules",
        b: [
          "**Minimum altitudes (91.177):** published MEA etc.; otherwise **2,000 ft** above the highest obstacle within **4 NM** in mountainous areas, **1,000 ft** elsewhere",
          "**IFR cruising altitudes (91.179):** in controlled airspace, as assigned by ATC. In uncontrolled airspace below 18,000 MSL: magnetic course **0–179° = odd thousands**, **180–359° = even thousands**",
          "**Oxygen (91.211):** crew above **12,500 to 14,000 ft MSL** for more than **30 minutes**; crew at all times above **14,000**; passengers must be **offered** oxygen above **15,000**",
        ],
      },
      {
        h: "Practical factors",
        b: [
          "**Terrain and obstacles** — and glide distance to an airport or landable terrain (single-engine at night over mountains)",
          "**Wind** — headwinds usually weaker lower; tailwinds stronger higher",
          "**Freezing level and cloud tops** — stay below the freezing level in clouds, or above the tops",
          "**Turbulence**, airplane **performance** and **radio/radar coverage**",
        ],
      },
    ],
    mnemonic: { name: "Cruising altitudes", lines: ["East is odd (0–179°)", "West is even (180–359°)"] },
    examiner: [{ q: "Magnetic course 095° in uncontrolled airspace, IFR. Which altitude: 6,000 or 7,000?", a: "7,000 — odd thousands for 0 to 179° (91.179)." }],
    refs: ["14 CFR 91.177", "14 CFR 91.179", "14 CFR 91.211"],
  },

  "IR.I.C.K3a": {
    core: "Work out true airspeed, wind correction, groundspeed, time, and climb and descent planning — and sanity-check what the app gives you.",
    sections: [
      {
        h: "Calculations",
        b: [
          "**TAS** from indicated airspeed, pressure altitude and temperature (E6B or POH)",
          "**Wind correction angle and groundspeed** from winds aloft",
          "**Time** = distance ÷ groundspeed",
          "**Heading** = course ± wind correction ± variation/deviation",
        ],
      },
      {
        h: "Rules of thumb",
        b: [
          "**3° descent:** about **300 ft per NM**, or **groundspeed × 5** = fpm (120 kt → ~600 fpm)",
          "Descent planning: about **3 NM per 1,000 ft** to lose",
          "Climb: time and fuel to climb from the POH tables",
        ],
      },
    ],
    refs: ["FAA-H-8083-25 (PHAK) ch. 16", "POH/AFM"],
  },

  "IR.I.C.K3b": {
    core: "Flight plan times and ATC times are in UTC (Z). Convert local time correctly — and know when daylight saving changes it.",
    sections: [
      {
        h: "Conversions (Mountain time)",
        b: ["**MST = UTC − 7** (add 7 hours to local to get Z)", "**MDT = UTC − 6** (add 6 hours)", "ETA = departure time + time en route (including climb, descent and expected vectors)"],
      },
      { h: "Use", b: ["Proposed departure time in the flight plan is UTC", "TAF and METAR times are Z — convert before comparing to your ETA"] },
    ],
    examiner: [{ q: "You depart Moab at 3:30 pm local in January. What's that in Zulu?", a: "Mountain Standard Time is UTC−7, so 1530 + 7 = 2230Z." }],
    refs: ["AIM 5-1", "FAA-H-8083-25 (PHAK)"],
  },

  "IR.I.C.K3c": {
    core: "IFR fuel = enough to reach the destination, fly to the alternate (if required), then 45 minutes at normal cruise (91.167).",
    sections: [
      {
        h: "IFR fuel requirement (91.167)",
        b: [
          "Complete the flight to the first airport of intended landing",
          "Fly from that airport to the **alternate** (if one is required)",
          "Then fly **45 minutes** at normal cruising speed",
          "No alternate required → destination + 45 minutes",
        ],
      },
      {
        h: "What to include in the calculation",
        b: ["Taxi and runup, climb fuel, cruise, descent", "Approach and **missed approach** at the destination", "Expected vectors, holding and reroutes", "Only **usable** fuel counts; build a personal reserve (many use **1 hour**)"],
      },
    ],
    examiner: [{ q: "VFR day reserve is 30 minutes. Why is IFR 45 plus an alternate?", a: "Because IFR flights face more delays, holding, missed approaches and diversions when weather is poor — the rule assumes you might not land where you planned." }],
    refs: ["14 CFR 91.167", "14 CFR 91.169"],
  },

  "IR.I.C.K4": [
    {
      title: "How and when do you file an IFR flight plan?",
      core: "In the ICAO format (FAA Form 7233-4), at least 30 minutes before departure.",
      sections: [
        {
          b: [
            "ICAO format is required for flight plans filed through Flight Service or FAA-contracted filing services (most EFBs)",
            "File at least **30 minutes** before departure",
          ],
        },
      ],
      refs: ["AIM 5-1-8", "AIM Appendix 4 (FAA Form 7233-4)"],
    },
    {
      title: "What goes in the main boxes of the ICAO flight plan?",
      core: "Aircraft ID and flight rules, aircraft type, departure and time, speed, altitude and route, destination, time enroute and alternate, then fuel and people on board.",
      sections: [
        {
          b: [
            "**7** Aircraft ID · **8** Flight rules (I = IFR) and type of flight (G = general aviation)",
            "**9** Number, aircraft type, wake turbulence category (L/M/H)",
            "**13** Departure airport and time (UTC)",
            "**15** Cruising speed (N0140 = 140 kt TAS), level (A080 = 8,000 ft), **route**",
            "**16** Destination, total EET (hhmm), **alternate**",
            "**18** Other info: PBN/ codes, NAV/, REG/, DOF/, RMK/",
            "**19** Endurance (fuel on board as time), persons on board, emergency/survival equipment, aircraft color, pilot",
          ],
        },
      ],
      refs: ["AIM Appendix 4 (FAA Form 7233-4)"],
    },
    {
      title: "What do the equipment codes in boxes 10a and 10b mean?",
      core: "10a is nav/comm equipment (S, G, R, B…). 10b is surveillance: transponder and ADS-B. File only what's installed and working.",
      sections: [
        {
          b: [
            "**10a** Equipment: e.g., **S** (standard VHF/VOR/ILS), **G** (GNSS), **R** (PBN approved), **B** (LPV)",
            "**10b** Surveillance: e.g., **C** (Mode C), **S** (Mode S), **U1/U2** (UAT ADS-B Out / Out+In), **B1/B2** (1090ES)",
          ],
        },
      ],
      examiner: [{ q: "Why does the equipment code matter?", a: "It tells ATC what routes and approaches I can fly, for example whether I can be cleared direct, on T-routes, or on RNAV procedures. File only what's installed and working." }],
      refs: ["AIM Appendix 4 (FAA Form 7233-4)"],
    },
  ],

  "IR.I.C.K5": {
    core: "Activate by getting an IFR clearance (from a tower, by phone, or in the air); close at a towered airport automatically, or by canceling with ATC elsewhere.",
    sections: [
      {
        h: "Activating",
        b: [
          "**Towered airport:** clearance from clearance delivery or ground (or a pre-departure clearance)",
          "**Non-towered airport:** get the clearance by phone (ATC/Flight Service) or radio/RCO. Expect a **clearance void time**, **hold for release**, or **release time**",
          "If not off by the void time, tell ATC as soon as possible and **no later than 30 minutes** after the void time",
          "**Class G:** IFR doesn't need a clearance until entering controlled airspace; or depart VFR (in VMC) and pick up the clearance in the air",
        ],
      },
      {
        h: "Closing",
        b: [
          "**Towered airport:** closed automatically on landing",
          "**Non-towered airport:** cancel with ATC in the air (only in VFR conditions, outside Class A) or by phone/radio right after landing",
          "If you don't close it, search and rescue procedures start",
        ],
      },
    ],
    examiner: [{ q: "You're cleared out of a non-towered field with a void time of 1530Z. At 1535Z you're still on the ground. What do you do?", a: "The clearance is void. I must not depart IFR on it, and I must tell ATC as soon as possible (no later than 30 minutes after the void time) that I didn't depart, then get a new clearance." }],
    refs: ["AIM 5-2-7", "AIM 5-1 (Canceling IFR Flight Plan)", "14 CFR 91.173"],
  },

  "IR.I.C.R1": {
    core: "The pilot is often the weakest link: check your fitness, proficiency and experience against the flight using IMSAFE and PAVE.",
    sections: [
      {
        h: "Assess",
        b: ["**IMSAFE** — illness, medication, stress, alcohol, fatigue, emotion", "Recent IFR experience vs. **personal minimums**", "Familiarity with the airplane, avionics, route and airports", "Workload for single-pilot IFR"],
      },
      { h: "Mitigate", b: ["Fly with a CFII or safety pilot", "Delay, change route, raise minimums", "Use the autopilot to cut workload"] },
    ],
    mnemonic: { name: "PAVE", lines: ["Pilot", "Aircraft", "enVironment", "External pressures"] },
    refs: ["FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.I.C.R2": {
    core: "Is the airplane legal, equipped and capable for this IFR trip — including performance, fuel range and equipment that might be inoperative?",
    sections: [
      {
        h: "Check",
        b: [
          "Airworthiness and inspections — annual, 100-hour (if required), **91.411, 91.413**, VOR check, ELT, ADs",
          "IFR equipment (91.205(d)) and nav equipment for the route and approaches",
          "**Inoperative equipment** (91.213) — can it be deferred? Is it needed for IFR?",
          "Performance: climb over terrain, weight and balance, density altitude",
          "Fuel range with reserves; deicing capability (or none)",
        ],
      },
    ],
    refs: ["14 CFR 91.205", "14 CFR 91.213", "14 CFR 91.411", "14 CFR 91.413", "FAA-H-8083-2"],
  },

  "IR.I.C.R3": {
    core: "The environment includes weather, airports, airspace, terrain, obstacles and night — each can turn a routine IFR trip into a high-risk one.",
    sections: [
      {
        h: "Consider",
        b: [
          "**Weather:** icing, convection, turbulence, low ceilings, winds",
          "**Airports:** approach types and minimums, runway length, lighting, NOTAMs",
          "**Airspace:** SUA, TFRs, busy terminal areas",
          "**Terrain and obstacles:** MEAs, ODPs, mountain flying",
          "**Night:** fewer visual cues and outs",
        ],
      },
    ],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.I.C.R4": {
    core: "External pressures — schedules, passengers, cost, \"get-there-itis\" — push pilots past good judgment. Plan for them before they show up.",
    sections: [
      {
        h: "Examples",
        b: ["A meeting or event at the destination", "Passengers who expect to get there", "Rental return times and costs", "Not wanting to look like you can't do it"],
      },
      {
        h: "Mitigation",
        b: ["Tell passengers ahead of time the flight may be delayed or canceled", "Have a **plan B** (airline, car, hotel)", "Build schedule slack", "Decide go/no-go criteria in advance"],
      },
    ],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)", "FAA-H-8083-25 (PHAK) ch. 2"],
  },

  "IR.I.C.R5": {
    core: "ATC separates IFR traffic but has limits — radar and radio gaps, workload, and it can't see icing or turbulence. You're still PIC.",
    sections: [
      {
        h: "Limitations",
        b: [
          "**Radar and radio coverage gaps**, especially at low altitude in mountainous terrain",
          "**Class G:** no ATC separation",
          "**Workload** — weather info and extra services are \"workload permitting\"",
          "ATC radar shows **precipitation**, not turbulence or icing",
          "In **VMC on an IFR flight plan you must still see and avoid** (91.113(b))",
          "ATC may not catch every terrain conflict — know your MEAs and MVAs; once you're off a vector, terrain clearance is yours",
        ],
      },
    ],
    refs: ["14 CFR 91.3", "14 CFR 91.113(b)", "AIM 4-1", "AIM 5-5"],
  },

  "IR.I.C.R6": {
    core: "EFBs and planning apps are powerful but can be wrong, out of date, or fail. Verify the route and keep a backup.",
    sections: [
      {
        h: "Limitations",
        b: [
          "**Out-of-date databases** or charts",
          "**Auto-routing** that ignores terrain, SUA or the route ATC will actually assign",
          "**Aircraft performance profiles** that don't match your airplane",
          "**Data entry errors** (wrong fix, wrong altitude)",
          "**Device failure** — battery, overheating, GPS loss",
        ],
      },
      { h: "Mitigation", b: ["Review the route yourself against the enroute chart and MEAs", "Carry a second device or paper backup and charge everything", "Keep databases current"] },
    ],
    refs: ["AC 120-76 (EFB guidance)", "FAA-H-8083-2"],
  },

  "IR.I.C.R7": {
    core: "Plan more than the legal minimum, track fuel in flight, and know when to declare minimum fuel or an emergency.",
    sections: [
      {
        h: "Planning",
        b: ["91.167 legal minimum + personal reserve (e.g., land with **1 hour**)", "Plan for vectors, holding and a missed approach", "Verify fuel visually; fuel gauges can be inaccurate"],
      },
      {
        h: "In flight",
        b: [
          "Check burn and groundspeed against the plan; re-plan if behind",
          "**\"Minimum fuel\"** = advisory to ATC that you can't accept undue delay — **not** an emergency",
          "If fuel will put you below a safe reserve, **declare an emergency** (\"MAYDAY, fuel\")",
        ],
      },
    ],
    refs: ["14 CFR 91.167", "AIM 5-5 (Minimum Fuel Advisory)", "AIM 6-1"],
  },

  "IR.I.C.S1": {
    core: "Present a complete IFR cross-country plan for the examiner's assigned trip, with a risk analysis based on real weather.",
    sections: [
      {
        h: "Bring",
        b: [
          "Route, altitudes, checkpoints and frequencies",
          "Time en route and **fuel** (power setting, altitude, wind, reserves)",
          "**Weight and balance** and performance (takeoff, climb, landing)",
          "Weather briefing and **go/no-go** with reasons",
          "Alternate decision (1-2-3 rule) and alternate minimums",
          "Risk assessment (PAVE) — what you'd change if conditions got worse",
        ],
      },
      { h: "Tip", b: ["A computer-generated plan is fine — but you must explain every number in it"] },
    ],
    refs: ["ACS IR.I.C", "14 CFR 91.103", "14 CFR 91.167", "14 CFR 91.169"],
  },

  "IR.I.C.S2": {
    core: "When the examiner changes the scenario (headwinds, delays, a diversion), recalculate your fuel reserves on the spot.",
    sections: [
      {
        h: "Method",
        b: ["Find fuel remaining now", "New time to destination (or alternate) at the new groundspeed × burn rate", "Compare remaining fuel at landing to **45 minutes + personal reserve**", "Decide: continue, divert, or declare minimum fuel / emergency"],
      },
    ],
    refs: ["14 CFR 91.167", "POH/AFM"],
  },

  "IR.I.C.S3": {
    core: "Build the navigation plan and show how you'd file the IFR flight plan.",
    sections: [
      {
        h: "Show",
        b: ["Route with fixes and airways, or direct legs for RNAV", "Altitudes that meet MEAs and 91.179", "Correct ICAO equipment codes and times in UTC", "Alternate and fuel endurance in Item 19"],
      },
    ],
    refs: ["AIM Appendix 4", "AIM 5-1"],
  },

  "IR.I.C.S4": {
    core: "Read and explain departure, arrival, enroute and approach charts for the planned trip.",
    sections: [
      {
        h: "Be ready to explain",
        b: [
          "**Departure:** takeoff minimums, ODP or SID, climb gradient requirements",
          "**Enroute:** MEAs, MOCAs, changeover points, reporting points",
          "**Arrival:** STAR, crossing restrictions",
          "**Approach:** plan view, profile, minimums, missed approach, notes",
        ],
      },
    ],
    refs: ["TPP", "IFR Enroute Charts", "FAA-H-8083-16"],
  },

  "IR.I.C.S5": {
    core: "Recognize wing contamination and explain how icing affects the airplane during each phase of flight — and what to do about it.",
    sections: [
      {
        h: "Effects by phase",
        b: [
          "**Pre-takeoff:** frost, snow or ice on the wings — remove it all (clean aircraft concept)",
          "**Takeoff:** higher stall speed, longer roll, poor climb; possible tailplane stall",
          "**Cruise:** drag rises, speed falls, more power needed; antennas and pitot can ice",
          "**Landing:** fly faster, consider less flap (POH), expect a higher stall speed and poor visibility through the windshield",
        ],
      },
      {
        h: "Corrective action",
        b: ["Exit icing conditions (altitude change or turn back) and tell ATC", "Pitot heat and any anti-ice/deice on", "Avoid abrupt maneuvers; hand-fly to feel changes"],
      },
    ],
    refs: ["AC 91-74", "AC 20-117", "FAA-H-8083-15"],
  },

  "IR.I.C.S6": {
    core: "Apply what the charts, Chart Supplement and NOTAMs say about runway and taxiway closures and other changes to your plan.",
    sections: [
      {
        h: "Show",
        b: ["Find NOTAMs for closed runways, taxiways and out-of-service lights or navaids", "Explain how each affects the departure, approach (e.g., higher minimums with ALS out) and alternate", "Use the Chart Supplement for lighting, frequencies and remarks"],
      },
    ],
    refs: ["Chart Supplement", "14 CFR 91.103", "AIM 5-1-3"],
  },
};
