/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function CartBuyButton() {
    return (
      <div css={buttonWrap}>
        <div></div>
        <div css={buyText}>선택 상품 구매하기</div>
        <div css={buyCount}>총 0권</div>
      </div>
    );
  }

  const buttonWrap = css`
    width: 440px;
    height: 50px;
    background-color: #FACF37;
    border: 0;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    padding-right: 30px;
    padding-left: 30px;
`

const buyText = css`
    color: white;
    font-size: 15px;
    text-align: center;
`

const buyCount = css`
    color: #D8B22E;
    float: right;
    text-align: right;
`