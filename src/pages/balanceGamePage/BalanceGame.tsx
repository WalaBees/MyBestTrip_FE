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
import { useMemo, useState } from "react";

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

  const finished = answers.length === total;
  const isLast = current === total - 1;
  const canGoPrev = current > 0;
  const canGoNext = current < total - 1;
  const answeredThis = answers.find((a) => a.questionId === question.id)?.pick;

  const shouldShowStats = finished || showStatsFor === question.id;

  function handlePick(pick: "A" | "B") {
    if (finished) return; // 완료 상태에서는 선택 비활성화
    const q = QUESTIONS[current];
    setAnswers((prev) => {
      const next = prev.filter((a) => a.questionId !== q.id);
      next.push({ questionId: q.id, pick });
      return next;
    });
    setShowStatsFor(q.id);
  }

  function handleNext() {
    // 완료 전: 다음으로 이동 또는 완료 처리
    if (!finished) {
      if (current < total - 1) {
        setShowStatsFor(null);
        setCurrent((i) => i + 1);
      } else {
        const agreeRate = calcAgreeRate(mbti, answers);
        onFinish?.({ mbti, answers, agreeRate });
        // 완료 직후 현재 문항 통계를 계속 보여주기
        setShowStatsFor(QUESTIONS[current].id);
      }
      return;
    }
    // 완료 후: 검토 네비게이션만 수행
    if (current < total - 1) setCurrent((i) => i + 1);
  }

  function handlePrev() {
    if (current > 0) setCurrent((i) => i - 1);
  }

  return (
    <Page>
      <Container>
        {/* 상단: 좌측 타이틀, 우측 카운트 + 홈 버튼 (항상 표시) */}
        <Header>
          <div>
            <Title>MBTI 여행 밸런스 게임</Title>
            <Sub>
              내 MBTI: <Em>{mbti}</Em>
            </Sub>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Count>
              {answers.length}/{total}
            </Count>
            <NavButton onClick={() => navigate("/home")}>
              홈으로 돌아가기
            </NavButton>
          </div>
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
                  disabled={finished}
                >
                  <ChoiceKey>{key}</ChoiceKey>
                  <ChoiceText $picked={picked}>{choice.label}</ChoiceText>
                </ChoiceButton>
              );
            })}
          </ChoicesGrid>

          {shouldShowStats && (
            <StatsView
              key={`stats-${question.id}`}
              mbti={mbti}
              question={question}
              onNext={handleNext}
            />
          )}

          <Nav>
            <NavButton onClick={handlePrev} disabled={!canGoPrev}>
              이전
            </NavButton>
            <NavButton
              $primary
              onClick={handleNext}
              disabled={(!finished && answeredThis == null) || !canGoNext}
            >
              {finished ? "다음" : isLast ? "완료" : "다음"}
            </NavButton>
          </Nav>
        </Card>

        {finished && <Summary mbti={mbti} answers={answers} />}
      </Container>
    </Page>
  );
};

export default BalanceGame;
