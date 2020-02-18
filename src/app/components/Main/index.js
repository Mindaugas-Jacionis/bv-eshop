import React from "react";
import "./index.css";
import ProductCard from "../ProductCard";

function Main({ data, loading, error, currency, addToCart }) {
  return (
    <main className="Main">
      {error && <h3>{error}</h3>}
      {!data.length && loading && <div>Loading...</div>}
      {!!data.length && (
        <div className="ProductsList">
          {data.map(({ name, description, price, id }, index) => (
            <ProductCard
              key={index}
              name={name}
              description={description}
              price={price}
              id={id}
              currency={currency}
              onClick={addToCart}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Main;
