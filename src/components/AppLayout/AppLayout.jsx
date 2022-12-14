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

function Component({ children }) {
  return <section css={componentStyle}>{children}</section>;
}

AppLayout.Side = Side;
AppLayout.Main = Main;
AppLayout.Component = Component;

const sidebarStyle = css`
  z-index: 3;
  position: fixed;
  ${media.laptopXL} {
    margin-top: 81px;
    margin-left: 30px;
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

const componentStyle = css`
  padding: 43px 68px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const mainStyle = css`
  margin: auto;
  max-width: 1200px;
`;
