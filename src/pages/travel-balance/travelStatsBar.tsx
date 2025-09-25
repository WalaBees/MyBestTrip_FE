// src/pages/travel-balance/travelStatsBar.tsx
import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  percent: number; // 0~100
  count?: number;
  total?: number;
};

const TravelStatsBar: React.FC<Props> = ({ label, percent, count, total }) => {
  return (
    <Wrap>
      <Head>
        <Label>{label}</Label>
        <Meta>
          {percent}%
          {typeof count === "number" && typeof total === "number" ? (
            <span className="muted">
              {" "}
              ({count} / {total})
            </span>
          ) : null}
        </Meta>
      </Head>
      <Thin>
        <ThinFill
          style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
        />
      </Thin>
    </Wrap>
  );
};

export default TravelStatsBar;

/* ---------- local styles (독립형) ---------- */

const Wrap = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 12px auto 0;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
  gap: 12px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #111827;
`;

const Meta = styled.div`
  font-size: 13px;
  color: #111827;

  .muted {
    color: #6b7280;
    margin-left: 4px;
  }
`;

const Thin = styled.div`
  width: 100%;
  height: 10px;
  background: #eeeeee;
  border-radius: 999px;
  overflow: hidden;
`;

const ThinFill = styled.div`
  height: 100%;
  background: #111;
  transition: width 0.35s ease;
`;
