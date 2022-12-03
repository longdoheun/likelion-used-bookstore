/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react";
import CartBox from "../components/CartBox"
import CartBuyBox from "../components/CartBox/CartBuyBox";
import AppLayout from "../components/AppLayout";
import CartBuyNow from "../components/CartBuyNow";
import Header from "../components/Header";

export default function Cart() {
  return (
    <>
      <Header></Header>
      <div css={wrap}>
        <AppLayout.Main>
          <CartBox></CartBox>
        </AppLayout.Main>
      </div>
      <CartBuyBox></CartBuyBox>
      <CartBuyNow></CartBuyNow>
    </>
  )
}

const wrap = css`
  padding-left: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100%;
  padding-bottom: 85px;
`