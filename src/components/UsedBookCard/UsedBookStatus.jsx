/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useNumWithComma from "../../hooks/useNumWithComma";

export default function UsedBookStatus(props) {
  const { data } = props;
  const navigate = useNavigate();
  const stringifyNumber = useNumWithComma(data.price);

  // useEffect(() => {
  //   setStringifyNumber(data.price);
  // }, [data]);

  return (
    <div
      css={usedBookStatusStyle}
      onClick={() => {
        navigate("/products/" + data.id);
      }}
    >
      <h1 css={titleStyle}>{data.title}</h1>
      <h3 css={authorStyle}>저자: {data.authors}</h3>
      <div css={containerStyle}>
        <h3 css={statusStyle}>
          등급: {data.rank} | {data.mandatory}
        </h3>
        <h2 css={priceStyle}>{stringifyNumber}원</h2>
      </div>
    </div>
  );
}

const usedBookStatusStyle = css`
  margin-top: 21.5px;
  width: 100%;
  width: 168px;
  height: 56px;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  gap: 5px;
  gap: 0.3125rem;
`;

const titleStyle = css`
  max-width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  /* font-size: 16px; */
  /* identical to box height */

  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const authorStyle = css`
  max-width: 100%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  /* font-size: 12px; */
  /* identical to box height */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  font-size: 0.75rem;
  /* font-size: 12px; */
  /* identical to box height */

  color: #adadad;
`;

const priceStyle = css`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  /* font-size: 14px; */
  line-height: 16px;

  color: #ff0000;
`;
