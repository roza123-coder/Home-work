import "./Header.css";
import logo from "../assets/YOUR LOGO.png";
import cart from "../assets/search HEART shopping-cart.png";

import React, { useState } from "react";
import Modal from "./Modal/Modal";

const Header = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <ul className="listItem">
        <li>HOME</li>
        <li>SHOP</li>
        <li>LOOKBOOK</li>
        <li>FEATURES</li>
        <li>PAGES</li>
        <li>BLOG</li>
      </ul>
      <img className="cart" src={cart} alt="cart" />
      <div>
        <button onClick={() => setIsModalOpen(true)}>Войти</button>
        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
};
export default Header;
