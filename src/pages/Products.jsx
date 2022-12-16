/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useState } from "react";
import AppLayout from "../components/AppLayout";
import BookCardSlot from "../components/BookCardSlot";
import CategoryBar from "../components/CategoryBar";
import useFetch from "../hooks/useFetch";
import { generalArr, majorArr } from "../utils/catergory";

export default function Products() {
  const [query, setQuery] = useState({
    field: null,
    value: null,
  });

  const queryData = useFetch("book", query.field, query.value);

  return (
    <>
      <AppLayout.Main>
        <div css={flexStyle}>
          <section>
            <CategoryBar
              fraction={"단과대학별"}
              categoryArr={majorArr}
              setQuery={setQuery}
            />
            <CategoryBar
              fraction={"교양영역별"}
              categoryArr={generalArr}
              setQuery={setQuery}
            />
          </section>
          <section css={wrapper}>
            <BookCardSlot bookCardList={queryData} column={5} />
          </section>
        </div>
      </AppLayout.Main>
    </>
  );
}

const flexStyle = css`
  width: 100%;
  display: flex;
  gap: 40px;
`;

const wrapper = css`
  max-width: 600px;
`;
