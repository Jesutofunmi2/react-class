import React from "react";
import { useState } from "react";

const useShoppingCart = () => {
  const [products, setProduct] = useState([]);

  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProduct(data));
  return {
    products,
  };
};

export default useShoppingCart;
