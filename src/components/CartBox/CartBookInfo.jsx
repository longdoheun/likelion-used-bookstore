/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartNumControl from "./CartNumControl"

export default function CartBookInfo() {
    return (
    <div css={bookInfoStyle}>
        <div css={bookTitleStyle}>소통의 기초 스피치와 토론</div>
        <div css={bookWriterStyle}>
            <p css={boldWriterStyle}>저자</p>
            <p>성균관대학교 출판부</p>
        </div>
        <p css={bookOptionStyle}>선택 옵션 B</p>
        <CartNumControl></CartNumControl>
    </div>
    );
  }

const bookInfoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const bookWriterStyle = css`
font-size: 18px;
color: #666666;
display: flex;
`

const bookOptionStyle = css`
  font-size: 18px;
  color: #666666;
`

const boldWriterStyle = css`
  font-weight: bold;
  margin-right: 5px;
`

const bookTitleStyle = css`
  font-size: 22px;
  font-weight: bold;
  color: black;
`