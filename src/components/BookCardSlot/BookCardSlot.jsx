/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import RoundBtn from "../RoundBtn/RoundBtn";
import UsedBookCard from "../UsedBookCard";

export default function BookCardSlot(props) {
  const { bookCardList, bookCardlistName, column } = props;
  return (
    <div>
      {bookCardlistName && (
        <div css={slotTopStyle}>
          <h1 css={slotTitleStyle}>{bookCardlistName}</h1>
          <RoundBtn contents={"더 많은 책보기"} />
        </div>
      )}
      <div css={gridStyle(column)}>
        {bookCardList.map((bookCardData) => (
          <UsedBookCard key={bookCardData.id} data={bookCardData} />
        ))}
      </div>
    </div>
  );
}

const slotTopStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

const gridStyle = (column) => css`
  display: grid;
  display: -ms-grid;
  gap: 32px 30px;
  align-content: start;
  align-items: start;
  grid-template-columns: repeat(${column}, 1fr);
`;
