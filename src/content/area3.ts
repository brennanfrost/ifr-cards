import type { ContentMap } from "./types";
import { checklist, mfd, srm } from "./common";

// Area III — ATC Clearances and Procedures
export const area3: ContentMap = {
  // ---------- Task A: Compliance with ATC Clearances ----------
  "IR.III.A.K1": [
    {
      title: "What's in an IFR clearance, and how do you copy it?",
      core: "Clearance limit, route, altitude, frequency and transponder code. Copy it in that order: CRAFT.",
      sections: [
        {
          b: [
            "**C**learance limit (usually the destination airport)",
            "**R**oute, including any departure procedure",
            "**A**ltitude: initial, and when to expect your filed altitude",
            "**F**requency for departure",
            "**T**ransponder code",
            "**Read back** altitudes, restrictions and vectors with your call sign (AIM 4-4)",
          ],
        },
      ],
      mnemonic: { name: "CRAFT", lines: ["Clearance limit", "Route", "Altitude", "Frequency", "Transponder"] },
      refs: ["AIM 4-4", "AIM 5-2-6"],
    },
    {
      title: "What do void times, hold for release and release times mean?",
      core: "Void time: if you're not off by then, the clearance is void and you must call ATC within 30 minutes. Hold for release: don't go yet. Release time: the earliest you may depart.",
      sections: [
        {
          b: [
            "**Clearance void time**: not airborne by then → tell ATC your intentions as soon as possible, **within 30 minutes**, or **search and rescue** begins",
            "**Hold for release**: don't depart on that IFR clearance until ATC releases you",
            "**Release time**: earliest departure time",
            "\"**Cleared as filed**\" doesn't include altitude; ATC states it",
          ],
        },
      ],
      examiner: [
        {
          q: "You're cleared out of an untowered field with a void time of 1430Z. You're delayed and it's 1435Z. What do you do?",
          a: "Don't take off. The clearance is void. I call ATC (or Flight Service) right away, and in any case within 30 minutes of the void time, to get a new clearance and stop a search from starting.",
        },
      ],
      refs: ["AIM 5-2-7", "AIM 5-2-6"],
    },
    {
      title: "Who is responsible for what under IFR: you or ATC?",
      core: "ATC separates IFR traffic and assigns safe altitudes. You comply with clearances, ask when unsure, and still see and avoid when you can.",
      sections: [
        {
          b: [
            "**You**: comply promptly; **request clarification** if unsure (91.123); say \"**unable**\" if you can't comply",
            "**You**: **see and avoid** whenever weather permits, on any flight plan",
            "**ATC**: separation between IFR aircraft; altitudes at or above minimums; checks readbacks",
            "**Vectors**: ATC keeps you at or above the **minimum vectoring altitude**, but question anything that looks wrong",
          ],
        },
      ],
      refs: ["14 CFR 91.123", "AIM 5-5", "AIM 4-4"],
    },
  ],

  "IR.III.A.K2": {
    title: "What emergency authority do you have as PIC?",
    core: "In an in-flight emergency requiring immediate action, you may deviate from any part 91 rule, including a clearance, to the extent needed (91.3).",
    sections: [
      {
        b: [
          "**91.3(b)**: deviate from any rule to the extent required by the emergency",
          "**91.123(c)**: if you deviate from a clearance, **notify ATC as soon as possible**",
          "Written report **only if the FAA asks** (91.3(c))",
          "Given priority by ATC? A detailed report within **48 hours**, **if requested** (91.123(d))",
        ],
      },
    ],
    examiner: [
      {
        q: "If you declare an emergency, will you have to fill out paperwork?",
        a: "Only if asked. 91.3 requires a written report if the Administrator requests it, and 91.123 requires a report within 48 hours if ATC requests it after giving me priority.",
      },
    ],
    refs: ["14 CFR 91.3", "14 CFR 91.123"],
  },

  "IR.III.A.K3": [
    {
      title: "You lose two-way radio in IMC. What route do you fly?",
      core: "Assigned, then Vectored, then Expected, then Filed: AVEF. In VFR conditions, stay VFR and land as soon as practicable.",
      sections: [
        {
          b: [
            "**VFR conditions** (or you find them): **continue VFR and land as soon as practicable**",
            "**A**ssigned route in the last clearance",
            "**V**ectored: direct to the fix, route or airway in the vector clearance",
            "**E**xpected: the route ATC said to expect",
            "**F**iled: the route in your flight plan",
            "Squawk **7600**",
          ],
        },
      ],
      mnemonic: { name: "AVEF", lines: ["Assigned", "Vectored", "Expected", "Filed"] },
      refs: ["14 CFR 91.185", "AIM 6-4-1"],
    },
    {
      title: "Lost comms in IMC: what altitude do you fly?",
      core: "The highest of the minimum IFR altitude, the expected altitude and the assigned altitude, for each route segment: MEA.",
      sections: [
        {
          b: [
            "**M**inimum IFR altitude for the segment (MEA etc.)",
            "**E**xpected altitude ATC told you to expect",
            "**A**ssigned altitude in the last clearance",
            "Fly the **highest** of these, **segment by segment**: it can go up and down along the route",
          ],
        },
      ],
      examiner: [
        {
          q: "You're assigned 6,000, told to expect 9,000 ten minutes after departure, and you lose comms. The MEA ahead is 8,000. What altitude?",
          a: "6,000 until I reach the segment with the 8,000 MEA, then 8,000. Ten minutes after departure, I climb to 9,000, the highest of the three, and stay there unless a higher MEA applies.",
        },
      ],
      refs: ["14 CFR 91.185(c)(2)", "AIM 6-4-1"],
    },
    {
      title: "Lost comms: when do you leave the clearance limit and start the approach?",
      core: "If the limit is where an approach starts: begin the approach at the EFC, or if none, at your ETA. If not: leave at the EFC (or on arrival), go to an approach fix and start at the ETA.",
      sections: [
        {
          b: [
            "Clearance limit **is** an approach fix: descend and start the approach as close as possible to the **EFC** time, or if none, the **ETA** from your filed or amended time en route",
            "Clearance limit **isn't** an approach fix: leave it at the **EFC**, or on arrival if no EFC, then proceed to an approach fix and start at the **ETA**",
            "Arrive early? **Hold** at the fix until the time",
          ],
        },
      ],
      refs: ["14 CFR 91.185(c)(3)", "AIM 6-4-1"],
    },
    {
      title: "What extra reports do you make when you're not in radar contact?",
      core: "Leaving the FAF or outer marker inbound, and corrected estimates more than 2 minutes off, plus position reports at compulsory reporting points.",
      sections: [
        {
          b: [
            "Report passing **compulsory reporting points** (solid triangles) with time and altitude (91.183)",
            "Leaving the **FAF inbound** (non-precision) or the **outer marker** (precision)",
            "A **corrected estimate** if your last one is off by more than **2 minutes**",
            "Position report: ID, position, time, altitude, next fix and ETA, the fix after",
          ],
        },
      ],
      refs: ["14 CFR 91.183", "AIM 5-3-2", "AIM 5-3-3"],
    },
  ],

  "IR.III.A.R1": {
    title: "What do you do if you don't fully understand a clearance?",
    core: "Ask. 91.123 requires you to request clarification immediately when you're uncertain.",
    sections: [
      {
        b: [
          "\"**Say again**\" or \"**Confirm** …\" is always fine",
          "Don't guess, and don't take off or turn until you're sure",
          "Read it back in full so ATC can catch a mistake",
        ],
      },
    ],
    refs: ["14 CFR 91.123"],
  },

  "IR.III.A.R2": {
    title: "What if a clearance seems wrong or unsafe?",
    core: "Question it. You're responsible for accepting or refusing a clearance; ask for an amended one if it would break a rule or put you in danger.",
    sections: [
      {
        b: [
          "A heading toward terrain, an altitude below the MEA, a route that doesn't make sense: **question it**",
          "\"**Unable**\" plus what you can do",
          "Controllers make mistakes too; your readback and questions are a safety net",
        ],
      },
    ],
    examiner: [
      {
        q: "You're vectored at 4,000 and your chart shows terrain to 5,200 in the direction you're heading. What do you do?",
        a: "Question it immediately: confirm the altitude and heading, and if I can't resolve it, climb. I'm still responsible for terrain clearance, especially if something seems wrong.",
      },
    ],
    refs: ["AIM 4-4", "AIM 5-5"],
  },

  "IR.III.A.R3": {
    title: "ATC gives you a clearance your airplane can't do. Now what?",
    core: "Say \"unable\" right away and tell ATC what you can do, such as a climb rate, speed or route you can fly.",
    sections: [
      {
        b: [
          "Examples: a climb gradient you can't make, a speed you can't hold, an RNAV route your GPS isn't approved for",
          "Report if you **can't climb or descend at least 500 fpm** (AIM 5-3-3)",
          "File only the **equipment codes** you actually have, so ATC doesn't assign what you can't fly",
        ],
      },
    ],
    refs: ["AIM 5-3-3", "AIM 4-4", "AIM 5-2-9"],
  },

  "IR.III.A.R4": {
    title: "How do you avoid taking a clearance meant for another aircraft?",
    core: "Listen for your full call sign, read back with it, and ask if you're not sure. Never follow a clearance issued to someone else (91.123(e)).",
    sections: [
      {
        b: [
          "Similar call signs on the same frequency are a known trap",
          "Include your **call sign in every readback**",
          "If ATC calls a similar number, **confirm** before acting",
        ],
      },
    ],
    refs: ["14 CFR 91.123", "AIM 4-4"],
  },

  "IR.III.A.S1": {
    title: "What does the examiner want when you copy a clearance?",
    core: "Copy it quickly in CRAFT order, read it back correctly, understand it, and follow it, using AIM phraseology.",
    sections: [
      {
        h: "Standards",
        b: ["Copy and read back **correctly** the first time, or ask", "Explain what the clearance means (e.g., the departure procedure, the altitude to expect)", "Comply **promptly** and use standard phraseology"],
      },
    ],
    refs: ["AIM 4-4", "AIM 5-2-6"],
  },

  "IR.III.A.S2": {
    title: "What does the examiner check when you set up for a clearance?",
    core: "Frequencies, nav sources and the transponder code all match the clearance, with navaids identified.",
    sections: [
      {
        h: "Standards",
        b: ["Correct **comm frequencies** set", "Nav set and **identified** (Morse code)", "Correct **CDI source** and course", "Transponder code set as cleared"],
      },
    ],
    refs: ["AIM 1-1-3"],
  },

  "IR.III.A.S3": {
    title: "What does the examiner check about your charts and publications?",
    core: "That they're current and the right ones for the flight, paper or electronic.",
    sections: [{ h: "Standards", b: ["Current charts and procedures", "The right **chart for each phase**: departure, en route, approach", "Quick to find what you need"] }],
    refs: ["14 CFR 91.103", "AC 91-78"],
  },

  "IR.III.A.S4": {
    title: "What does the examiner look for when you intercept a course?",
    core: "A timely intercept at a sensible angle, without overshooting, onto the course the clearance calls for.",
    sections: [{ h: "Standards", b: ["Set the course **before** you need it", "Intercept angle that fits how far off you are (often **30–45°**)", "Lead the turn so you **don't overshoot**"] }],
    refs: ["FAA-H-8083-15 (IFH) navigation chapter"],
  },

  "IR.III.A.S5": {
    title: "What tolerances must you hold while following a clearance?",
    core: "Altitude ±100 ft, heading ±10°, airspeed ±10 kt, and no more than ¾-scale CDI deflection.",
    sections: [{ h: "Standards", b: ["Altitude **±100 ft**", "Heading **±10°**", "Airspeed **±10 kt**", "Course within **¾-scale** CDI"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.III.A.S6": srm("IFR clearances and en route flight"),
  "IR.III.A.S7": checklist("each phase of an IFR flight"),

  // ---------- Task B: Holding Procedures ----------
  "IR.III.B.K1": [
    {
      title: "What are the maximum holding airspeeds?",
      core: "200 KIAS up to 6,000 MSL, 230 KIAS from 6,001 to 14,000 (sometimes limited to 210), and 265 KIAS above 14,000.",
      sections: [
        {
          b: [
            "MHA to **6,000 ft MSL**: **200 KIAS**",
            "**6,001–14,000 ft**: **230 KIAS** (some holds are limited to **210**, shown by an icon)",
            "**Above 14,000 ft**: **265 KIAS**",
            "A charted speed in parentheses, e.g. **(175)**, is a limit for that hold",
            "Start slowing within **3 minutes** of the fix",
          ],
        },
      ],
      refs: ["AIM 5-3-8"],
    },
    {
      title: "How long are the legs, and which way do you turn?",
      core: "1-minute inbound legs at or below 14,000 MSL, 1½ minutes above. Standard holds turn right, non-standard turn left.",
      sections: [
        {
          b: [
            "Inbound leg **1 minute** at or below 14,000 MSL; **1½ minutes** above",
            "Start outbound timing **over or abeam the fix**, whichever is later",
            "DME or RNAV holds use a **leg length in miles** instead",
            "**Standard = right turns**; **non-standard = left turns**",
            "Bank: **3°/second, 30°, or 25°** (with a flight director), whichever needs the least",
          ],
        },
      ],
      refs: ["AIM 5-3-8"],
    },
    {
      title: "What are the three holding entries?",
      core: "Direct, teardrop and parallel, chosen by which side of the 70° line you arrive from.",
      sections: [
        {
          b: [
            "**Direct**: cross the fix and turn into the pattern",
            "**Teardrop**: turn outbound **30°** into the holding side for 1 minute, then turn to intercept inbound",
            "**Parallel**: fly parallel outbound on the **non-holding side** for 1 minute, turn more than 180° back toward the holding side, and return to the fix or intercept inbound",
            "The entries are **recommended**; staying in protected airspace is what counts",
          ],
        },
      ],
      examiner: [
        {
          q: "Standard hold east of the fix on the 090 radial (inbound course 270, right turns). You arrive heading 060. Which entry?",
          a: "Teardrop. 060 is within 70° of the outbound course on the holding side. Cross the fix, fly 060 (the 090 outbound course turned 30° toward the holding side) for 1 minute, then turn right to intercept the 270 inbound course.",
        },
      ],
      refs: ["AIM 5-3-8", "FAA-H-8083-15 (IFH)"],
    },
    {
      title: "What's in an unpublished holding clearance, and what if you don't get one?",
      core: "Direction from the fix, the fix, the radial or course, leg length if needed, left turns if non-standard, and an EFC time. No holding instructions? Hold standard on the course you arrived on and ask.",
      sections: [
        {
          b: [
            "**D**irection of holding from the fix (N, NE, E…)",
            "Holding **fix**",
            "**Radial, course**, bearing or airway",
            "**Leg length** (DME/RNAV) or minutes if needed; **left turns** if non-standard",
            "**EFC** time and expected delay",
            "No instructions before the fix: ask first; if you can't, hold **standard on the course you arrived on**",
            "Report **time and altitude** entering, and **leaving** the hold",
          ],
        },
      ],
      refs: ["AIM 5-3-8", "AIM 5-3-3"],
    },
  ],

  "IR.III.B.R1": {
    title: "ATC gives you an EFC much later than you expected. What do you check?",
    core: "Recalculate fuel: can you hold until the EFC, fly the approach, go missed, reach your alternate and still have 45 minutes?",
    sections: [
      {
        b: [
          "Fuel now − holding until EFC − approach − alternate − **45 min reserve** (91.167)",
          "Set a **bingo time** to leave for the alternate",
          "Reduce power for **endurance** while holding",
          "Tell ATC early if you can't accept the delay",
        ],
      },
    ],
    refs: ["14 CFR 91.167", "AIM 5-3-8"],
  },

  "IR.III.B.R2": {
    title: "When do you say \"minimum fuel\" and when do you declare an emergency?",
    core: "Minimum fuel means you can't accept undue delay; it's an advisory, not an emergency. If you need priority to land safely, declare an emergency.",
    sections: [
      {
        b: [
          "\"**Minimum fuel**\" after your call sign on initial contact. It doesn't give priority",
          "If you'll land with less than your **required reserve**, or need priority: **declare an emergency** (Mayday or Pan-Pan)",
          "Causes: long holds, a destination going below minimums, unforecast headwinds, a missed approach",
        ],
      },
    ],
    refs: ["AIM 5-5", "14 CFR 91.3"],
  },

  "IR.III.B.R3": {
    title: "What can lead to holding, and how do you prepare?",
    core: "Traffic, weather at the destination, runway changes or lost comms. Brief holds on your route and plan fuel and your alternate before you need them.",
    sections: [
      {
        b: [
          "Weather going **below minimums** at the destination",
          "**Traffic** delays and flow control",
          "**Runway closures** or changes; **missed approach** to a hold",
          "**Lost comms**: hold until the EFC or ETA",
          "Plan a **decision point** for your alternate",
        ],
      },
    ],
    refs: ["AIM 5-3-8", "14 CFR 91.185"],
  },

  "IR.III.B.R4": {
    title: "How do you correct for wind in a hold?",
    core: "Triple your inbound wind correction on the outbound leg, and adjust outbound time so the inbound leg comes out to 1 minute.",
    sections: [
      {
        b: [
          "Find the **wind correction** on the inbound leg",
          "Outbound: use about **3×** that correction, into the wind",
          "Inbound leg longer than 1 minute? **Shorten** the next outbound leg. Shorter? **Lengthen** it",
          "Use the **MFD track** to see drift early (if available)",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "AIM 5-3-8"],
  },

  "IR.III.B.S1": {
    title: "What does the examiner look for in a holding entry?",
    core: "A sensible entry for the hold you're given, flown promptly, staying in protected airspace.",
    sections: [{ h: "Standards", b: ["Choose an entry: **direct, teardrop or parallel**", "Works for **published and unpublished**, **standard and non-standard** holds", "Start the entry **promptly** at the fix"] }],
    refs: ["AIM 5-3-8"],
  },

  "IR.III.B.S2": {
    title: "When do you slow down for a hold?",
    core: "Within 3 minutes of the fix, slow to the right holding speed for your altitude, with a power setting that saves fuel.",
    sections: [{ h: "Standards", b: ["Slow down **within 3 minutes** before the fix", "At or below the max holding speed", "Set power for **endurance** if expecting a long hold"] }],
    refs: ["AIM 5-3-8"],
  },

  "IR.III.B.S3": {
    title: "What do you do as you arrive at the holding fix?",
    core: "Recognize the fix promptly and start the entry: Turn, Time, Twist, Throttle, Talk.",
    sections: [
      {
        b: ["**Turn** to the entry heading", "**Time**: start the clock (over or abeam the fix, whichever is later)", "**Twist**: set the inbound course", "**Throttle**: holding power and speed", "**Talk**: report time and altitude entering the hold"],
      },
    ],
    mnemonic: { name: "5 Ts", lines: ["Turn", "Time", "Twist", "Throttle", "Talk"] },
    refs: ["AIM 5-3-8", "FAA-H-8083-15 (IFH)"],
  },

  "IR.III.B.S3a": {
    title: "What restrictions come with a hold?",
    core: "Fly the charted or assigned leg length (minutes or miles), turn direction and any speed restriction.",
    sections: [{ h: "Standards", b: ["Leg length: **1 min** (≤14,000), **1½ min** above, or the DME/RNAV distance given", "Turn direction as published or assigned", "Any charted **speed limit**"] }],
    refs: ["AIM 5-3-8"],
  },

  "IR.III.B.S4": {
    title: "What tolerances must you hold in a holding pattern?",
    core: "Altitude ±100 ft, heading ±10°, airspeed ±10 kt, and no more than ¾-scale CDI deflection.",
    sections: [{ h: "Standards", b: ["Altitude **±100 ft**", "Airspeed **±10 kt**", "Headings **±10°**", "Course within **¾-scale** CDI"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.III.B.S5": {
    title: "How do you keep the hold on time and on course?",
    core: "Correct for wind each circuit, adjust outbound timing, and aim to cross the fix as close to the time asked as you can.",
    sections: [{ h: "Standards", b: ["Wind correction outbound about **3×** the inbound correction", "Adjust **outbound time** each circuit", "Adjust the pattern to **leave the fix on time** when ATC gives one"] }],
    refs: ["FAA-H-8083-15 (IFH)", "AIM 5-3-8"],
  },

  "IR.III.B.S6": mfd("holding"),

  "IR.III.B.S7": {
    title: "What do you report in a hold?",
    core: "Time and altitude reaching the holding fix, and when you leave it. Follow any restrictions.",
    sections: [{ h: "Standards", b: ["Report **time and altitude** reaching the fix", "Report **leaving** the fix", "Comply with **EFC**, altitude and speed restrictions"] }],
    refs: ["AIM 5-3-3", "AIM 5-3-8"],
  },

  "IR.III.B.S8": srm("holding"),
};
