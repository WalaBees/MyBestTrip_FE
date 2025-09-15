import React from "react";
import BalanceGame from "./balanceGamePage/BalanceGame.tsx"; // 같은 디렉토리에 저장했다고 가정

function BalanceGamePage() {
  // 실제 사용자 MBTI는 props나 context, 로그인 정보 등에서 가져오면 됩니다.
  const userMbti = "INTJ";

  return (
    <div style={{ width: "100%" }}>
      <BalanceGame
        mbti={userMbti}
        onFinish={(summary) => {
          console.log("게임 결과:", summary);
          // TODO: 필요하다면 결과를 서버로 전송하거나, 결과 페이지로 이동
        }}
      />
    </div>
  );
}

export default BalanceGamePage;
