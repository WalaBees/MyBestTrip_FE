import styled from "styled-components";

/* 페이지 래핑 */
export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 16px 56px;
`;

/* 큰 섹션 헤더 */
export const SectionHeader = styled.h2`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  font-size: 28px;
  font-weight: 700;
`;

/* 작은 설명 텍스트 */
export const SectionSub = styled.p`
  width: 100%;
  max-width: 1120px;
  margin: 6px auto 20px;
  color: #6b7280;
  font-size: 14px;
`;

/* 구분선 */
export const Divider = styled.hr`
  width: 100%;
  max-width: 1120px;
  margin: 16px auto 32px;
  border: none;
  height: 1px;
  background: #eeeeee;
`;

/* 매치/추천 공용 카드 그리드 */
export const CardsGrid = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 28px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

/* 추천 카드 (매치 카드도 동일 스타일 사용) */
export const SuggestCard = styled.button<{ $selected?: boolean }>`
  text-align: left;
  border: 1px solid ${({ $selected }) => ($selected ? "#111" : "#e5e7eb")};
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  display: grid;
  padding: 0;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.02s ease;

  &:hover {
    border-color: #111;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(1px);
  }
`;

/* 썸네일(플레이스홀더) 영역 */
export const SuggestImageBox = styled.div`
  position: relative;
  height: 180px;
  background: #efefef;
  display: grid;
  place-items: center;
  color: #6b7280;
  font-size: 14px;
  user-select: none;
`;

/* 좌상단 태그(지역) */
export const SuggestTag = styled.span`
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 4px 8px;
  background: #f3f4f6;
  border-radius: 6px 0 6px 0;
  font-size: 12px;
  color: #6b7280;
`;

/* 카드 본문 */
export const SuggestBody = styled.div`
  padding: 12px;
  display: grid;
  gap: 2px;
`;

/* 제목/부제목 */
export const SuggestTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`;
export const SuggestSubtitle = styled.div`
  color: #6b7280;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* 라운드 타이틀/메타/프로그레스 */
export const RoundTitle = styled.h3`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  font-size: 28px;
  font-weight: 700;
`;
export const MatchMetaRow = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 10px;
  display: flex;
  justify-content: space-between;
  color: #6b7280;
  font-size: 13px;
`;
export const MatchSteps = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MatchStep = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MatchDot = styled.div<{ $done: boolean; $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $done, $active }) =>
    $active || $done ? "#111" : "#e5e7eb"};
  border: 1px solid ${({ $active }) => ($active ? "#111" : "#d1d5db")};
  box-shadow: ${({ $active }) =>
    $active ? "0 0 0 3px rgba(17,17,17,0.1)" : "none"};
  transition: background 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
`;

export const MatchLine = styled.div<{ $done: boolean }>`
  width: 40px;
  height: 2px;
  background: ${({ $done }) => ($done ? "#111" : "#e5e7eb")};
  transition: background 0.2s ease;
`;

/* 인트로 섹션 */
export const IntroWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid #b979fe; */
  padding: 40px;
  border-radius: 20px;
  /* width: 100%; */
  max-width: 1120px;
  margin: 0 auto 12px;
`;
export const IntroTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;
export const IntroDesc = styled.p`
  color: #6b7280;
  margin: 0 0 16px 0;
`;
export const PrimaryBtn = styled.button`
  height: 44px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid #b979fe;
  background: #b979fe;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  width: 30rem;
`;
/* 단락 간 단순 간격 */
export const Spacer = styled.div`
  height: 8px;
`;
