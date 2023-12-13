import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../utils";
import { SingleProduct } from "./SingleProduct";
const url =
  "https://raw.githubusercontent.com/mkatay/json_products/main/products";

export const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getData(url, setProducts);
  }, []);
  console.log(products);
  return (
    <div className="container p-2 bg-light shadow">
      <h2>Our Products</h2>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {products &&
          products.map((obj) => <SingleProduct key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};
