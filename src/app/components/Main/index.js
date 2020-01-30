import React from "react";
import "./index.css";
import ProductCard from "../ProductCard";

function Main({ data, currency, addToCart }) {
  return (
    <main className="Main">
      <div className="ProductsList">
        {data.map(({ title, description, price, id }, index) => (
          <ProductCard
            key={index}
            title={title}
            description={description}
            price={price}
            id={id}
            currency={currency}
            onClick={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
