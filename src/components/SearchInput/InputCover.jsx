/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function InputCover({ children }) {
  return (
    <div css={outerStyle}>
      <div css={innerStyle}>{children}</div>
    </div>
  );
}

const outerStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 1042px;
  width: 72.361%;
  height: 50px;
  background-color: #ffd742;
  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 41px;
`;

const innerStyle = css`
  display: flex;
  align-items: center;
  width: calc(100% - 12px);
  height: 40px;
  border-radius: 40px;
  background-color: #f9f7f3;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
