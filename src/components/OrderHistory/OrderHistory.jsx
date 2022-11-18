/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function OrderHistory() {
  return (
    <>
      <div css={containerStyle}>
        <div css={bookContainerStyle}>
            <div css={profileStyle}></div>
            <div css={bookInfoStyle}>
                <div css={bookTitleStyle}>책 제목</div>
                <p>저자</p>
                <p>출판사</p>
                <p>선택등급|구매 권수</p>
            </div>
        </div>
        <div css={orderInfoStyle}>22.10.11</div>
        <div css={orderInfoStyle}>2022000000</div>
        <div css={bookPriceStyle}>00,000원</div>
        <div css={orderStatusStyle}>입금 확인 중</div>
      </div>
    </>
  );
}

const containerStyle = css`
  width: 1125px;
  height: 109px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 3px 2px #e7e7e7;
  display: flex;
  align-items: center;
  padding-left: 54px;
  padding-right: 54px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const bookContainerStyle=css`
    display: flex;
`

const profileStyle = css`
  background-color: #EEEEEE;
  width: 82px;
  height: 92px;
  margin-right: 9px;
`;

const bookInfoStyle = css`
    font-size:14px;
    color: #666666;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 230px;
`
const bookTitleStyle = css`
    font-size: 16px;
    font-weight: bold;
    color: black;
`

const orderInfoStyle = css`
    color: #666666;
    font-size: 16px;
`

const bookPriceStyle = css`
    font-weight: 600;
`

const orderStatusStyle = css`
    font-weight: 600;
`