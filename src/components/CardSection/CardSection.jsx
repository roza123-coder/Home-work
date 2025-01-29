import Card from "../Card/Card";
import "./CardSection.css";
import igure from "../../assets/igure.png";
import igure2 from "../../assets/igure2.png";
import igure3 from "../../assets/igure3.png";
import igure4 from "../../assets/igure4.png";
import Product from "../Product/Product";

const cardData = [
  {
    image: igure,
    title: "IGURE",
    description: "GREEN MUSCLE FIT POLO SHIRT",
    oldCardPrice: "$229.00",
    newCardPrice: "$129.00",
  },
  {
    image: igure2,
    title: "IGURE",
    description: "GREEN MUSCLE FIT POLO SHIRT",
    oldCardPrice: "$229.00",
    newCardPrice: "$129.00",
  },
  {
    image: igure3,
    title: "IGURE",
    description: "GREEN MUSCLE FIT POLO SHIRT",
    oldCardPrice: "$229.00",
    newCardPrice: "$129.00",
  },
  {
    image: igure4,
    title: "IGURE",
    description: "GREEN MUSCLE FIT POLO SHIRT",
    oldCardPrice: "$229.00",
    newCardPrice: "$129.00",
  },
];

const CardSection = () => {
  return (
    <div className="cardSection">
      <h3>WOMENS FASHION</h3>
      <p className="desc">Shop our new arrivals from established brands</p>
      <div className="cardContainer">
        {cardData.map((card, index) => (
          <Product
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            oldCardPrice={card.oldCardPrice}
            newCardPrice={card.newCardPrice}
          />
        ))}
      </div>
    </div>
  );
};
export default CardSection;
