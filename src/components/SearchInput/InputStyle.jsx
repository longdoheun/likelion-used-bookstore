/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

export default function InputStyle() {
  return (
    <div css={inputContainer}>
      <input css={inputStyle} />
      <SearchIcon />
    </div>
  );
}

const inputContainer = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 13px 26px;
`;

const inputStyle = css`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
`;
