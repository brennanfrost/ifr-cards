import type { ContentMap } from "./types";
import { area1TaskA } from "./area1-taskA";
import { area1TaskB } from "./area1-taskB";
import { area1TaskC } from "./area1-taskC";

export const content: ContentMap = {
  ...area1TaskA,
  ...area1TaskB,
  ...area1TaskC,
};

export * from "./types";
export { mnemonics } from "./mnemonics";
