import React, { useState, useMemo } from "react";
import { cardData } from "../../mock/mock";
import CardSection from "../../components/CardSection/CardSection";

export const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = useMemo(() => {
    return cardData.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <main>
      <div>
        <input
          type="text"
          placeholder="Поиск по наименованию товара..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {searchQuery && (
          <ul>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((card) => (
                <li key={card.id}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <span>{card.price} ₽</span>
                </li>
              ))
            ) : (
              <li>Товары не найдены</li>
            )}
          </ul>
        )}
      </div>
      <CardSection />
    </main>
  );
};
