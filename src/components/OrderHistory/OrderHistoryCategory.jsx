/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function OrderHistoryCategory() {
  return (
    <>
      <div css={containerStyle}>
        <div css={bookInfoStyle}>책 정보</div>
        <div css={orderDateStyle}>주문일자</div>
        <div css={orderNumberStyle}>주문번호</div>
        <div css={orderPriceStyle}>주문금액</div>
        <div css={orderStatusStyle}>주문상태</div>
      </div>
    </>
  );
}

const containerStyle = css`
    width: 1233px;
    height: 35px;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
    align-items: center;
    color: #CDAC01;
    text-align: center;
    border-top: 2px solid #CDAC01;
    border-bottom: 2px solid #CDAC01;
    margin-bottom: 20px;
`;

const bookInfoStyle = css`
    width: 340px;
    padding-left: 54px;
`

const orderDateStyle = css`
    width: 110px;
`

const orderNumberStyle = css`
    width: 110px;
`

const orderPriceStyle = css`
    width: 110px;
`

const orderStatusStyle = css`
    width: 110px;
`