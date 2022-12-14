/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import MyInfo from "../components/MyInfo";
import OrderHistory from "../components/OrderHistory";
import AppLayout from "../components/AppLayout";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { information } from "../utils/dummy";

export default function MyPage() {
  return (
    <>
      <Header />
      <div css={wrap}>
        <AppLayout.Main>
          <MyInfo myInfo={information}></MyInfo>
          <OrderHistory />
        </AppLayout.Main>
      </div>
      <Footer />
    </>
  );
}

const wrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
