/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/svg/logo.svg";
// import MenuIconArrange from "../MenuBar/MenuIconArrange";

export default function MobileMenuBar(props) {
  console.log(props);
  return (
    <div css={mobileStyle} onClick={props.onClick}>
      <LogoIcon css={logoStyle} />
      {/* <MenuIconArrange /> */}
    </div>
  );
}

const mobileStyle = css`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #ffd742;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const logoStyle = css`
  width: 50px;
  height: 38px;
`;
