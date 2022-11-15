/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import notFoundImg from "../assets/images/notFound.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  // const navigate = useNavigate();
  return (
    <div css={notFoundStyle}>
      <img src={notFoundImg} alt="notfound" />
      <h1 css={h1Style}>요청하신 페이지를 찾을 수 없습니다.</h1>
      <h3 css={h3Style}>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        <br />
        입력하신 주소가 정확한지 다시 한 번 확인해주세요.
      </h3>
    </div>
  );
}

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
  font-size: 36px;
  line-height: 42px;
  color: #403600;
`;
const h3Style = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #403600;
`;
