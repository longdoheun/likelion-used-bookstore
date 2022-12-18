/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import BookCardSlot from "../components/BookCardSlot";
import Banner from "../components/Banner";
import AppLayout from "../components/AppLayout";
import useFetch from "../hooks/useFetch";

export default function Main() {
  const majorData = useFetch("book", "division", "major");
  const generalData = useFetch("book", "division", "general");

  return (
    <>
      <Banner />
      <AppLayout.Main>
        <div css={containerStyle}>
          <BookCardSlot
            bookCardlistName={"교양 서적"}
            bookCardList={generalData}
            column={6}
            hover={true}
          />
          <BookCardSlot
            bookCardlistName={"전공 서적"}
            bookCardList={majorData}
            column={6}
            hover={true}
          />
        </div>
      </AppLayout.Main>
    </>
  );
}
const containerStyle = css`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 65px; */
  gap: 4.0625rem;
`;
