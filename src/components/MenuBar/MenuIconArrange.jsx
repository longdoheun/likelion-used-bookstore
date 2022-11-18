/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as BookIcon } from "../../assets/svg/book.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
import { ReactComponent as MyPageIcon } from "../../assets/svg/mypage.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svg/logout.svg";
import React from "react";

export default function MenuIconArrange() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div css={IconArrangeStyle}>
      <LogoIcon
        css={LogoStyle}
        onClick={() => {
          navigate("/");
        }}
      />
      <HomeIcon
        css={isIconStyle(location.pathname === "/")}
        onClick={() => {
          navigate("/");
        }}
      />
      <BookIcon
        css={isIconStyle(location.pathname === "/products")}
        onClick={() => {
          navigate("/products");
        }}
      />
      <CartIcon
        css={isIconStyle(location.pathname === "/cart")}
        onClick={() => {
          navigate("/cart");
        }}
      />
      <MyPageIcon
        css={isIconStyle(location.pathname === "/mypage")}
        onClick={() => {
          navigate("/mypage");
        }}
      />
      <LogoutIcon
        css={IconStyle}
        onClick={() => {
          navigate();
        }}
      />
    </div>
  );
}

const IconArrangeStyle = css`
  height: 472px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 56px;
`;

const IconStyle = css`
  width: 35px;
  height: 35px;
`;

const isIconStyle = (props) => css`
  ${IconStyle}
  & path {
    fill: ${props ? "#fff" : "#CDAC01"};
  }
`;

const LogoStyle = css`
  width: 80px;
  height: 60.94px;
`;
