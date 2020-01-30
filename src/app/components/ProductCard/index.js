import React from "react";
import "./index.css";

function ProductCard({ title, description, price, currency }) {
  return (
    <div className="ProductCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <p>
          {currency} {price}
        </p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
