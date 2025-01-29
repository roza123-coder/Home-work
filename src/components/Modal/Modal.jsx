import "./Modal.css";
const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close-modal">
          &times;
        </span>
        <h2>Войдите в свой аккаунт</h2>
        <form>
          <input type="text" placeholder=" Имя пользователя" />
          <input type="text" placeholder="Пароль" />
          <br />
          <button className="btn">Авторизоваться</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
