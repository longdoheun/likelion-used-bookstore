/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MenuIconArrange from "./MenuIconArrange";
import React from 'react';

export default function MenuBar() {
  return (
    <>
      <div css={menuBarStyle}>
        <div css={LogoStyle}></div>
        <MenuIconArrange/>
      </div>
    </>
  )
}

const menuBarStyle = css`
  box-sizing: border-box;
  width : 125px;
  height : 849px;
  border-radius: 40px;
  background-color: #FFD742;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoStyle = css`
  width: 90px;
  height: 89.15px;
  background: #F3ECE6;
  margin-top: 44px;
`