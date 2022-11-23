/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function CartPriceNChng() {
    return (
    <div css={priceNChng}>
        <p css={originPrice}>13,000원</p>
        <p css={currentPrice}>5,000원</p>
        <p css={optionChng}>옵션 변경</p>
    </div>
    );
  }

const priceNChng = css`
    display: flex;
    flex-direction: column;
    width: 130px;
    height: 175px;
    justify-content: center;
    align-items: flex-end;
`

const originPrice = css`
    font-size: 16px;
    color: #969696;
    text-decoration: line-through;
`

const currentPrice = css`
    font-size: 20px;
    color: black;
    font-weight: 550;
`

const optionChng = css`
    display: flex;
    width: 74px;
    height: 26px;
    background-color: #CDAC01;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    font-size: 12px;
    margin-top: 5px;
    box-shadow: inset 0 0.5px 0.5px 0.5px #9b830c;
    cursor: pointer;
`