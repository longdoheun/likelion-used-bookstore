/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import media from "./media";
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

  html {
    ${media.laptopL} {
      font-size: 100%;
    }
    ${media.tablet} {
      font-size: 93.75%;
    }
    ${media.mobile} {
      font-size: 87.5%;
    }
  }

  body {
    box-sizing: border-box;
    background-color: #f9f7f3;
  }
`;
