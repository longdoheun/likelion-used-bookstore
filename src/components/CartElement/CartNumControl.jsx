/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function CartNumControl({ quantity, plus, minus }) {
  return (
    <div css={bookNumStyle}>
      <div
        css={editButton}
        onClick={() => {
          minus();
        }}
      >
        －
      </div>
      <div css={countStyle}>{quantity || 1}</div>
      <div
        css={editButton}
        onClick={() => {
          plus();
        }}
      >
        ＋
      </div>
    </div>
  );
}

const bookNumStyle = css`
  display: flex;
  margin-top: 5px;
  box-shadow: 0px 1px 2px 1px #e7e7e7;
`;

const editButton = css`
  width: 25px;
  height: 25px;
  background-color: #d9d9d9;
  font-weight: bolder;
  text-align: center;
  border: 0px;
  cursor: pointer;
`;

const countStyle = css`
  width: 36px;
  height: 25px;
  background-color: #ffffff;
  font-weight: 600;
  text-align: center;
  border-left: 1px solid #adadad;
  border-right: 1px solid #adadad;
`;
