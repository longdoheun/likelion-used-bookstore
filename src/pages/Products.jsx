/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import UsedBookCard from "../components/UsedBookCard";

export default function Products() {
  const DummyData = {
    product_id: "askdjlf183jskcf",
    title: "소통의 기초 스피치와 토론",
    authors: "성균관대학교 출판부",
    conditions: "파손 없음",
    rank: "A",
    price: 5000,
  };

  return (
    <>
      <div css={style}>This is Products page</div>
      <UsedBookCard data={DummyData} />
    </>
  );
}

const style = css`
  color: red;
`;
