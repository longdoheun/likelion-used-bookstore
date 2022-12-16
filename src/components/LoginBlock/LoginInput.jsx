/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function LoginInput(props) {
  const { type, value, handler, placeholder } = props;
  return (
    <div css={wrap}>
      <input
        css={inputStyle}
        autoComplete="off"
        type={type}
        name="name"
        value={value}
        placeholder={placeholder}
        onChange={handler}
      />
    </div>
  );
}
const wrap = css`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  background: #ffffff;
  border: 3px solid #cdac01;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const inputStyle = css`
  width: 85%;
  /* padding: 18px 25px; */
  /* box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25); */
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  /* identical to box height */

  color: #cdac01;
`;
