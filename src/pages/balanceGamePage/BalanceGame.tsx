import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { MBTI, AnswerRecord, BalanceGameProps } from "./types";
import { QUESTIONS } from "./data/questions";
import { calcAgreeRate } from "./utils/agree";
import {
  Page,
  Container,
  Header,
  Title,
  Sub,
  Em,
  Count,
  ProgressWrap,
  ProgressBar,
  Card,
  Meta,
  QuestionTitle,
  ChoicesGrid,
  ChoiceButton,
  ChoiceKey,
  ChoiceText,
  Nav,
  NavButton,
} from "./styles";
import StatsView from "./StatsView";
import Summary from "./Summary";

const BalanceGame: React.FC<BalanceGameProps> = ({ mbti, onFinish }) => {
  const navigate = useNavigate();
  const total = QUESTIONS.length;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [showStatsFor, setShowStatsFor] = useState<string | null>(null);

  const question = QUESTIONS[current];

  const progress = useMemo(
    () => (answers.length / total) * 100,
    [answers.length, total]
  );

  function handlePick(pick: "A" | "B") {
    const q = QUESTIONS[current];
    setAnswers((prev) => {
      const next = prev.filter((a) => a.questionId !== q.id);
      next.push({ questionId: q.id, pick });
      return next;
    });
    setShowStatsFor(q.id);
  }

  function handleNext() {
    setShowStatsFor(null);
    if (current < total - 1) {
      setCurrent((i) => i + 1);
    } else {
      const agreeRate = calcAgreeRate(mbti, answers);
      onFinish?.({ mbti, answers, agreeRate });
    }
  }

  function handlePrev() {
    setShowStatsFor(null);
    if (current > 0) setCurrent((i) => i - 1);
  }

  const isLast = current === total - 1;
  const answeredThis = answers.find((a) => a.questionId === question.id)?.pick;
  const finished = answers.length === total;

  return (
    <Page>
      <Container>
        <Header>
          <div>
            <Title>MBTI 여행 밸런스 게임</Title>
            <Sub>
              내 MBTI: <Em>{mbti}</Em>
            </Sub>
          </div>
          <Count>
            {answers.length}/{total}
          </Count>
        </Header>

        <ProgressWrap>
          <ProgressBar $value={progress} />
        </ProgressWrap>

        <Card>
          <Meta>
            Question {current + 1} / {total}
          </Meta>
          <QuestionTitle>{question.text}</QuestionTitle>

          <ChoicesGrid>
            {["A", "B"].map((key) => {
              const isA = key === "A";
              const choice = isA ? question.a : question.b;
              const picked = answeredThis === key;
              return (
                <ChoiceButton
                  key={key}
                  onClick={() => handlePick(isA ? "A" : "B")}
                  $picked={picked}
                >
                  <ChoiceKey>{key}</ChoiceKey>
                  <ChoiceText $picked={picked}>{choice.label}</ChoiceText>
                </ChoiceButton>
              );
            })}
          </ChoicesGrid>

          {showStatsFor === question.id && (
            <StatsView
              key={`stats-${question.id}`}
              mbti={mbti}
              question={question}
              onNext={handleNext}
            />
          )}

          {!showStatsFor && (
            <Nav>
              <NavButton onClick={handlePrev} disabled={current === 0}>
                이전
              </NavButton>
              {finished ? (
                <>
                  <NavButton $primary onClick={() => navigate("/")}>
                    홈으로 돌아가기
                  </NavButton>
                </>
              ) : (
                <NavButton
                  $primary
                  onClick={handleNext}
                  disabled={answeredThis == null}
                >
                  {isLast ? "완료" : "다음"}
                </NavButton>
              )}
            </Nav>
          )}
        </Card>

        {finished && <Summary mbti={mbti} answers={answers} />}
      </Container>
    </Page>
  );
};

export default BalanceGame;
