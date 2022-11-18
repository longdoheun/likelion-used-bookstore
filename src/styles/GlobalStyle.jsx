/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import React from "react";

export default function GlobalStyle() {
  return <Global styles={style} />;
}

const style = css`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    box-sizing: border-box;
    background-color: #f9f7f3;
  }
`;
