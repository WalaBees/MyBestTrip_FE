import styled, { css } from "styled-components";
import { lightTheme } from "../../styles/theme";
// import { darkTheme } from "../../styles/theme";
export const Page = styled.div`
  min-height: 100vh;
  padding: 24px;
  background: #f8fafc;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin: 0;

  @media (min-width: 640px) {
    font-size: 24px;
  }
`;

export const Sub = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 4px 0 0 0;
`;

export const Em = styled.span`
  color: #111827;
  font-weight: 600;
`;

export const Count = styled.div`
  color: #6b7280;
  font-size: 14px;
`;

export const ProgressWrap = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const ProgressBar = styled.div<{ $value: number }>`
  height: 100%;
  background: ${lightTheme.colors.primary};
  width: ${({ $value }) => `${$value}%`};
  transition: width 0.5s ease;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 20px;

  @media (min-width: 640px) {
    padding: 24px;
  }
`;

export const Meta = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
  margin-bottom: 8px;
`;

export const QuestionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 16px 0;

  @media (min-width: 640px) {
    font-size: 20px;
  }
`;

export const ChoicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

export const ChoiceButton = styled.button<{ $picked?: boolean }>`
  width: 100%;
  text-align: left;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  transition: box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 6px rgba(35, 86, 255, 0.08);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #e5e7eb;
  }

  ${({ $picked }) =>
    $picked &&
    css`
      /* background: #447bf2; */
      background: ${lightTheme.colors.secondary};
      color: #fff;
      /* border-color: #113279; */
    `}
`;

export const ChoiceKey = styled.div`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  font-size: 12px;
  color: #151f32;
  margin-bottom: 4px;
`;

export const ChoiceText = styled.div<{ $picked?: boolean }>`
  font-weight: 600;
  color: ${({ $picked }) => ($picked ? "#fff" : "#111827")};
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const NavButton = styled.button<{ $primary?: boolean }>`
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid ${({ $primary }) => ($primary ? "#111827" : "#e5e7eb")};
  background: ${({ $primary }) => ($primary ? "#111827" : "#fff")};
  color: ${({ $primary }) => ($primary ? "#fff" : "#111827")};
  cursor: pointer;
  transition: background 0.15s ease, opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const Divider = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
`;

export const StatNote = styled.div`
  color: #4b5563;
  font-size: 14px;
  margin-bottom: 12px;
`;

export const BarRowWrap = styled.div`
  margin-bottom: 10px;
`;

export const BarRowHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 6px;
`;

export const BarRowLabel = styled.div<{ $highlight?: boolean }>`
  font-weight: 600;
  color: ${({ $highlight }) => ($highlight ? "#111827" : "#111827")};
`;

export const BarRowMeta = styled.div`
  color: #6b7280;
`;

export const ProgressThin = styled.div`
  width: 100%;
  height: 10px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
`;

export const ProgressThinFill = styled.div<{ $value: number }>`
  height: 100%;
  background: ${lightTheme.colors.secondary};
  width: ${({ $value }) => `${$value}%`};
  transition: width 0.7s ease;
`;

export const SummaryCard = styled.div`
  margin-top: 24px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 20px;
`;

export const SummaryTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

export const SummaryText = styled.p`
  font-size: 14px;
  color: #4b5563;
  margin: 0 0 16px 0;
`;

export const SummaryList = styled.ol`
  margin: 0;
  padding-left: 18px;
  display: grid;
  grid-gap: 8px;
`;

export const SummaryItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
`;
