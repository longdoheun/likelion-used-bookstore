/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartBuyButton from "../CartBuyNow/CartBuyButton"

export default function CartBuyBox() {
    return (
        <div css={buyBoxWrap}>
            <CartBuyButton></CartBuyButton>
        </div>
    )
}

const buyBoxWrap = css`
    background-color: #FFFFFF;
    box-shadow: 0px -1px 2px 0.2px #d3d3d3;
    height: 85px;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`