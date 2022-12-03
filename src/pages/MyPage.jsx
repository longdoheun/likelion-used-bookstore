/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import React from 'react'
import MyInfo from "../components/MyInfo"
import OrderHistory from "../components/OrderHistory"
import AppLayout from "../components/AppLayout";
import Header from "../components/Header";

let information = {
  name:"김멋사",
  email:"kimmutsa10@gmail.com",
  major:"철학과",
  class:21,
  semester:4
}

export default function MyPage() {
  return (
    <>
    <Header></Header>
      <div css={wrap}>
        <AppLayout.Main>
          <MyInfo myInfo={information}></MyInfo>
          <OrderHistory></OrderHistory>
        </AppLayout.Main>
      </div>
    </>
    
  )
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`