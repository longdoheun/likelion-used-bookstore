/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function CartPriceNOption() {
    return (
        <div css={priceNOption}>
            <p css={costStyle}>13,000원</p>
            <p css={priceStyle}>5,000원</p>
            <button css={chngButton}>옵션 변경</button>
        </div>
    )
}

const priceNOption = css`
    text-align: right;
`

const costStyle = css`
    color: #969696;
    text-decoration: line-through;
    font-size: 15px;
`

const priceStyle = css`
    color: black;
    font-size: 20px;
    font-weight: bold;
`

const chngButton = css`
    cursor: pointer;
    width: 74px;
    height: 25px;
    color: #FFFFFF;
    background-color: #CDAC01;
    border-radius: 14px;
    border: 0;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px 1px 1px 0.5px #A58A01;
`