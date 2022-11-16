/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BookIcon } from "../../assets/svg/book.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svg/settings.svg";
import { ReactComponent as MyPageIcon } from "../../assets/svg/mypage.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svg/logout.svg";
import React from "react";

export default function MenuIconArrange() {
  const navigate = useNavigate();
  return (
    <div css={IconArrangeStyle}>
      <div css={LogoStyle}></div>
      <HomeIcon
        css={IconStyle}
        onClick={() => {
          navigate("/");
        }}
      />
      <BookIcon
        css={IconStyle}
        onClick={() => {
          navigate("/products");
        }}
      />
      <CartIcon
        css={IconStyle}
        onClick={() => {
          navigate();
        }}
      />
      <SettingsIcon
        css={IconStyle}
        onClick={() => {
          navigate();
        }}
      />
      <MyPageIcon
        css={IconStyle}
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

const LogoStyle = css`
  width: 70px;
  height: 70px;
  background: #f3ece6;
  /* margin-top: 44px; */
`;
