/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ReactComponent as NotFoundImg } from "../assets/svg/notFound.svg";
import media from "../styles/media";

export default function NotFound() {
  return (
    <div css={notFoundStyle}>
      <NotFoundImg css={svgStyle} />
      <h1 css={h1Style}>요청하신 페이지를 찾을 수 없습니다.</h1>
      <h3 css={h3Style}>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </h3>
    </div>
  );
}

const svgStyle = css`
  width: 434px;
  height: 412px;
  width: 27.125rem;
  height: 25.75rem;
`;

const notFoundStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const h1Style = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.375rem;
  color: #403600;
  ${media.mobile} {
    font-size: 24px;
    line-height: 19px;
  }
`;

const h3Style = css`
  margin-top: 25px;
  margin-top: 1.5625rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.4375rem;
  text-align: center;
  color: #403600;
  ${media.mobile} {
    font-size: 14px;
    line-height: 17.25px;
  }
`;
