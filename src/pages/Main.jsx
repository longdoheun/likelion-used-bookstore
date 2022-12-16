/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import BookCardSlot from "../components/BookCardSlot";
import Banner from "../components/Banner";
import AppLayout from "../components/AppLayout";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import useFetch from "../hooks/useFetch";

export default function Main() {
  const navigate = useNavigate();
  const majorData = useFetch("book", "division", "major");
  const generalData = useFetch("book", "division", "general");

  return (
    <div>
      <Header />
      <Banner />
      <AppLayout.Main>
        <div css={containerStyle}>
          <BookCardSlot
            bookCardlistName={"교양 서적"}
            bookCardList={generalData}
            column={6}
          />
          <BookCardSlot
            bookCardlistName={"전공 서적"}
            bookCardList={majorData}
            column={6}
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
      <Footer />
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
