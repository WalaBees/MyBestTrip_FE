import React, { forwardRef } from "react";
import styled from "styled-components";

type Props = {
  label?: string;
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  icon?: React.ReactNode; // 기본 아이콘 대신 커스텀 아이콘 넣고 싶을 때
  "aria-label"?: string;
};

const Button = styled.button`
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-appearance: none;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #747775;
  border-radius: 20px;
  box-sizing: border-box;
  color: #1f1f1f;
  cursor: pointer;
  font-family: "Roboto", arial, sans-serif;
  font-size: 14px;
  height: 40px;
  letter-spacing: 0.25px;
  outline: none;
  overflow: hidden;
  padding: 0 12px;
  position: relative;
  text-align: center;
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  max-width: 400px;
  min-width: min-content;
  display: inline-flex;
  align-items: center;

  &:disabled {
    cursor: default;
    background-color: #ffffff61;
    border-color: #1f1f1f1f;
  }

  &:disabled ${/* sc-selector */ ".gsi-material-button-contents"} {
    opacity: 38%;
  }

  &:disabled ${/* sc-selector */ ".gsi-material-button-icon"} {
    opacity: 38%;
  }

  &:not(:disabled):active .gsi-material-button-state,
  &:not(:disabled):focus .gsi-material-button-state {
    background-color: #303030;
    opacity: 12%;
  }

  &:not(:disabled):hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  &:not(:disabled):hover .gsi-material-button-state {
    background-color: #303030;
    opacity: 8%;
  }
`;

const State = styled.div.attrs({ className: "gsi-material-button-state" })`
  transition: opacity 0.218s;
  bottom: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Content = styled.div.attrs({
  className: "gsi-material-button-content-wrapper",
})`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
  gap: 12px; /* 아이콘과 라벨 간격 보정 */
`;

const Icon = styled.div.attrs({ className: "gsi-material-button-icon" })`
  height: 20px;
  margin-right: 12px;
  min-width: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
  }
`;

const Label = styled.span.attrs({ className: "gsi-material-button-contents" })`
  flex-grow: 1;
  font-family: "Roboto", arial, sans-serif;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  text-align: left; /* 구글 기본 스타일과 유사 정렬 */
`;

// 기본 Google 로고 SVG
const GoogleLogo: React.FC = () => (
  <svg
    version="1.1"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
);

/**
 * GoogleMaterialButton
 * - styled-components로 구현된 Google 스타일 버튼
 * - label, onClick, disabled, type, icon 커스터마이징 가능
 */
const GoogleMaterialButton = forwardRef<HTMLButtonElement, Props>(
  (
    {
      label = "Sign up with Google",
      onClick,
      disabled,
      type = "button",
      className,
      icon,
      "aria-label": ariaLabel,
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={className}
        aria-label={ariaLabel ?? label}
      >
        <State />
        <Content>
          <Icon>{icon ?? <GoogleLogo />}</Icon>
          <Label>{label}</Label>
          {/* 시각적 균형을 위해 오른쪽에 빈 span을 둘 수도 있지만
              여기서는 flex-space-between으로 충분 */}
          <span style={{ display: "none" }}>{label}</span>
        </Content>
      </Button>
    );
  }
);

GoogleMaterialButton.displayName = "GoogleMaterialButton";

export default GoogleMaterialButton;
