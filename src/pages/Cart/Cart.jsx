// import React, { useState, useCallback } from "react";
// import { useLocation } from "react-router-dom";
// import "./Cart.css";

// export const Cart = () => {
//   const location = useLocation();
//   const initialCart = location.state?.cartItems || [];
//   const [cartItems, setCartItems] = useState(
//     initialCart.map((item) => ({ ...item, count: 1 }))
//   );

//   const addToCart = useCallback((newItem) => {
//     setCartItems((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === newItem.id);

//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === newItem.id ? { ...item, count: item.count + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...newItem, count: 1 }];
//       }
//     });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Заказ оформлен!");
//   };

//   return (
//     <div className="cart-container">
//       <h1>Корзина</h1>

//       {cartItems.length > 0 ? (
//         <div className="cart-items">
//           {cartItems.map((item) => (
//             <div key={item.id} className="cart-item">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="cart-item-image"
//               />
//               <div className="cart-item-details">
//                 <p className="cart-item-title">{item.title}</p>
//                 <p>{item.description}</p>
//                 <p>
//                   <s>{item.oldCardPrice} ₽</s>{" "}
//                   <strong>{item.newCardPrice} ₽</strong>
//                 </p>
//                 <p>Количество: {item.count}</p>
//                 <button onClick={() => addToCart(item)}>Добавить ещё</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Корзина пуста</p>
//       )}

//       <div className="order-form">
//         <h2>Оформление заказа</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Имя</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Введите ваше имя"
//               required
//             />
//           </div>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Введите ваш email"
//               required
//             />
//           </div>
//           <div>
//             <label>Адрес</label>
//             <input
//               type="text"
//               name="address"
//               placeholder="Введите ваш адрес"
//               required
//             />
//           </div>
//           <div>
//             <label>Телефон</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Введите номер телефона"
//               required
//             />
//           </div>
//           <button type="submit">Оформить заказ</button>
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const location = useLocation();
  const initialCart = location.state?.cartItems || [];

  const [cartItems, setCartItems] = useState(
    initialCart.map((item) => ({ ...item, count: 1 }))
  );

  const addToCart = useCallback((newItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...newItem, count: 1 }];
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Заказ оформлен!");
  };

  return (
    <div className="cart-container">
      <h1>Корзина</h1>

      <div className="cart-content">
        {/* Секция с товарами */}
        <div className="cart-items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <p className="cart-item-title">{item.title}</p>
                  <p>{item.description}</p>
                  <p>
                    <s>{item.oldCardPrice} ₽</s>{" "}
                    <strong>{item.newCardPrice} ₽</strong>
                  </p>
                  <p>Количество: {item.count}</p>
                  <button onClick={() => addToCart(item)}>Добавить ещё</button>
                </div>
              </div>
            ))
          ) : (
            <p>Корзина пуста</p>
          )}
        </div>

        {/* Форма оформления заказа */}
        <div className="order-form">
          <h2>Оформление заказа</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Имя</label>
              <input
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                required
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Введите ваш email"
                required
              />
            </div>
            <div>
              <label>Адрес</label>
              <input
                type="text"
                name="address"
                placeholder="Введите ваш адрес"
                required
              />
            </div>
            <div>
              <label>Телефон</label>
              <input
                type="tel"
                name="phone"
                placeholder="Введите номер телефона"
                required
              />
            </div>
            <button type="submit">Оформить заказ</button>
          </form>
        </div>
      </div>
    </div>
  );
};
