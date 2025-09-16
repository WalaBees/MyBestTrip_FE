import React from "react";
import {
  BarWrap,
  BarHead,
  Meta,
  Muted,
  BarTrack,
  BarFill,
} from "./travelStyles";

type Props = {
  label: string;
  percent: number;
  count: number;
  total: number;
};

const TravelStatsBar: React.FC<Props> = ({ label, percent, count, total }) => {
  return (
    <BarWrap>
      <BarHead>
        <span>{label}</span>
        <Meta>
          {percent}%{" "}
          <Muted>
            ({count}명 / {total})
          </Muted>
        </Meta>
      </BarHead>
      <BarTrack>
        <BarFill style={{ width: `${percent}%` }} />
      </BarTrack>
    </BarWrap>
  );
};

export default TravelStatsBar;
