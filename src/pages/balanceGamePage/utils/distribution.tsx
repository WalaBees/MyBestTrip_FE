import type { MBTI, Question } from "../types.ts";
import { cyrb128, mulberry32 } from "./random";

export function mockDistribution(mbti: MBTI, q: Question, baseTotal = 237) {
  const seed = cyrb128(`${mbti}-${q.id}`)[0];
  const rng = mulberry32(seed);

  let aPercent = 45 + Math.floor(rng() * 10); // 45~54
  const biasRange = 6 + Math.floor(rng() * 9); // 6~14
  const userTraits = mbti.split("") as Array<
    "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P"
  >;

  const aAligns = q.a.alignsWith.some((t) => userTraits.includes(t));
  const bAligns = q.b.alignsWith.some((t) => userTraits.includes(t));

  if (aAligns && !bAligns) aPercent = Math.min(90, aPercent + biasRange);
  if (bAligns && !aAligns) aPercent = Math.max(10, aPercent - biasRange);

  const bPercent = 100 - aPercent;
  const aCount = Math.round((aPercent / 100) * baseTotal);
  const bCount = baseTotal - aCount;

  return { aPercent, bPercent, aCount, bCount, total: baseTotal };
}
