/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as LoginArtwork } from "../assets/svg/login.svg";
import React from "react";
import LoginBlock from "../components/LoginBlock";
import IMG from "../assets/images/login.png";

export default function Login() {
  return (
    <div css={container}>
      <section css={style}>
        <p css={contextStyle}>로그인</p>
        <div css={flexStyle}>
          <LoginArtwork />
          <LoginBlock />
        </div>
      </section>
    </div>
  );
}

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${IMG});
  background-size: cover;
`;

const style = css`
  padding: 50px;
  width: 780px;
  height: 410px;
  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
  border-radius: 56px;
`;

const contextStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #403600;
`;

const flexStyle = css`
  width: 100%;
  display: flex;
`;
