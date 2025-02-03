import React, { useState } from "react";
import './Card.css';
const Card = ({ image, title, description, oldCardPrice, newCardPrice }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div>
      <img src={image} alt={title} />
      <p className="cardTitle">{title}</p>
      <h4 className="cardDescription">{description}</h4>
      <span className="oldCardPrice">{oldCardPrice} </span>
      <span className="newCardPrice">{newCardPrice}</span>
      <div className="cart">
        <button onClick={decreaseCount} className="cart-button">
          -
        </button>

        {}
        <span className="quantity">{count}</span>
        <button onClick={increaseCount} className="cart-button">
          +
        </button>
      </div>
    </div>
  );
};
export default Card;
