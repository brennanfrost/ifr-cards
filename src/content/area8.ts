import type { ContentMap } from "./types";

// Area VIII — Postflight Procedures
export const area8: ContentMap = {
  "IR.VIII.A.K1": {
    title: "How do you document a problem you found in flight or after landing?",
    core: "Write it up where maintenance will see it, placard it if it's inoperative, and tell the owner or operator before anyone flies it again.",
    sections: [
      {
        b: [
          "Record it in the **squawk sheet or maintenance log** your operator uses",
          "**Placard** inoperative items \"Inoperative\" (91.213)",
          "The **owner/operator** must have it fixed or deferred properly before the next flight that needs it",
          "Tell the **next pilot** if you can",
        ],
      },
    ],
    refs: ["14 CFR 91.213", "14 CFR 91.405"],
  },

  "IR.VIII.A.R1": {
    title: "Why does a postflight inspection and write-up matter?",
    core: "A problem you don't report can catch the next pilot in IMC. Your postflight is the next flight's first defense.",
    sections: [{ b: ["Look for **leaks, damage, ice, low fluids**", "Report **instrument or avionics** oddities you noticed in flight", "Don't assume someone else will report it"] }],
    refs: ["14 CFR 91.405", "FAA-H-8083-3 (Airplane Flying Handbook)"],
  },

  "IR.VIII.A.S1": {
    title: "What does the examiner want in the postflight?",
    core: "A postflight inspection, and any discrepancies and servicing needs written up.",
    sections: [{ h: "Standards", b: ["Walk around: **damage, leaks, fluids**", "Secure the airplane", "Write up **discrepancies** and **servicing** needed"] }],
    refs: ["POH/AFM"],
  },
};
