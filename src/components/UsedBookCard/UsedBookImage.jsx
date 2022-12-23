/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function UsedBookImage({ url, hover, handler }) {
  return (
    <div
      onClick={handler}
      // css={css(hover && hoverStyle, usedBookImageStyle(url))}
      css={usedBookImageStyle(url)}
    ></div>
  );
}

const hoverStyle = css`
  transition: all 0.5s ease-in-out;
  &:hover {
    width: 184.8px;
    height: 270.6px;
  }
`;
const usedBookImageStyle = (url) => css`
  width: 168px;
  height: 246px;
  background-color: #d9d9d9;
  background-image: url(${url});
  background-size: cover;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
