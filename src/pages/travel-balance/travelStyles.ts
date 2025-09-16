import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Section = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #444;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  background: black;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

export const CardRow = styled.div`
  display: flex;
  gap: 40px;
`;

export const Card = styled.div<{ $selected?: boolean }>`
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid ${({ $selected }) => ($selected ? "black" : "#ddd")};
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: black;
  }
`;

export const CardEmoji = styled.div`
  font-size: 48px;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Badge = styled.div`
  padding: 4px 8px;
  background: #000;
  color: white;
  border-radius: 4px;
  font-size: 14px;
`;

export const Desc = styled.div`
  font-size: 14px;
  color: #555;
`;

/* 매치 전용 progress bar */
export const MatchProgressWrap = styled.div`
  width: 100%;
  height: 10px;
  background: #eee;
  border-radius: 999px;
  overflow: hidden;
`;
export const MatchProgressFill = styled.div<{ $v: number }>`
  height: 100%;
  width: ${({ $v }) => `${$v}%`};
  background: black;
  transition: width 0.3s ease;
`;

/* 통계 바 */
export const BarWrap = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;
export const BarHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;
export const Meta = styled.span`
  font-size: 14px;
`;
export const Muted = styled.span`
  color: #888;
  font-size: 12px;
`;
export const BarTrack = styled.div`
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
`;
export const BarFill = styled.div`
  height: 100%;
  background: black;
`;
