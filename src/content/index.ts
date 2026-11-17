import type { ContentMap } from "./types";
import { area1TaskA } from "./area1-taskA";
import { area1TaskB } from "./area1-taskB";
import { area1TaskC } from "./area1-taskC";
import { area2 } from "./area2";
import { area3 } from "./area3";
import { area4 } from "./area4";
import { area5 } from "./area5";
import { area6 } from "./area6";
import { area7 } from "./area7";
import { area8 } from "./area8";

export const content: ContentMap = {
  ...area1TaskA,
  ...area1TaskB,
  ...area1TaskC,
  ...area2,
  ...area3,
  ...area4,
  ...area5,
  ...area6,
  ...area7,
  ...area8,
};

export * from "./types";
export { mnemonics } from "./mnemonics";
