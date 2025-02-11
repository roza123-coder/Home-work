import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "./Cart.css";

export const Cart = () => {
  const location = useLocation();
  console.log(location);
  const { card_id } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.address ||
      !formData.phone
    ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    console.log("Данные заказа:", formData);

    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
    });

    alert("Заказ оформлен!");
  };

  return (
    <div>
      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введите ваше имя"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Введите ваш email"
            required
          />
        </div>
        <div>
          <label>Адрес</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Введите ваш адрес"
            required
          />
        </div>
        <div>
          <label>Телефон</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Введите номер телефона"
            required
          />
        </div>
        <button type="submit">Оформить заказ</button>
      </form>
    </div>
  );
};
