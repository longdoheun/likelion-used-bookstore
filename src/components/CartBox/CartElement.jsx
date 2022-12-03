/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import check_false from "../../assets/images/cart_check_false.png"
import check_true from "../../assets/images/cart_check_true.png"
import React from "react";
import CartBookImage from "./CartBookImage"
import CartPriceNOption from "./CartPriceNOption"

export default function CartElement() {
    return (
      <div css={cartElementWrap}>
        <div css={bookInfoWrap}>
            <img src={check_false} alt="" width="24" height="24"></img>
            <CartBookImage></CartBookImage>
            <section css={bookInfoStyle}>
                <div css={bookTitleStyle}>소통의 기초 스피치와 토론</div>
                <div css={bookWriterStyle}>
                    <p css={boldWriterStyle}>저자</p>
                    <p>성균관대학교 출판부</p>
                </div>
                <p css={bookOptionStyle}>선택 옵션 B</p>
            </section>
        </div>
        <CartPriceNOption></CartPriceNOption>
      </div>
    );
  }

const cartElementWrap = css`
    width: 1005px;
    height: 175px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const bookInfoStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const bookWriterStyle = css`
  font-size: 16px;
  color: #666666;
  display: flex;
`

const bookOptionStyle = css`
    font-size: 16px;
    color: #666666;
`

const boldWriterStyle = css`
    font-weight: bold;
    margin-right: 5px;
`

const bookTitleStyle = css`
    font-size: 20px;
    font-weight: bold;
    color: black;
`