/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import CartButton from "./CartButton";
import UsedBookImage from "./UsedBookImage";
import UsedBookStatus from "./UsedBookStatus";

export default function UsedBookCard(props) {
  const { data } = props;
  return (
    <div css={UsedBookCardStyle}>
      <CartButton />
      <UsedBookImage url={data.imgUrl} />
      <UsedBookStatus data={data} />
    </div>
  );
}

const UsedBookCardStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 0.9375rem; */
`;
