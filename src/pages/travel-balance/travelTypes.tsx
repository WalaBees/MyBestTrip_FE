export interface TravelDestination {
  id: string;
  name: string;
  region: string;
  description: string;
  emoji: string;
}

export interface MatchPair {
  a: TravelDestination;
  b: TravelDestination;
}

export interface Round {
  name: string;
  pairs: MatchPair[];
}

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
