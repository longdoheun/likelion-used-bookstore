import React from "react";
import { useParams } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import ProductCard from "../components/ProductCard/ProductCard";
import useFetchDoc from "../hooks/useFetchDoc";

export default function ProductsDetail() {
  const { product_id } = useParams();
  const bookData = useFetchDoc("book", product_id);

  return (
    <>
      <AppLayout.Main>
        <ProductCard data={bookData} />
      </AppLayout.Main>
    </>
  );
}
