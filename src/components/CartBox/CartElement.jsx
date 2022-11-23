/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import check_false from "../../assets/images/cart_check_false.png"
import check_true from "../../assets/images/cart_check_true.png"
import React from "react";
import CartBookImage from "./CartBookImage"
import CartBookInfo from "./CartBookInfo"
import CartPriceNChng from "./CartPriceNChng";

export default function CartElement() {
    return (
      <div css={cartElementWrap}>
        <div css={bookInfoWrap}>
            <img src={check_false} alt="" width="24" height="24"></img>
            <CartBookImage></CartBookImage>
            <CartBookInfo></CartBookInfo>
        </div>
        <CartPriceNChng></CartPriceNChng>
      </div>
    );
  }

const cartElementWrap = css`
    width: 1111px;
    height: 175px;
    display: flex;
    justify-content: space-between;
  align-items: center;
`

const bookInfoWrap = css`
    display: grid;
    grid-template-columns: 35px 124px 333px;
`