# Handoff prompt — paste this into a new Claude session along with ifr-cards.zip (and the ACS PDF if you have it)

I'm continuing a project: **IFR Cards**, a free, mobile-first PWA flashcard app for the FAA Instrument Rating – Airplane checkride, built on the ACS (FAA-S-ACS-8C). It's for me and other students, free, no App Store. I want it built properly, not a basic HTML page. The attached zip has everything built so far. Unzip it, run `npm install`, and continue from the status below.

## What the app does
- Every card is one ACS element (or sub-element), with its ACS code (e.g. IR.I.A.K1). Front: Area, task, element text and code. Back: the core answer, sections, a memory aid, "examiner might ask" Q&A, and references.
- **Swipe** right = got it, left = again. No 1–4 ratings; students won't rate cards. The app schedules reviews itself (Leitner boxes, intervals 1/3/7/16/35 days, capped as the checkride date gets close). Missed cards come back later in the same session and go to Weak Spots.
- Screens: Home (checkride countdown, daily goal, streak, readiness by Area), Study (smart session, weak spots, test-report codes, by K/R type), Mock Oral (scenario questions, reveal, then Nailed it/Missed it), Browse (Area → Task → element → full card), More (memory aids, knowledge test report code entry, settings, backup/restore, about).
- **Knowledge test report feature:** paste ACS codes from the written-test report to get a study set; the examiner must re-test those areas.
- **No commercial test-prep question banks** (Sporty's, ASA, etc. are copyrighted). No written-test question bank at all for now.

## Tech
- Vite + React 19 + TypeScript, vite-plugin-pwa (offline, installable), idb-keyval for progress (localStorage fallback), bundled fonts (Inter, JetBrains Mono). Hash router. `base: "./"`, so it works from any path.
- `src/data/acs.json`: the whole ACS parsed (8 Areas, all tasks, ~295 elements + 43 sub-elements). Made by `tools/parse_acs.py` from `pdftotext -layout` output.
- `src/content/`: card back content keyed by ACS code (`area1-taskA.ts`, `-taskB.ts`, `-taskC.ts`), `mnemonics.ts`, `types.ts`, `index.ts` (merges the maps). Bullets support `**bold**`; a bullet starting with `"- "` renders as a sub-bullet.
- `src/lib/`: `deck.ts` (builds cards from acs.json + content), `scheduler.ts`, `store.ts`, `router.ts`, `install.ts`.
- `src/components/`, `src/screens/`, `src/index.css` (design system; dark avionics theme with amber accent, plus light theme).
- `tools/make_icons.py`: renders PWA icons into `public/icons/` with Playwright + Chrome.

## Status
**Done:** ACS parsing; Area I fully written (now 96 cards after splitting big elements into focused parts, ~30 oral questions, 13 mnemonics); all app code written; icons generated (`public/icons/`); **clean build** (`npm run build`, no TS errors); tested at 390×844 with headless Chrome (swipe both ways, tap/flip, card-back scroll, all 5 screens, Mock Oral, offline reload via service worker).
**Fixes made in the build session:** added `vite-plugin-pwa/client` types to `tsconfig.app.json`; renamed the nav `.back` CSS class to `.back-link` (it was collapsing the card's back face to 40 px); made the bottom nav more opaque; fixed "1 cards" plurals.
**Redesign (Nov 16):** Redtail palette (cream #F3EEE7, maroon #680F02, red #EC242A, ink #231F20) and Figtree font; light theme default; 7-step tutorial (`src/components/Tutorial.tsx`, replay from More); Browse task view groups K / R / S into collapsible sections with sub-elements under their parent; Mock Oral runs full-screen at `#/oral/run` with sticky buttons; status-bar strip for iPhone. Live at https://brennanfrost.github.io/ifr-cards/ (GitHub Pages via `.github/workflows/deploy.yml`; push to `main` to deploy).
**Content complete (Nov 16):** all 8 Areas written (`src/content/area1-task*.ts`, `area2.ts`…`area8.ts`); shared skill cards in `common.ts`. Every element has content.
**FAR/AIM section:** `src/content/regs.ts` (41 entries, summaries written from eCFR and faa.gov AIM, verbatim key wording, links). Card refs that match a reg are tappable (`regForRef`). Regs drill reuses Mock Oral (`startOral`).
**Sources rule:** FAA sources only: 14 CFR (eCFR), AIM, FAA handbooks (8083-series), ACs, ACS, TPP/chart guides, FAA-approved POH/AFM; NWS sites only as weather data sources. Verify via the eCFR API in a browser (`/api/versioner/v1/full/<date>/title-14.xml?part=91&section=91.xxx`) and AIM pages on faa.gov.
**Single/multiengine:** `settings.engines`; `MULTI_ONLY_TASKS` (VII.B, VII.C) hidden unless "multi" (`taskApplies`, `activeCards`).
**Ground/Flight:** Study tab switch. Ground sessions, due counts and readiness use K+R only (`inGround`); Skill cards are Flight briefings (`#/study/flight`, `#/brief/<task>`, `state.briefed`). Settings toggle "Skill cards in study sessions" adds them back.
**Possible next steps:** content review by a CFII; more Mock Oral scenarios.

## Content rules
- **One question per card.** If an element covers several topics, split it: make the content entry an **array of parts**, each with a `title` (the front-of-card question), its own short `core`, ≤ ~6 bullets, and its own examiner Q/refs. Part ids become `IR.I.A.K1-1`, `-2`… and show as "IR.I.A.K1 · 1 of 7". A student should be able to answer the front out loud in about 20 seconds.
- Accuracy matters: this is checkride material. Check regulation numbers, limits and figures against the current eCFR and AIM before writing them, and cite the reference on each card.
- Plain, direct language; bold the numbers and terms an examiner would test.
- Facts already checked: BasicMed (expanded Nov 2024: 6 passengers / 7 occupants, 12,500 lb); ICAO flight plan format required for FSS-filed plans; GPS/WAAS alternate planning (AIM 1-1-17/1-1-18); the "Multiengine Limited to VFR Only" rule (ACS Appendix 1); 61.133(b) is 50 NM.

Start by unzipping, installing, generating icons and getting a clean build. Then test, deploy, and move on to Area II.
