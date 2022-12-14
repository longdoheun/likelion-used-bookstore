/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import AppLayout from "../components/AppLayout";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import DummyData from "../dummy/dummy";

export default function ProductsDetail() {
  return (
    <>
      <Header />
      <AppLayout.Main>
        <ProductCard data={DummyData} />
      </AppLayout.Main>
    </>
  );
}
