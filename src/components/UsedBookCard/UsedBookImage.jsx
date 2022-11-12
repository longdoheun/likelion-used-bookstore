/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function UsedBookImage() {
  return <div css={usedBookImageStyle}></div>;
}

const usedBookImageStyle = css`
  width: 168px;
  height: 246px;
  background-color: #d9d9d9;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px; ;
`;
