/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

export default function TagInput({ inputInfo }) {
  return (
    <section css={wrapStyle}>
      <span css={titleStyle}>{inputInfo.title}</span>
      <input
        css={inputStyle}
        autoComplete="off"
        type={inputInfo.type}
        name={inputInfo.name}
        value={inputInfo.value}
        placeholder={inputInfo.placeholder}
        onChange={inputInfo.onChange}
      />
    </section>
  );
}

const wrapStyle = css`
  /* background: red; */
  width: 100%;
  display: flex;
  gap: 100px;
  padding: 20px 0px;
  border-bottom: 1px solid #eeee;
  justify-content: space-between;
  align-items: center;
`;

const titleStyle = css`
  font-family: "Courier New", Courier, monospace;
  font-weight: 500;
`;

const inputStyle = css`
  padding-left: 10px;
  height: 30px;
  width: 600px;
  border: 1px solid #dedede;
  color: #242424;
  &::placeholder {
    color: #b4b4b4;
    font-size: 12px;
  }
`;
