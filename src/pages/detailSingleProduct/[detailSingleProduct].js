import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const DetailSingleProduct = () => {
  return <div>DetailSingleProduct</div>;
};

export default DetailSingleProduct;

DetailSingleProduct.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
