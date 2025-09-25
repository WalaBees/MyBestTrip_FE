import React, { useMemo, useState } from "react";
import {
  Page,
  SectionHeader,
  SectionSub,
  Divider,
  CardsGrid,
  SuggestCard,
  SuggestImageBox,
  SuggestTag,
  SuggestBody,
  SuggestTitle,
  SuggestSubtitle,
  RoundTitle,
  MatchMetaRow,
  MatchSteps,
  MatchStep,
  MatchDot,
  MatchLine,
  IntroWrap,
  IntroTitle,
  IntroDesc,
  PrimaryBtn,
  Spacer,
} from "./travelStyles";
import { TRAVEL_DESTINATIONS } from "./travelData";
import type { TravelDestination, Round } from "./travelTypes";
import TravelStatsBar from "./travelStatsBar";

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const makePairs = (arr: TravelDestination[]): Round["pairs"] => {
  const pairs: { a: TravelDestination; b: TravelDestination }[] = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push({ a: arr[i], b: arr[i + 1] });
  }
  return pairs;
};

const TravelBalanceGame: React.FC<{ mbti: string }> = ({ mbti }) => {
  const [started, setStarted] = useState(false);
  const [roundIndex, setRoundIndex] = useState(0);
  const [pairIndex, setPairIndex] = useState(0);
  const [currentRound, setCurrentRound] = useState<Round | null>(null);
  const [winners, setWinners] = useState<TravelDestination[]>([]);
  const [finalWinner, setFinalWinner] = useState<TravelDestination | null>(
    null
  );

  const totalRounds = useMemo(() => Math.log2(TRAVEL_DESTINATIONS.length), []);

  const startGame = () => {
    const shuffled = shuffle(TRAVEL_DESTINATIONS);
    const firstRound: Round = { name: "16강", pairs: makePairs(shuffled) };
    setCurrentRound(firstRound);
    setStarted(true);
  };

  const handlePick = (pick: TravelDestination) => {
    setWinners((prev) => [...prev, pick]);

    // 라운드 내 다음 매치로
    if (pairIndex + 1 < (currentRound?.pairs.length || 0)) {
      setPairIndex(pairIndex + 1);
      return;
    }

    // 라운드 종료 → 다음 라운드 준비 or 최종 우승
    const entrants = [...winners, pick];
    if (entrants.length === 1) {
      setFinalWinner(pick);
      return;
    }
    const nextPairs = makePairs(entrants);
    setCurrentRound({ name: `${entrants.length}강`, pairs: nextPairs });
    setWinners([]);
    setRoundIndex((i) => i + 1);
    setPairIndex(0);
  };

  const matchProgressPercent = useMemo(() => {
    if (!currentRound) return 0;
    return Math.round((pairIndex / currentRound.pairs.length) * 100);
  }, [pairIndex, currentRound]);

  return (
    <Page>
      {!started ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <IntroWrap>
            <IntroTitle>여행지를 선택하세요!</IntroTitle>
            <IntroDesc>
              16개의 여행지 중 가장 마음에 드는 여행지를 골라보세요!
            </IntroDesc>
            <PrimaryBtn onClick={startGame}>밸런스 게임 시작하기</PrimaryBtn>
          </IntroWrap>
        </div>
      ) : !finalWinner ? (
        <>
          {/* 라운드/매치 헤더 + 프로그레스 */}
          <RoundTitle>{currentRound?.name}</RoundTitle>
          <MatchMetaRow>
            <span>
              라운드 {roundIndex + 1} / {totalRounds}
            </span>
            {/* <span>
              매치 {pairIndex + 1} / {currentRound?.pairs.length}
            </span> */}
          </MatchMetaRow>
          <MatchSteps>
            {Array.from({ length: currentRound?.pairs.length ?? 0 }, (_, i) => {
              const isDone = i < pairIndex;
              const isActive = i === pairIndex;
              const isLast = i === (currentRound?.pairs.length ?? 1) - 1;
              return (
                <MatchStep key={i}>
                  <MatchDot $done={isDone} $active={isActive} />
                  {!isLast && <MatchLine $done={i < pairIndex} />}
                </MatchStep>
              );
            })}
          </MatchSteps>

          {/* 매치 카드 (추천카드 스타일로 통일) */}
          {currentRound?.pairs[pairIndex] && (
            <CardsGrid>
              {(["a", "b"] as const).map((k) => {
                const item = currentRound.pairs[pairIndex][k];
                return (
                  <SuggestCard key={item.id} onClick={() => handlePick(item)}>
                    <SuggestImageBox>
                      {/* 썸네일이 없다면 이름/이모지 표시 */}
                      <div style={{ textAlign: "center" }}>
                        <div
                          style={{
                            fontSize: 40,
                            lineHeight: 1,
                            marginBottom: 8,
                          }}
                        >
                          {item.emoji}
                        </div>
                        {item.name}
                      </div>
                      <SuggestTag>{item.region}</SuggestTag>
                    </SuggestImageBox>
                    <SuggestBody>
                      <SuggestTitle>{item.name}</SuggestTitle>
                      <SuggestSubtitle>{item.description}</SuggestSubtitle>
                    </SuggestBody>
                  </SuggestCard>
                );
              })}
            </CardsGrid>
          )}
        </>
      ) : (
        <>
          {/* 결과 */}
          <SectionHeader>최종 선택 결과</SectionHeader>
          <SectionSub>
            당신이 선택한 최종 여행지는 <b>{finalWinner.name}</b>입니다!
          </SectionSub>
          <Divider />

          {/* MBTI별 선택 통계 (막대) */}
          <SectionHeader>MBTI별 선택 통계</SectionHeader>
          <div style={{ width: "100%", maxWidth: 1120, margin: "0 auto" }}>
            <TravelStatsBar
              label={finalWinner.name}
              percent={64}
              count={128}
              total={200}
            />

            <Spacer />
            <SectionSub>
              당신과 같은 {mbti}의 <b>64%</b>가 이 여행지를 선택했어요!
            </SectionSub>
          </div>
          <Divider />

          {/* 누적 Top3 (추천카드 스타일로 통일) */}
          <SectionHeader>누적 인기 여행지 Top3</SectionHeader>
          <CardsGrid>
            {[
              {
                id: "top1",
                name: "속초",
                region: "강원도",
                desc: "바다/맛집 인기",
                emoji: "🌊",
                pct: 28,
              },
              {
                id: "top2",
                name: "여수",
                region: "전라남도",
                desc: "해양 레포츠",
                emoji: "🐚",
                pct: 25,
              },
              {
                id: "top3",
                name: "제주",
                region: "제주",
                desc: "자연/힐링",
                emoji: "🌋",
                pct: 18,
              },
            ].map((d) => (
              <SuggestCard key={d.id} as="div">
                <SuggestImageBox>
                  <div style={{ textAlign: "center" }}>
                    <div
                      style={{ fontSize: 40, lineHeight: 1, marginBottom: 8 }}
                    >
                      {d.emoji}
                    </div>
                    {d.name}
                  </div>
                  <SuggestTag>{d.region}</SuggestTag>
                </SuggestImageBox>
                <SuggestBody>
                  <SuggestTitle>{d.name}</SuggestTitle>
                  <SuggestSubtitle>
                    {d.desc} · {d.pct}%
                  </SuggestSubtitle>
                </SuggestBody>
              </SuggestCard>
            ))}
          </CardsGrid>
        </>
      )}
    </Page>
  );
};

export default TravelBalanceGame;
