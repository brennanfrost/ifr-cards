/**
 * Card back content.
 * Bullet strings support **bold**. A bullet that starts with "- " renders as a
 * sub-bullet under the previous bullet.
 */
export interface Section {
  h?: string;
  b: string[];
}

export interface ExaminerQ {
  q: string;
  a: string;
}

export interface CardContent {
  /** One-line core answer shown at the top of the back. */
  core?: string;
  sections: Section[];
  mnemonic?: { name: string; lines: string[] };
  examiner?: ExaminerQ[];
  refs?: string[];
}

export type ContentMap = Record<string, CardContent>;
