/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import useNumWithComma from "../../hooks/useNumWithComma";

export default function OrderHistoryList(props) {
  const { orderInfo } = props;
  const stringPrice = useNumWithComma(orderInfo.price);

  return (
    <>
      <div css={containerStyle}>
        <div css={bookContainerStyle}>
          <div css={profileStyle}></div>
          <div css={bookInfoStyle}>
            <div css={bookTitleStyle}>소통의 기초 스피치와 토론</div>
            <p>저자: 성균관대학교 출판부</p>
            <p>출판사: 성균관대학교 출판부</p>
            <p>
              등급 {orderInfo.grade}|권수 {orderInfo.quantity}
            </p>
          </div>
        </div>
        <div css={orderInfoStyle}>{orderInfo.date}</div>
        <div css={orderInfoStyle}>{orderInfo.orderNum}</div>
        <div css={bookPriceStyle}>{stringPrice}원</div>
        <div css={orderStatusStyle}>{orderInfo.stat}</div>
      </div>
    </>
  );
}

const containerStyle = css`
  /* width: 1233px; */
  height: 109px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 3px 2px #e7e7e7;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 10px;
`;

const bookContainerStyle = css`
  display: flex;
  padding-left: 54px;
`;

const profileStyle = css`
  background-color: #eeeeee;
  width: 82px;
  height: 92px;
  margin-right: 9px;
`;

const bookInfoStyle = css`
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
`;

const bookTitleStyle = css`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const orderInfoStyle = css`
  color: #666666;
  font-size: 16px;
  width: 110px;
  text-align: center;
`;

const bookPriceStyle = css`
  font-weight: 600;
  width: 110px;
  text-align: center;
`;

const orderStatusStyle = css`
  font-weight: 600;
  width: 110px;
  text-align: center;
`;
