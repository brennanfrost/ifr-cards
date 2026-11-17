import type { CardContent } from "./types";

// Skill elements that repeat across many Tasks. Same wording each time so you learn it once.

export const srm = (task: string): CardContent => ({
  title: `What does good single-pilot resource management look like during ${task}?`,
  core: "Use every resource, manage your workload ahead of the airplane, and keep making decisions instead of reacting.",
  sections: [
    {
      b: [
        "**Plan ahead**: brief the next phase before it starts, with frequencies, courses and altitudes set early",
        "**Use automation** to lower workload, and say what mode it's in",
        "**Use ATC**: ask for vectors, delay vectors, a hold or a different approach when you need time",
        "**Prioritize**: aviate, navigate, communicate",
        "**Speak up** if you're behind: \"Unable\" and \"Request…\" are good SRM",
      ],
    },
  ],
  refs: ["FAA-H-8083-2 (Risk Management Handbook)", "FAA-H-8083-15 (Instrument Flying Handbook)"],
});

export const checklist = (phase: string): CardContent => ({
  title: `How should you use checklists during ${phase}?`,
  core: "Use the manufacturer's checklist for each phase, and complete it before the phase gets busy.",
  sections: [
    {
      b: [
        "Use the **POH/AFM** checklist (or an approved one based on it)",
        "**Read-do** for normal items; **flows then verify** for time-critical ones",
        "Don't let a checklist pull your eyes off the instruments for long. Scan between items",
        "Interrupted? **Start that section again**",
      ],
    },
  ],
  refs: ["POH/AFM", "FAA-H-8083-3 (Airplane Flying Handbook)"],
});

export const mfd = (task: string): CardContent => ({
  title: `How do you use the MFD and moving map during ${task}?`,
  core: "Use it to confirm position, track and wind drift, while flying from the primary instruments.",
  sections: [
    {
      b: [
        "Check your **position** against the course and the next fix",
        "Watch the **track line** against the desired course to see **wind drift** early",
        "Use it to **anticipate** turns and altitude changes",
        "Fly the airplane from the **PFD/primary instruments**. The map is for awareness, not for navigation unless approved",
      ],
    },
  ],
  refs: ["FAA-H-8083-15 (Instrument Flying Handbook)", "FAA-H-8083-6 (Advanced Avionics Handbook)"],
});

