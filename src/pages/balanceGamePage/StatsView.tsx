import React, { useMemo } from "react";
import type { MBTI, Question } from "./types.ts";
import { mockDistribution } from "./utils/distribution";
import { Divider, StatNote, Em } from "./styles";
import BarRow from "./BarRow";

type Props = { mbti: MBTI; question: Question };

const StatsView: React.FC<Props> = ({ mbti, question }) => {
  const dist = useMemo(
    () => mockDistribution(mbti, question),
    [mbti, question]
  );
  const major = dist.aPercent >= 50 ? "A" : "B";

  return (
    <Divider>
      <StatNote>
        같은 <Em>{mbti}</Em> 유저 {dist.total}명 기준 통계
      </StatNote>
      <BarRow
        label={`A. ${question.a.label}`}
        percent={dist.aPercent}
        count={dist.aCount}
        highlight={major === "A"}
      />
      <BarRow
        label={`B. ${question.b.label}`}
        percent={dist.bPercent}
        count={dist.bCount}
        highlight={major === "B"}
      />
    </Divider>
  );
};

export default StatsView;
