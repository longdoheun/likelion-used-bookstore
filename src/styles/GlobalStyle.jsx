/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from "@emotion/react";
import React from "react";

export default function GlobalStyle() {
  const { mq } = useTheme();

  const style = css`
    * {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    html {
      /* ${mq.mobile} { */
      font-size: 87.5%;
      /* } */
      ${mq.tablet} {
        font-size: 93.75%;
      }
      ${mq.laptop} {
        font-size: 100%;
      }
    }

    body {
      box-sizing: border-box;
      background-color: #f9f7f3;
    }

    #root {
      position: relative;
      margin: 0 16px;
      ${mq.tablet} {
        margin: 0 24px;
      }
      ${mq.laptopL} {
        margin: 0 50px;
      }
    }
  `;

  return <Global styles={style} />;
}
