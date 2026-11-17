import type { SVGProps } from "react";

const base = (p: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

export const IHome = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V20h14V9.5" /><path d="M10 20v-5h4v5" /></svg>
);
export const ICards = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="6" width="14" height="15" rx="2.5" /><path d="M7 3h11.5A2.5 2.5 0 0 1 21 5.5V17" /></svg>
);
export const IMic = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" /><path d="M8.5 8.5h7M8.5 11.5h4.5" /></svg>
);
export const IBook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z" /><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20" /><path d="M8 7.5h8M8 11h6" /></svg>
);
export const IMore = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="5" cy="12" r="1.4" fill="currentColor" /><circle cx="12" cy="12" r="1.4" fill="currentColor" /><circle cx="19" cy="12" r="1.4" fill="currentColor" /></svg>
);
export const IChevR = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="m9 5 7 7-7 7" /></svg>;
export const IChevL = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="m15 5-7 7 7 7" /></svg>;
export const IClose = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>;
export const ICheck = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>;
export const IRedo = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M4 12a8 8 0 1 0 2.4-5.7" /><path d="M4 4v5h5" /></svg>;
export const IFlip = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M4 9a8 8 0 0 1 14-3l2 2" /><path d="M20 4v4h-4" /><path d="M20 15a8 8 0 0 1-14 3l-2-2" /><path d="M4 20v-4h4" /></svg>;
export const IFlame = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M12 21c-3.9 0-7-2.7-7-6.5 0-2.9 1.8-4.6 3.2-6.2.3 1.6 1.2 2.7 2.3 3.2C10.5 8 11.6 5 14 3c0 3 5 5.4 5 11.5 0 3.8-3.1 6.5-7 6.5Z" /></svg>;
export const ITarget = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>;
export const IDoc = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></svg>;
export const IKey = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><circle cx="8" cy="15" r="4" /><path d="m11 12 9-9M17 6l3 3M14.5 8.5l2 2" /></svg>;
export const IGear = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" /></svg>
);
export const IInfo = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>;
export const IDownload = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>;
export const IShare = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M12 15V3M8 7l4-4 4 4" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" /></svg>;
export const IPlus = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>;
export const ICalendar = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>;
export const IShuffle = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M3 6h3.5c2 0 3.2.9 4.3 2.6l2.4 3.8c1.1 1.7 2.3 2.6 4.3 2.6H21" /><path d="M3 18h3.5c1.5 0 2.5-.5 3.4-1.5M14.1 7.5c.9-1 1.9-1.5 3.4-1.5H21" /><path d="m18 3 3 3-3 3M18 15l3 3-3 3" /></svg>;
export const IUser = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>;
export const IQuestion = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .8-1 1.5v.4M12 17h.01" /></svg>;
export const IWarn = (p: SVGProps<SVGSVGElement>) => <svg {...base(p)}><path d="M12 3 2.5 20h19z" /><path d="M12 10v4.5M12 17.5h.01" /></svg>;

/** Attitude-indicator brand mark */
export const Mark = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" aria-hidden {...p}>
    <defs>
      <clipPath id="mk"><circle cx="16" cy="16" r="12" /></clipPath>
    </defs>
    <g clipPath="url(#mk)">
      <rect width="32" height="32" fill="#8fb4d3" />
      <path d="M0 18.5 32 13.5V32H0z" fill="#c4562c" />
      <path d="M0 18.5 32 13.5" stroke="#f3eee7" strokeWidth="1.3" />
    </g>
    <circle cx="16" cy="16" r="12" fill="none" stroke="#f3eee7" strokeWidth="2" />
    <path d="M9 16.2h4.5l2.5 2.3 2.5-2.3H23" fill="none" stroke="#f3eee7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IPlane = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 2.5c.9 0 1.5 1 1.5 2.2v4.9l7.5 4.3v2l-7.5-2.3v4.1l2.2 1.8V21L12 20l-3.7 1v-1.5l2.2-1.8v-4.1L3 15.9v-2l7.5-4.3V4.7c0-1.2.6-2.2 1.5-2.2z" /></svg>
);
