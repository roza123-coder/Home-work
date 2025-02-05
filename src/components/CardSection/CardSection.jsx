import Card from "../Card/Card";
import "./CardSection.css";
import { cardData } from "../../mock/mock";
import { useNavigate, useParams } from "react-router-dom";

const CardSection = (card) => {
  const redirect = useNavigate();
  // const { cardId } = useParams();

  

  return (
    <div className="cardSection">
      <h3>WOMENS FASHION</h3>
      <p className="desc">Shop our new arrivals from established brands</p>
      <div
        className="cardContainer"
      >
        {cardData.map((card, id) => (
          <Card
            key={card.id}
            id={card.id}
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
