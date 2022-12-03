/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import media from "../../styles/media";

export default function AppLayout({ children }) {
  return <div>{children}</div>;
}

function Side({ children }) {
  return <aside css={sidebarStyle}>{children}</aside>;
}

function Main({ children }) {
  return <main css={mainStyle}>{children}</main>;
}

AppLayout.Side = Side;
AppLayout.Main = Main;

const sidebarStyle = css`
  z-index: 3;
  position: fixed;
  ${media.laptopXL} {
    margin-top: 81px;
    margin-left: 50px;
  }
  ${media.laptopS} {
    margin-left: 24px;
    margin-top: 81px;
  }
  ${media.mobile} {
    margin-left: 16px;
    margin-top: 81px;
  }
`;

const mainStyle = css`
  position: relative;
  ${media.laptopXL} {
    margin: 0 50px;
  }
  ${media.laptopS} {
    margin: 0 24px;
  }
  ${media.mobile} {
    margin: 0 16px;
  }
`;
