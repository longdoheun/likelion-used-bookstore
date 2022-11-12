/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function UsedBookStatus(props) {
  const { data } = props;
  const navigate = useNavigate();

  return (
    <>
      <div
        css={usedBookStatusStyle}
        onClick={() => {
          navigate("/products/" + data.product_id);
        }}
      >
        <h1 css={titleStyle}>{data.title}</h1>
        <h3 css={authorStyle}>저자: {data.authors}</h3>
        <div css={containerStyle}>
          <h3 css={statusStyle}>
            등급: {data.rank} | {data.conditions}
          </h3>
          <h2 css={priceStyle}>{data.price}원</h2>
        </div>
      </div>
    </>
  );
}

const usedBookStatusStyle = css`
  margin-top: 21.5px;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  gap: 5px;
`;

const titleStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  /* identical to box height */

  color: #000000;
`;

const authorStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  /* identical to box height */

  color: #969696;
`;

const containerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const statusStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  /* identical to box height */

  color: #adadad;
`;

const priceStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  color: #ff0000;
`;
