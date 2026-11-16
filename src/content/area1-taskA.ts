import type { ContentMap } from "./types";

// Area I, Task A — Pilot Qualifications
export const area1TaskA: ContentMap = {
  "IR.I.A.K1": {
    core: "Earn it under 61.65, keep it with 6-HIT every 6 calendar months (61.57(c)), and prove it in your logbook (61.51(g)).",
    sections: [
      {
        h: "When an instrument rating is required (61.3(e))",
        b: ["Acting as PIC under **IFR**", "Acting as PIC in weather **below VFR minimums**", "Acting as PIC in **Class A** airspace"],
      },
      {
        h: "Eligibility and experience (61.65, airplane)",
        b: [
          "At least a **private pilot certificate**; read, speak, write and understand English",
          "Pass the knowledge test; instructor endorsements for the knowledge test and the practical test",
          "**50 hr cross-country PIC**, at least 10 hr in airplanes",
          "**40 hr actual or simulated instrument time**, at least 15 hr from a CFII in an airplane",
          "**3 hr instrument training** from a CFII in an airplane **within 2 calendar months** before the checkride",
          "**Long IFR cross-country** with a CFII, on an IFR flight plan:",
          "- **250 NM** along airways or ATC-directed routing",
          "- An instrument approach at **each** airport",
          "- **3 different kinds** of approaches using navigation systems",
          "Sim credit (61.65(i)): up to **20 hr** in an ATD/FTD/FFS with a CFII, of which no more than **10 hr in a BATD**",
        ],
      },
      {
        h: "Recency — \"6-HIT\" (61.57(c))",
        b: [
          "Within the preceding **6 calendar months**, in actual or simulated instrument conditions:",
          "- **6** instrument approaches",
          "- **H**olding procedures and tasks",
          "- **I**ntercepting and **T**racking courses through electronic navigation",
          "Can be done in the aircraft, an FFS, an FTD or an ATD (or a combination)",
          "Simulated conditions in the airplane need a **safety pilot** (91.109(c))",
        ],
      },
      {
        h: "Losing currency (61.57(d))",
        b: [
          "**Months 6–12 (grace period):** you can't act as PIC under IFR. Regain with 6-HIT using a safety pilot, a device, or a CFII",
          "**Past 12 months:** you need an **Instrument Proficiency Check (IPC)** from a CFII, examiner or other authorized person, using the IPC tasks in the ACS",
        ],
      },
      {
        h: "Recordkeeping (61.51(g))",
        b: [
          "Log instrument time only when flying **solely by reference to instruments**",
          "For each approach: the **location and type** of approach",
          "Simulated conditions: the **safety pilot's name**",
          "Device: the **type and identification** of the ATD/FTD/FFS",
          "Only logged time counts toward currency, so the logbook is your proof",
        ],
      },
    ],
    mnemonic: { name: "6-HIT", lines: ["6 approaches", "Holding", "Intercepting & Tracking", "…in the last 6 calendar months"] },
    examiner: [
      {
        q: "Your last approaches were 8 months ago. Can you file IFR today?",
        a: "No. I'm in the grace period, so I can't act as PIC under IFR. I can get current by flying 6-HIT with a safety pilot, in an approved device, or with a CFII. I don't need an IPC until it's been 12 calendar months.",
      },
      {
        q: "Your last approaches were 14 months ago. What do you need?",
        a: "An instrument proficiency check from a CFII, examiner or other authorized person (61.57(d)).",
      },
      {
        q: "What has to be in your logbook for an approach to count toward currency?",
        a: "The location and type of each approach, the safety pilot's name if it was in simulated conditions, and the device type and identification if it was in a simulator or ATD.",
      },
    ],
    refs: ["14 CFR 61.3(e)", "14 CFR 61.51(g)", "14 CFR 61.57(c),(d)", "14 CFR 61.65", "14 CFR 91.109(c)"],
  },

  "IR.I.A.K2": {
    core: "The rating lets you act as PIC under IFR and in IMC, but only in the category it covers, while you're current, and in an IFR-legal aircraft.",
    sections: [
      {
        h: "Privileges",
        b: [
          "Act as PIC under **IFR** and in weather **below VFR minimums** (61.3(e))",
          "Fly in **Class A** airspace (FL180–FL600 requires IFR, 91.135)",
          "**Special VFR at night** — needs an instrument rating **and** an IFR-equipped aircraft (91.157)",
          "Fly **IFR in Class G** without a clearance (the IFR rules still apply)",
        ],
      },
      {
        h: "Limitations",
        b: [
          "**Category-specific:** instrument–airplane doesn't cover helicopters",
          "**Multiengine VFR only:** if you hold AMEL but take the checkride in a single-engine airplane, the certificate says \"Multiengine Limited to VFR Only.\" Testing in a multiengine airplane gives you IFR privileges in both (ACS Appendix 1)",
          "**Currency:** the rating never expires, but you can't use it without 6-HIT (or an IPC) and a valid medical or BasicMed",
          "**Aircraft must be IFR-legal:** 91.205(d) equipment, **91.411** altimeter/static check and **91.413** transponder check within 24 calendar months, VOR check within **30 days** if you use VOR for IFR (91.171)",
          "**Doesn't expand your certificate:** a private pilot still can't fly for compensation or hire",
          "**Not a CFII:** teaching instruments needs a separate instructor rating",
        ],
      },
      {
        h: "Why it matters for commercial pilots (61.133(b))",
        b: [
          "Without an instrument rating, a commercial airplane certificate is limited: **no carrying passengers for hire on cross-countries over 50 NM, or at night**",
        ],
      },
    ],
    mnemonic: {
      name: "GRABCARD (91.205(d) IFR equipment)",
      lines: [
        "Generator or alternator",
        "Radios (two-way comm and nav for the route)",
        "Altimeter (sensitive, adjustable)",
        "Ball (slip-skid indicator)",
        "Clock (hours, minutes, seconds — sweep second hand or digital)",
        "Attitude indicator",
        "Rate-of-turn indicator",
        "Directional gyro (heading indicator)",
      ],
    },
    examiner: [
      {
        q: "Are there takeoff minimums under Part 91?",
        a: "No. Standard takeoff minimums (91.175(f)) apply to Parts 121, 125, 129 and 135. A zero-zero Part 91 takeoff is legal but not smart — that's where personal minimums come in.",
      },
      {
        q: "Your rating is current but the transponder check is 26 months old. Can you fly IFR?",
        a: "No. The aircraft isn't IFR-legal under 91.413, regardless of my currency.",
      },
      {
        q: "You hold ASEL and AMEL and take this checkride in a Cessna 172. What happens?",
        a: "My certificate will carry the limitation \"Multiengine Limited to VFR Only\" until I demonstrate instrument proficiency in a multiengine airplane.",
      },
    ],
    refs: ["14 CFR 61.3(e)", "14 CFR 61.133(b)", "14 CFR 91.135", "14 CFR 91.157", "14 CFR 91.171", "14 CFR 91.205(d)", "14 CFR 91.411", "14 CFR 91.413", "ACS Appendix 1"],
  },

  "IR.I.A.K3": {
    core: "BasicMed lets you fly IFR without a medical certificate, within aircraft, altitude, speed and non-commercial limits.",
    sections: [
      {
        h: "To use BasicMed (61.23(c)(3), part 68)",
        b: [
          "Hold a valid **U.S. driver's license** and comply with its restrictions",
          "Have held an FAA medical certificate **at any time after July 14, 2006** (not revoked, suspended or denied on the most recent application)",
          "**Comprehensive medical exam** with a state-licensed physician every **48 calendar months**, using the FAA checklist (Form 8700-2)",
          "**BasicMed medical education course** every **24 calendar months**",
          "Keep the checklist and course completion certificate with your logbook",
        ],
      },
      {
        h: "Operating limits (61.113(i))",
        b: [
          "Aircraft certificated for no more than **7 occupants**, carrying no more than **6 passengers**",
          "Max certificated takeoff weight **12,500 lb or less** (expanded from 6,000 lb in November 2024)",
          "At or below **18,000 ft MSL**",
          "No more than **250 KIAS**",
          "**Not for compensation or hire**",
          "Within the U.S., unless the foreign country authorizes it",
        ],
      },
      {
        h: "What it still allows",
        b: [
          "**IFR and VFR**, day and night",
          "A CFI can give flight instruction while acting as PIC under BasicMed",
        ],
      },
    ],
    examiner: [
      {
        q: "Can you fly IFR under BasicMed?",
        a: "Yes. BasicMed has no IFR restriction — the limits are the aircraft size, 18,000 ft MSL, 250 KIAS and no compensation or hire.",
      },
      {
        q: "Could you fly an IFR flight at FL190 under BasicMed?",
        a: "No. BasicMed limits you to 18,000 ft MSL and below.",
      },
    ],
    refs: ["14 CFR 61.23(c)(3)", "14 CFR 61.113(i)", "14 CFR part 68", "AC 68-1", "FAA BasicMed final rule, Nov 18, 2024"],
  },

  "IR.I.A.R1": {
    core: "Currency is the legal minimum; proficiency is whether you can actually fly the approach to minimums in real IMC today.",
    sections: [
      {
        h: "The difference",
        b: [
          "**Currency** = meeting 61.57(c) on paper: 6 approaches, holding, intercepting and tracking in 6 months",
          "**Proficiency** = flying to ACS standards right now, in the weather you're facing, single-pilot",
          "You can be current and not proficient (6 easy approaches 5 months ago in VMC with a safety pilot)",
        ],
      },
      {
        h: "Managing the risk",
        b: [
          "Fly approaches **more often than** the regulation requires (many instructors suggest monthly)",
          "Practice in a sim/ATD between flights; include partial-panel and missed approaches",
          "Raise your personal minimums when you haven't flown recently",
          "Do a voluntary IPC or recurrent training if you feel rusty",
          "Hand-fly regularly — don't let the autopilot do all the flying",
        ],
      },
    ],
    examiner: [
      {
        q: "You're legally current, but you haven't flown in actual IMC for 5 months. The forecast is 500 overcast. Do you go?",
        a: "Legally I could, but I'd look at proficiency. I'd raise my minimums, or fly with an instructor or a sim session first. A low-IFR approach after months without practice is a big step up in risk.",
      },
    ],
    refs: ["14 CFR 61.57(c)", "FAA-H-8083-2 (Risk Management Handbook)", "FAA-H-8083-15 (Instrument Flying Handbook)"],
  },

  "IR.I.A.R2": {
    core: "Personal minimums are your own limits — set higher than legal minimums — decided on the ground before the flight, not in the air.",
    sections: [
      {
        h: "What to set",
        b: [
          "**Ceiling and visibility** for departure and approach (e.g., add 200–500 ft and 1 SM above published minimums while new)",
          "**Crosswind and gust** limits",
          "**Icing and convective** limits (e.g., no flight into forecast icing without FIKI)",
          "**Time since last IMC/approach** and when your minimums go up",
          "**Night IFR** and **single-pilot** limits",
          "**Fuel reserve** above the 45-minute legal minimum (many use 1 hour)",
        ],
      },
      {
        h: "How to use them",
        b: [
          "Write them down (the FAA Personal Minimums Checklist works well) and review them before each flight",
          "Adjust by experience and recent proficiency",
          "Don't renegotiate them under pressure on the day of the flight",
        ],
      },
    ],
    examiner: [
      {
        q: "What are your personal minimums as a new instrument pilot?",
        a: "Have a real answer ready, for example: \"For the first 6 months, 1,000 ft and 3 SM for departure and approach, no forecast icing or convective activity, max 15-knot crosswind, and 1 hour of fuel reserve.\"",
      },
    ],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)", "FAA Personal Minimums Checklist", "FAA-H-8083-25 (PHAK)"],
  },

  "IR.I.A.R3": {
    core: "Use IMSAFE to judge fitness, and know the physiological hazards that are worse in IMC: spatial disorientation, hypoxia, carbon monoxide and fatigue.",
    sections: [
      {
        h: "Fitness for flight",
        b: [
          "**IMSAFE:** Illness, Medication, Stress, Alcohol, Fatigue, Emotion (or Eating)",
          "**Alcohol (91.17):** 8 hours bottle-to-throttle, below **0.04** BAC, not under the influence",
          "**Medical deficiency (61.53):** don't fly if you know or suspect a condition that makes you unable to meet medical standards",
          "Check medications against the FAA's guidance (e.g., no sedating antihistamines)",
        ],
      },
      {
        h: "Spatial disorientation (biggest IMC risk)",
        b: [
          "The inner ear can't sense slow or sustained turns — trust the instruments",
          "**The leans:** after a slow, unnoticed roll, leveling the wings feels like a bank the other way",
          "**Graveyard spiral:** in a prolonged turn, you feel level, lose altitude and pull back, tightening the spiral",
          "**Coriolis illusion:** moving your head in a prolonged turn — the most overwhelming one",
          "**Somatogravic illusion:** rapid acceleration feels like pitching up (common on a go-around or takeoff in IMC)",
          "**Inversion illusion:** abrupt level-off from a climb feels like tumbling backward",
        ],
      },
      {
        h: "Other hazards",
        b: [
          "**Hypoxia types:** hypoxic (altitude), hypemic (CO, anemia), stagnant (G-forces, poor circulation), histotoxic (alcohol, drugs)",
          "**Carbon monoxide:** headache, drowsiness — carry a CO detector",
          "**Fatigue:** more dangerous in IMC, at night and at the end of a long day",
        ],
      },
    ],
    mnemonic: { name: "IMSAFE", lines: ["Illness", "Medication", "Stress", "Alcohol", "Fatigue", "Emotion / Eating"] },
    examiner: [
      {
        q: "You're in IMC, turning, and feel like you're level but the attitude indicator shows a 30° bank and descending. What's happening?",
        a: "Likely a graveyard spiral. Trust the instruments: level the wings first, then correct pitch and recover altitude. Don't pull back while banked.",
      },
    ],
    refs: ["14 CFR 61.53", "14 CFR 91.17", "AIM 8-1", "FAA-H-8083-25 (PHAK) ch. 17", "FAA-H-8083-15 (IFH) ch. 3"],
  },

  "IR.I.A.R4": {
    core: "Unfamiliar aircraft or avionics add workload and surprises in IMC. Get training, know the reversion modes, and set conservative limits until you're fluent.",
    sections: [
      {
        h: "The risk",
        b: [
          "Head-down time and button-pushing in IMC when you don't know the box",
          "Unknown failure modes and reversion displays (e.g., glass PFD failure, AHRS failure)",
          "Different autopilot behavior, mode annunciations and coupled-approach logic",
          "Different speeds, power settings and configurations",
        ],
      },
      {
        h: "Mitigation",
        b: [
          "**Training with a CFII** in the aircraft or avionics before flying IFR",
          "Read the **POH/AFM and avionics supplements**; use the manufacturer's simulator apps or trainers",
          "Practice the **failure modes** on the ground and in VMC (partial panel, autopilot off)",
          "Set the avionics up fully **before takeoff**: flight plan, approach loaded, frequencies",
          "Fly VFR first, then IFR in benign weather, before low IFR",
          "Check required training/endorsements: complex, high-performance, high-altitude, and insurance requirements",
        ],
      },
    ],
    examiner: [
      {
        q: "You're renting a G1000 airplane but trained on steam gauges. You have an IFR trip next week. What do you do?",
        a: "Get dual instruction with a CFII on the G1000, including PFD/MFD failures and reversionary mode. Study the cockpit reference guide, practice in VMC, and keep my minimums high for the first IFR trips.",
      },
    ],
    refs: ["FAA-H-8083-2 (Risk Management Handbook)", "FAA-H-8083-15 (IFH) ch. 5", "FAA-H-8083-6 (Advanced Avionics Handbook)", "POH/AFM"],
  },

  "IR.I.A.S1": {
    core: "Given a scenario, decide whether you're legal to act as PIC under IFR — and explain why, citing the regulation.",
    sections: [
      {
        h: "Walk through it in this order",
        b: [
          "**Pilot certificate and ratings** — category, class, instrument rating; any limitations (e.g., Multiengine VFR only)",
          "**Medical or BasicMed** — valid and current for the operation",
          "**Flight review** within 24 calendar months (61.56)",
          "**Instrument currency** — 6-HIT within 6 months, or grace period, or IPC needed",
          "**Passenger currency** — 3 takeoffs and landings in 90 days (full stop at night) if carrying passengers (61.57(a),(b))",
          "**Aircraft** — airworthy and IFR-equipped (91.205(d), 91.411, 91.413, 91.171)",
          "**Fitness** — IMSAFE, alcohol rules",
        ],
      },
      {
        h: "What the examiner wants",
        b: ["A clear yes/no answer", "The regulation behind it", "What you'd do to become legal if the answer is no"],
      },
    ],
    refs: ["14 CFR 61.3", "14 CFR 61.56", "14 CFR 61.57", "14 CFR 61.23", "14 CFR part 91"],
  },
};
