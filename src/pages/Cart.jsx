/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartBox from "../components/CartBox";
import CartBuyBox from "../components/CartBox/CartBuyBox";
import AppLayout from "../components/AppLayout";
import CartBuyNow from "../components/CartBuyNow";
import Header from "../components/Header";

export default function Cart() {
  return (
    <>
      <Header></Header>
      {/* <div css={wrap}> */}
      <AppLayout.Main>
        <CartBox cartList={DummyList}></CartBox>
      </AppLayout.Main>
      {/* </div> */}
      <CartBuyBox></CartBuyBox>
      <CartBuyNow></CartBuyNow>
    </>
  );
}

const wrap = css`
  padding-left: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100%;
  padding-bottom: 85px;
`;

const DummyData = {
  product_id: "askdjlf183jskcf",
  title: "소통의 기초 스피치와 토론",
  authors: "성균관대학교 출판부",
  conditions: "파손 없음",
  rank: "A",
  price: 5000,
};

const DummyList = [{}, {}, {}, {}, {}, {}].map((item) => DummyData);
