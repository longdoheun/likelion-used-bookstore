/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../AppLayout/AppLayout";
import { ReactComponent as LogoTitle } from "../../assets/svg/logo_title.svg";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import ProfileImg from "./ProfileImg";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <AppLayout.Main>
      <div css={headerStyle}>
        <LogoTitle
          css={LogoStyle}
          onClick={() => {
            navigate("/");
          }}
        />
        <SearchInput />
        <ProfileImg />
        <Bell css={iconStyle} />
      </div>
    </AppLayout.Main>
  );
}

const LogoStyle = css`
  width: 185px;
  height: 50.73px;
`;

const headerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 15px;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 81px;
  margin-bottom: 63.7px;
`;
const iconStyle = css`
  width: 50px;
  height: 50px;
`;
