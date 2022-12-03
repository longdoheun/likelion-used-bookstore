/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from "react";
import CartBox from "../components/CartBox"
import CartBuyBox from "../components/CartBox/CartBuyBox";
import AppLayout from "../components/AppLayout";


export default function Cart() {
  return (
    <>
      <div css={wrap}>
        <AppLayout.Main>
          <CartBox></CartBox>
        </AppLayout.Main>
      </div>
      <CartBuyBox></CartBuyBox>
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