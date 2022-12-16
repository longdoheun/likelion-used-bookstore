/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import check_false from "../../assets/images/cart_check_false.png";
import check_true from "../../assets/images/cart_check_true.png";
import React from "react";

export default function CartHead({ cartNum }) {
  return (
    <div css={cartTitleWrap}>
      <h1 css={slotTitleStyle}>장바구니</h1>
      <section css={checkBox}>
        {/* <img src={check_false} alt="" width="24" height="24"></img> */}
        <div css={bookCount}>전체 {cartNum}권</div>
      </section>
    </div>
  );
}

const cartTitleWrap = css`
  width: 1150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  margin: 0 auto 12px auto;
`;

const slotTitleStyle = css`
  font-weight: 550;
  font-size: 24px;
  color: #403600;
`;

const checkBox = css`
  display: flex;
`;

const bookCount = css`
  font-size: 16px;
  font-weight: 600;
  color: #666666;
  margin-left: 5px;
`;
