/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartElement from "./CartElement";
import CartBoxHead from "./CartBoxHead";

export default function CartBox({ cartList }) {
  return (
    <div css={cartBoxWrap}>
      <CartBoxHead></CartBoxHead>
      <div css={cartListBox}>
        {cartList.map((cart) => (
          <CartElement></CartElement>
        ))}
      </div>
    </div>
  );
}

const cartBoxWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const cartListBox = css`
  background-color: #ffffff;
  box-shadow: 0px 0px 3px 2px #e7e7e7;
  border-radius: 20px;
  width: 1090px;
  padding: 34px 0px 34px 53px;
  /* width: 1124px; */
  padding: 34px 53px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
