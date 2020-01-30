import React from "react";
import "./index.css";
import ProductCard from "../ProductCard";

const CURRENCY = "$";
const DATA = [
  {
    title: "Microwave",
    description: "Very Nice Short Description",
    price: 30
  },
  {
    title: "T-Shirt",
    description: "Blue short sleeve t-shirt",
    price: 15
  },
  {
    title: "Toaster",
    description: "Toasty toasty bread machine",
    price: 45
  },
  {
    title: "Cap",
    description: "Snapback cap with logo on it",
    price: 50
  },
  {
    title: "Microwave",
    description: "Very Nice Short Description",
    price: 30
  }
];

function Main() {
  return (
    <main className="Main">
      <div className="ProductsList">
        {DATA.map(({ title, description, price }, index) => (
          <ProductCard
            key={index}
            title={title}
            description={description}
            price={price}
            currency={CURRENCY}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
