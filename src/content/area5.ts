import type { ContentMap } from "./types";
import { checklist, mfd, srm } from "./common";

// Area V — Navigation Systems
export const area5: ContentMap = {
  // ---------- Task A: Intercepting and Tracking Navigational Systems and DME Arcs ----------
  "IR.V.A.K1": [
    {
      title: "How do you find where you are relative to a VOR?",
      core: "Center the needle with a FROM flag: the course on top is the radial you're on. With a TO flag, it's the course to the station.",
      sections: [
        {
          b: [
            "Center the CDI: **FROM** = you're on that **radial**; **TO** = that's the course **to** the station",
            "The VOR doesn't care about heading: the CDI shows position relative to the **selected course**",
            "**Reverse sensing**: flying with the course set opposite your direction (e.g., TO flag while flying away). An **HSI** avoids this if the course points the way you're going",
            "Always **identify** the VOR by Morse code",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) navigation chapter", "AIM 1-1-3"],
    },
    {
      title: "How do you intercept a VOR course?",
      core: "Set the course, turn to an intercept heading 30–45° toward it (more if far off), and lead the turn as the needle starts to center.",
      sections: [
        {
          b: [
            "**Set** the course you want; note which way the needle is off",
            "Turn toward the needle to an **intercept heading**, typically **30–45°** off the course",
            "**Lead the turn** as the needle comes alive, to roll out on course",
            "Then **bracket**: find the wind correction that keeps the needle centered",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) navigation chapter"],
    },
    {
      title: "How do you fly a DME arc?",
      core: "Turn 90° to the radial just before reaching the arc distance, then keep the station near your wingtip, turning 10–20° toward it each time it drifts behind.",
      sections: [
        {
          b: [
            "Lead the turn onto the arc slightly **before** the DME distance (about **½ NM** at typical training speeds)",
            "Keep the **bearing to the station about 90°** off the nose (on the wingtip)",
            "When the bearing drifts behind the wingtip, **turn 10–20° toward** the station",
            "Distance increasing → turn toward the station; decreasing → turn away",
            "Standard: stay within **±1 NM** of the arc",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) navigation chapter", "FAA-S-ACS-8 (Instrument Rating ACS)"],
    },
    {
      title: "What VOR rules and tests apply to IFR?",
      core: "A VOR check within 30 days: ±4° on a VOT or ground checkpoint, ±6° airborne, 4° dual. Log date, place, error and sign.",
      sections: [
        {
          b: [
            "**VOT**: set **360** → centered with FROM (or 180 TO), within **±4°**",
            "**Ground checkpoint**: **±4°**",
            "**Airborne checkpoint** or over a landmark on an airway: **±6°**",
            "**Dual VOR**: within **4°** of each other",
            "**Log** date, place, bearing error, signature",
          ],
        },
      ],
      examiner: [
        {
          q: "You check your VORs against each other: one shows 042 and the other 047. Legal for IFR?",
          a: "No. That's a 5° difference, and the dual VOR check allows 4°. I'd do another check against a VOT or ground checkpoint and get it looked at.",
        },
      ],
      refs: ["14 CFR 91.171", "AIM 1-1-4"],
    },
  ],

  "IR.V.A.K2": [
    {
      title: "What do you verify before using GPS for IFR?",
      core: "Approved installation, current database, RAIM or WAAS availability, and no GPS NOTAMs for the route or approach.",
      sections: [
        {
          b: [
            "**IFR-approved** receiver (AFM supplement)",
            "**Current database**",
            "**RAIM prediction** (non-WAAS) or **WAAS** status",
            "**NOTAMs**: GPS outages, testing or interference along the route",
            "A **backup**: VOR, or another way out if GPS fails",
          ],
        },
      ],
      refs: ["AIM 1-1-17", "AIM 1-1-18", "AC 90-100"],
    },
    {
      title: "What do you do if GPS is jammed or unreliable?",
      core: "Tell ATC, switch to another navigation source (VOR/ILS or vectors), and don't fly a GPS approach without the required integrity.",
      sections: [
        {
          b: [
            "Signs: **integrity or loss-of-navigation** alerts, position jumps, a mismatch with VOR",
            "**Tell ATC** (91.187) and ask for vectors or a different approach",
            "Navigate by **VOR, ILS or dead reckoning** as available",
            "ATC may advise GPS is unreliable during **NOTAMed testing** and ask your intentions",
          ],
        },
      ],
      refs: ["AIM 1-1-17", "14 CFR 91.187"],
    },
    {
      title: "How do you intercept a GPS course or fly an arc with GPS?",
      core: "Load or activate the leg, check the course and CDI source, and intercept like a VOR course. Published arcs fly as legs in the database.",
      sections: [
        {
          b: [
            "**Activate the leg** you want, or use **direct-to** then set an intercept",
            "Make sure the **CDI source is GPS** and the scaling fits the phase",
            "Published **DME arcs** and RF legs are flown from the database as a leg",
            "Use **OBS/suspend** mode for holds and course reversals as your receiver requires",
          ],
        },
      ],
      refs: ["AIM 1-1-17", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
    },
  ],

  "IR.V.A.R1": {
    title: "What can go wrong managing GPS and autopilot navigation?",
    core: "Wrong mode, wrong CDI source, an unverified flight plan, or the autopilot not following what you think. Verify every change.",
    sections: [
      {
        b: [
          "**CDI source** left on GPS when you need VLOC (or the reverse)",
          "Autopilot in **HDG** when you think it's in **NAV**",
          "Flight plan **not updated** after a reroute",
          "Fix: read the **annunciators**, verify the **active leg**, and step down a level when confused",
        ],
      },
    ],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.V.A.R2": {
    title: "How do you keep track of where you are while navigating on instruments?",
    core: "Keep a mental picture of your position, the next fix and the next altitude, and check it against the nav display.",
    sections: [{ b: ["Know: **where am I, where am I going next, at what altitude**", "Do button-pushing in **short bursts**", "Use the **MFD** to confirm, not to replace, your picture"] }],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)", "FAA-H-8083-15 (IFH)"],
  },

  "IR.V.A.R3": {
    title: "What are the limits of each navigation system?",
    core: "VOR: line of sight, service volume, ±4–6° checks. DME: slant range. GPS: needs integrity and a current database, and can be jammed.",
    sections: [
      {
        b: [
          "**VOR**: line of sight; use within its **service volume**",
          "**DME**: **slant range**, worst when high and close",
          "**GPS**: needs **RAIM or WAAS**, a **current database**; vulnerable to **interference**",
          "**ILS**: false glide slopes above the real one; protected only within the published area",
        ],
      },
    ],
    refs: ["AIM 1-1-7", "AIM 1-1-8", "AIM 1-1-9", "AIM 1-1-17"],
  },

  "IR.V.A.S1": {
    title: "What does the examiner check when you tune and set up navigation?",
    core: "That you tune and identify the station, or load and verify the GPS route, and check accuracy where you can.",
    sections: [{ h: "Standards", b: ["**Tune and identify** (Morse code)", "Load and **verify** GPS waypoints against the chart", "Correct **CDI source** and course"] }],
    refs: ["AIM 1-1-3", "AIM 1-1-17"],
  },

  "IR.V.A.S2": {
    title: "What does the examiner want when you find your position?",
    core: "That you can say where you are relative to the station or waypoint: which radial or course, how far, and which side.",
    sections: [{ h: "Standards", b: ["Radial or bearing **to/from**", "**Distance** (DME or GPS)", "Which **side** of the course you're on"] }],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  "IR.V.A.S3": {
    title: "What does the examiner check before you intercept a course?",
    core: "That you set the right course and you know which way to turn to intercept it.",
    sections: [{ h: "Standards", b: ["Set the **assigned course**", "Know where the course is relative to you", "Pick a sensible **intercept heading**"] }],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  "IR.V.A.S4": {
    title: "What does the examiner look for in a course intercept?",
    core: "A suitable intercept angle, inbound or outbound, and a timely, smooth rollout on course without overshooting.",
    sections: [{ h: "Standards", b: ["Intercept angle fits distance from the course", "**Lead the turn** onto course", "Inbound **or** outbound from the facility or waypoint"] }],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  "IR.V.A.S5": {
    title: "What tolerances must you hold while navigating?",
    core: "Airspeed ±10 kt, altitude ±100 ft, and selected headings ±5°.",
    sections: [{ h: "Standards", b: ["Airspeed **±10 kt**", "Altitude **±100 ft**", "Headings **±5°** (tighter than most other Tasks)"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.V.A.S6": {
    title: "How closely must you track a course or DME arc?",
    core: "No more than ¾-scale CDI deflection on a course, and within ±1 NM on a DME arc.",
    sections: [{ h: "Standards", b: ["Course: within **¾-scale** CDI", "DME arc: **±1 NM**", "Correct for **wind** with heading changes, not by chasing the needle"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.V.A.S7": {
    title: "What do you do when a navigation system or station fails?",
    core: "Recognize it (flags, no ID, integrity alerts), switch to another source, and report it to ATC as soon as practical.",
    sections: [
      {
        h: "Standards",
        b: [
          "Spot the **flag**, missing **ID**, or **GPS alert**",
          "Switch to a backup source or ask for **vectors**",
          "**Report to ATC** (91.187): ID, equipment affected, how much it limits you, help needed",
        ],
      },
    ],
    refs: ["14 CFR 91.187", "AIM 5-3-3"],
  },

  "IR.V.A.S8": mfd("navigation and course tracking"),

  "IR.V.A.S9": {
    title: "How do you use the autopilot to intercept a course?",
    core: "Set a heading mode intercept, arm NAV, and confirm on the annunciator that it captures and tracks.",
    sections: [{ h: "Standards", b: ["**HDG** to the intercept heading", "**Arm NAV** (or APR)", "Watch it go from **armed to active** and track the course"] }],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM autopilot supplement"],
  },

  "IR.V.A.S10": srm("navigation"),

  // ---------- Task B: Departure, En Route, and Arrival Operations ----------
  "IR.V.B.K1": [
    {
      title: "What's the difference between an ODP and a SID?",
      core: "An ODP only keeps you clear of obstacles and can be flown without a clearance. A SID is an ATC procedure and needs a clearance.",
      sections: [
        {
          b: [
            "**ODP**: obstacle clearance; may be flown **without ATC clearance** unless ATC assigns something else",
            "**SID**: ATC procedure for obstacle clearance **and** getting into the en route system; **needs a clearance**",
            "A **T** on the approach chart: non-standard takeoff minimums or a departure procedure (TPP takeoff minimums section)",
            "Part 91 pilots are **strongly encouraged** to fly a DP at night or in IMC",
          ],
        },
      ],
      refs: ["AIM 5-2-9"],
    },
    {
      title: "What climb gradient do departures assume, and how do you check you can make it?",
      core: "200 ft/NM unless a higher gradient is published. Convert it to feet per minute: gradient × groundspeed ÷ 60.",
      sections: [
        {
          b: [
            "Standard: **200 ft/NM**; cross the departure end at least **35 ft** above it and reach **400 ft** before turning, unless the procedure says otherwise",
            "Published higher gradient? You must be able to meet it, or use another procedure or VFR departure",
            "**ft/min = ft/NM × groundspeed ÷ 60**. Example: 300 ft/NM at 90 kt = **450 fpm**",
            "Check against your **POH climb performance** for weight, temperature and altitude",
          ],
        },
      ],
      examiner: [
        {
          q: "The departure needs 400 ft/NM to 6,000 ft. Your groundspeed in the climb will be 100 kt. What rate of climb do you need?",
          a: "400 × 100 ÷ 60 = about 667 feet per minute. I'd check the POH climb chart for today's weight and density altitude to see if the airplane can do it.",
        },
      ],
      refs: ["AIM 5-2-9", "FAA-H-8083-16 (Instrument Procedures Handbook)"],
    },
    {
      title: "What does a STAR do, and what does \"descend via\" mean?",
      core: "A STAR takes you from the en route structure to the terminal area. \"Descend via\" means descend at your discretion while meeting all the published altitude and speed restrictions.",
      sections: [
        {
          b: [
            "**STAR**: arrival procedure; you need it on board to accept it (or file \"no STAR\")",
            "\"**Descend via** [STAR]\": descend on your own, meeting every published **altitude and speed** restriction",
            "\"**Cleared** [STAR] **arrival**\" alone: it's only routing; keep your assigned altitude until told to descend",
            "Published restrictions: **at**, **at or above**, **at or below**, **between**",
          ],
        },
      ],
      refs: ["AIM 5-4-1", "FAA-H-8083-16 (Instrument Procedures Handbook)"],
    },
  ],

  "IR.V.B.K2": [
    {
      title: "What does ATC provide, and what's still your job?",
      core: "ATC separates IFR traffic, gives traffic advisories and safety alerts when workload allows. You still see and avoid when you can, and you monitor terrain.",
      sections: [
        {
          b: [
            "**ATC**: separation from other IFR aircraft, vectors at or above the **minimum vectoring altitude**",
            "**Traffic advisories** and **safety alerts**: when workload permits; not guaranteed",
            "**You**: see and avoid in VMC, terrain awareness, question odd clearances",
          ],
        },
      ],
      refs: ["AIM 5-5", "AIM 4-1"],
    },
    {
      title: "What do you report without being asked?",
      core: "Leaving an altitude, a missed approach, unable to climb/descend 500 fpm, a TAS change of 5% or 10 kt, reaching and leaving a holding fix, a lost nav/comm, unforecast weather and anything about safety.",
      sections: [
        {
          b: [
            "**M**issed approach",
            "**A**irspeed (TAS) change of **5% or 10 kt**",
            "**R**eaching a holding fix (time, altitude)",
            "**V**FR-on-top altitude change",
            "**E**TA changed by more than **2 min** (non-radar)",
            "**L**eaving a holding fix · **O**uter marker/FAF inbound (non-radar)",
            "**U**nforecast weather · **S**afety of flight · **V**acating an altitude · **F**ailure of nav/comm (**R**adio) · **C**an't climb/descend **500** fpm",
          ],
        },
      ],
      mnemonic: { name: "MARVELOUS VFR C500", lines: ["Missed approach", "Airspeed ±10 kt / 5%", "Reaching a holding fix", "VFR-on-top altitude change", "ETA off > 2 min (non-radar)", "Leaving a holding fix", "Outer marker / FAF inbound (non-radar)", "Unforecast weather", "Safety of flight", "Vacating an altitude", "Failure of nav/comm (Radio)", "Can't climb/descend 500 fpm"] },
      refs: ["AIM 5-3-3", "14 CFR 91.183", "14 CFR 91.187"],
    },
  ],

  "IR.V.B.R1": {
    title: "What can go wrong with ATC communications and published procedures?",
    core: "Missing or misunderstanding a clearance, readback errors, and not following a published restriction. Read back carefully and ask when unsure.",
    sections: [{ b: ["Readback with **call sign**", "Know your **published restrictions** before you get there", "If ATC's instruction conflicts with the procedure, **ask**", "Stay on frequency; don't miss a handoff"] }],
    refs: ["14 CFR 91.123", "AIM 4-4"],
  },

  "IR.V.B.R2": {
    title: "What are the limits of traffic displays like ADS-B In?",
    core: "They don't show every aircraft. Non-equipped aircraft and gaps in coverage mean you can't rely on them alone.",
    sections: [
      {
        b: [
          "Aircraft **without ADS-B Out** may not appear (TIS-B relays some, only where radar and ground stations cover)",
          "Altitude and position can be **delayed or missing**",
          "It's an **aid to see and avoid**, not a replacement",
        ],
      },
    ],
    refs: ["AIM 4-5"],
  },

  "IR.V.B.R3": {
    title: "On an IFR flight plan, are you still responsible to see and avoid?",
    core: "Yes. When weather allows, see and avoid is your job on any flight plan, even under radar control.",
    sections: [{ b: ["In **VMC on IFR**, VFR traffic can be near you without ATC separation", "Look outside whenever you're in VMC", "Report traffic in sight and ask for vectors if needed"] }],
    refs: ["AIM 5-5"],
  },

  "IR.V.B.S1": {
    title: "What does the examiner check about your comm and nav setup for the flight?",
    core: "That you pick, identify and use the right frequencies and navaids for each phase.",
    sections: [{ h: "Standards", b: ["Right **frequencies** for each facility", "Navaids **identified**", "Backup frequencies and navaids planned"] }],
    refs: ["AIM 1-1-3"],
  },

  "IR.V.B.S2": checklist("departure, en route and arrival"),

  "IR.V.B.S3": {
    title: "What does the examiner check about your charts?",
    core: "That you use current and appropriate charts for departure, en route and arrival.",
    sections: [{ h: "Standards", b: ["Current **DP, en route and STAR** charts", "Know where to find **takeoff minimums and ODPs**", "Paper or approved EFB"] }],
    refs: ["14 CFR 91.103", "AC 91-78"],
  },

  "IR.V.B.S4": {
    title: "What does the examiner want in your radio work with ATC?",
    core: "Two-way contact with the right facility, standard phraseology, and prompt compliance with instructions and airspace restrictions.",
    sections: [{ h: "Standards", b: ["Contact the **right facility**", "Standard **phraseology**, concise calls", "**Comply promptly**; read back altitudes, headings, restrictions"] }],
    refs: ["AIM 4-2", "AIM 4-4"],
  },

  "IR.V.B.S5": {
    title: "What does the examiner look for in intercepting courses during departure and arrival?",
    core: "Timely intercepts of every course, radial or bearing the procedure or clearance calls for.",
    sections: [{ h: "Standards", b: ["Set courses **ahead** of time", "Lead the turns", "No overshoots"] }],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  "IR.V.B.S6": {
    title: "What does complying with a charted procedure mean on the checkride?",
    core: "Flying every published course, altitude, speed and climb or descent restriction as charted.",
    sections: [{ h: "Standards", b: ["Fly **all published restrictions**", "Know the **lost comms** route for the procedure", "Ask if anything is unclear"] }],
    refs: ["14 CFR 91.123", "AIM 5-2-9", "AIM 5-4-1"],
  },

  "IR.V.B.S7": {
    title: "What tolerances apply during departure, en route and arrival?",
    core: "Airspeed ±10 kt, altitude ±100 ft, headings ±10°, and no more than ¾-scale CDI deflection.",
    sections: [{ h: "Standards", b: ["Airspeed **±10 kt**", "Altitude **±100 ft**", "Headings **±10°**", "Course within **¾-scale**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.V.B.S8": {
    title: "How do you get weather updates in flight?",
    core: "ATIS/AWOS/ASOS at the destination, Flight Service, ATC, and datalink weather (FIS-B), and you report what you see in PIREPs.",
    sections: [
      {
        h: "Standards",
        b: [
          "**ATIS / AWOS / ASOS** for destination and alternates",
          "**Flight Service** on frequency",
          "**FIS-B** over ADS-B In: METARs, TAFs, NEXRAD, AIRMETs (data can be several minutes old)",
          "Give **PIREPs**, especially unforecast weather (91.183)",
        ],
      },
    ],
    refs: ["AIM 7-1", "14 CFR 91.183"],
  },

  "IR.V.B.S9": {
    title: "How should you use datalink weather and aeronautical info displays?",
    core: "For strategic awareness: where the weather is and what's changing. Not for picking a path through storms, because the data is delayed.",
    sections: [{ h: "Standards", b: ["NEXRAD on datalink can be **several minutes old**", "Use it to **stay well clear**, not to thread cells", "Check **TFRs and NOTAMs** on the display"] }],
    refs: ["AIM 7-1"],
  },

  "IR.V.B.S10": srm("departure, en route and arrival"),
};
