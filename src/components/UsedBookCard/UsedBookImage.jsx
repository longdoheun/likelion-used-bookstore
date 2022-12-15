/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function UsedBookImage({ url }) {
  return <div css={usedBookImageStyle(url)}></div>;
}

const usedBookImageStyle = (url) => css`
  width: 168px;
  width: 10.5rem;
  height: 246px;
  height: 15.375rem;
  background-color: #d9d9d9;
  background-image: url(${url});
  background-size: cover;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px; ;
`;
