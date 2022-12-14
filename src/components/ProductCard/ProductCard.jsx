/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../AppLayout";
import ProductDetail from "./ProductDetail";

export default function ProductCard({ data }) {
  return (
    <AppLayout.Component>
      <div css={conStyle}>
        <div css={imgStyle}></div>
        <ProductDetail data={data} />
      </div>
    </AppLayout.Component>
  );
}

const conStyle = css`
  display: flex;
  justify-content: space-between;
`;

const imgStyle = css`
  width: 464px;
  height: 571px;
  background: #c7c7c7;
`;
