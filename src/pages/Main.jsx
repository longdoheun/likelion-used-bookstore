/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import BookCardSlot from "../components/BookCardSlot";

export default function Main() {
  const navigate = useNavigate();
  const containerStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;
    gap: 4.0625rem;
  `;

  return (
    <>
      <div css={containerStyle}>
        <BookCardSlot bookCardlistName={"교양 서적"} bookCardList={DummyList} />
        <BookCardSlot bookCardlistName={"전공 서적"} bookCardList={DummyList} />
      </div>
      <div
        onClick={() => {
          navigate("/login");
        }}
      >
        login page
      </div>
      <div
        onClick={() => {
          navigate("/Signin");
        }}
      >
        signin page
      </div>
      <div
        onClick={() => {
          navigate("/Admin");
        }}
      >
        Admin page
      </div>
      <div
        onClick={() => {
          navigate("/products/b3024958378/payment");
        }}
      >
        payment page
      </div>
    </>
  );
}

const DummyData = {
  product_id: "askdjlf183jskcf",
  title: "소통의 기초 스피치와 토론",
  authors: "성균관대학교 출판부",
  conditions: "파손 없음",
  rank: "A",
  price: 5000,
};

const DummyList = [{}, {}, {}, {}, {}, {}].map((item) => DummyData);
