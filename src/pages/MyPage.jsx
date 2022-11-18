/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'
import OrderHistory from "../components/OrderHistory"

export default function MyPage() {
  return (
    <>
      <div css={style}>this is MyPage</div>
      <OrderHistory></OrderHistory>
      <OrderHistory></OrderHistory>
    </>
  )
}

const style = css`
    color : #000;
`