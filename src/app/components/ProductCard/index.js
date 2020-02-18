import React from "react";
import "./index.css";

function ProductCard({ name, description, price, currency, id, onClick }) {
  const buttonClick = () => onClick(id);

  return (
    <div className="ProductCard">
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <p>
          {currency} {price}
        </p>
        <button type="button" onClick={buttonClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
