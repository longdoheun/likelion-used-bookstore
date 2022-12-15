/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../components/AppLayout";
import BookCardSlot from "../components/BookCardSlot";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { generalArr, majorArr } from "../utils/catergory";
import DummyData from "../utils/dummy";

export default function Products() {
  const queryData = useFetch("book");

  return (
    <>
      <Header />
      <AppLayout.Main>
        <div css={flexStyle}>
          <section>
            <CategoryBar fraction={"단과대학별"} categoryArr={majorArr} />
            <CategoryBar fraction={"교양영역별"} categoryArr={generalArr} />
          </section>
          <section css={wrapper}>
            <BookCardSlot bookCardList={queryData} column={5} />
          </section>
        </div>
      </AppLayout.Main>
      <Footer />
    </>
  );
}

const DummyList = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}].map(
  (item) => DummyData
);

const flexStyle = css`
  width: 100%;
  display: flex;
  gap: 40px;
`;

const wrapper = css`
  max-width: 600px;
`;
