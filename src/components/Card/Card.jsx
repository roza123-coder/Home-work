import React, { useState } from "react";
import "./Card.css";
import { useNavigate, useParams } from "react-router-dom";
const Card = ({
  id,
  image,
  title,
  description,
  oldCardPrice,
  newCardPrice,
}) => {
  const [count, setCount] = useState(0);
  const redirect = useNavigate();
  const { cardId } = useParams();

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="container" onClick={() => redirect(`/product/${id}`)}>
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
