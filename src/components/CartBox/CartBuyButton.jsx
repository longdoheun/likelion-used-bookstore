/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function CartBuyButton() {
    return (
        <div css={buyButtonWrap}>
            <p css={emptyStyle}>ㅁ</p>
            <div css={buyLetterStyle}>선택상품</div>
            <div css={bookCntStyle}>총 0권</div>
        </div>
    )
}

const buyButtonWrap = css`
    cursor: pointer;
    background-color: #FACF37;
    border-radius: 13px;
    width: 448px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 26px 0px 26px;
`

const emptyStyle = css`
    color: #FACF37;
`

const buyLetterStyle = css`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 15px;
`

const bookCntStyle = css`
    color: #D8B22E;
    font-size: 13px; 
`