/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuIconArrange from "./MenuIconArrange";
import React from "react";

export default function MenuBar() {
  return (
    <>
      <div css={menuBarStyle}>
        <MenuIconArrange />
      </div>
    </>
  );
}

const menuBarStyle = css`
  box-sizing: border-box;
  width: 100px;
  height: 600px;
  border-radius: 40px;
  background-color: #ffd742;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
