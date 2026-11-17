import type { CardContent, ContentMap } from "./types";
import { srm } from "./common";

const archived: CardContent = {
  title: "Archived ACS element",
  core: "The FAA archived this element in the current ACS, so it isn't tested. Its code is kept so the other numbers stay the same.",
  sections: [],
  refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
};

// Area IV — Flight by Reference to Instruments
export const area4: ContentMap = {
  // ---------- Task A: Instrument Flight ----------
  "IR.IV.A.K1": [
    {
      title: "What is attitude instrument flying, in one sentence?",
      core: "Controlling the airplane by setting an attitude and power on the control instruments, then checking the result on the performance instruments and adjusting.",
      sections: [
        {
          b: [
            "**Control instruments**: attitude indicator and power instruments (tach/manifold pressure)",
            "**Performance instruments**: altimeter, airspeed, VSI, heading indicator, turn coordinator",
            "**Navigation instruments**: CDI/HSI, GPS, DME",
            "Method: **establish** attitude and power → **trim** → **cross-check** → **adjust**",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) attitude instrument flying chapter"],
    },
    {
      title: "What are the common instrument scan errors?",
      core: "Fixation (staring at one instrument), omission (leaving one out), and emphasis (relying on one instrument too much).",
      sections: [
        {
          b: [
            "**Fixation**: staring at one instrument while others drift",
            "**Omission**: leaving an instrument out of the scan",
            "**Emphasis**: relying on one instrument instead of the combination",
            "Good scan: the **attitude indicator** is the hub; look out to each instrument and back (radial scan)",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH)"],
    },
  ],

  "IR.IV.A.K2": [
    {
      title: "Which instruments tell you pitch, bank and power?",
      core: "Pitch: attitude indicator, altimeter, VSI, airspeed. Bank: attitude indicator, heading indicator, turn coordinator, compass. Power: tach or manifold pressure, and airspeed.",
      sections: [
        {
          b: [
            "**Pitch**: AI, altimeter, VSI, airspeed",
            "**Bank**: AI, heading indicator, turn coordinator, magnetic compass",
            "**Power**: tachometer / manifold pressure, airspeed",
            "Primary vs supporting changes with the maneuver: e.g., in **straight and level**, the **altimeter** is primary for pitch and the **heading indicator** for bank",
          ],
        },
      ],
      examiner: [
        {
          q: "In a constant-airspeed climb, what's the primary pitch instrument?",
          a: "The airspeed indicator. Once the climb is established, I hold pitch to keep the climb airspeed.",
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) attitude instrument flying chapter"],
    },
    {
      title: "What are the limits of the VSI and turn coordinator?",
      core: "The VSI lags about 6–9 seconds before it shows a stable rate. The turn coordinator shows rate and direction of turn, not bank angle.",
      sections: [
        {
          b: [
            "**VSI** shows the trend right away, but the **rate lags** several seconds",
            "**Turn coordinator**: the miniature airplane shows **rate of roll and rate of turn**, not bank. On the mark = **standard rate** (3°/sec)",
            "**Ball** shows coordination: step on the ball",
            "**Altimeter** lags slightly and has errors from temperature and pressure",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) flight instruments chapter", "FAA-H-8083-25 (PHAK)"],
    },
  ],

  "IR.IV.A.K3": {
    title: "How do you tell a failed instrument from a real attitude change?",
    core: "Cross-check. If one instrument disagrees with all the others, the instrument is likely wrong. If they all agree, the airplane really moved.",
    sections: [
      {
        b: [
          "Compare **pitch** instruments: AI vs altimeter vs VSI vs airspeed",
          "Compare **bank** instruments: AI vs heading indicator vs turn coordinator",
          "Look for **flags, red X's, warnings, vacuum/volts**",
          "Cover the failed instrument (partial panel) and tell ATC",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "14 CFR 91.187"],
  },

  "IR.IV.A.R1": {
    title: "What can degrade your instrument scan?",
    core: "Fatigue, stress, hypoxia, carbon monoxide, dehydration and workload. They all slow your scan and make fixation more likely.",
    sections: [
      {
        b: [
          "**Fatigue** and long days: slower scan, missed details",
          "**Hypoxia and CO**: impaired judgment before you notice symptoms",
          "**Stress and task saturation**: tunnel vision, fixation",
          "**Medications, alcohol, dehydration, hunger**",
          "Fix: **IMSAFE** before the flight; **automation** and ATC help during it",
        ],
      },
    ],
    refs: ["AIM 8-1", "FAA-H-8083-15 (IFH) human factors chapter"],
  },

  "IR.IV.A.R2": [
    {
      title: "Which disorientation illusions catch pilots in IMC?",
      core: "The leans, graveyard spiral, Coriolis, somatogravic and inversion illusions. Your inner ear is wrong; believe the instruments.",
      sections: [
        {
          b: [
            "**Leans**: after a slow roll, leveling feels like banking the other way",
            "**Graveyard spiral**: a long turn feels level; you lose altitude and pull back, tightening it",
            "**Coriolis**: head movement in a turn. Severe tumbling sensation",
            "**Somatogravic**: acceleration feels like pitching up (go-arounds, takeoffs)",
            "**Inversion**: a quick level-off feels like tumbling backward",
          ],
        },
      ],
      refs: ["AIM 8-1-5", "FAA-H-8083-15 (IFH) human factors chapter"],
    },
    {
      title: "Which visual illusions make you fly too low on approach?",
      core: "Anything that makes you think you're higher than you are: narrow or upsloping runways, featureless terrain, rain on the windscreen and haze.",
      sections: [
        {
          b: [
            "**Narrow runway** or **upsloping runway**: you feel **high** → fly **too low**",
            "**Featureless terrain** (water, snow, dark): you feel high → too low (\"black hole\")",
            "**Rain** on the windscreen: feels higher; **haze**: feels farther → too low",
            "**Wide runway** or **downsloping**: you feel low → fly too high",
            "**Fog**: entering it can feel like pitching up → steepening",
            "Defense: use the **glide path or VGSI** and fly the numbers",
          ],
        },
      ],
      refs: ["AIM 8-1-5"],
    },
  ],

  "IR.IV.A.R3": {
    title: "What's risky about flying an unfamiliar airplane or avionics in IMC?",
    core: "More head-down time, unknown failure modes and automation surprises. Get training, practice in VMC, and keep your minimums high at first.",
    sections: [
      {
        b: [
          "Train with a **CFII** in that airplane or avionics",
          "Read the **POH and avionics supplements**",
          "Practice **failures and reversionary modes** before you need them",
          "Fly in good weather first; **higher personal minimums** until fluent",
        ],
      },
    ],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.IV.A.S1": {
    title: "What tolerances must you hold in basic instrument flight?",
    core: "Altitude ±100 ft, heading ±10°, airspeed ±10 kt, and bank angle ±5° in turns.",
    sections: [{ h: "Standards", b: ["Altitude **±100 ft** in level flight", "Heading **±10°**", "Airspeed **±10 kt**", "Bank **±5°** in turns"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.IV.A.S2": {
    title: "What does the examiner look for in your scan and corrections?",
    core: "A steady cross-check and small, prompt corrections in pitch, bank, power and trim, not big chases.",
    sections: [
      {
        h: "Standards",
        b: [
          "Scan from the **attitude indicator** out and back",
          "**Small** attitude changes (a bar width, a few degrees of bank)",
          "**Trim** off control pressure",
          "Power first for speed changes, then pitch, then trim",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  // ---------- Task B: Recovery from Unusual Flight Attitudes ----------
  "IR.IV.B.K1": [
    {
      title: "How do you recover from a nose-high unusual attitude?",
      core: "Add power, lower the nose, then level the wings, keeping coordinated.",
      sections: [
        {
          b: [
            "Clues: **airspeed decreasing**, altimeter and VSI showing a climb",
            "**Power up** (as needed)",
            "**Nose down** to the level-flight attitude, preventing a stall",
            "**Level the wings**, ball centered",
            "Return to the assigned altitude and heading once stable",
          ],
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) attitude instrument flying chapter"],
    },
    {
      title: "How do you recover from a nose-low unusual attitude?",
      core: "Reduce power, level the wings, then raise the nose smoothly to level flight.",
      sections: [
        {
          b: [
            "Clues: **airspeed increasing**, altimeter and VSI showing a descent",
            "**Power back** to stop the airspeed building",
            "**Level the wings first** (pulling while banked tightens a spiral)",
            "**Raise the nose** smoothly to level, without overstressing",
            "Partial panel: use the **turn coordinator** to level the wings, and the altimeter/airspeed to stop the pitch change",
          ],
        },
      ],
      examiner: [
        {
          q: "Why level the wings before raising the nose in a nose-low attitude?",
          a: "Pulling back while banked mostly tightens the turn and increases load factor, which can turn it into a graveyard spiral or overstress the airplane. Leveling first makes the pull-up effective.",
        },
      ],
      refs: ["FAA-H-8083-15 (IFH) attitude instrument flying chapter"],
    },
  ],

  "IR.IV.B.K2": {
    title: "How do unusual attitudes start, and how do you prevent them?",
    core: "Distraction, disorientation, turbulence, bad trim, instrument failures or task overload. Keep a disciplined scan, trim, and use the autopilot when busy.",
    sections: [
      {
        b: [
          "**Flight causes**: turbulence, poor trim, fixation, looking at charts too long",
          "**Physiological**: spatial disorientation, fatigue, hypoxia",
          "**Environmental**: IMC, night, icing, wake turbulence",
          "**Equipment**: failed attitude indicator, vacuum or AHRS failure, autopilot malfunction",
          "Prevention: keep **scanning**, keep it **trimmed**, brief tasks **before** they get busy",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "AIM 8-1-5"],
  },

  "IR.IV.B.K3": {
    title: "You fly into IMC by accident. How do you get back to VMC?",
    core: "Fly the airplane on instruments first, then turn back to where it was VMC (usually a 180° turn), climb if terrain allows, and get help from ATC.",
    sections: [
      {
        b: [
          "**Aviate**: wings level, transition to instruments, check attitude and power",
          "**Standard-rate 180° turn** back toward known VMC, if that's the best way out",
          "**Climb** to a safe altitude if terrain or obstacles are a concern",
          "**Tell ATC**: ask for help, a clearance, or vectors; **declare an emergency** if needed",
          "Use the **autopilot** if you have one to reduce workload",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "FAA-H-8083-3 (Airplane Flying Handbook)", "14 CFR 91.3"],
  },

  "IR.IV.B.K4": {
    title: "How can automation help with unusual attitudes?",
    core: "Use the autopilot to cut workload and prevent upsets. Some systems have envelope protection or a level button. Know what yours does and when it won't help.",
    sections: [
      {
        b: [
          "Engage the autopilot **before** you're overloaded",
          "Some autopilots have a **level mode** or **electronic stability protection**",
          "Don't engage an autopilot in an **extreme attitude** unless the POH allows it",
          "If the autopilot caused the upset, **disconnect** it",
        ],
      },
    ],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM"],
  },

  "IR.IV.B.R1": {
    title: "What situations lead to loss of control in IMC?",
    core: "Stress, task saturation, a poor scan, distractions and spatial disorientation. Most loss-of-control accidents start with the pilot falling behind.",
    sections: [
      {
        b: [
          "**Task saturation**: too many things at once (programming, radio, charts)",
          "**Distraction** pulls the eyes off the instruments",
          "**Spatial disorientation** wins if the scan breaks down",
          "Defense: **prioritize flying**, use automation, ask ATC for time",
        ],
      },
    ],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)", "FAA-H-8083-15 (IFH)"],
  },

  "IR.IV.B.R2": archived,

  "IR.IV.B.R3": {
    title: "What operating limits matter during an upset recovery?",
    core: "Stay below VNE and within load limits on a nose-low recovery, and avoid a stall on a nose-high one.",
    sections: [
      {
        b: [
          "Nose-low: airspeed builds fast: **power back** and recover smoothly to avoid **VNE** and overstress",
          "Nose-high: **stall** risk: lower the nose before airspeed gets too low",
          "Above **VA** (maneuvering speed), full control inputs can overstress the airplane",
        ],
      },
    ],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "POH/AFM"],
  },

  "IR.IV.B.R4": {
    title: "How do you read the instruments in an unusual attitude?",
    core: "Look at the attitude indicator first if it works. Then airspeed and altimeter tell you nose-high or nose-low, and the turn coordinator tells you which way to level the wings.",
    sections: [
      {
        b: [
          "**Airspeed decreasing** + climbing = nose-high",
          "**Airspeed increasing** + descending = nose-low",
          "**Turn coordinator**: which way you're turning",
          "If the AI may have **tumbled or failed**, use the other instruments",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  "IR.IV.B.R5": {
    title: "Why assess the attitude before you start the recovery?",
    core: "Nose-high and nose-low need opposite recoveries. A quick, correct look prevents making it worse.",
    sections: [{ b: ["Decide **nose-high or nose-low** first", "Then apply that recovery in order", "Doing the wrong one (e.g., pulling in a nose-high stall) makes it worse"] }],
    refs: ["FAA-H-8083-15 (IFH)"],
  },

  "IR.IV.B.R6": {
    title: "What control input errors cause or worsen upsets?",
    core: "Pulling back while banked, big uncoordinated inputs, chasing the instruments, and wrong trim.",
    sections: [
      {
        b: [
          "**Pulling while banked** tightens the spiral",
          "**Overcontrolling** and chasing the VSI",
          "**Uncoordinated** rudder in a stall can lead to a spin",
          "**Runaway or wrong trim** fights you",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "FAA-H-8083-3 (Airplane Flying Handbook)"],
  },

  "IR.IV.B.R7": {
    title: "What makes recovering by instruments alone hard?",
    core: "Your body tells you something different from the instruments. You have to override the sensations and fly what you see.",
    sections: [{ b: ["Trust the **instruments**, not your inner ear", "Smooth, deliberate inputs", "Practice **partial-panel** recoveries with an instructor"] }],
    refs: ["FAA-H-8083-15 (IFH)", "AIM 8-1-5"],
  },

  "IR.IV.B.R8": {
    title: "What collision hazards come with an upset in IMC?",
    core: "You may leave your assigned altitude into other traffic or toward terrain. Tell ATC as soon as you can.",
    sections: [{ b: ["Altitude loss can put you **below the MEA** or near terrain", "Altitude changes conflict with **other IFR traffic**", "Tell ATC: \"**unable to maintain altitude**\" and what you're doing"] }],
    refs: ["AIM 5-3-3", "14 CFR 91.123"],
  },

  "IR.IV.B.R9": {
    title: "How do distractions and lost awareness lead to upsets?",
    core: "A task (radio, programming, a chart) pulls your eyes away and the airplane drifts into an attitude you don't notice until it's unusual.",
    sections: [{ b: ["Do tasks in **short bursts**, scanning between", "Brief and program **ahead**", "Use the **autopilot** for heads-down work"] }],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)"],
  },

  "IR.IV.B.S1": {
    title: "What does the examiner want in an unusual attitude recovery?",
    core: "Recognize nose-high or nose-low, then use the right control, power and configuration in the right order to return to stable level flight.",
    sections: [
      {
        h: "Standards",
        b: [
          "**Identify** the attitude from the instruments",
          "**Nose-high**: power, nose down, level wings",
          "**Nose-low**: power off, level wings, nose up",
          "Return to **stabilized level flight** without stalling or overstressing",
        ],
      },
    ],
    refs: ["FAA-H-8083-15 (IFH)", "FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.IV.B.S2": srm("unusual attitude recovery"),
};
