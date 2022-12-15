import React from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetchDoc from "../hooks/useFetchDoc";

export default function ProductsDetail() {
  const { product_id } = useParams();
  const bookData = useFetchDoc("book", product_id);

  return (
    <>
      <Header />
      <AppLayout.Main>
        <ProductCard data={bookData} />
      </AppLayout.Main>
      <Footer />
    </>
  );
}
