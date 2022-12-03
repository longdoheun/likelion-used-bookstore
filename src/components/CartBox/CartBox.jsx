/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartElement from "./CartElement";
import CartBoxHead from "./CartBoxHead"

export default function CartBox() {
    return (
      <div css={cartBoxWrap}>
        <CartBoxHead></CartBoxHead>
        <div css={cartListBox}>
            <CartElement></CartElement>
            <CartElement></CartElement>
            <CartElement></CartElement>
            <CartElement></CartElement>
            <CartElement></CartElement>
            <CartElement></CartElement>
        </div>
      </div>
    );
  }

const cartBoxWrap = css`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const cartListBox = css`
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px 2px #e7e7e7;
    border-radius: 20px;
    width: 1090px;
    padding: 34px 0px 34px 53px;
`