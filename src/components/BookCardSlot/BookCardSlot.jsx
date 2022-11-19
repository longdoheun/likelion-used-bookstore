/** @jsxImportSource @emotion/react */ import { css } from "@emotion/react";
import React from "react";
import UsedBookCard from "../UsedBookCard";

export default function BookCardSlot(props) {
  const { bookCardList, bookCardlistName } = props;
  return (
    <div>
      <h1 css={slotTitleStyle}>{bookCardlistName}</h1>
      <div css={slotStyle}>
        {bookCardList.map((bookCardData) => (
          <UsedBookCard key={bookCardData.product_id} data={bookCardData} />
        ))}
      </div>
    </div>
  );
}

const slotTitleStyle = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 4.375rem;
  /* font-size: 32px;
  line-height: 70px; */
  /* identical to box height, or 219% */

  letter-spacing: 0.1px;

  color: #403600;
`;

const slotStyle = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.875rem;
  /* gap: 30px; */
`;
