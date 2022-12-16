/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as BookIcon } from "../../assets/svg/yell_book.svg";
import React from "react";

export default function LoginTitle() {
  return (
    <div css={wrap}>
      <h1 css={textStyle}>
        어서오세요! <br />
        <em css={highlightStyle}> 유생책방</em>
        입니다
      </h1>
      <BookIcon />
    </div>
  );
}
const wrap = css`
  display: flex;
`;
const highlightStyle = css`
  color: #cdac01;
`;

const textStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
`;
