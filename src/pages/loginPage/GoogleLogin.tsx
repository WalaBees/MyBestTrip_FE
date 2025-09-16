import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { jwtDecode } from "jwt-decode";
import GoogleMaterialButton from "./GoogleMaterialButton";

interface Props {
  handleGoogleLoginSuccess: (data: { email: string; name: string }) => void;
}

const GoogleLogin = ({ handleGoogleLoginSuccess }: Props) => {
  const googleSignInButton = useRef<HTMLDivElement>(null);
  const [initialized, setInitialized] = useState(false);

  const handleGoogleSignIn = useCallback(
    (res: google.accounts.id.CredentialResponse) => {
      if (!res.clientId || !res.credential) return;
      const payload = jwtDecode(res.credential) as {
        email?: string;
        name?: string;
      };
      if (!payload.email || !payload.name) return;
      handleGoogleLoginSuccess({ email: payload.email, name: payload.name });
    },
    [handleGoogleLoginSuccess]
  );

  useEffect(() => {
    if (typeof window === "undefined" || !googleSignInButton.current) return;

    const init = () => {
      if (initialized) return;
      if (!window.google) return; // 아직 로드 안 됨 → onload에서 다시 시도

      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // ✅ Vite
        callback: handleGoogleSignIn,
      });

      window.google.accounts.id.renderButton(googleSignInButton.current!, {
        type: "icon",
        theme: "outline",
        size: "large",
      });

      setInitialized(true);
    };

    // 이미 스크립트가 있으면 초기화만
    const existing = document.getElementById("google-client-script");
    if (existing) {
      if (window.google) init();
      else existing.addEventListener("load", init, { once: true });
      return;
    }

    // 동적 삽입
    const script = document.createElement("script");
    script.id = "google-client-script";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", init, { once: true });
    document.body.appendChild(script);

    return () => {
      // window.google?.accounts.id.cancel(); // 필요시 프롬프트 취소
      // document.getElementById("google-client-script")?.remove(); // 필요시 제거
    };
  }, [handleGoogleSignIn, initialized]);

  return (
    <>
      <HiddenDiv ref={googleSignInButton} />
      <GoogleMaterialButton
        onClick={() => {
          const internalBtn = googleSignInButton.current?.querySelector(
            "div[role=button]"
          ) as HTMLElement | null;

          internalBtn?.click();
        }}
      />
    </>
  );
};

const HiddenDiv = styled.div`
  display: none;
`;

const GoogleButtonImage = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

export default GoogleLogin;
