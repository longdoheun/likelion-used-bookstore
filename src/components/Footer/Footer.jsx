/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function Footer() {
  return (
    <footer css={footerStyle}>
      <div></div>
    </footer>
  );
}

const footerStyle = css`
  width: 100%;
  height: 200px;
  background-color: #f9f7f3;
  border-top: 1px solid #dedede;
  margin-top: 200px;
`;
