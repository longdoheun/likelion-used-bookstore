/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import OrderHistoryCategory from "./OrderHistoryCategory"
import OrderHistoryList from "./OrderHistoryList";

let OrderInfo = // 주문 정보
[
  {
    bookNum: 1,
    grade: "B",
    quantity: 1,
    date: "22.10.11",
    orderNum: "2022000000",
    price: 5000,
    stat: "입금 확인 중"
  },
  {
    bookNum: 2,
    grade: "A",
    quantity: 1,
    date: "22.10.11",
    orderNum: "2022000001",
    price: 7000,
    stat: "수령 완료"
  }
]

export default function OrderHistory() {
  return (
    <>
      <h1 css={slotTitleStyle}>주문내역</h1>
      <OrderHistoryCategory></OrderHistoryCategory>
      <OrderHistoryList orderInfo={OrderInfo[0]}></OrderHistoryList>
      <OrderHistoryList orderInfo={OrderInfo[1]}></OrderHistoryList>
    </>
  );
}

const slotTitleStyle = css`
width: 1233px;
  font-weight: 550;
  font-size: 24px;
  color: #403600;
  margin-bottom: 12px;
`;