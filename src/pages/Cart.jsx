/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react";
import CartBox from "../components/CartBox"
import AppLayout from "../components/AppLayout";
import CartBuyNow from "../components/CartBuyNow";

export default function Cart() {
  return (
    <>
      <div css={wrap}>
        <AppLayout.Main>
          <CartBox></CartBox>
        </AppLayout.Main>
      </div>
      <CartBuyNow></CartBuyNow>
    </>
  )
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100%;
  padding-bottom: 85px;
`