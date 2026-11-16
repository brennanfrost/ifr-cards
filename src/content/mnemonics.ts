export interface Mnemonic {
  id: string;
  name: string;
  what: string;
  lines: string[];
  /** ACS task or element codes this supports */
  codes: string[];
  ref?: string;
}

export const mnemonics: Mnemonic[] = [
  {
    id: "6hit",
    name: "6-HIT",
    what: "Instrument currency, preceding 6 calendar months",
    lines: ["6 instrument approaches", "Holding procedures and tasks", "Intercepting and Tracking courses"],
    codes: ["IR.I.A.K1"],
    ref: "14 CFR 61.57(c)",
  },
  {
    id: "grabcard",
    name: "GRABCARD",
    what: "Instruments and equipment for IFR (in addition to VFR day/night)",
    lines: ["Generator / alternator", "Radios (comm and nav for the route)", "Altimeter (sensitive)", "Ball (slip-skid)", "Clock (hr, min, sec)", "Attitude indicator", "Rate-of-turn indicator", "Directional gyro"],
    codes: ["IR.I.A.K2", "IR.II.A"],
    ref: "14 CFR 91.205(d)",
  },
  {
    id: "123",
    name: "1-2-3 rule",
    what: "When you do NOT need an alternate",
    lines: ["From 1 hour before to 1 hour after ETA", "Ceiling at least 2,000 ft above airport elevation", "Visibility at least 3 SM"],
    codes: ["IR.I.B.S4"],
    ref: "14 CFR 91.169",
  },
  {
    id: "altmins",
    name: "600-2 / 800-2",
    what: "Standard alternate minimums at ETA",
    lines: ["Precision approach: 600 ft and 2 SM", "Non-precision approach: 800 ft and 2 SM", "No approach: descend from MEA and land in basic VFR"],
    codes: ["IR.I.B.S4"],
    ref: "14 CFR 91.169(c)",
  },
  {
    id: "pave",
    name: "PAVE",
    what: "Risk assessment checklist",
    lines: ["Pilot", "Aircraft", "enVironment", "External pressures"],
    codes: ["IR.I.C.R1", "IR.I.C.R2", "IR.I.C.R3", "IR.I.C.R4"],
    ref: "FAA-H-8083-2",
  },
  {
    id: "imsafe",
    name: "IMSAFE",
    what: "Pilot fitness for flight",
    lines: ["Illness", "Medication", "Stress", "Alcohol", "Fatigue", "Emotion / Eating"],
    codes: ["IR.I.A.R3", "IR.I.C.R1"],
    ref: "AIM 8-1",
  },
  {
    id: "airmet",
    name: "AIRMET Sierra / Tango / Zulu",
    what: "What each AIRMET covers",
    lines: ["Sierra: IFR conditions and mountain obscuration", "Tango: moderate turbulence, surface winds ≥ 30 kt, LLWS", "Zulu: moderate icing and freezing levels"],
    codes: ["IR.I.B.K2g"],
    ref: "AIM 7-1",
  },
  {
    id: "eastodd",
    name: "East odd, west even",
    what: "IFR cruising altitudes in uncontrolled airspace",
    lines: ["Magnetic course 0–179°: odd thousands", "Magnetic course 180–359°: even thousands"],
    codes: ["IR.I.C.K2"],
    ref: "14 CFR 91.179",
  },
  {
    id: "hightolow",
    name: "High to low, look out below",
    what: "Altimeter error flying into lower pressure or colder air",
    lines: ["Flying from high to low pressure or temperature without resetting:", "the altimeter reads higher than your true altitude"],
    codes: ["IR.I.B.K3c", "IR.II.B"],
    ref: "FAA-H-8083-25",
  },
  {
    id: "craft",
    name: "CRAFT",
    what: "Copying an IFR clearance",
    lines: ["Clearance limit", "Route", "Altitude", "Frequency (departure)", "Transponder code"],
    codes: ["IR.III.A"],
    ref: "AIM 5-2",
  },
  {
    id: "avef",
    name: "AVEF / MEA",
    what: "Lost communications in IMC — route and altitude",
    lines: [
      "Route: Assigned → Vectored → Expected → Filed",
      "Altitude: the highest of MEA, Expected, or Assigned (for each segment)",
    ],
    codes: ["IR.VII.A"],
    ref: "14 CFR 91.185",
  },
  {
    id: "marvelous",
    name: "MARVELOUS VFR C500",
    what: "Reports to ATC without being asked",
    lines: [
      "Missed approach",
      "Airspeed change (±10 kt or 5% TAS)",
      "Reaching a holding fix (time and altitude)",
      "VFR-on-top altitude change",
      "ETA change > 3 min (non-radar)",
      "Leaving a holding fix",
      "Outer marker / FAF inbound (non-radar)",
      "Unforecast weather",
      "Safety of flight",
      "Vacating an altitude",
      "Final approach fix (non-radar)",
      "Radio / nav equipment failure (91.187)",
      "Compulsory reporting points (non-radar)",
      "500: unable to climb or descend at 500 fpm",
    ],
    codes: ["IR.III.A", "IR.III.B"],
    ref: "AIM 5-3-3, 14 CFR 91.183, 91.187",
  },
  {
    id: "5t",
    name: "5 Ts",
    what: "Actions at a fix (holding, approach)",
    lines: ["Turn", "Time", "Twist (set the course)", "Throttle", "Talk (report)"],
    codes: ["IR.III.B", "IR.VI.A"],
  },
];
