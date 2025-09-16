import type { Question } from "../types.ts";

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "첫날 일정은?",
    a: { label: "도심 야경부터 즐기기", alignsWith: ["E", "N"] },
    b: { label: "한적한 자연에서 힐링", alignsWith: ["I", "S"] },
  },
  {
    id: "q2",
    text: "이동 수단 취향은?",
    a: { label: "새벽 첫 비행으로 빠르게", alignsWith: ["J", "T"] },
    b: { label: "오후 느긋한 기차여행", alignsWith: ["P", "F"] },
  },
  {
    id: "q3",
    text: "일정 스타일은?",
    a: { label: "즉흥적으로 흐름 타기", alignsWith: ["P", "E"] },
    b: { label: "시간 단위로 촘촘히 계획", alignsWith: ["J", "I"] },
  },
  {
    id: "q4",
    text: "여행 중 대인관계는?",
    a: { label: "현지인과 적극적으로 어울리기", alignsWith: ["E", "F"] },
    b: { label: "혼자만의 사색 시간 가지기", alignsWith: ["I", "T"] },
  },
  {
    id: "q5",
    text: "맛집 공략법은?",
    a: { label: "유명 맛집 줄 서더라도 가본다", alignsWith: ["S", "F"] },
    b: { label: "숨은 로컬 식당을 탐험한다", alignsWith: ["N", "T"] },
  },
  {
    id: "q6",
    text: "콘텐츠 취향은?",
    a: { label: "박물관/전시에서 깊게 감상", alignsWith: ["I", "N"] },
    b: { label: "액티비티·체험 중심으로 즐기기", alignsWith: ["E", "S"] },
  },
  {
    id: "q7",
    text: "예산 관리 방식은?",
    a: { label: "세부 예산표로 꼼꼼관리", alignsWith: ["J", "T"] },
    b: { label: "대략만 잡고 자유롭게 소비", alignsWith: ["P", "F"] },
  },
  {
    id: "q8",
    text: "기록 vs 몰입",
    a: { label: "사진/영상으로 많이 남기기", alignsWith: ["S", "J"] },
    b: { label: "기록보다 순간에 몰입", alignsWith: ["N", "P"] },
  },
  {
    id: "q9",
    text: "일정 소화도는?",
    a: { label: "계획 100% 소화가 보람", alignsWith: ["J", "T"] },
    b: { label: "중간중간 융통성 있게", alignsWith: ["P", "F"] },
  },
  {
    id: "q10",
    text: "여행의 폭 vs 깊이",
    a: { label: "여러 도시 얕게 훑기", alignsWith: ["E", "S"] },
    b: { label: "한 도시 깊게 파보기", alignsWith: ["I", "N"] },
  },
];
