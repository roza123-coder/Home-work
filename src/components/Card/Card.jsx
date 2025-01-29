const Card = ({ image, title, description, oldCardPrice, newCardPrice }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p className="cardTitle">{title}</p>
      <h4 className="cardDescription">{description}</h4>
      <span className="oldCardPrice">{oldCardPrice} </span>
      <span className="newCardPrice">{newCardPrice}</span>
    </div>
  );
};
export default Card;
