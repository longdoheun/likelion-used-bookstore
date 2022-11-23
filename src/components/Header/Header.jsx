/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../AppLayout/AppLayout";
import { ReactComponent as LogoTitle } from "../../assets/svg/logo_title.svg";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import ProfileImg from "./ProfileImg";

export default function Header() {
  return (
    <AppLayout.Main>
      <div css={headerStyle}>
        <LogoTitle />
        {/* <SearchInput/> */}
        <ProfileImg />
        <Bell />
      </div>
    </AppLayout.Main>
  );
}

const headerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 81px;
  margin-bottom: 63.7px;
`;
