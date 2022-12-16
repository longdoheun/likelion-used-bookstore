/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartBuyButton from "./CartBuyButton";

export default function CartBuyFooter() {
  return (
    <footer css={wrapStyle}>
      <CartBuyButton></CartBuyButton>
    </footer>
  );
}

const wrapStyle = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -1px 2px 1px #b6b6b6;
  background-color: #ffffff;
`;
