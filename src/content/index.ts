import type { ContentMap } from "./types";
import { area1TaskA } from "./area1-taskA";
import { area1TaskB } from "./area1-taskB";
import { area1TaskC } from "./area1-taskC";
import { area2 } from "./area2";
import { area3 } from "./area3";
import { area4 } from "./area4";

export const content: ContentMap = {
  ...area1TaskA,
  ...area1TaskB,
  ...area1TaskC,
  ...area2,
  ...area3,
  ...area4,
};

export * from "./types";
export { mnemonics } from "./mnemonics";
