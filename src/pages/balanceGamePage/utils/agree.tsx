import type { AnswerRecord, MBTI } from "../types.ts";
import { QUESTIONS } from "../data/questions";
import { mockDistribution } from "./distribution";

export function calcAgreeRate(mbti: MBTI, answers: AnswerRecord[]) {
  if (answers.length === 0) return 0;
  let agree = 0;
  for (const a of answers) {
    const q = QUESTIONS.find((x) => x.id === a.questionId)!;
    const dist = mockDistribution(mbti, q);
    const major = dist.aPercent >= 50 ? "A" : "B";
    if (a.pick === major) agree++;
  }
  return agree / answers.length;
}
