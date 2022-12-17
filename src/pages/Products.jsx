/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import BookCardSlot from "../components/BookCardSlot";
import CategoryBar from "../components/CategoryBar";
import useFetch from "../hooks/useFetch";
import { generalArr, majorArr } from "../utils/catergory";
import queryString from "query-string";
import { useEffect } from "react";
export default function Products() {
  const location = useLocation();
  const qs = queryString.parse(location.search);

  const [query, setQuery] = useState({
    field: qs.field || null,
    value: qs.value || null,
  });

  const queryData = useFetch("book", query.field, query.value);

  useEffect(() => {
    const qs = queryString.parse(location.search);
    console.log("changed");
    setQuery({
      field: qs.field,
      value: qs.value,
    });
  }, [location]);

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
            <BookCardSlot bookCardList={queryData} column={5} hover={false} />
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
