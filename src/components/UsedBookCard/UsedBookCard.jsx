/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import UsedBookImage from "./UsedBookImage";
import UsedBookStatus from "./UsedBookStatus";

export default function UsedBookCard(props) {
  const { data, hover } = props;
  const navigate = useNavigate();
  return (
    <div css={UsedBookCardStyle}>
      <CartButton />
      <UsedBookImage
        url={data.imgUrl}
        hover={hover}
        handler={() => {
          navigate("/products/" + data.id);
        }}
      />
      <UsedBookStatus data={data} />
    </div>
  );
}

const UsedBookCardStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  align-items: flex-start;
  /* margin: 0.9375rem; */
`;
