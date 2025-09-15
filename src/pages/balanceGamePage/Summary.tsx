import React, { useMemo } from "react";
import type { MBTI, AnswerRecord } from "./types.ts";
import { QUESTIONS } from "./data/questions";
import { mockDistribution } from "./utils/distribution";
import {
  SummaryCard,
  SummaryTitle,
  SummaryText,
  SummaryList,
  SummaryItem,
  Em,
} from "./styles";

const Summary: React.FC<{ mbti: MBTI; answers: AnswerRecord[] }> = ({
  mbti,
  answers,
}) => {
  const percent = useMemo(() => {
    let agree = 0;
    for (const a of answers) {
      const q = QUESTIONS.find((x) => x.id === a.questionId)!;
      const d = mockDistribution(mbti, q);
      const major = d.aPercent >= 50 ? "A" : "B";
      if (a.pick === major) agree++;
    }
    return Math.round((agree / answers.length) * 100);
  }, [mbti, answers]);

  return (
    <SummaryCard>
      <SummaryTitle>결과 요약</SummaryTitle>
      <SummaryText>
        같은 {mbti} 유저의 다수 선택과 <Em>{percent}%</Em> 일치했어요.
      </SummaryText>

      <SummaryList>
        {answers.map((a, i) => {
          const q = QUESTIONS.find((x) => x.id === a.questionId)!;
          const d = mockDistribution(mbti, q);
          const major = d.aPercent >= 50 ? "A" : "B";
          const myLabel = a.pick === "A" ? q.a.label : q.b.label;
          const majorLabel = major === "A" ? q.a.label : q.b.label;
          // const match = a.pick === major;
          return (
            <SummaryItem key={q.id}>
              <span style={{ color: "#374151" }}>
                Q{i + 1}. {q.text}
              </span>
              <span style={{ color: "#6b7280" }}>
                내 선택: <Em>{myLabel}</Em> · 다수: {majorLabel} (
                {Math.max(d.aPercent, d.bPercent)}%)
              </span>
            </SummaryItem>
          );
        })}
      </SummaryList>
    </SummaryCard>
  );
};

export default Summary;
