/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function LoginBtn({ handler }) {
  return (
    <div css={btnStyle} onClick={handler}>
      로그인
    </div>
  );
}

const btnStyle = css`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffd742;
  border-radius: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #ffffff;
`;
