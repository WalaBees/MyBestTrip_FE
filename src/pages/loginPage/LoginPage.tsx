import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useAuth } from "../../auth/AuthContext.tsx";
import styled from "styled-components";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation() as { state?: { from?: Location } };
  const { login } = useAuth();

  const handleGoogleLoginSuccess = (data: { email: string; name: string }) => {
    login({ email: data.email, name: data.name });
    // 가려던 곳으로 복귀, 기본은 홈
    const to = location.state?.from?.pathname || "/";
    navigate(to, { replace: true });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Slider>aaa</Slider>
        <LoginPart>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ marginBottom: "35vh" }}>Hi Traveler!</h1>
            <p>Google 계정으로 로그인하기</p>
            <GoogleLogin handleGoogleLoginSuccess={handleGoogleLoginSuccess} />

            {/* 👇 회원가입 문구 */}
            <SignupText>
              저희 서비스가 처음이신가요?{" "}
              <SignupLink href="/signup">회원가입하러 가기</SignupLink>
            </SignupText>
          </div>
        </LoginPart>
      </Container>
    </div>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid green;
`;

const Slider = styled.div`
  display: flex;
  border: 2px solid blue;
  border-radius: 40px;
  width: 40%;
  height: 600px;
  align-items: center;
  justify-content: center;
`;
const LoginPart = styled.div`
  display: flex;
  border: 2px solid pink;
  width: 40%;
  height: 600px;
  align-items: center;
  justify-content: center;
`;

const SignupText = styled.p`
  margin-top: 24px;
  font-size: 14px;
  color: #444;
`;

const SignupLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
