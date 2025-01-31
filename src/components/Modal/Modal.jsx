import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  const [seconds, setSeconds] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      alert("Выполнено размонтирование компоненты");
    };
  }, []);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleCloseModal = () => {
    setUsername("");
    setPassword("");
    closeModal();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={handleCloseModal} className="close-modal">
          &times;
        </span>
        <h2>Войдите в свой аккаунт</h2>
        <p>Время работы модального окна: {seconds} секунд</p>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Имя пользователя"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <button type="submit" className="btn">
            Авторизоваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
