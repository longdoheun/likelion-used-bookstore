/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import useNumWithComma from "../../hooks/useNumWithComma";
import CartNumControl from "../CartBox/CartNumControl";
import RoundBtn from "../RoundBtn/RoundBtn";

export default function ProductDetail({ data }) {
  const stringifyNumber = useNumWithComma(50000);

  return (
    <div css={conStyle}>
      <h1 css={tittleStyle}>소통의 기초 스피치와 토론</h1>
      <section css={marginStyle}>
        <h5 css={infoStyle}>저자 : 성균관대학교 출판부 </h5>
        <h5 css={infoStyle}>출판사 : 성균관대학교 출판부</h5>
      </section>
      <span css={marginStyle}>
        <number css={priceStyle}>{stringifyNumber} </number>
        <won css={wonStyle}>원</won>
      </span>
      <section css={lineStyle}>
        <h5 css={infoStyle}>과목명 : 스피치와 토론</h5>
        <h5 css={infoStyle}>필수구매 : 권장사항</h5>
      </section>
      <section css={optionStyle}>
        <h5 css={infoStyle}>[옵션 A] 품질/등급 정보 </h5>
        <h5 css={rankStyle}>・새 것에 가까운 책</h5>
        <h5 css={rankStyle}>・변색 찢어진 흔적 없음</h5>
        <h5 css={rankStyle}>・닳은 흔적, 낙서, 얼룩 없음</h5>
      </section>
      <section css={optionStyle}>
        <h5 css={infoStyle}>[SKKU] 소통의 기초 스피치와 토론</h5>
        <span css={flexStyle}>
          <h5 css={infoStyle}>옵션</h5>
          <CartNumControl />
        </span>
        <span css={flexStyle}>
          <h5 css={infoStyle}>수량</h5>
          <CartNumControl />
        </span>
      </section>
      <span css={flexStyle}>
        <h5 css={infoStyle}>합계</h5>
        <span css={totalPriceStyle}>{stringifyNumber} 원</span>
      </span>
      <section css={flexStyle}>
        <RoundBtn contents={"CART"} />
        <RoundBtn contents={"BUY"} />
      </section>
    </div>
  );
}
const conStyle = css`
  /* background-color: red; */
  width: 500px;
`;

const marginStyle = css`
  margin-top: 20px;
`;

const lineStyle = css`
  padding-top: 10px;
  border-top: 1px solid #dedede;
  margin-top: 20px;
`;

const totalPriceStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  /* font-size: 14px; */
  line-height: 35px;
  vertical-align: middle;
  color: #ff0000;
`;

const optionStyle = css`
  padding: 5px 20px 20px 20px;
  background: #f8f8f8;
  border-radius: 10px;
  margin-top: 20px;
`;

const tittleStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 35px;
  /* text-align: center; */
  color: #403600;
`;

const infoStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 30px;
  color: #403600;
`;

const flexStyle = css`
  display: flex;
  justify-content: space-between;
`;

const priceStyle = css`
  font-family: "Inter";
  font-weight: 700;
  font-size: 30px;
  color: #403600;
`;

const wonStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #403600;
`;

const rankStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 25px;
  /* or 179% */

  letter-spacing: 0.1px;

  color: #403600;
`;
