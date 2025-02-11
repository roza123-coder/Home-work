import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { cardData } from "../../mock/mock";

export const ProductDetail = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const [currentCard, setCurrentCard] = useState();

  useEffect(() => {
    if (cardId) {
      const foundCard = cardData.find((item) => item.id === Number(cardId));
      if (foundCard) setCurrentCard(foundCard);
    }
  }, []);

  if (!currentCard) return <p>Загрузка...</p>;

  const addToCart = () => {
    navigate("/cart", {
      state: { card_id: cardId },
    });
  };

  return (
    <main>
      <div className="container">
        <button onClick={() => navigate(-1)}>Вернуться назад</button>
        <h1>Страница конкретного продукта</h1>
        <p>{currentCard.title}</p>
        <h4>{currentCard.description}</h4>
        <p>{currentCard.oldCardPrice}</p>
        <p>{currentCard.newCardPrice}</p>
        <img src={currentCard.image} alt="card-image" width={500} />
      </div>
      <button onClick={addToCart}>Добавить в корзину</button>
    </main>
  );
};

export default ProductDetail;
