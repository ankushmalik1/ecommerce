import React from "react";
import { CartState } from "../../context/Context";
import SingleProduct from "./SingleProduct";
import "./style.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  const generatedProducts = () => {
    let categorizedProducts = [...products];

    return categorizedProducts;
  };

  return (
    <div className="productContainer">
      {generatedProducts().map((prod) => {
        return <SingleProduct prod={prod} key={prod.id}></SingleProduct>;
      })}
    </div>
  );
};

export default Home;
