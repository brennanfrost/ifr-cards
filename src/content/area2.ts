import type { ContentMap } from "./types";
import { checklist } from "./common";

// Area II — Preflight Procedures
export const area2: ContentMap = {
  // ---------- Task A: Aircraft Systems Related to IFR Operations ----------
  "IR.II.A.K1": [
    {
      title: "What's the difference between anti-ice and deice?",
      core: "Anti-ice prevents ice from forming and is turned on before you enter icing. Deice removes ice that has already formed.",
      sections: [
        {
          b: [
            "**Anti-ice** (prevent): pitot heat, heated windshield, carburetor heat, TKS fluid, electric prop heat, alternate air",
            "**Deice** (remove): pneumatic **wing and tail boots**",
            "Anti-ice systems work best switched on **before** you enter visible moisture at or below freezing",
          ],
        },
      ],
      examiner: [
        {
          q: "When do you turn on pitot heat?",
          a: "Before entering visible moisture when the temperature is near or below freezing, as the POH directs. It's anti-ice, so it should be on before ice forms.",
        },
      ],
      refs: ["FAA-H-8083-25 (PHAK) aircraft systems chapter", "AC 91-74 (Pilot Guide: Flight in Icing Conditions)", "POH/AFM"],
    },
    {
      title: "How is ice handled on the pitot-static, intake and fuel systems?",
      core: "Pitot heat for the pitot tube, an alternate static source for a blocked static port, alternate air for a blocked intake, and protected fuel vents.",
      sections: [
        {
          b: [
            "**Pitot heat** keeps the pitot tube clear. A blocked pitot makes the airspeed indicator unreliable",
            "**Alternate static source**: use it if the static ports ice over",
            "**Induction icing**: carburetor heat (carbureted) or **alternate air** (fuel-injected) opens automatically or manually if the air filter ices",
            "**Fuel vents** must stay open, or the tanks can't feed",
          ],
        },
      ],
      refs: ["FAA-H-8083-25 (PHAK)", "AC 91-74", "POH/AFM"],
    },
    {
      title: "How do airframe and propeller ice protection work?",
      core: "Boots inflate to crack ice off the leading edges, TKS fluid weeps out to stop ice forming, and props use electric heat or fluid.",
      sections: [
        {
          b: [
            "**Pneumatic boots** inflate and deflate to break ice off. Follow the POH on when to cycle them",
            "**TKS (weeping wing)** pumps glycol-based fluid through porous panels. Watch the fluid quantity",
            "**Propellers**: electric heating elements or fluid slinger rings",
            "**Windshield**: heated panel or fluid spray, so you can see to land",
          ],
        },
      ],
      refs: ["AC 91-74", "FAA-H-8083-25 (PHAK)", "POH/AFM"],
    },
  ],

  "IR.II.A.K2": {
    title: "What flight control systems matter most on instruments?",
    core: "The primary controls, trim and flaps, plus the autopilot's servos, disconnects and trim, so you can fly by hand the moment it quits.",
    sections: [
      {
        b: [
          "**Primary**: ailerons, elevator (or stabilator), rudder",
          "**Secondary**: **trim** (manual or electric) and **flaps**",
          "**Autopilot**: servos move the controls; know every way to **disconnect** it and how to stop a **runaway electric trim** (POH)",
          "**Trimmed** = lower workload, so you can scan instead of holding pressure",
        ],
      },
    ],
    examiner: [
      {
        q: "The electric trim starts running away nose-down in IMC. What do you do?",
        a: "Hold the controls firmly, disconnect the autopilot and trim per the POH (disconnect switch, trim interrupt or circuit breaker), then fly by hand and tell ATC if I need help.",
      },
    ],
    refs: ["FAA-H-8083-25 (PHAK) flight controls chapter", "FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM"],
  },

  "IR.II.A.R1": {
    title: "Can you fly into icing conditions in your airplane?",
    core: "Only if it's certified for flight into known icing (FIKI), and even then it's limited. Without FIKI, avoid known or forecast icing and have a way out.",
    sections: [
      {
        b: [
          "Check the **POH/AFM limitations**: many airplanes prohibit flight into known icing",
          "Before you go: **freezing level, cloud tops, temperatures, PIREPs, AIRMET Zulu**, and an **escape route**",
          "Ice raises **stall speed**, adds **drag**, and can cause a **tailplane stall** (pitch-down, often when flaps go down)",
          "If you pick up ice: tell ATC and get out: **change altitude** or **turn around**",
        ],
      },
    ],
    examiner: [
      {
        q: "Your airplane has boots and a heated prop but no FIKI approval. Can you plan through forecast icing?",
        a: "No. Having some equipment isn't approval. Without FIKI certification I treat it as unprotected and avoid known or forecast icing. The equipment helps me get out.",
      },
    ],
    refs: ["AC 91-74", "POH/AFM", "AIM 7-1"],
  },

  "IR.II.A.R2": {
    title: "What are the limits of anti-ice and deice systems?",
    core: "They protect only certain surfaces, need time and fluid, and can be overwhelmed. Ice can build behind the protected areas, especially in freezing drizzle and rain (SLD).",
    sections: [
      {
        b: [
          "Boots protect only the **leading edges** they cover",
          "**Supercooled large droplets** (freezing drizzle and rain) can freeze **behind** the boots",
          "**TKS fluid runs out**: know the endurance on board",
          "Even FIKI airplanes have **minimum speeds** and limits in icing (POH)",
          "Follow the **POH** on when to cycle boots",
        ],
      },
    ],
    refs: ["AC 91-74", "POH/AFM"],
  },

  "IR.II.A.R3": {
    title: "What's the risk of using the autopilot in IMC, and in icing?",
    core: "It lowers workload, but it can hide problems. In icing it can trim into a stall without you feeling it. Monitor it and know when to fly by hand.",
    sections: [
      {
        b: [
          "Know the **active modes** and confirm them on the annunciator",
          "Watch for **airspeed decay** with the autopilot holding altitude: a sign of ice or a failing engine",
          "In icing, the **POH or AC 91-74** may call for **disconnecting periodically** so you can feel the airplane",
          "If you don't understand what it's doing, **disconnect and hand-fly**",
        ],
      },
    ],
    examiner: [
      {
        q: "The autopilot is holding altitude in cloud and the airspeed keeps dropping. What's happening?",
        a: "It could be ice adding drag or a power problem. The autopilot is pitching up to hold altitude and hiding it. I'd check power and the wings, disconnect and hand-fly, and get out of the icing.",
      },
    ],
    refs: ["AC 91-74", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.II.A.S1": {
    title: "What will the examiner check about your airplane's ice protection?",
    core: "That you know what ice protection your airplane has, how it works, and what the POH allows and prohibits.",
    sections: [
      {
        h: "Be ready to show",
        b: [
          "The **POH limitations** section on icing",
          "Where the **pitot heat, alternate static and alternate air** controls are",
          "Any boots, TKS or heated props, and how to use them",
          "What you'd do if you picked up ice",
        ],
      },
    ],
    refs: ["POH/AFM", "AC 91-74"],
  },

  "IR.II.A.S2": {
    title: "What will the examiner check about your autopilot?",
    core: "That you can engage, use and disconnect it, read its modes, and know its POH supplement limitations.",
    sections: [
      {
        h: "Be ready to show",
        b: [
          "Engaging and using **HDG, NAV, ALT, VS** and **APR** modes",
          "Reading the **mode annunciator** (armed vs active)",
          "Every way to **disconnect**, including trim interrupt",
          "Limits in the **AFM supplement** (e.g., minimum engagement altitude on approach)",
        ],
      },
    ],
    refs: ["POH/AFM autopilot supplement", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  // ---------- Task B: Aircraft Flight Instruments and Navigation Equipment ----------
  "IR.II.B.K1a": [
    {
      title: "What happens if the pitot tube gets blocked?",
      core: "Only the airspeed indicator is affected. If the drain hole is also blocked, it acts like an altimeter: higher in a climb, lower in a descent.",
      sections: [
        {
          b: [
            "**Ram air inlet blocked, drain open**: airspeed drops toward **zero**",
            "**Inlet and drain blocked**: airspeed reads **higher in a climb, lower in a descent**, and doesn't change in level flight",
            "Altimeter and VSI still work (they use static pressure only)",
            "Prevention: **pitot heat** in visible moisture near freezing",
          ],
        },
      ],
      examiner: [
        {
          q: "You're climbing in cloud and the airspeed keeps increasing even though the attitude and power haven't changed. What's wrong?",
          a: "Likely a blocked pitot tube with the drain also blocked, so it's acting like an altimeter. Pitot heat on, and fly by attitude and power settings.",
        },
      ],
      refs: ["FAA-H-8083-25 (PHAK) flight instruments chapter", "FAA-H-8083-15 (IFH) flight instruments chapter"],
    },
    {
      title: "What happens if the static port gets blocked?",
      core: "The altimeter freezes, the VSI shows zero, and airspeed is wrong: low in a climb, high in a descent. Use the alternate static source.",
      sections: [
        {
          b: [
            "**Altimeter**: stuck at the altitude where it blocked",
            "**VSI**: zero",
            "**Airspeed**: reads **low** in a climb, **high** in a descent",
            "**Alternate static** (cabin air in unpressurized airplanes): altimeter and airspeed read **slightly high**, VSI shows a brief climb",
            "No alternate static? **Breaking the VSI glass** is the last resort (VSI then unusable)",
          ],
        },
      ],
      refs: ["FAA-H-8083-25 (PHAK)", "FAA-H-8083-15 (IFH)"],
    },
  ],

  "IR.II.B.K1b": [
    {
      title: "How do the gyroscopic instruments work, and what powers them?",
      core: "They use rigidity in space and precession. The attitude and heading indicators are often vacuum-driven; the turn coordinator is usually electric, as a backup.",
      sections: [
        {
          b: [
            "**Rigidity in space**: a spinning gyro holds its position (attitude and heading indicators)",
            "**Precession**: a force on a spinning gyro shows up 90° later (turn coordinator; also why the heading indicator drifts)",
            "Power sources are often split (**vacuum** for AI/HI, **electric** for the turn coordinator), so one failure doesn't take out everything",
            "Glass cockpits: **AHRS** replaces the mechanical gyros",
          ],
        },
      ],
      refs: ["FAA-H-8083-25 (PHAK) flight instruments chapter", "FAA-H-8083-15 (IFH)"],
    },
    {
      title: "How do you spot a vacuum or gyro failure?",
      core: "Low vacuum warning or gauge, and the attitude and heading indicators slowly drifting or disagreeing with the other instruments.",
      sections: [
        {
          b: [
            "Check the **vacuum gauge** or annunciator in your scan",
            "A failing gyro **slowly tilts**, so it can look believable. Cross-check with the turn coordinator, altimeter, VSI and airspeed",
            "Cover the bad instruments and go **partial panel**",
            "Tell ATC (91.187) and ask for help: no-gyro vectors, better weather",
          ],
        },
      ],
      examiner: [
        {
          q: "The attitude indicator shows a slow bank to the right but the turn coordinator shows wings level and the heading isn't changing. Which do you believe?",
          a: "The turn coordinator and heading. Two instruments agree, so the attitude indicator is likely failing. I'd cover it, check the vacuum, fly partial panel and tell ATC.",
        },
      ],
      refs: ["FAA-H-8083-15 (IFH)", "14 CFR 91.187"],
    },
  ],

  "IR.II.B.K1c": [
    {
      title: "What happens when the alternator fails, and how do glass displays fail?",
      core: "You're on battery only, for a limited time. Shed load to save it. A failed PFD or MFD can usually be replaced with the other display in reversionary mode.",
      sections: [
        {
          b: [
            "Signs: ammeter discharge, **low-volts** annunciation",
            "**Load shed** per the POH: turn off what you don't need; keep one nav/comm and the essentials",
            "Plan to land soon; **tell ATC** early, while you still have radios",
            "**Reversionary mode** puts flight instruments on the remaining display",
            "Know your **standby instruments** and their power source",
          ],
        },
      ],
      refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM"],
    },
    {
      title: "What do transponder codes and ADS-B do for you on IFR?",
      core: "The transponder replies to ATC radar with your code and altitude; ADS-B Out broadcasts your GPS position. Know the emergency codes.",
      sections: [
        {
          b: [
            "**Mode C/S** reports pressure altitude",
            "**7500** hijack · **7600** lost comms · **7700** emergency",
            "**ADS-B Out** is required in the airspace listed in 14 CFR 91.225 (e.g., Class A, B, C, the 30 NM Mode C veil, and above 10,000 MSL with some exceptions)",
            "**ADS-B In** gives traffic and weather on displays. It's a help, not a replacement for ATC or see-and-avoid",
          ],
        },
      ],
      refs: ["14 CFR 91.215", "14 CFR 91.225", "AIM 4-1", "AIM 6-4-2"],
    },
  ],

  "IR.II.B.K1d": {
    title: "What errors does the magnetic compass have?",
    core: "Variation, deviation, magnetic dip (turning and acceleration errors) and oscillation. It's accurate only in straight, level, unaccelerated flight.",
    sections: [
      {
        b: [
          "**Variation**: difference between true and magnetic north",
          "**Deviation**: from the airplane's own magnetic fields; see the **compass correction card**",
          "**Turning error** (Northern Hemisphere): turning to **north, undershoot**; to **south, overshoot** (UNOS)",
          "**Acceleration error** on east/west headings: **accelerate = north**, **decelerate = south** (ANDS)",
          "Partial panel: use **timed turns** instead of chasing the compass",
        ],
      },
    ],
    mnemonic: { name: "UNOS / ANDS", lines: ["Undershoot North, Overshoot South (turns)", "Accelerate North, Decelerate South (east/west headings)"] },
    refs: ["FAA-H-8083-25 (PHAK) flight instruments chapter", "FAA-H-8083-15 (IFH)"],
  },

  "IR.II.B.K2a": [
    {
      title: "How do you use a VOR and DME safely?",
      core: "Identify the VOR by its Morse code, check it within 30 days for IFR, and remember DME is slant range.",
      sections: [
        {
          b: [
            "**Identify** by Morse code (or voice). During maintenance it may send **T-E-S-T** or no ID: don't use it",
            "VOR check within **30 days** for IFR: **±4°** ground, **±6°** airborne, **4°** dual (91.171)",
            "Service volumes: **T** (25 NM), **L** (40 NM), **H**; newer **VL/VH** extend to 70 NM in some bands",
            "DME is **slant range**: it's most off when you're high and close to the station",
          ],
        },
      ],
      refs: ["14 CFR 91.171", "AIM 1-1-3", "AIM 1-1-4", "AIM 1-1-7", "AIM 1-1-8"],
    },
    {
      title: "What are the parts of an ILS?",
      core: "Localizer for left-right, glide slope for up-down, and range information from markers, DME or other fixes.",
      sections: [
        {
          b: [
            "**Localizer**: 108.10–111.95 MHz; about **700 ft wide at the threshold**",
            "**Glide slope**: beam **1.4° wide**, normally **3°**",
            "**Marker beacons**: outer **blue**, middle **amber**, inner **white**",
            "The outer marker can be replaced by a compass locator, DME, VOR or NDB fix, radar or RNAV (91.175(k))",
            "Glide slope out → it's a **localizer approach** with LOC minimums",
          ],
        },
      ],
      refs: ["AIM 1-1-9", "14 CFR 91.175(k)"],
    },
  ],

  "IR.II.B.K2b": [
    {
      title: "What does RAIM do, and what if it isn't available?",
      core: "RAIM lets a GPS check its own integrity with 5 satellites (or 4 plus baro-aiding). If it's predicted unavailable, use other navigation, reroute, delay or cancel.",
      sections: [
        {
          b: [
            "**RAIM** = receiver autonomous integrity monitoring",
            "Needs **5 satellites**, or **4 + baro-aiding**",
            "Check predictions before flight (receiver tool, FAA prediction website, or Flight Service)",
            "RAIM lost **before the FAWP**: don't continue the approach",
          ],
        },
      ],
      refs: ["AIM 1-1-17"],
    },
    {
      title: "What does WAAS add to GPS?",
      core: "Better accuracy and integrity from ground stations and satellites. It enables LPV and LP approaches and lets you plan GPS approaches at both destination and alternate.",
      sections: [
        {
          b: [
            "**LPV**: vertical guidance, DA as low as **200 ft**",
            "**LP**: lateral only, like a localizer",
            "**LNAV/VNAV** and **LNAV** also available",
            "Alternate planning with WAAS: use **LNAV or circling** minimums at the alternate",
          ],
        },
      ],
      refs: ["AIM 1-1-18"],
    },
    {
      title: "How does GPS CDI scaling change during a flight?",
      core: "±5 NM en route, ±1 NM in the terminal area, and it narrows to ±0.3 NM by the final approach fix.",
      sections: [
        {
          b: [
            "**En route**: ±5 NM full scale",
            "**Terminal**: ±1 NM",
            "Approach mode **arms 30 NM** from the airport, goes **active within 2 NM** of the FAWP",
            "Not in approach mode by **2 NM** from the FAWP? The receiver flags: **don't descend**; fly to the MAWP and go missed",
          ],
        },
      ],
      refs: ["AIM 1-1-17"],
    },
  ],

  "IR.II.B.K3": {
    title: "Can you use an EFB instead of paper charts?",
    core: "Yes, under part 91, if the data is current and the device is usable in your cockpit. Have a backup if it fails.",
    sections: [
      {
        b: [
          "Charts and data must be **current**",
          "Plan for **battery, overheating and mounting** problems",
          "Have a **backup**: a second device or paper",
          "A portable EFB moving map is for **situational awareness**, not primary navigation",
        ],
      },
    ],
    refs: ["AC 91-78 (Use of Class 1 or 2 EFBs)", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.II.B.R1": {
    title: "How do you manage automation so it doesn't surprise you?",
    core: "Always know what mode it's in and what it will do next. Verify every change, and go to a lower level of automation when it's not doing what you expect.",
    sections: [
      {
        b: [
          "Read the **mode annunciator** after every change: armed vs active",
          "Ask: **What's it doing? Why? What's next?**",
          "Enter, **verify**, then execute",
          "Not doing what you want? **Step down**: heading mode or hand-fly",
          "Keep your **hand-flying** skills current",
        ],
      },
    ],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.II.B.R2": {
    title: "What's the difference between approved and non-approved navigation equipment?",
    core: "Installed equipment certified for IFR (with an AFM supplement) can be used to navigate. Tablets and portable GPS are for situational awareness only.",
    sections: [
      {
        b: [
          "**Approved**: installed IFR GPS (e.g., TSO-certified, with an **AFM supplement** listing what it's approved for)",
          "Check the supplement: en route, terminal, approach, LPV?",
          "**Non-approved**: tablets, portable GPS, apps. Use for awareness, not to fly the clearance",
        ],
      },
    ],
    examiner: [
      {
        q: "Can you fly an RNAV (GPS) approach using ForeFlight on an iPad?",
        a: "No. It's not approved navigation equipment. I'd fly it with the installed IFR-approved GPS and use the iPad for awareness only.",
      },
    ],
    refs: ["AIM 1-1-17", "AC 90-100", "AC 91-78", "POH/AFM supplements"],
  },

  "IR.II.B.R3": {
    title: "How do you recognize a failed instrument or nav mode?",
    core: "Watch for flags, red X's and annunciations, and cross-check instruments against each other. A failure that doesn't flag is the dangerous one.",
    sections: [
      {
        b: [
          "Glass: **red X** on a failed display; **reversionary mode** if a screen fails",
          "GPS: **integrity or loss-of-navigation** annunciations; it may switch to dead reckoning",
          "VOR/LOC: the **OFF/NAV flag**",
          "Mechanical gyros fail **without a flag**: catch it by **cross-checking**",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.II.B.R4": {
    title: "What risks come with flying with an EFB?",
    core: "Distraction, battery or overheating failure, out-of-date data, and treating it like approved navigation.",
    sections: [
      {
        b: [
          "Set it up **before taxi**; don't fiddle in IMC",
          "Keep it **charged** and out of direct sun",
          "Keep data **current**",
          "Have a **backup** plan",
        ],
      },
    ],
    refs: ["AC 91-78"],
  },

  "IR.II.B.R5": {
    title: "What are the rules and risks with navigation databases?",
    core: "For IFR the database must be current. Load procedures by name from the database and check them against the chart.",
    sections: [
      {
        b: [
          "Databases **must be updated for IFR** (AIM 1-1-17)",
          "Check the **effective and expiration dates** before flight",
          "Load approaches **by name**; don't build your own from waypoints",
          "**Verify** the loaded waypoints, courses and altitudes against the current chart",
        ],
      },
    ],
    examiner: [
      {
        q: "Your GPS database expired yesterday. Can you fly the RNAV (GPS) approach today?",
        a: "No. The AIM says databases must be current for IFR, so I'd plan a non-GPS approach or update the database first.",
      },
    ],
    refs: ["AIM 1-1-17", "AC 90-100"],
  },

  "IR.II.B.S1": {
    title: "What will the examiner check about your instruments and avionics?",
    core: "That you can set up and run your installed avionics smoothly: load, tune, identify, verify modes, and handle a failure.",
    sections: [
      {
        h: "Be ready to show",
        b: [
          "Load a **flight plan, departure and approach**",
          "**Tune and identify** VOR and localizer frequencies",
          "Set the **CDI source** (GPS vs VLOC) correctly",
          "Read **autopilot and GPS annunciations**",
          "What happens if a display fails (reversionary mode)",
        ],
      },
    ],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM supplements"],
  },

  "IR.II.B.S2": {
    title: "What will the examiner check if you use an EFB?",
    core: "That the data is current, you can find what you need quickly, and you have a backup if it fails.",
    sections: [
      {
        h: "Be ready to show",
        b: ["Current charts and data", "Pulling up an approach plate quickly", "Battery level and a backup device or paper", "That it's mounted where it doesn't block controls or view"],
      },
    ],
    refs: ["AC 91-78"],
  },

  // ---------- Task C: Instrument Flight Deck Check ----------
  "IR.II.C.K1": {
    title: "What do you check on the instruments before an IFR flight?",
    core: "That each instrument works and reads correctly before you need it: altimeter, gyros, turn coordinator, compass, VSI, avionics and frequencies.",
    sections: [
      {
        b: [
          "**Altimeter**: set to local altimeter setting; if it's off by more than **75 ft** from field elevation, its accuracy is questionable",
          "**Attitude indicator**: erect and stable within about **5 minutes**",
          "**Taxi turns**: turn coordinator shows the turn, ball goes to the outside; heading and compass turn correctly",
          "**VSI** reads zero (or note the error); **airspeed** reads zero",
          "**Heading indicator** set to the compass",
          "Avionics loaded, frequencies set, **VOR check** if needed",
        ],
      },
    ],
    examiner: [
      {
        q: "Field elevation is 4,557 ft. With the local altimeter setting, your altimeter reads 4,670. Can you go IFR?",
        a: "I wouldn't. That's 113 ft off, more than the 75 ft the Instrument Flying Handbook gives for a usable altimeter. It needs to be checked first.",
      },
    ],
    refs: ["FAA-H-8083-15 (IFH) flight instruments chapter"],
  },

  "IR.II.C.K2": [
    {
      title: "What inspections must be current to fly IFR?",
      core: "Annual (and 100-hour if used for hire), VOR check within 30 days, altimeter/static and transponder within 24 calendar months, ELT, and ADs.",
      sections: [
        {
          b: [
            "**A**nnual inspection, 12 calendar months (91.409)",
            "**V**OR check, **30 days**, if using VOR for IFR (91.171)",
            "**1**00-hour if used for hire or flight instruction for hire (91.409)",
            "**A**ltimeter, static system and altitude reporting, **24 calendar months** (91.411)",
            "**T**ransponder, **24 calendar months** (91.413)",
            "**E**LT, 12 calendar months, and battery (91.207)",
            "Plus all **airworthiness directives** complied with",
          ],
        },
      ],
      mnemonic: { name: "AV1ATE", lines: ["Annual", "VOR (30 days)", "100-hour (if for hire)", "Altimeter / static (24 months)", "Transponder (24 months)", "ELT (12 months)"] },
      refs: ["14 CFR 91.171", "14 CFR 91.207", "14 CFR 91.409", "14 CFR 91.411", "14 CFR 91.413"],
    },
    {
      title: "What equipment does the airplane need for IFR?",
      core: "Everything for VFR day (and night, if at night), plus GRABCARD (91.205(d)).",
      sections: [
        {
          b: [
            "**G**enerator or alternator of adequate capacity",
            "Two-way **R**adio and navigation equipment for the route",
            "Sensitive **A**ltimeter, adjustable for barometric pressure",
            "**B**all (slip-skid indicator)",
            "**C**lock showing hours, minutes and seconds",
            "**A**ttitude indicator · **R**ate-of-turn indicator · **D**irectional gyro",
          ],
        },
      ],
      refs: ["14 CFR 91.205(d)"],
    },
  ],

  "IR.II.C.K3": {
    title: "Can you fly with something inoperative and no MEL?",
    core: "Yes, under 91.213(d), if the item isn't required, and it's removed or deactivated and placarded \"Inoperative,\" and you decide it isn't a hazard.",
    sections: [
      {
        h: "The item must NOT be required by",
        b: [
          "**VFR-day type certification**",
          "The airplane's **equipment list or kinds of operations equipment list (KOEL)**",
          "**91.205** or another rule, for this flight (e.g., IFR)",
          "An **airworthiness directive**",
        ],
      },
      {
        h: "Then",
        b: ["**Remove** it, or **deactivate and placard** it \"Inoperative\" (logged by maintenance if required)", "A pilot or mechanic determines it's **not a hazard**", "Otherwise: a **special flight permit**"],
      },
    ],
    examiner: [
      {
        q: "The turn coordinator is inoperative. Can you fly IFR?",
        a: "No. A rate-of-turn indicator is required for IFR by 91.205(d). I could fly VFR if it's not required for that, it's placarded inoperative, and I decide it's safe.",
      },
    ],
    refs: ["14 CFR 91.213", "14 CFR 91.205(d)"],
  },

  "IR.II.C.R1": {
    title: "Something non-required is inoperative. Is it still a good idea to fly IFR?",
    core: "Legal isn't the same as safe. Think about what that item would do for you if something else fails in IMC.",
    sections: [
      {
        b: [
          "Example: one comm radio out. Legal for IFR, but now **no backup** if the other fails",
          "Autopilot out: legal, but **higher workload** on a long single-pilot trip",
          "Ask: **what's my backup** if the next thing fails?",
          "Raise your **personal minimums** or wait",
        ],
      },
    ],
    refs: ["14 CFR 91.213", "FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.II.C.R2": {
    title: "What's the risk of flying with outdated charts or databases?",
    core: "Procedures, frequencies, altitudes and fixes change. Old data can put you on the wrong course or below a new obstacle altitude, and it isn't legal for GPS navigation under IFR.",
    sections: [
      {
        b: [
          "Charts on a **56-day** cycle; procedures and NOTAMs change in between",
          "GPS databases must be **current for IFR**",
          "Check **NOTAMs and chart supplements** for changes",
        ],
      },
    ],
    refs: ["AIM 1-1-17", "14 CFR 91.103"],
  },

  "IR.II.C.S1": checklist("the preflight and instrument flight deck check"),
};
