/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import BookCardSlot from "../components/BookCardSlot";
import Banner from "../components/Banner";
import AppLayout from "../components/AppLayout";
import Header from "../components/Header";
import DummyData from "../dummy/dummy";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Banner />
      <AppLayout.Main>
        <div css={containerStyle}>
          <BookCardSlot
            bookCardlistName={"교양 서적"}
            bookCardList={DummyList}
          />
          <BookCardSlot
            bookCardlistName={"전공 서적"}
            bookCardList={DummyList}
          />
        </div>
      </AppLayout.Main>
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
    </div>
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

const DummyList = [{}, {}, {}, {}, {}, {}].map((item) => DummyData);
