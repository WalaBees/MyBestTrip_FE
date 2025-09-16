// src/pages/LoginPage.tsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useAuth } from "../../auth/AuthContext.tsx";

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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>로그인</h1>
        <p>Google 계정으로 로그인해 주세요</p>
        <GoogleLogin handleGoogleLoginSuccess={handleGoogleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
