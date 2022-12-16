/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function ProfileImg({ handler }) {
  return <div css={ProfileStyle} onClick={handler}></div>;
}

const ProfileStyle = css`
  width: 40px;
  height: 40px;
  background: #d9d9d9;
  border-radius: 50%;
`;
