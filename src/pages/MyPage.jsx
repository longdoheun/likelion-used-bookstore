/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'
import MyInfo from "../components/MyInfo"
import OrderHistory from "../components/OrderHistory"
import AppLayout from "../components/AppLayout";

let information = {
  name:"김멋사",
  email:"kimmutsa10@gmail.com",
  major:"철학과",
  class:21,
  semester:4
}

export default function MyPage() {
  return (
    <div css={wrap}>
      <AppLayout.Main>
      <div css={style}>this is MyPage</div>
      <MyInfo myInfo={information}></MyInfo>
      <OrderHistory></OrderHistory>
      </AppLayout.Main>
    </div>
  )
}

const style = css`
    color : #000;
`

const wrap = css`
padding-left: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`