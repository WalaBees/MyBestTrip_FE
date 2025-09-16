// src/pages/auth/SignUpPage.tsx
import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

/** --- 간단 유효성 검사 & 유틸 --- */
const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v);
const maskEmail = (email: string) => {
  // abcdef@xyz.com -> ab****@xyz.com 형태로 마스킹
  const [local, domain] = email.split("@");
  if (!local || !domain) return email;
  if (local.length <= 2) return `${local[0] ?? ""}***@${domain}`;
  return `${local.slice(0, 2)}****@${domain}`;
};

const MBTI_LIST = [
  "INTJ",
  "INTP",
  "ENTJ",
  "ENTP",
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
] as const;
type MBTI = (typeof MBTI_LIST)[number];

type GoogleUser = { email?: string; name?: string };

/**
 * 구글 로그인 직후 이메일을 전달받는 방식 예시:
 * 1) 라우터 state (navigate("/signup", { state: { email, name } }))
 * 2) 전역 AuthContext / Zustand 등에서 user 가져오기
 * 3) localStorage/sessionStorage 임시 저장
 * 아래는 (1)+(3) 혼합 예시로 구현. 프로젝트 상황에 맞게 교체하세요.
 */
function useGoogleUserFromContextOrState(): GoogleUser {
  const location = useLocation() as any;
  const stateUser: GoogleUser | undefined = location?.state;

  const [user, setUser] = useState<GoogleUser>(() => {
    const saved = sessionStorage.getItem("google_user");
    return stateUser ?? (saved ? JSON.parse(saved) : {});
  });

  useEffect(() => {
    if (stateUser?.email) {
      sessionStorage.setItem("google_user", JSON.stringify(stateUser));
      setUser(stateUser);
    }
  }, [stateUser]);

  return user;
}

const SignUpPage: React.FC = () => {
  const googleUser = useGoogleUserFromContextOrState();
  const [nickname, setNickname] = useState("");
  const [mbti, setMbti] = useState<MBTI | "">("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  // 이메일은 구글에서 받아온 값을 사용 (읽기 전용)
  const email = googleUser.email ?? "";
  const masked = email ? maskEmail(email) : "";

  const canSubmit = useMemo(() => {
    return (
      isEmail(email) && // 구글에서 받은 이메일 형식 확인
      nickname.trim().length >= 1 &&
      !!mbti &&
      agreeTerms
    );
  }, [email, nickname, mbti, agreeTerms]);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: 백엔드에 추가정보 저장 요청 (구글 인증 완료 상태 가정)
    // POST /api/auth/complete-profile { email, nickname, mbti }
    alert(`추가 정보 저장 완료 가정 🎉\n${masked} / ${nickname} / ${mbti}`);
  };

  return (
    <Page>
      <TopBar>
        <HeaderWrap>
          <Brand>회원 정보</Brand>
        </HeaderWrap>
      </TopBar>

      <Main>
        <FormCard onSubmit={handleSubmit}>
          <CardHeader>
            <Title>추가 정보 입력</Title>
            <Hint>
              구글 계정으로 인증이 완료되었어요. 아래 정보를 마저 입력해주세요.
            </Hint>
          </CardHeader>

          {/* 이메일 (읽기 전용 마스킹) */}
          <Field>
            <Label>이메일 (Google 연동)</Label>
            <Input
              value={masked || "구글 계정 정보가 필요합니다"}
              readOnly
              aria-readonly
              title={email || "구글 연동 필요"}
            />
            <SubHint>
              이메일은 구글에서 제공되며, 비밀번호 입력은 필요하지 않습니다.
            </SubHint>
          </Field>

          {/* 닉네임 */}
          <Field>
            <Label>닉네임</Label>
            <Input
              placeholder="여행자 닉네임을 입력하세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </Field>

          {/* MBTI (드롭다운 그대로 유지) */}
          <Field>
            <Label>MBTI</Label>
            <Select
              value={mbti}
              onChange={(e) => setMbti(e.target.value as MBTI | "")}
            >
              <option value="">선택하세요</option>
              {MBTI_LIST.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </Select>
          </Field>

          {/* 약관 동의 (그대로 유지) */}
          <Field>
            <Label>이용약관 동의</Label>
            <TermsBox>
              <TermsRow>
                <input
                  id="agree"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agree">
                  서비스 이용약관 및 개인정보 처리방침에 동의합니다.
                </label>
              </TermsRow>
              <Tiny>* 추후 약관 전문 연결 예정 (더미 내용)</Tiny>
            </TermsBox>
          </Field>

          {/* 제출 */}
          <SubmitWrap>
            <Submit type="submit" disabled={!canSubmit}>
              완료
            </Submit>
          </SubmitWrap>

          <BottomLine />
          <BottomRow>
            <SmallText>
              이미 아이디가 있으신가요?{" "}
              <InlineLink to="/login">로그인</InlineLink>
            </SmallText>
          </BottomRow>
        </FormCard>
      </Main>
    </Page>
  );
};

export default SignUpPage;

/* --------------------- styled-components (기존 유지) --------------------- */

const Page = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.header`
  height: 80px;
  /* border-bottom: 1px solid #ded8e1; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  /* max-width: 1120px; */
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 12px;
`;

const Brand = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const Subtle = styled.span`
  color: #727272;
  font-size: 16px;
`;

const Main = styled.main`
  flex: 1;
  display: grid;
  place-items: center;
  padding: 24px;
  padding-top: 0px;
`;

const FormCard = styled.form`
  width: 100%;
  max-width: 620px;
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e6e6e6;
  padding: 28px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  display: grid;
  gap: 18px;
`;

const CardHeader = styled.div`
  display: grid;
  gap: 6px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

const Hint = styled.p`
  color: #9a9a9a;
  font-size: 14px;
  margin: 0;
`;

const Field = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
`;

const Input = styled.input`
  height: 48px;
  border-radius: 10px;
  border: 1px solid #000;
  padding: 0 14px;
  font-size: 16px;
  background: #f9f9f9; /* 읽기 전용 느낌 */
`;

const SubHint = styled.span`
  color: #9a9a9a;
  font-size: 12px;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Select = styled.select`
  height: 48px;
  border-radius: 10px;
  border: 1px solid #000;
  padding: 0 12px;
  font-size: 16px;
  background: #fff;
`;

const TermsBox = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  padding: 12px;
  background: #f8f8f8;
  display: grid;
  gap: 8px;
`;

const TermsRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  input {
    width: 16px;
    height: 16px;
  }

  label {
    font-size: 14px;
  }
`;

const Tiny = styled.span`
  color: #727272;
  font-size: 12px;
`;

const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const Submit = styled.button`
  width: 100%;
  max-width: 540px;
  height: 56px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    background: #dddddd;
    border-color: #dddddd;
    cursor: not-allowed;
  }
`;

const BottomLine = styled.hr`
  border: none;
  height: 1px;
  background: #c0c0c0;
  margin: 8px 0 0;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallText = styled.span`
  color: #727272;
  font-size: 14px;
`;

const InlineLink = styled(Link)`
  color: #000;
  text-decoration: underline;
  margin-left: 4px;
`;

export {};
