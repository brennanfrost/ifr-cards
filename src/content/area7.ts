import type { CardContent, ContentMap } from "./types";
import { checklist, srm } from "./common";

// Area VII — Emergency Operations
// Tasks B and C apply to multiengine airplanes (AMEL/AMES) only.

const meNote = "This Task is only tested on a multiengine checkride.";

const meRecognize: CardContent = {
  title: "An engine fails on instruments in a twin. What comes first?",
  core: "Keep control: pitch for blue line (VYSE), stop the yaw with rudder, then work the memory items.",
  sections: [
    {
      b: [
        "**Directional control**: rudder to stop the yaw",
        "**Pitch** for **VYSE** (blue line), or VXSE if obstacles",
        "Power **up** on both engines, then identify",
        `${meNote}`,
      ],
    },
  ],
  refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter", "POH/AFM"],
};

const meSecure: CardContent = {
  title: "How do you identify, verify and feather the failed engine?",
  core: "Mixture, props, throttles forward; flaps and gear up; identify (dead foot, dead engine), verify (close its throttle), then feather.",
  sections: [
    {
      b: [
        "**Mixtures, props, throttles** forward (POH order)",
        "**Flaps and gear up** to cut drag",
        "**Identify**: dead foot = dead engine",
        "**Verify**: retard the suspected engine's throttle; no change = right engine",
        "**Feather** that engine (simulated on the checkride; the examiner sets zero thrust)",
      ],
    },
  ],
  mnemonic: { name: "Identify, Verify, Feather", lines: ["Dead foot, dead engine", "Throttle back to verify", "Feather the dead engine"] },
  refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter", "POH/AFM"],
};

const meControls: CardContent = {
  title: "How do you fly a twin with one engine out for best performance?",
  core: "Bank about 2–5° toward the operating engine with the ball about half out toward it, to minimize sideslip, and trim it out.",
  sections: [
    {
      b: [
        "**Raise the dead**: bank toward the **good** engine",
        "About **2–5°** of bank, ball **half out** toward the good engine (zero sideslip)",
        "**Trim** rudder and elevator to reduce workload",
        "Use the POH's recommended technique if different",
      ],
    },
  ],
  refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter", "POH/AFM"],
};

export const area7: ContentMap = {
  // ---------- Task A: Loss of Communications ----------
  "IR.VII.A.K1": [
    {
      title: "Lost comms in VFR conditions: what do you do?",
      core: "Squawk 7600, continue VFR and land as soon as practicable.",
      sections: [
        {
          b: [
            "Squawk **7600**",
            "**Stay VFR** and **land as soon as practicable** (91.185(b))",
            "That doesn't mean the nearest airport at any cost, but don't continue a long IFR trip",
            "Call ATC by **phone** after landing",
          ],
        },
      ],
      refs: ["14 CFR 91.185", "AIM 6-4-1"],
    },
    {
      title: "Lost comms in IMC: route and altitude?",
      core: "Route: Assigned, Vectored, Expected, Filed. Altitude: the highest of the Minimum, Expected and Assigned, for each segment.",
      sections: [
        {
          b: [
            "Route: **AVEF**",
            "Altitude: highest of **MEA** (minimum IFR), **E**xpected, **A**ssigned, segment by segment",
            "Squawk **7600**",
          ],
        },
      ],
      mnemonic: { name: "AVEF / MEA", lines: ["Assigned, Vectored, Expected, Filed", "Highest of: Minimum IFR, Expected, Assigned"] },
      refs: ["14 CFR 91.185", "AIM 6-4-1"],
    },
    {
      title: "Lost comms: when do you begin the approach at the destination?",
      core: "At the EFC time if you have one. Otherwise at your ETA from the filed or amended time en route. Hold if you arrive early.",
      sections: [
        {
          b: [
            "Clearance limit **is** an approach fix: start the approach at the **EFC**, or the **ETA** if no EFC",
            "Clearance limit **isn't**: leave it at the EFC (or on arrival), go to an approach fix, start at the **ETA**",
            "Arrive early: **hold** at the fix until it's time",
          ],
        },
      ],
      examiner: [
        {
          q: "Your filed ETE is 1:30 and you departed at 1500Z. You lose comms and arrive over the IAF at 1620Z. When do you start the approach?",
          a: "At 1630Z, my ETA. I'd hold at the IAF until then, at the highest of the MEA, expected and assigned altitudes, then start the approach.",
        },
      ],
      refs: ["14 CFR 91.185(c)(3)", "AIM 6-4-1"],
    },
    {
      title: "How do you try to re-establish communication?",
      core: "Check the obvious first (volume, frequency, headset), try the previous frequency, Flight Service, another facility or 121.5, and listen on navaid voice.",
      sections: [
        {
          b: [
            "Check **volume, squelch, headset jacks, audio panel**, circuit breakers",
            "Go back to the **previous frequency**",
            "Try **Flight Service**, another ATC frequency, or **121.5**",
            "Monitor **VOR voice** for ATC instructions",
            "Use a **handheld radio** or **phone** if you have one",
          ],
        },
      ],
      refs: ["AIM 6-4-3", "AIM 6-4-1"],
    },
  ],

  "IR.VII.A.R1": {
    title: "Why do pilots lose communications?",
    core: "Usually something simple: wrong frequency, volume down, a stuck mic, a loose headset or flying out of range. Sometimes an electrical or radio failure.",
    sections: [{ b: ["**Wrong frequency** after a handoff", "**Volume/squelch** or audio panel set wrong", "**Stuck mic** blocking the frequency", "**Out of range** (low altitude, terrain)", "**Radio or electrical** failure"] }],
    refs: ["AIM 6-4-3"],
  },

  "IR.VII.A.R2": {
    title: "What's the risk of not following lost comms procedures?",
    core: "ATC is protecting airspace based on what 91.185 says you'll do. If you do something else, they can't keep traffic away from you.",
    sections: [{ b: ["Follow **91.185** exactly unless you're in VFR conditions", "If an emergency forces a different plan, squawk **7700** as needed and use **91.3** authority"] }],
    refs: ["14 CFR 91.185", "14 CFR 91.3"],
  },

  "IR.VII.A.S1": {
    title: "How do you recognize a loss of communications?",
    core: "ATC goes quiet longer than usual, or doesn't answer. Check your radios before deciding it's a real failure.",
    sections: [{ h: "Standards", b: ["Notice **silence** on a normally busy frequency", "No reply to **two or more** calls", "Check radio setup first"] }],
    refs: ["AIM 6-4-3"],
  },
  "IR.VII.A.S2": {
    title: "What do you do to try to get comms back?",
    core: "Work through radio setup, the previous frequency, other facilities, 121.5 and navaid voice, and squawk 7600.",
    sections: [{ h: "Standards", b: ["Radio checks", "Previous frequency, FSS, **121.5**", "Squawk **7600**"] }],
    refs: ["AIM 6-4-1", "AIM 6-4-3"],
  },
  "IR.VII.A.S3": {
    title: "Lost comms: continue to the destination or deviate?",
    core: "In VFR conditions, land as soon as practicable. In IMC, continue per 91.185 unless an emergency requires something else.",
    sections: [{ h: "Standards", b: ["**VFR**: land as soon as practicable", "**IMC**: AVEF route, MEA altitude", "Explain your reasoning to the examiner"] }],
    refs: ["14 CFR 91.185"],
  },
  "IR.VII.A.S4": {
    title: "How do you work out when to begin the approach?",
    core: "From the EFC, or your ETA based on the filed or amended time en route.",
    sections: [{ h: "Standards", b: ["Find your **ETA**: departure time + filed ETE (or amended)", "Use the **EFC** if one was given", "Hold if early"] }],
    refs: ["14 CFR 91.185(c)(3)"],
  },
  "IR.VII.A.S5": srm("a loss of communications"),

  // ---------- Task B: One Engine Inoperative (multiengine) ----------
  "IR.VII.B.K1": {
    title: "What's the procedure for an engine failure in cruise on instruments?",
    core: "Control (rudder and VYSE), power up, clean up, identify, verify, feather, then secure the engine, tell ATC and decide where to land.",
    sections: [
      {
        b: [
          "**Fly**: rudder, pitch for **VYSE**, bank toward the good engine",
          "**Power, clean up, identify, verify, feather**",
          "**Secure** the dead engine per the POH checklist",
          "**Tell ATC**: declare an emergency, and ask for an altitude you can hold",
          meNote,
        ],
      },
    ],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter", "POH/AFM"],
  },

  "IR.VII.B.R1": {
    title: "What's the risk in identifying the failed engine?",
    core: "Feathering the good engine. Always verify by closing the suspected engine's throttle before feathering.",
    sections: [{ b: ["**Dead foot, dead engine**", "**Verify** with the throttle first", "Engine instruments can be misleading early on"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },

  "IR.VII.B.R2": {
    title: "What if you can't hold altitude on one engine?",
    core: "Above the single-engine service ceiling you'll drift down. Tell ATC, ask for a lower altitude, and pick a landing spot within reach.",
    sections: [{ b: ["Check the **single-engine service ceiling** before flight", "**Drift down** at VYSE", "Plan around **MEAs and terrain**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter", "POH/AFM"],
  },

  "IR.VII.B.R3": {
    title: "What low-altitude dangers come with an engine failure?",
    core: "Loss of control below VMC, stalls and spins with asymmetric thrust, and CFIT if you can't climb.",
    sections: [{ b: ["Never below **VMC** (red line)", "Keep **coordinated** with rudder", "Know terrain and **MEAs**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },

  "IR.VII.B.R4": {
    title: "How do you manage workload after an engine failure in IMC?",
    core: "Fly first, use the autopilot if it's approved for single-engine use, and get ATC's help with vectors and altitudes.",
    sections: [{ b: ["**Aviate, navigate, communicate**", "**Autopilot** if the AFM allows", "Ask ATC for a **simple plan**"] }],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.VII.B.R5": {
    title: "What fuel issues come with flying on one engine?",
    core: "Higher fuel flow on the good engine, and fuel in the dead engine's tanks may need crossfeed to be usable.",
    sections: [{ b: ["Know the **crossfeed** system and POH limits", "Recalculate **range and endurance**", "Watch **fuel imbalance**"] }],
    refs: ["POH/AFM"],
  },

  "IR.VII.B.R6": {
    title: "Why does configuration matter after an engine failure?",
    core: "Drag from gear, flaps or a windmilling prop can make the difference between climbing and descending. Clean up and feather.",
    sections: [{ b: ["Gear and flaps **up**", "**Feather** the dead prop", "Close the dead engine's **cowl flaps**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },

  "IR.VII.B.S1": meRecognize,
  "IR.VII.B.S2": meSecure,
  "IR.VII.B.S3": {
    title: "What speed do you hold with one engine inoperative?",
    core: "VYSE (blue line) for best single-engine climb, trimmed.",
    sections: [{ h: "Standards", b: ["**VYSE** (blue line)", "**Trim** for it", meNote] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },
  "IR.VII.B.S4": meControls,
  "IR.VII.B.S5": checklist("securing a failed engine"),
  "IR.VII.B.S6": {
    title: "Should you try to fix the engine before feathering?",
    core: "Only if altitude and time allow, using the POH's troubleshooting items (fuel, mixture, mags). Control and performance come first.",
    sections: [{ h: "Standards", b: ["Check **fuel selector, pumps, mixture, mags**", "Don't delay feathering if you need the performance"] }],
    refs: ["POH/AFM"],
  },
  "IR.VII.B.S7": {
    title: "What do you watch on the good engine?",
    core: "Its temperatures and pressures, since it's working harder. Adjust power and cowl flaps to keep it within limits.",
    sections: [{ h: "Standards", b: ["**CHT, oil temp, oil pressure**", "**Cowl flaps** open on the good engine as needed", "Stay within **limits**"] }],
    refs: ["POH/AFM"],
  },
  "IR.VII.B.S8": {
    title: "What tolerances apply with one engine inoperative?",
    core: "Altitude ±100 ft (or minimum sink if you can't hold it), airspeed ±10 kt, heading ±10°.",
    sections: [{ h: "Standards", b: ["Altitude **±100 ft** or minimum sink", "Airspeed **±10 kt**", "Heading **±10°**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VII.B.S9": {
    title: "After an engine failure, how do you decide where to land?",
    core: "Based on single-engine performance, weather, terrain and distance: usually the nearest suitable airport with an approach you can fly.",
    sections: [{ h: "Standards", b: ["Can you hold **altitude**?", "Nearest airport with **good weather** and an approach", "Declare an **emergency**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },
  "IR.VII.B.S10": {
    title: "What limits do you stay within on one engine?",
    core: "Above VMC, within engine limits and below max bank and load limits from the POH.",
    sections: [{ h: "Standards", b: ["Above **VMC**", "Engine within **limits**", "Smooth, coordinated maneuvering"] }],
    refs: ["POH/AFM"],
  },
  "IR.VII.B.S11": srm("an engine failure"),

  // ---------- Task C: Approach with an Inoperative Engine (multiengine) ----------
  "IR.VII.C.K1": {
    title: "How do you fly an instrument approach with one engine out?",
    core: "Fly it like a normal approach but plan ahead: higher power on the good engine, delay gear and flaps until landing is assured (per the POH), and avoid a single-engine go-around late.",
    sections: [
      {
        b: [
          "Brief early: **ask for vectors** and a long final",
          "Keep **speed up** and above VYSE until committed",
          "**Gear down** at glide slope intercept or the FAF, or as the POH says; **flaps** when landing is assured",
          "Pick a **decision point**: below it, a single-engine go-around may not be possible",
          meNote,
        ],
      },
    ],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter", "POH/AFM"],
  },

  "IR.VII.C.R1": {
    title: "What if an engine fails during the approach or landing?",
    core: "Control first. If you're committed to land and can make it, continue. If not, go missed only if single-engine performance allows.",
    sections: [{ b: ["Close in with gear and flaps down: **land** if you can", "Higher up: clean up, **identify, verify, feather**, and climb or hold", "Know your **decision point** in advance"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },

  "IR.VII.C.R2": {
    title: "Archived ACS element",
    core: "The FAA archived this element in the current ACS, so it isn't tested. Its code is kept so the other numbers stay the same.",
    sections: [],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.VII.C.R3": {
    title: "When do you configure on a single-engine approach?",
    core: "Late: gear and flaps when landing is assured, as the POH recommends, to avoid drag you can't climb against.",
    sections: [{ b: ["Gear at the **FAF or glide slope intercept** (POH)", "Full flaps only when the landing is **certain**", "Too early = drag you may not overcome"] }],
    refs: ["POH/AFM", "FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },

  "IR.VII.C.R4": {
    title: "What low-altitude dangers come with a single-engine approach?",
    core: "Losing control near VMC with high power on one engine, stalling in a turn, or descending into terrain if you can't climb on a missed approach.",
    sections: [{ b: ["Stay **well above VMC**", "Avoid steep turns toward the dead engine", "Respect the **missed approach climb gradient**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },

  "IR.VII.C.R5": {
    title: "How do you handle the workload of a single-engine instrument approach?",
    core: "Brief early, ask ATC for extra time and vectors, use the autopilot if approved, and keep the plan simple.",
    sections: [{ b: ["Declare an **emergency**", "Ask for **vectors** and a long final", "One task at a time"] }],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.VII.C.R6": {
    title: "Can you go around on one engine?",
    core: "Maybe, depending on weight, altitude, temperature and configuration. Below a certain point it may not be possible, so plan that decision before the approach.",
    sections: [{ b: ["Check **single-engine climb performance** for today", "Set a **decision altitude** below which you're committed to land", "Go-around: power, pitch for **VYSE**, clean up"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter", "POH/AFM"],
  },

  "IR.VII.C.S1": meRecognize,
  "IR.VII.C.S2": meSecure,
  "IR.VII.C.S3": meControls,
  "IR.VII.C.S4": checklist("an engine-out approach"),
  "IR.VII.C.S5": {
    title: "What do you monitor during a single-engine approach?",
    core: "The good engine's temperatures and pressures, fuel, and other systems that may be powered by the dead engine (vacuum, alternator).",
    sections: [{ h: "Standards", b: ["Good engine **limits**", "**Systems** lost with the dead engine", "Fuel balance"] }],
    refs: ["POH/AFM"],
  },
  "IR.VII.C.S6": {
    title: "What clearance do you ask for after an engine failure?",
    core: "An approach clearance (real or simulated) to a suitable airport, and you follow it.",
    sections: [{ h: "Standards", b: ["Declare an emergency (simulated on the checkride)", "Request the **approach** and vectors", "Comply with the clearance"] }],
    refs: ["AIM 6-1", "14 CFR 91.3"],
  },
  "IR.VII.C.S7": {
    title: "What tolerances apply on a single-engine approach?",
    core: "Altitude ±100 ft (or minimum sink), airspeed ±10 kt, heading ±10°.",
    sections: [{ h: "Standards", b: ["Altitude **±100 ft**", "Airspeed **±10 kt**", "Heading **±10°**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VII.C.S8": {
    title: "How do you plan the descent on a single-engine approach?",
    core: "Arrive at the MDA or DA in a position to land straight in or circle, without needing extra power.",
    sections: [{ h: "Standards", b: ["Steady descent to **minimums**", "In position for a **normal descent** to the runway"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VII.C.S9": {
    title: "How closely must you track the final with one engine out?",
    core: "Within ¾-scale deflection on the lateral and (if used) vertical guidance.",
    sections: [{ h: "Standards", b: ["Lateral **¾-scale**", "Vertical **¾-scale**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VII.C.S10": {
    title: "What limits must you stay within on a single-engine approach?",
    core: "Above VMC, within engine and airframe limits.",
    sections: [{ h: "Standards", b: ["Above **VMC**", "Engine within **limits**"] }],
    refs: ["POH/AFM"],
  },
  "IR.VII.C.S11": {
    title: "What if you have to circle on one engine?",
    core: "Use the minimums for your approach category at the speed you'll fly, and keep the circle tight and coordinated.",
    sections: [{ h: "Standards", b: ["Category for your **actual speed**", "Avoid turns toward the dead engine where possible"] }],
    refs: ["AIM 5-4-7", "AIM 5-4-20"],
  },
  "IR.VII.C.S12": {
    title: "What does the examiner want in the single-engine landing?",
    core: "A controlled, stabilized landing with directional control, in the touchdown zone.",
    sections: [{ h: "Standards", b: ["Stabilized", "Directional control as power comes off", "Touchdown zone"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook) multiengine chapter"],
  },
  "IR.VII.C.S13": checklist("landing with an inoperative engine"),
  "IR.VII.C.S14": srm("a single-engine approach"),

  // ---------- Task D: Approach with Loss of Primary Flight Instrument Indicators ----------
  "IR.VII.D.K1": {
    title: "How do you recognize that a primary flight instrument has failed?",
    core: "Flags or red X's on glass, or one instrument disagreeing with the rest. Then cover it, fly partial panel and tell ATC.",
    sections: [
      {
        b: [
          "**Glass**: red X, reversionary mode, AHRS or ADC failure messages",
          "**Steam gauges**: a gyro drifting with **no flag**",
          "**Cross-check**: AI vs turn coordinator vs heading vs altimeter/VSI",
          "**Tell ATC** (91.187): what's failed and what help you need",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "14 CFR 91.187"],
  },

  "IR.VII.D.K2": [
    {
      title: "What are the common failure modes of primary flight instruments?",
      core: "Vacuum or gyro failure, AHRS failure, air data (pitot-static) failure, and display or electrical failure.",
      sections: [
        {
          b: [
            "**Vacuum/gyro**: attitude and heading indicators drift",
            "**AHRS**: attitude and heading lost on the PFD → use **standby** instruments",
            "**ADC / pitot-static**: airspeed, altitude, VSI wrong or lost",
            "**Display/electrical**: screen goes dark → **reversionary** mode or standby",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH)", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
    },
    {
      title: "How do you fly partial panel?",
      core: "Cover the failed instruments. Use the turn coordinator for bank and standard-rate turns, the altimeter, airspeed and VSI for pitch, and timed turns with the compass for heading.",
      sections: [
        {
          b: [
            "**Cover** the failed instruments so they don't mislead you",
            "**Bank**: turn coordinator; **standard-rate** turns",
            "**Pitch**: altimeter, VSI, airspeed",
            "**Heading**: **timed turns** (3°/sec), then check the compass when level",
            "Ask ATC for a **no-gyro** approach: they'll say \"turn left\"/\"stop turn\"; standard rate until final, then half standard rate",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH)", "AIM 5-4-11"],
    },
  ],

  "IR.VII.D.R1": {
    title: "How should you use the standby or secondary flight display?",
    core: "Switch your scan to it right away, keep it in the scan as a cross-check before anything fails, and know its power source and how long it lasts.",
    sections: [{ b: ["Know the **standby battery** endurance", "Practice scanning it in **training**", "It's small: fly **smooth** and simple"] }],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM"],
  },

  "IR.VII.D.R2": {
    title: "What's the biggest risk after losing primary instruments?",
    core: "Losing control from disorientation or a slow scan. Keep the airplane upright and trimmed before anything else.",
    sections: [{ b: ["**Aviate first**", "Small, smooth inputs", "Get to **VMC** or the nearest good-weather airport"] }],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  "IR.VII.D.R3": {
    title: "How do you manage workload when flying partial panel?",
    core: "Simplify: ask ATC for vectors, a simple approach and good weather; use the autopilot if it still works; do one thing at a time.",
    sections: [{ b: ["Declare an **emergency** if needed", "Ask for **no-gyro vectors** or a long final", "Brief the approach before you start it"] }],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)", "14 CFR 91.3"],
  },

  "IR.VII.D.S1": {
    title: "What do you tell ATC after an instrument failure?",
    core: "That you can't comply (if so), what's failed, how it limits you, and what help you want.",
    sections: [{ h: "Standards", b: ["Aircraft ID, **equipment affected**, **impairment**, **help desired** (91.187)", "\"**Unable**\" if you can't comply"] }],
    refs: ["14 CFR 91.187"],
  },
  "IR.VII.D.S2": {
    title: "What does the examiner want on a partial-panel approach?",
    core: "A non-precision approach flown without the primary instruments, to the same standards as Area VI Task A.",
    sections: [{ h: "Standards", b: ["Same tolerances as a **non-precision approach**", "MDA **+100/−0**", "Go missed if not stable or no references"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VII.D.S3": srm("an instrument failure"),
};
