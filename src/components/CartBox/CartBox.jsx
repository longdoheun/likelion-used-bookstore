/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import check_false from "../../assets/images/cart_check_false.png"
import check_true from "../../assets/images/cart_check_true.png"
import React from "react";
import CartElement from "./CartElement";

export default function CartBox() {
    return (
      <div css={cartBoxWrap}>
        <div css={cartTitleWrap}>
            <h1 css={slotTitleStyle}>장바구니</h1>
            <section css={checkBox}>
                <img src={check_false} alt="" width="24" height="24"></img>
                <div css={bookCount}>전체 0권</div>
            </section>
        </div>
        <div css={cartListBox}>
            <CartElement></CartElement>
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
  padding-left: 120px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const cartTitleWrap = css`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

const slotTitleStyle = css`
  font-weight: 550;
  font-size: 24px;
  color: #403600;
`;

const checkBox = css`
    display: flex;
`

const bookCount = css`
    font-size: 16px;
    font-weight: 600;
    color: #666666;
    margin-left: 5px;
`

const cartListBox = css`
    background-color: #FFFFFF;
    box-shadow: 0px 0px 3px 2px #e7e7e7;
    border-radius: 20px;
    width: 1124px;
    padding: 34px 66px 34px 66px;
    display: flex;
    flex-direction: column;
    align-items: center;
`