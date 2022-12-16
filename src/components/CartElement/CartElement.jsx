/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import check_false from "../../assets/images/cart_check_false.png";
import check_true from "../../assets/images/cart_check_true.png";
import React from "react";
import CartBookImage from "./CartBookImage";
import CartNumControl from "./CartNumControl";
import useNumWithComma from "../../hooks/useNumWithComma";
import { useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../utils/firebase_config";
import AppLayout from "../AppLayout";
import useFetch from "../../hooks/useFetch";

export default function CartElement({ data, path, setCartData }) {
  const navigate = useNavigate();
  const stringPrice = useNumWithComma(data.price);
  const stringCost = useNumWithComma(data.cost);
  const deleteData = async () => {
    try {
      await deleteDoc(doc(db, path, data.id));
      console.log("deleted");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppLayout.Component>
      <div css={cartElementWrap}>
        <div css={bookInfoWrap}>
          <img src={check_false} alt="" width="24" height="24"></img>
          <CartBookImage url={data.imgUrl}></CartBookImage>
          <section css={bookInfoStyle}>
            <div css={bookTitleStyle}>{data.title}</div>
            <div css={bookWriterStyle}>
              <p css={boldWriterStyle}>저자</p>
              <p>{data.authors}</p>
            </div>
            <p css={bookOptionStyle}>선택 옵션 {data.rank}</p>
            <p css={bookOptionStyle}>선택 : {data.remaining}개</p>
          </section>
        </div>
        <section css={priceNOption}>
          <p css={costStyle}>{stringCost}원</p>
          <p css={priceStyle}>{stringPrice}원</p>
          <button
            css={chngButton}
            onClick={() => {
              navigate("/products/" + data.id);
            }}
          >
            옵션 변경
          </button>
          <button
            css={css(chngButton, btn)}
            onClick={() => {
              deleteData();
            }}
          >
            제거
          </button>
        </section>
      </div>
    </AppLayout.Component>
  );
}

const cartElementWrap = css`
  width: 1005px;
  height: 175px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1111px;
  height: 175px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const btn = css`
  background: #ec3232;
`;
const bookInfoWrap = css`
  display: grid;
  grid-template-columns: 35px 124px 333px;
`;

const bookInfoStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const bookWriterStyle = css`
  font-size: 16px;
  color: #666666;
  display: flex;
`;

const bookOptionStyle = css`
  font-size: 16px;
  color: #666666;
`;

const boldWriterStyle = css`
  font-weight: bold;
  margin-right: 5px;
`;

const bookTitleStyle = css`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const priceNOption = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
  text-align: right;
`;

const costStyle = css`
  color: #969696;
  text-decoration: line-through;
  font-size: 15px;
`;

const priceStyle = css`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

const chngButton = css`
  cursor: pointer;
  width: 74px;
  height: 25px;
  color: #ffffff;
  background-color: #cdac01;
  border-radius: 14px;
  border: 0;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 1px 1px 0.5px #a58a01;
`;
