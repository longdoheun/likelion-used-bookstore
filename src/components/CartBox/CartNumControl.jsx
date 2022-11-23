/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

export default function CartBookInfo() {
    return (
    <div css={bookNumStyle}>
        <div css={editButton}>－</div>
        <div css={countStyle}>1</div>
        <div css={editButton}>＋</div>
    </div>
    );
  }

  const bookNumStyle = css`
  display: flex;
  margin-top: 5px;
  box-shadow: 0px 1px 2px 1px #e7e7e7;
`

const editButton = css`
  width: 25px;
  height: 25px;
  background-color: #D9D9D9;
  font-weight: bolder;
  text-align: center;
  border: 0px;
  cursor: pointer;
`

const countStyle = css`
  width: 44px;
  height: 25px;
  background-color: #FFFFFF;
  font-weight: 600;
  text-align: center;
  border-left: 1px solid #ADADAD;
  border-right: 1px solid #ADADAD;
`