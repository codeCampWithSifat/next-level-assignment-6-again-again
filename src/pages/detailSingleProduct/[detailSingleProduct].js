import React from "react";
import RootLayout from "../components/layout/RootLayout";

const DetailSingleProduct = () => {
  return <div>DetailSingleProduct</div>;
};

export default DetailSingleProduct;

DetailSingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
