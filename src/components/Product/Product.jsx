import React, { useState } from "react";

const Product = ({ image, title, description, oldCardPrice, newCardPrice }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="price">
        <span className="old-price">{oldCardPrice}</span>
        <span className="new-price">{newCardPrice}</span>
      </div>
      <div className="cart">
        {""}
        <button onClick={decreaseCount} className="cart-button">
          -
        </button>

        {0}
        <span className="quantity">{count}</span>

        {"+"}
        <button onClick={increaseCount} className="cart-button">
          +
        </button>
      </div>
    </div>
  );
};
export default Product;
