import "./Header.css";
import logo from "../assets/YOUR LOGO.png";
import cart from "../assets/search HEART shopping-cart.png";
import React, { useState } from "react";
import Modal from "./Modal/Modal";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/shop",
    title: "Shop",
  },
  {
    path: "/lookbook",
    title: "Lookbook",
  },
  {
    path: "/features",
    title: "Features",
  },
  {
    path: "/pages",
    title: "Pages",
  },
  {
    path: "/blog",
    title: "Blog",
  },
];
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <ul className="listItem">
          {routes.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "active-link link" : "link"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
      <img className="cart" src={cart} alt="cart" />
      <div>
        <button onClick={() => setIsModalOpen(true)}>Войти</button>
        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
};
export default Header;
