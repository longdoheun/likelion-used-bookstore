/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../components/AppLayout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import DummyData from "../utils/dummy";

export default function ProductsDetail() {
  return (
    <>
      <Header />
      <AppLayout.Main>
        <ProductCard data={DummyData} />
      </AppLayout.Main>
      <Footer />
    </>
  );
}
