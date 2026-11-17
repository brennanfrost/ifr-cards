import type { CardContent, ContentMap } from "./types";
import { checklist, mfd, srm } from "./common";

// Area VI — Instrument Approach Procedures

// ---- Skill elements shared by the non-precision and precision Tasks ----
const comms = (kind: string): CardContent => ({
  title: `What radio calls does the examiner expect on a ${kind} approach?`,
  core: "Contact the right facility for each segment, use standard phraseology, and read back the approach clearance.",
  sections: [
    {
      h: "Standards",
      b: [
        "Read back the **approach clearance**, including any altitude to maintain until established",
        "Switch to **tower or CTAF** when told (or at the FAF at untowered fields)",
        "Not in radar contact: report **leaving the FAF or outer marker** inbound",
        "Report a **missed approach** and request what you want next",
      ],
    },
  ],
  refs: ["AIM 5-4", "AIM 5-3-3"],
});

const tune = (kind: string): CardContent => ({
  title: `How do you set up the navigation for a ${kind} approach?`,
  core: "Select and tune the right navaid or load the approach, identify it, set the final course, and confirm it's working.",
  sections: [
    {
      h: "Standards",
      b: [
        "**Load the approach by name** from a current database, or tune the navaid",
        "**Identify** it (Morse code) and check for **flags**",
        "Set the **final approach course** and correct **CDI source** (GPS vs VLOC)",
        "Check **NOTAMs** for outages",
      ],
    },
  ],
  refs: ["AIM 1-1-3", "AIM 1-1-17"],
});

const comply: CardContent = {
  title: "What does complying with approach clearances look like?",
  core: "Fly exactly what you're cleared for: routing, altitudes until established, speeds and the procedure as published.",
  sections: [
    {
      h: "Standards",
      b: [
        "On vectors: **maintain the last assigned altitude until established** on a published segment",
        "Fly the **whole procedure** from the IAF unless cleared otherwise",
        "**No procedure turn** on vectors, a timed approach, or NoPT, unless ATC clears it",
      ],
    },
  ],
  refs: ["14 CFR 91.175", "AIM 5-4-9", "AIM 5-5"],
};

const inop: CardContent = {
  title: "On the approach, an instrument looks wrong. What does the examiner want?",
  core: "Notice it quickly by cross-checking, decide if you can still fly the approach, and take action: switch sources, go missed, or ask ATC for help.",
  sections: [
    {
      h: "Standards",
      b: [
        "Spot **flags**, failed displays, or an instrument that disagrees with the rest",
        "Decide whether the approach can be **continued legally** with what's left",
        "**Tell ATC** (91.187) and ask for vectors or a different approach",
      ],
    },
  ],
  refs: ["14 CFR 91.187", "FAA-H-8083-15 (IFH)"],
};

const unable: CardContent = {
  title: "When do you tell ATC \"unable\" during an approach?",
  core: "Any time you can't comply with a clearance: an altitude, a speed, a route, or an approach you can't fly with your equipment or the weather.",
  sections: [{ h: "Standards", b: ["Say \"**unable**\" right away", "Say what you **can** do instead", "Never accept something you can't fly safely"] }],
  refs: ["14 CFR 91.123", "AIM 4-4"],
};

const config = (kind: string): CardContent => ({
  title: `How do you configure the airplane for a ${kind} approach?`,
  core: "Use the POH speeds and a consistent flap and power plan, adjusted for wind, turbulence and icing, so you arrive stabilized.",
  sections: [
    {
      h: "Standards",
      b: [
        "A set **approach speed and configuration** for each segment",
        "Add speed for **gusts**; follow the POH in **icing** (e.g., limited flaps)",
        "Configured **before the final approach fix** so you're stable on final",
      ],
    },
  ],
  refs: ["POH/AFM", "FAA-H-8083-3 (Airplane Flying Handbook)"],
});

const beforeFAF: CardContent = {
  title: "What tolerances must you hold before the final approach segment?",
  core: "Altitude ±100 ft, heading ±10°, airspeed ±10 kt, and no more than ¾-scale CDI deflection.",
  sections: [{ h: "Standards", b: ["Altitude **±100 ft**", "Heading **±10°**", "Airspeed **±10 kt**", "Course within **¾-scale**"] }],
  refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
};

const adjustMins = (what: string): CardContent => ({
  title: `How do you adjust the ${what} for your airplane and the day's conditions?`,
  core: "Use the minimums for your approach category, then raise them for anything inoperative or NOTAMed, using the TPP inoperative components table.",
  sections: [
    {
      h: "Standards",
      b: [
        "Use your **approach category** (or the next higher one if you're faster)",
        "**Inoperative approach lights** usually raise the visibility: check the **TPP Inoperative Components** table",
        "**Glide slope out** → localizer minimums",
        "Check **NOTAMs**, remote altimeter notes and chart notes",
        "Authorized DA/MDA is the **highest** of the procedure's, yours, and your equipment's (91.175(b))",
      ],
    },
  ],
  refs: ["14 CFR 91.175", "AIM 5-4-7", "TPP Inoperative Components table"],
});

export const area6: ContentMap = {
  // ---------- Task A: Non-precision Approach ----------
  "IR.VI.A.K1": [
    {
      title: "What makes an approach non-precision, and what's the rule at MDA?",
      core: "It has lateral guidance only, so you descend to an MDA and level off. You can't go below MDA unless 91.175(c) is met.",
      sections: [
        {
          b: [
            "Non-precision = **no vertical guidance** that meets precision standards; minimums are an **MDA**",
            "Descend to the MDA and **level off**; don't go below it until you're in position for a **normal descent**, have the **flight visibility**, and see a **required visual reference**",
            "Don't descend below MDA **before the VDP** (if published)",
            "Not there by the **MAP**? Go missed",
          ],
        },
      ],
      refs: ["14 CFR 91.175", "AIM 5-4-5"],
    },
    {
      title: "What's the difference between LP and LNAV?",
      core: "Both are lateral-only RNAV minimums. LP uses WAAS and tightens like a localizer, so it can have lower minimums than LNAV.",
      sections: [
        {
          b: [
            "**LNAV**: lateral only; works with non-WAAS (RAIM) or WAAS GPS",
            "**LP**: lateral only, **WAAS required**, angular guidance like a **localizer**",
            "LP can have **lower minimums** because its obstacle clearance area is narrower",
            "**LNAV+V** on some receivers is **advisory** vertical guidance only: the minimum is still the **MDA**",
          ],
        },
      ],
      refs: ["AIM 1-1-18", "FAA-H-8083-16 (Instrument Procedures Handbook)"],
    },
    {
      title: "How is the missed approach point found on a non-precision approach?",
      core: "By a fix (DME, GPS waypoint or station passage) or by timing from the FAF, as shown on the chart.",
      sections: [
        {
          b: [
            "**RNAV**: the **MAWP** waypoint",
            "**VOR/NDB on field**: often **station passage**",
            "**Localizer** and others: a **DME fix** or **time from the FAF** (timing table on the chart, by groundspeed)",
            "Start timing at the **FAF**",
          ],
        },
      ],
      refs: ["FAA-H-8083-16 (Instrument Procedures Handbook)", "AIM 5-4-5"],
    },
    {
      title: "What is a continuous descent final approach (CDFA)?",
      core: "Flying a non-precision final at a constant descent angle instead of diving to the MDA and leveling off, like a precision approach.",
      sections: [
        {
          b: [
            "Use the published **descent angle** or the advisory glidepath",
            "Fewer configuration and power changes → more **stable**",
            "Plan to start the missed approach **at or above the MDA**, so you don't sink below it during the go-around",
          ],
        },
      ],
      refs: ["AC 120-108 (Continuous Descent Final Approach)"],
    },
  ],

  "IR.VI.A.K2": {
    title: "What GPS annunciations do you watch for on an RNAV approach?",
    core: "Approach mode arming and going active, the level of service (LPV, LNAV/VNAV, LP, LNAV), and any integrity or loss-of-navigation alert.",
    sections: [
      {
        b: [
          "Approach mode **arms 30 NM** out; goes **active within 2 NM** of the FAWP, with **±0.3 NM** scaling",
          "Level of service annunciated (e.g., **LPV**): fly the **minimums that match** what's annunciated",
          "No approach mode by the FAWP, or an **integrity alert**: **don't descend**; go missed",
          "Watch for the **TO/FROM sequencing** at each waypoint",
        ],
      },
    ],
    examiner: [
      {
        q: "You're 1 NM from the final approach waypoint and the GPS annunciates LNAV instead of LPV. What do you do?",
        a: "Fly the approach to the LNAV MDA, since that's the level of service the receiver is giving me, and check I have the LNAV minimums.",
      },
    ],
    refs: ["AIM 1-1-17", "AIM 1-1-18"],
  },

  "IR.VI.A.K3": [
    {
      title: "Which navigation systems are used for non-precision approaches?",
      core: "VOR, NDB, localizer (including LDA and SDF and back course), and RNAV (GPS) to LNAV or LP minimums.",
      sections: [
        {
          b: [
            "**VOR** and **NDB** approaches",
            "**Localizer**, **LOC BC**, **LDA**, **SDF**",
            "**RNAV (GPS)**: **LNAV** and **LP** lines",
            "**ILS with the glide slope out** becomes a localizer approach",
          ],
        },
      ],
      refs: ["FAA-H-8083-16 (Instrument Procedures Handbook)", "AIM 5-4-5"],
    },
    {
      title: "When can GPS stand in for a VOR, NDB or DME on an approach?",
      core: "GPS can find fixes, fly arcs and hold in place of VOR, NDB or DME. It can't fly a localizer course, and on a VOR or NDB final the navaid must be working and monitored.",
      sections: [
        {
          h: "Allowed",
          b: ["Identify **DME fixes** and fixes defined by radials or bearings", "Fly to or from a **VOR or NDB**, **hold** over it, fly a **DME arc**", "Fly the final of a **VOR or NDB** approach if that navaid is **working and monitored**"],
        },
        {
          h: "Not allowed",
          b: ["Lateral guidance on any **localizer-based** course (including back course)", "Replacing the final approach navaid, unless the title says \"**or GPS**\""],
        },
      ],
      examiner: [
        {
          q: "The ADF is broken. Can you fly the LOC approach that needs a compass locator for the IAF?",
          a: "Yes, I can use the IFR GPS to navigate to the compass locator and identify that fix. But I must fly the localizer final with the localizer, not GPS.",
        },
      ],
      refs: ["AIM 1-2-3", "AIM 1-1-17"],
    },
  ],

  "IR.VI.A.K4": {
    title: "What is a stabilized approach?",
    core: "On the correct path, at the right speed and configuration, with a steady descent rate and only small corrections needed. FAA guidance: stabilized by 1,000 ft above the airport in IMC.",
    sections: [
      {
        b: [
          "On the **correct lateral and vertical path**",
          "**Speed** at target (POH approach speed), **landing configuration** set",
          "**Descent rate** steady and not excessive (about **1,000 fpm** or less unless the approach requires more)",
          "Only **small** heading and pitch changes needed",
          "Not stabilized by **1,000 ft above the airport in IMC** (500 ft in VMC)? **Go around**",
        ],
      },
    ],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "FAA-H-8083-16 (Instrument Procedures Handbook)", "AC 120-71 (Standard Operating Procedures)"],
  },

  "IR.VI.A.R1": {
    title: "What's the risk of deviating from the approach procedure?",
    core: "Obstacle protection exists only on the published path and altitudes. Leaving them, even a little, can put you in unprotected airspace.",
    sections: [{ b: ["Descending **early** to the next step-down altitude", "Turning **before the MAP** on a missed approach", "Cutting corners on course reversals", "If you can't fly it as published: **go missed** and ask for help"] }],
    refs: ["AIM 5-4-21", "14 CFR 91.175"],
  },

  "IR.VI.A.R2": {
    title: "What can go wrong when selecting the nav frequency for an approach?",
    core: "Tuning the wrong frequency or a similar nearby facility, or not identifying it. Always identify, and check the course and the flag.",
    sections: [{ b: ["**Identify** every navaid by Morse code", "Watch out for **similar frequencies** at nearby airports", "Check the **CDI source**: VLOC for a localizer, not GPS"] }],
    refs: ["AIM 1-1-3", "AIM 1-2-3"],
  },

  "IR.VI.A.R3": {
    title: "What automation traps catch pilots on approaches?",
    core: "The wrong CDI source, the autopilot not capturing, the GPS not sequencing, or descending with the autopilot in the wrong mode.",
    sections: [
      {
        b: [
          "**GPS selected** instead of VLOC on a localizer approach",
          "Autopilot **armed but not captured**",
          "GPS left in **OBS/suspend** after a hold or vector",
          "Know when to **disconnect** and hand-fly",
        ],
      },
    ],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.VI.A.R4": {
    title: "Why does configuration matter on the approach and missed approach?",
    core: "A late or wrong configuration destabilizes the approach, and forgetting to clean up on the missed approach can cost you the climb performance you need.",
    sections: [{ b: ["Configure **before the FAF**", "On a missed approach: **power, pitch, clean up** per the POH", "Know your airplane's **go-around flap** sequence"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "POH/AFM"],
  },

  "IR.VI.A.R5": {
    title: "What's dangerous about an unstable approach?",
    core: "High sink rates, big corrections and changing speed near the ground lead to hard landings, runway excursions and CFIT. Go around.",
    sections: [{ b: ["Signs: **high descent rate**, chasing the needle, speed off target, late configuration", "Diving to the MDA at **high descent rates** close to terrain is a leading CFIT cause", "If it's not stable by your gate: **go around**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "AC 120-108"],
  },

  "IR.VI.A.R6": {
    title: "The weather is getting worse as you fly the approach. What do you do?",
    core: "Keep updating it (ATIS, tower, PIREPs), check you still have the visibility for the approach, and be ready to go missed or divert.",
    sections: [{ b: ["Get the **latest weather** and RVR", "Below minimums? You can usually still **begin** the approach under part 91, but you can't **land** without the required flight visibility (91.175(d))", "Have your **alternate and fuel** decision made before the approach"] }],
    refs: ["14 CFR 91.175", "14 CFR 91.167"],
  },

  "IR.VI.A.R7": {
    title: "What happens if you go below MDA without the required visual references?",
    core: "You lose obstacle protection and break 91.175. It's a major cause of approach accidents. No references: stay at MDA and go missed at the MAP.",
    sections: [{ b: ["Need: **normal descent position**, **flight visibility**, a **required visual reference** for the runway", "\"Just a little lower to look\" is how CFIT happens", "Lose the references below MDA: **go missed immediately**"] }],
    refs: ["14 CFR 91.175"],
  },

  "IR.VI.A.S1": {
    title: "What will the examiner have you fly for non-precision approaches?",
    core: "The non-precision approaches the examiner picks, flown to ACS standards, with or without the autopilot as asked.",
    sections: [{ h: "Standards", b: ["At least one non-precision approach (often RNAV LNAV or LOC)", "Brief it: frequencies, courses, altitudes, MDA, MAP, missed approach", "Fly it to the **tolerances** on these cards"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.A.S2": comms("non-precision"),
  "IR.VI.A.S3": tune("non-precision"),
  "IR.VI.A.S4": comply,
  "IR.VI.A.S5": inop,
  "IR.VI.A.S6": unable,
  "IR.VI.A.S7": checklist("the approach"),
  "IR.VI.A.S8": config("non-precision"),
  "IR.VI.A.S9": beforeFAF,
  "IR.VI.A.S10": adjustMins("MDA and visibility"),
  "IR.VI.A.S11": {
    title: "How do you descend to the MDA on a non-precision approach?",
    core: "A stabilized descent to each step-down altitude and the MDA, using the published descent angle or a planned rate, arriving at MDA before the VDP.",
    sections: [{ h: "Standards", b: ["Plan a **rate**: groundspeed × 5 ≈ fpm for a 3° path", "Don't descend below each **step-down** altitude early", "Reach the MDA in time to see the runway **by the VDP**"] }],
    refs: ["FAA-H-8083-15 (IFH)", "AC 120-108"],
  },
  "IR.VI.A.S12": {
    title: "What tolerances apply on the final segment of a non-precision approach?",
    core: "No more than ¾-scale CDI deflection, airspeed ±10 kt, and at the MDA: +100 / −0 ft until the VDP or MAP.",
    sections: [{ h: "Standards", b: ["Course within **¾-scale**", "Airspeed **±10 kt**", "At MDA: **+100 / −0 ft**. Going below the MDA without the visual references is a failure"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.A.S13": {
    title: "At the MDA, how do you decide to land or go missed?",
    core: "If you have the flight visibility and a required visual reference, and can make a normal descent, continue. Otherwise go missed at the MAP.",
    sections: [{ h: "Standards", b: ["Check **91.175(c)**: position, flight visibility, visual reference", "Don't descend below MDA before the **VDP**", "Nothing by the **MAP**: missed approach, without turning early"] }],
    refs: ["14 CFR 91.175"],
  },
  "IR.VI.A.S14": mfd("the approach"),
  "IR.VI.A.S15": srm("a non-precision approach"),

  // ---------- Task B: Precision Approach ----------
  "IR.VI.B.K1": [
    {
      title: "What makes an approach \"precision,\" and what's the rule at DA?",
      core: "It has approved vertical guidance (ILS, PAR, GLS). At the DA you either see the required references and continue, or you go missed right away.",
      sections: [
        {
          b: [
            "Precision: **ILS**, **PAR**, **GLS**. LPV and LNAV/VNAV are \"approaches with vertical guidance\" but also use a **DA**",
            "At **DA/DH**: continue only with **flight visibility**, a **required visual reference**, and a normal descent possible (91.175(c))",
            "Otherwise **missed approach immediately** at the DA: no leveling off",
          ],
        },
      ],
      refs: ["14 CFR 91.175", "AIM 1-1-9"],
    },
    {
      title: "How do you figure the descent rate for a glide slope?",
      core: "For a 3° path, about groundspeed × 5 feet per minute. The chart's rate-of-descent table gives exact values.",
      sections: [
        {
          b: [
            "**3° ≈ 300 ft per NM**",
            "**fpm ≈ groundspeed × 5**: e.g., 90 kt → about **450 fpm**",
            "**Headwind** lowers groundspeed → **lower** descent rate; tailwind → higher",
            "Set it at **glide slope intercept** so you're close from the start",
          ],
        },
      ],
      examiner: [
        {
          q: "Your groundspeed on final is 80 kt. Roughly what descent rate do you need on a 3° glide slope?",
          a: "About 400 feet per minute: 80 × 5.",
        },
      ],
      refs: ["FAA-H-8083-15 (IFH)", "TPP rate of descent table"],
    },
    {
      title: "What changes when part of the ILS or approach lights are out?",
      core: "Glide slope out: fly it as a localizer approach. Approach lights out: visibility minimums usually go up. Check the TPP inoperative components table and NOTAMs.",
      sections: [
        {
          b: [
            "**Glide slope out** → **LOC** minimums (it becomes non-precision)",
            "**Approach lights** out → higher **visibility** (TPP Inoperative Components table)",
            "**Outer marker** out → can be replaced by a compass locator, DME, radar or RNAV fix (91.175(k))",
            "Check the chart for notes like \"**When glide slope inop**\"",
          ],
        },
      ],
      refs: ["14 CFR 91.175", "AIM 1-1-9", "TPP Inoperative Components table"],
    },
  ],

  "IR.VI.B.K2": {
    title: "What displays and modes do you use on a precision approach?",
    core: "Localizer and glide slope (or LPV) deviations on the CDI/HSI or PFD, with the right nav source and autopilot APR mode if used.",
    sections: [
      {
        b: [
          "**CDI source**: VLOC for an ILS, GPS for LPV",
          "Glide slope or glidepath **needle**; full scale is very sensitive close in",
          "Autopilot **APR**: lateral and vertical capture, armed then active",
          "GPS: **LPV** annunciated before the FAWP; if not, use the annunciated minimums",
        ],
      },
    ],
    refs: ["AIM 1-1-9", "AIM 1-1-18", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.VI.B.K3": [
    {
      title: "How does an ILS compare to an LPV approach?",
      core: "Both give lateral and vertical guidance to a DA as low as 200 ft. The ILS uses ground transmitters; LPV uses WAAS GPS and a database.",
      sections: [
        {
          b: [
            "**ILS**: localizer + glide slope from the ground; identify it; watch for **false glide slopes** above the real one",
            "**LPV**: WAAS, **current database**, no ground transmitter at the airport",
            "Both: **DA**, angular guidance that gets more sensitive close to the runway",
            "ILS **Category I**: DH 200 ft, RVR 2,400 ft (typical)",
          ],
        },
      ],
      refs: ["AIM 1-1-9", "AIM 1-1-18"],
    },
    {
      title: "What tests and checks apply to precision approach equipment?",
      core: "Identify the localizer, check for flags, and for GPS approaches: a current database and WAAS integrity for LPV.",
      sections: [
        {
          b: [
            "**Identify** the localizer by Morse code",
            "**No flags** on localizer and glide slope",
            "**Current database** for GPS",
            "Watch for **interference**: ATC may warn of critical-area or GPS issues",
          ],
        },
      ],
      refs: ["AIM 1-1-9", "AIM 1-1-17"],
    },
  ],

  "IR.VI.B.K4": {
    title: "What does a stabilized precision approach look like?",
    core: "Configured at glide slope intercept, on speed, on the needles with small corrections, and a steady descent rate matching your groundspeed.",
    sections: [{ b: ["Gear and flaps set **by glide slope intercept** (POH)", "Speed **±10 kt** or better", "**Small** pitch and heading changes", "Not stable by **1,000 ft above the airport in IMC**: go around"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "AC 120-71 (Standard Operating Procedures)"],
  },

  "IR.VI.B.R1": {
    title: "What's the risk of deviating from a precision approach?",
    core: "Below the glide path you lose obstacle clearance. Off the localizer you lose the protected area. Full deflection means go missed.",
    sections: [{ b: ["Don't **duck under** the glide slope", "Don't chase a **false glide slope** (much steeper, often with reverse sensing)", "Can't get back within limits? **Missed approach**"] }],
    refs: ["AIM 1-1-9", "14 CFR 91.175"],
  },

  "IR.VI.B.R2": {
    title: "What can go wrong selecting the frequency for a precision approach?",
    core: "Tuning the wrong ILS (another runway shares the area), not identifying it, or leaving the CDI on GPS.",
    sections: [{ b: ["**Identify** the localizer (I-XXX)", "Check it's the **right runway**", "Set the CDI to **VLOC**; check the course"] }],
    refs: ["AIM 1-1-9"],
  },

  "IR.VI.B.R3": {
    title: "What automation traps catch pilots on a precision approach?",
    core: "The autopilot not capturing the glide slope, the wrong nav source, or flying past the DA because you're watching the autopilot instead of the minimums.",
    sections: [{ b: ["Confirm **GS armed → active**", "If it doesn't capture, **disconnect** and hand-fly, or go missed", "Know the autopilot's **minimum use height** (AFM supplement)"] }],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM autopilot supplement"],
  },

  "IR.VI.B.R4": {
    title: "What configuration mistakes happen on precision approaches and missed approaches?",
    core: "Late gear and flaps cause a chase on the glide slope. Not cleaning up on the missed approach costs climb performance.",
    sections: [{ b: ["Configure **before or at glide slope intercept**", "Missed: **power, pitch, positive rate, flaps up** per the POH"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "POH/AFM"],
  },

  "IR.VI.B.R5": {
    title: "What makes a precision approach unstable?",
    core: "Big descent-rate changes, chasing the needles, and speed off target, often from a late configuration or wind. Go around.",
    sections: [{ b: ["**Excessive descent rate** means you're dropping below the path", "Tailwind needs a **higher** rate; headwind a lower one", "Unstable inside 1,000 ft in IMC: **go around**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)"],
  },

  "IR.VI.B.R6": {
    title: "The weather drops during a precision approach. What's your plan?",
    core: "Keep getting updates, know if you can still legally land, and have your missed approach and alternate ready.",
    sections: [{ b: ["Updates from tower or ATIS, including **RVR**", "You need the **flight visibility** to land (91.175(d))", "Brief the **missed approach** before the FAF"] }],
    refs: ["14 CFR 91.175"],
  },

  "IR.VI.B.R7": {
    title: "What's the risk of continuing below DA without the visual references?",
    core: "You lose obstacle protection and break 91.175. At the DA with no references, go missed immediately.",
    sections: [
      {
        b: [
          "At DA: need a **required visual reference** and **flight visibility**",
          "Using **approach lights only**: no lower than **100 ft above TDZE** unless the **red terminating bars** or **red side row bars** are visible",
          "\"Hoping it gets better\" below DA is how accidents happen",
        ],
      },
    ],
    refs: ["14 CFR 91.175"],
  },

  "IR.VI.B.S1": {
    title: "What will the examiner have you fly for precision approaches?",
    core: "The precision approach(es) the examiner picks, usually an ILS or LPV, flown to ACS standards.",
    sections: [{ h: "Standards", b: ["Brief it: frequencies, course, glide slope intercept altitude, DA, missed approach", "Fly to the **tolerances** on these cards"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.B.S2": comms("precision"),
  "IR.VI.B.S3": tune("precision"),
  "IR.VI.B.S4": comply,
  "IR.VI.B.S5": inop,
  "IR.VI.B.S6": unable,
  "IR.VI.B.S7": checklist("the approach"),
  "IR.VI.B.S8": config("precision"),
  "IR.VI.B.S9": beforeFAF,
  "IR.VI.B.S10": adjustMins("DA and visibility"),
  "IR.VI.B.S11": {
    title: "What descent rate do you set when the glide slope starts?",
    core: "A rate that roughly matches the glide path for your groundspeed (about groundspeed × 5 for 3°), set right at intercept.",
    sections: [{ h: "Standards", b: ["Set power and pitch **at glide slope intercept**", "About **groundspeed × 5** fpm", "Adjust for wind"] }],
    refs: ["FAA-H-8083-15 (IFH)"],
  },
  "IR.VI.B.S12": {
    title: "What tolerances apply from the FAF to the DA?",
    core: "No more than ¾-scale deflection of either the localizer or the glide slope, and airspeed ±10 kt.",
    sections: [{ h: "Standards", b: ["Localizer within **¾-scale**", "Glide slope within **¾-scale**", "Airspeed **±10 kt**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.B.S13": {
    title: "What do you do at the DA if you can't see the runway?",
    core: "Start the missed approach immediately. No leveling off, no looking a bit longer.",
    sections: [{ h: "Standards", b: ["Required references not **unmistakably visible** at DA → **missed approach**", "Power, pitch, configuration, then navigate the missed approach"] }],
    refs: ["14 CFR 91.175"],
  },
  "IR.VI.B.S14": {
    title: "When can you leave the DA and continue to land?",
    core: "Only when you're in a position to descend to the runway at a normal rate using normal maneuvers, with the required visibility and references.",
    sections: [{ h: "Standards", b: ["**Normal descent rate**, normal maneuvering", "Flight visibility at least the published minimum", "Runway environment in sight"] }],
    refs: ["14 CFR 91.175(c)"],
  },
  "IR.VI.B.S15": {
    title: "How do you fly from the DA to the touchdown zone?",
    core: "Keep the same stable path and descent rate visually (use the VGSI), aiming to land in the touchdown zone.",
    sections: [{ h: "Standards", b: ["Don't **duck under** after breaking out", "Use **VASI/PAPI** to stay on path", "Land in the **touchdown zone**"] }],
    refs: ["AIM 2-1", "FAA-H-8083-3 (Airplane Flying Handbook)"],
  },
  "IR.VI.B.S16": mfd("the approach"),
  "IR.VI.B.S17": srm("a precision approach"),

  // ---------- Task C: Missed Approach ----------
  "IR.VI.C.K1": [
    {
      title: "When must you go missed?",
      core: "At the DA or MAP without the required visibility and references, any time below MDA you lose them, if you can't land safely, or when ATC tells you.",
      sections: [
        {
          b: [
            "At **DA or MAP** without 91.175(c) met",
            "**Below MDA/DA** and you lose the visual references",
            "**Circling**: lose sight of an identifiable part of the airport",
            "**Unstable**, a runway incursion, or **ATC instructs** it",
          ],
        },
      ],
      refs: ["14 CFR 91.175(e)", "AIM 5-5"],
    },
    {
      title: "What are the rules for flying the missed approach?",
      core: "Climb straight ahead to the MAP before turning, follow the published missed approach (or ATC's), and expect a 200 ft/NM climb unless more is published.",
      sections: [
        {
          b: [
            "Going missed early? **Fly to the MAP** at or above MDA/DA before turning",
            "Obstacle protection starts at the **DA or MAP**, not below MDA",
            "Climb gradient: **200 ft/NM** unless a higher one is published",
            "**Tell ATC** you're going missed and what you want next",
          ],
        },
      ],
      refs: ["AIM 5-4-21"],
    },
    {
      title: "How do you fly a missed approach with a GPS and autopilot?",
      core: "Press TOGA or go-around if equipped, unsuspend or activate the missed approach in the GPS, and re-engage the autopilot only after you're climbing and configured.",
      sections: [
        {
          b: [
            "GPS **suspends** sequencing at the MAWP: **unsuspend/activate** the missed approach",
            "**Go-around / TOGA** button (if equipped) gives a climb attitude on the flight director",
            "Hand-fly the initial climb, then **engage the autopilot** in the right modes",
            "Check the CDI source for the missed approach course (GPS vs VLOC)",
          ],
        },
      ],
      refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM supplements"],
    },
  ],

  "IR.VI.C.R1": {
    title: "What's the risk of not following the missed approach procedure?",
    core: "Turning early, climbing too slowly, or flying the wrong course can put you into terrain or traffic. Fly the published or assigned missed approach exactly.",
    sections: [{ b: ["**Early turns** aren't protected", "Meet the **climb gradient**", "If ATC gives an **alternate missed approach**, fly that"] }],
    refs: ["AIM 5-4-21"],
  },

  "IR.VI.C.R2": {
    title: "After a missed approach, how do you decide to hold, divert or try again?",
    core: "Base it on why you missed, current weather, fuel, and whether another approach is likely to work.",
    sections: [{ b: ["Missed from **weather below minimums**? Another try rarely works unless it's improving", "Check **fuel** against the alternate and reserve", "Ask ATC: **another approach**, **hold**, or **the alternate**"] }],
    refs: ["14 CFR 91.167", "AIM 5-5"],
  },

  "IR.VI.C.R3": {
    title: "What configuration risks come with a missed approach?",
    core: "Retracting flaps too early or forgetting the gear can cost altitude or climb performance. Follow the POH go-around sequence.",
    sections: [{ b: ["**Power** first, **pitch** for the climb", "**Flaps** up in stages as the POH says", "**Gear up** after a positive rate of climb"] }],
    refs: ["POH/AFM", "FAA-H-8083-3 (Airplane Flying Handbook)"],
  },

  "IR.VI.C.R4": {
    title: "What can make you go missed before the MAP, or go around below DA/MDA?",
    core: "An unstable approach, losing the visual references, an equipment failure, traffic or an obstruction on the runway, wind shear, or an ATC instruction.",
    sections: [
      {
        b: [
          "**Unstable** approach",
          "**Losing** the visual references below MDA/DA",
          "Nav **failure** or integrity alert",
          "**Runway** blocked, **wind shear**, or ATC instruction",
          "Going missed early: still **fly to the MAP** before turning",
        ],
      },
    ],
    refs: ["14 CFR 91.175", "AIM 5-4-21"],
  },

  "IR.VI.C.R5": {
    title: "What automation traps catch pilots on a missed approach?",
    core: "The GPS stays suspended at the MAWP, the autopilot stays in approach mode, or the nav source is wrong for the missed approach course.",
    sections: [{ b: ["**Unsuspend** the GPS", "Engage the autopilot in **heading or nav** and a climb mode", "Check the **CDI source** and course"] }],
    refs: ["FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.VI.C.S1": {
    title: "What does the examiner want when you start the missed approach?",
    core: "Start it promptly at the right point and tell ATC.",
    sections: [{ h: "Standards", b: ["**Promptly** at the DA or MAP (or when told)", "\"**Missed approach**\" to ATC", "Request what you want next"] }],
    refs: ["AIM 5-5"],
  },
  "IR.VI.C.S2": {
    title: "What power and pitch do you set for the missed approach?",
    core: "Climb power and the pitch attitude for the climb speed the POH gives.",
    sections: [{ h: "Standards", b: ["**Full or climb power**", "Pitch for the **go-around / climb speed**", "Positive rate before cleaning up"] }],
    refs: ["POH/AFM"],
  },
  "IR.VI.C.S3": {
    title: "How do you configure and climb on the missed approach?",
    core: "Follow the POH: configure, establish a positive rate of climb, and accelerate to the right airspeed ±10 kt.",
    sections: [{ h: "Standards", b: ["Configure per **POH**", "**Positive rate** of climb", "Airspeed **±10 kt**"] }],
    refs: ["POH/AFM", "FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.C.S4": checklist("the missed approach"),
  "IR.VI.C.S5": {
    title: "What missed approach procedure do you fly?",
    core: "The published one, unless ATC gives you an alternate missed approach. Then fly that.",
    sections: [{ h: "Standards", b: ["Brief the missed approach **before the FAF**", "Fly the **published** procedure or ATC's", "Know the **holding entry** at the missed approach fix"] }],
    refs: ["AIM 5-4-21", "AIM 5-5"],
  },
  "IR.VI.C.S6": {
    title: "What if you can't comply with the missed approach?",
    core: "Tell ATC right away, for example if you can't make the climb gradient or a restriction.",
    sections: [{ h: "Standards", b: ["\"**Unable** [restriction]\"", "Say what you can do", "Check the climb gradient **before** the approach"] }],
    refs: ["14 CFR 91.123", "AIM 5-4-21"],
  },
  "IR.VI.C.S7": {
    title: "What tolerances apply during the missed approach?",
    core: "Airspeed ±10 kt; heading, course or bearing ±10°; altitudes ±100 ft.",
    sections: [{ h: "Standards", b: ["Airspeed **±10 kt**", "Heading/course **±10°**", "Altitude **±100 ft**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.C.S8": mfd("the missed approach"),
  "IR.VI.C.S9": srm("a missed approach"),
  "IR.VI.C.S10": {
    title: "After the missed approach, what do you ask ATC for?",
    core: "Another approach, the alternate, the holding fix, or another clearance limit, whichever fits the situation (or what the examiner tells you).",
    sections: [{ h: "Standards", b: ["Decide **before** you need to", "Request clearly: \"Request another ILS 21\" or \"Request clearance to [alternate]\""] }],
    refs: ["AIM 5-5"],
  },

  // ---------- Task D: Circling Approach ----------
  "IR.VI.D.K1": [
    {
      title: "How is your approach category set, and why does it matter for circling?",
      core: "By VREF (or 1.3 VSO) at max landing weight: A under 91 kt, B 91–120, C 121–140, D 141–165, E 166+. Circling minimums and protected radius depend on it.",
      sections: [
        {
          b: [
            "**A** < 91 kt · **B** 91–120 · **C** 121–140 · **D** 141–165 · **E** 166+",
            "Based on **VREF** or **1.3 VSO** at max certificated landing weight",
            "Circling **faster** than your category? Use the **higher category's** minimums",
          ],
        },
      ],
      examiner: [
        {
          q: "Your airplane is Category A, but you'll circle at 100 kt. Which minimums?",
          a: "Category B. I use the minimums for the speed I'll actually fly, so 100 kt puts me in B.",
        },
      ],
      refs: ["AIM 5-4-7"],
    },
    {
      title: "How big is the protected area when circling?",
      core: "Arcs drawn from each runway end, with a radius by category. Newer procedures (with a C in a black box) use larger radii that grow with altitude.",
      sections: [
        {
          b: [
            "**Standard** radii: **A 1.3 NM**, **B 1.5**, **C 1.7**, **D 2.3**, **E 4.5**",
            "**Expanded** radii (procedures since late 2012, marked with a **negative C**): larger, and larger at higher MDAs",
            "Obstacle clearance only **at or above MDA** inside the area",
            "Chart notes may **prohibit circling** in some sectors",
          ],
        },
      ],
      refs: ["AIM 5-4-20", "TPP Legend (circling approach area)"],
    },
  ],

  "IR.VI.D.R1": {
    title: "What circling rules keep you protected?",
    core: "Stay at or above the MDA until you can make a normal descent to the runway, stay within the circling area, and keep an identifiable part of the airport in sight.",
    sections: [{ b: ["Stay at or above **MDA**", "Stay **close** to the airport (inside your radius)", "Follow chart **restrictions** and the traffic pattern direction", "Lose sight of the airport: **missed approach**"] }],
    refs: ["14 CFR 91.175", "AIM 5-4-20"],
  },

  "IR.VI.D.R2": {
    title: "Why is circling at night or in low visibility so risky?",
    core: "Low altitude, steep turns close to the ground, few visual cues and illusions. Many CFIT accidents happen while circling.",
    sections: [{ b: ["Consider **not circling** at night or near minimums", "Pick a **straight-in** approach if one exists", "Use higher **personal minimums** for circling"] }],
    refs: ["FAA-H-8083-16 (Instrument Procedures Handbook)", "AIM 8-1-5"],
  },

  "IR.VI.D.R3": {
    title: "You lose sight of the airport while circling. What do you do?",
    core: "Go missed: make a climbing turn toward the landing runway, then fly the published missed approach.",
    sections: [{ b: ["**Climbing turn toward the landing runway**", "Continue until established on the **missed approach course**", "Tell ATC"] }],
    examiner: [
      {
        q: "You're on downwind while circling and you lose sight of the runway in a rain shower. What do you do?",
        a: "Start a climbing turn toward the landing runway, then fly the published missed approach for the approach I flew, and tell ATC.",
      },
    ],
    refs: ["AIM 5-4-21", "14 CFR 91.175(e)"],
  },

  "IR.VI.D.R4": {
    title: "How should you use automation while circling?",
    core: "Usually hand-fly the circle. Set up the missed approach before you start, and use the autopilot only as the AFM allows at low altitude.",
    sections: [{ b: ["Check the autopilot's **minimum use height**", "Preload the **missed approach**", "Eyes outside, with quick altitude checks"] }],
    refs: ["POH/AFM autopilot supplement", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
  },

  "IR.VI.D.R5": {
    title: "What's hard about managing altitude, speed and distance while circling?",
    core: "You're looking outside at low altitude while holding the MDA, a steady speed and a tight pattern. It's easy to drift low or wide.",
    sections: [{ b: ["Hold **MDA (+100/−0)** until you can descend normally", "Keep **speed steady** (within your category)", "Stay **close** to the runway"] }],
    refs: ["AIM 5-4-20", "FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  "IR.VI.D.R6": {
    title: "What low-altitude dangers come with circling?",
    core: "Stall and spin from steep or uncoordinated turns, and CFIT from going below MDA or wide of the protected area.",
    sections: [{ b: ["Max **30° bank**", "**Coordinated** turns, especially base to final", "Don't descend below MDA until in position"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "AIM 5-4-20"],
  },

  "IR.VI.D.R7": {
    title: "What's tricky about a missed approach after the MAP while circling?",
    core: "You may be on a different side of the airport, so the published missed approach course could be behind you. Turn toward the landing runway first.",
    sections: [{ b: ["Climbing turn **toward the landing runway**", "Then join the **missed approach course** for the approach you flew"] }],
    refs: ["AIM 5-4-21"],
  },

  "IR.VI.D.S1": {
    title: "What does the examiner look for in a circling approach?",
    core: "Flying the circling procedure for your approach category, accounting for turbulence and wind shear, and staying within the airplane's maneuvering capability.",
    sections: [{ h: "Standards", b: ["Right **category** minimums", "Plan the circle for the **wind**", "Stay within the **protected area**"] }],
    refs: ["AIM 5-4-20", "FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.D.S2": {
    title: "What do you confirm before circling?",
    core: "The traffic pattern direction and any ATC or chart restrictions.",
    sections: [{ h: "Standards", b: ["Confirm **pattern direction** (left unless published or told otherwise)", "Chart **restrictions** (e.g., \"circling NA north of runway\")", "ATC instructions"] }],
    refs: ["AIM 5-4-20", "14 CFR 91.126"],
  },
  "IR.VI.D.S3": srm("a circling approach"),
  "IR.VI.D.S4": {
    title: "How do you set up the descent for a circling approach?",
    core: "Configure, stay stabilized, and plan the descent to reach the MDA (or your planned circling altitude) before the MAP.",
    sections: [{ h: "Standards", b: ["Approach and landing configuration per **POH**", "Reach **MDA before the MAP**", "Stable descent rate"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.D.S5": {
    title: "What tolerances apply while circling?",
    core: "Airspeed ±10 kt, heading/track ±10°, altitude +100/−0 ft until you leave the MDA to land.",
    sections: [{ h: "Standards", b: ["Airspeed **±10 kt**", "Heading/track **±10°**", "Altitude **+100 / −0 ft**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.D.S6": {
    title: "How do you maneuver from the approach to the landing runway?",
    core: "Visually, to a downwind or base leg that fits the runway and conditions, staying close in.",
    sections: [{ h: "Standards", b: ["Keep the runway **in sight**", "Downwind or base appropriate to the **wind**", "No wide patterns"] }],
    refs: ["FAA-H-8083-16 (Instrument Procedures Handbook)"],
  },
  "IR.VI.D.S7": {
    title: "If you go missed while circling, how do you turn?",
    core: "A climbing turn toward the landing runway, then the missed approach, configuring the airplane properly.",
    sections: [{ h: "Standards", b: ["Turn **toward the landing runway**", "Configure for the **climb**", "Fly the missed approach"] }],
    refs: ["AIM 5-4-21"],
  },
  "IR.VI.D.S8": {
    title: "What landing standards apply after circling?",
    core: "A stabilized descent, touchdown in the first third of the runway, within the airplane's limits, and never more than 30° of bank.",
    sections: [{ h: "Standards", b: ["Stabilized descent", "Touch down in the **first one-third**", "Bank **30° max**"] }],
    refs: ["FAA-S-ACS-8 (Instrument Rating ACS)"],
  },

  // ---------- Task E: Landing from an Instrument Approach ----------
  "IR.VI.E.K1": {
    title: "What do you consider before landing out of an instrument approach?",
    core: "Whether you meet 91.175 to descend and land, the runway and wind, wind shear and wake turbulence, and your own limits.",
    sections: [
      {
        b: [
          "**Legal**: flight visibility and visual references (91.175(c),(d))",
          "**Runway**: length, surface, contamination; **wind** and crosswind",
          "**Weather**: wind shear, gusts, rain on the windscreen, illusions",
          "**Wake turbulence** behind larger aircraft",
          "Straight-in or **circling**",
        ],
      },
    ],
    refs: ["14 CFR 91.175", "AIM 7-4", "AIM 8-1-5"],
  },

  "IR.VI.E.K2": [
    {
      title: "Which lights and markings count as visual references at minimums?",
      core: "Approach lights (with limits), threshold, threshold markings or lights, REILs, VGSI, touchdown zone or its markings or lights, and the runway or its markings or lights.",
      sections: [
        {
          b: [
            "**Approach light system**: but no lower than **100 ft above TDZE** on approach lights alone unless **red terminating or red side row bars** are visible",
            "**Threshold**, threshold **markings**, threshold **lights**",
            "**REIL** (runway end identifier lights)",
            "**VASI/PAPI**",
            "**Touchdown zone**, its markings or lights",
            "**Runway**, runway markings or runway lights",
          ],
        },
      ],
      refs: ["14 CFR 91.175(c)(3)"],
    },
    {
      title: "What do runway lights tell you about how much runway is left?",
      core: "Instrument runway edge lights turn yellow for the last 2,000 ft. Centerline lights alternate red and white from 3,000 ft left, then all red for the last 1,000 ft.",
      sections: [
        {
          b: [
            "**Edge lights**: white; **yellow** on the last **2,000 ft** (or half the runway) on instrument runways",
            "**Centerline**: white, then **red/white** from **3,000 ft** left, **all red** for the last **1,000 ft**",
            "**Touchdown zone lights**: start **100 ft** past the threshold, out to **3,000 ft** (or midpoint)",
            "Approach lights extend **2,400–3,000 ft** (precision) or **1,400–1,500 ft** (non-precision)",
            "Pilot-controlled lights: **7 / 5 / 3 clicks** in **5 seconds**",
          ],
        },
      ],
      refs: ["AIM 2-1"],
    },
  ],

  "IR.VI.E.K3": {
    title: "What landing profile and configuration do you use after an instrument approach?",
    core: "Stay on a normal glide path (follow the VGSI), in landing configuration at the POH approach speed, and land in the touchdown zone.",
    sections: [{ b: ["**3°** path visually: follow the **VASI/PAPI**", "Landing **configuration** set before minimums when practical", "**POH approach speed**, plus a gust factor if needed"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)", "AIM 2-1"],
  },

  "IR.VI.E.R1": {
    title: "Why not try to land from an unstable approach?",
    core: "It leads to long, hard or off-centerline landings and runway excursions. Go around and set up again.",
    sections: [{ b: ["A **go-around** is always an option", "Most runway excursions start with an unstable approach"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)"],
  },

  "IR.VI.E.R2": {
    title: "What's the danger of flying below the glide path after breaking out?",
    core: "Obstacle clearance and runway lights can hide terrain or obstacles short of the runway. Illusions often push you low.",
    sections: [{ b: ["Stay on the **VGSI** or glide slope down to the runway", "Watch for illusions: **narrow runway, rain, haze, featureless terrain** → too low", "Don't \"duck under\" to land shorter"] }],
    refs: ["AIM 8-1-5", "AIM 2-1"],
  },

  "IR.VI.E.R3": {
    title: "What's hard about changing from instruments to outside references?",
    core: "Your eyes need time to adjust, and the view can be misleading. Keep cross-checking the instruments until you're sure of the visual picture.",
    sections: [{ b: ["Keep the **glide path and airspeed** on the scan", "Expect **illusions** in rain, fog and at night", "If the picture doesn't make sense: **go around**"] }],
    refs: ["AIM 8-1-5", "FAA-H-8083-15 (IFH)"],
  },

  "IR.VI.E.R4": {
    title: "What configuration risks come with landing from an approach?",
    core: "Forgetting gear or flaps, or changing configuration late near the ground. Use the landing checklist before minimums.",
    sections: [{ b: ["**Gear down** check (GUMPS) before minimums", "Avoid big **flap changes** close to the ground"] }],
    refs: ["POH/AFM", "FAA-H-8083-3 (Airplane Flying Handbook)"],
  },

  "IR.VI.E.S1": {
    title: "What does the examiner look for when you go visual at minimums?",
    core: "A smooth change to visual flight at the DA, MDA or VDP that leads to a normal, safe landing.",
    sections: [{ h: "Standards", b: ["Visual **references** confirmed", "Normal **descent** and maneuvering", "No duck-under"] }],
    refs: ["14 CFR 91.175", "FAA-S-ACS-8 (Instrument Rating ACS)"],
  },
  "IR.VI.E.S2": {
    title: "What advisories must you follow on landing?",
    core: "NOTAMs, wind shear alerts, wake turbulence cautions, runway condition reports and any ATC or examiner instructions.",
    sections: [{ h: "Standards", b: ["**NOTAMs** for the runway", "**Wind shear** and **wake turbulence**", "**Runway condition**"] }],
    refs: ["AIM 7-4", "14 CFR 91.103"],
  },
  "IR.VI.E.S3": checklist("landing"),
  "IR.VI.E.S4": {
    title: "What does positive control on landing mean to the examiner?",
    core: "Directional control, wind correction, and a touchdown at the right speed and spot, all the way to taxi speed.",
    sections: [{ h: "Standards", b: ["Crosswind correction", "Centerline", "Controlled **rollout**"] }],
    refs: ["FAA-H-8083-3 (Airplane Flying Handbook)"],
  },
  "IR.VI.E.S5": srm("landing from an instrument approach"),
};
