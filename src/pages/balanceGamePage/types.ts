export type MBTI =
  | "INTJ"
  | "INTP"
  | "ENTJ"
  | "ENTP"
  | "INFJ"
  | "INFP"
  | "ENFJ"
  | "ENFP"
  | "ISTJ"
  | "ISFJ"
  | "ESTJ"
  | "ESFJ"
  | "ISTP"
  | "ISFP"
  | "ESTP"
  | "ESFP";

export type Trait = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface Choice {
  label: string;
  alignsWith: Trait[];
}

export interface Question {
  id: string;
  text: string;
  a: Choice;
  b: Choice;
}

export interface AnswerRecord {
  questionId: string;
  pick: "A" | "B";
}

export interface BalanceGameProps {
  mbti: MBTI;
  onFinish?: (data: {
    mbti: MBTI;
    answers: AnswerRecord[];
    agreeRate: number;
  }) => void;
}
