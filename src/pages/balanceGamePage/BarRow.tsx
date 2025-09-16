import React from "react";
import {
  BarRowWrap,
  BarRowHead,
  BarRowLabel,
  BarRowMeta,
  ProgressThin,
  ProgressThinFill,
} from "./styles";

type Props = {
  label: string;
  percent: number;
  count: number;
  highlight?: boolean;
};

const BarRow: React.FC<Props> = ({ label, percent, count, highlight }) => {
  return (
    <BarRowWrap>
      <BarRowHead>
        <BarRowLabel $highlight={highlight}>{label}</BarRowLabel>
        <BarRowMeta>
          {percent}%{" "}
          <span style={{ color: "#9ca3af", marginLeft: 4 }}>({count}명)</span>
        </BarRowMeta>
      </BarRowHead>
      <ProgressThin>
        <ProgressThinFill $value={percent} />
      </ProgressThin>
    </BarRowWrap>
  );
};

export default BarRow;
