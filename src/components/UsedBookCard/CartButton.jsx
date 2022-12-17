/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactComponent as CartIcon } from "../../assets/svg/add_shopping_cart.svg";
import React from "react";

export default function CartButton() {
  const onCartClick = () => {
    alert("상품이 카트에 추가되었습니다.");
  };

  return (
    <div css={cartBgStyle} onClick={onCartClick}>
      <CartIcon />
    </div>
  );
}

const cartBgStyle = css`
  position: absolute;
  width: 20px;
  height: 20px;
  /* left: 143px; */
  /* left: 8.9375rem; */
  right: 0.8rem;
  top: 5px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
