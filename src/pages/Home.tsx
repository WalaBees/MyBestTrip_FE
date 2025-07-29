import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

function Home() {
  return (
    <Container>
      <div>HomePage</div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 90vh; // 나중에 유동적으로 변경
  justify-content: center;
  align-items: center;
  border: 2px solid ${lightTheme.colors.primary};
  background-color: ${lightTheme.colors.background};
  // 다크모드 확인:
  /* background-color: ${darkTheme.colors.background}; */
  color: ${lightTheme.colors.primary};
`;
