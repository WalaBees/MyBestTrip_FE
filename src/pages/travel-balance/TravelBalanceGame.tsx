import React, { useState, useMemo } from "react";
import {
  Page,
  Section,
  H2,
  Description,
  Button,
  CardRow,
  Card,
  CardEmoji,
  StatusBar,
  Badge,
  Desc,
  MatchProgressWrap,
  MatchProgressFill,
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
    if (pairIndex + 1 < (currentRound?.pairs.length || 0)) {
      setPairIndex(pairIndex + 1);
    } else {
      if (winners.length + 1 === 1) {
        setFinalWinner(pick);
        return;
      }
      const nextRoundEntrants = [...winners, pick];
      const nextRoundPairs = makePairs(nextRoundEntrants);
      setCurrentRound({
        name: `${nextRoundEntrants.length}강`,
        pairs: nextRoundPairs,
      });
      setWinners([]);
      setRoundIndex(roundIndex + 1);
      setPairIndex(0);
    }
  };

  const matchProgressPercent = useMemo(() => {
    if (!currentRound) return 0;
    return Math.round((pairIndex / currentRound.pairs.length) * 100);
  }, [pairIndex, currentRound]);

  return (
    <Page>
      {!started ? (
        <Section>
          <H2>여행지를 선택하세요!</H2>
          <Description>
            16개의 여행지 중 최종 여행지를 고르는 토너먼트
          </Description>
          <Button onClick={startGame}>시작하기</Button>
        </Section>
      ) : !finalWinner ? (
        <Section>
          <H2>{currentRound?.name}</H2>
          <StatusBar>
            <Desc>
              라운드 {roundIndex + 1} / {totalRounds}
            </Desc>
            <Badge>
              매치 {pairIndex + 1} / {currentRound?.pairs.length}
            </Badge>
          </StatusBar>
          <MatchProgressWrap>
            <MatchProgressFill $v={matchProgressPercent} />
          </MatchProgressWrap>
          <CardRow>
            <Card onClick={() => handlePick(currentRound!.pairs[pairIndex].a)}>
              <CardEmoji>{currentRound!.pairs[pairIndex].a.emoji}</CardEmoji>
              <div>{currentRound!.pairs[pairIndex].a.name}</div>
              <small>{currentRound!.pairs[pairIndex].a.region}</small>
            </Card>
            <Card onClick={() => handlePick(currentRound!.pairs[pairIndex].b)}>
              <CardEmoji>{currentRound!.pairs[pairIndex].b.emoji}</CardEmoji>
              <div>{currentRound!.pairs[pairIndex].b.name}</div>
              <small>{currentRound!.pairs[pairIndex].b.region}</small>
            </Card>
          </CardRow>
        </Section>
      ) : (
        <>
          <Section>
            <H2>최종 선택 결과</H2>
            <Description>
              당신이 선택한 최종 여행지는 <b>{finalWinner.name}</b>입니다!
            </Description>
          </Section>

          <Section>
            <H2>MBTI별 선택 통계</H2>
            <TravelStatsBar
              label={finalWinner.name}
              percent={64}
              count={128}
              total={200}
            />
            <Description>
              당신과 같은 {mbti}의 <b>64%</b>가 이 여행지를 선택했어요!
            </Description>
          </Section>

          <Section>
            <H2>누적 인기 여행지 Top3</H2>
            <CardRow>
              <Card>
                <CardEmoji>🌊</CardEmoji>
                <div>속초</div>
                <small>28%</small>
              </Card>
              <Card>
                <CardEmoji>🐚</CardEmoji>
                <div>여수</div>
                <small>25%</small>
              </Card>
              <Card>
                <CardEmoji>🌋</CardEmoji>
                <div>제주</div>
                <small>18%</small>
              </Card>
            </CardRow>
          </Section>
        </>
      )}
    </Page>
  );
};

export default TravelBalanceGame;
