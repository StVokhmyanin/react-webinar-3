import React from "react";
import PropTypes from "prop-types";
import Head from "../head";
import Button from "../button";
import "./style.css";
import List from "../list";
import { totalCost } from "../../utils";

function Modal({ isModalOpen, onCloseClick, onClick, cart, buttonTitle }) {
  console.log("render modal");

  const className = isModalOpen ? "Modal_open" : "";

  return (
    <div className={`Modal ${className}`}>
      <div className="Modal__wrapper">
        <Head
          title="Корзина"
          children={<Button title="Закрыть" onClick={() => onCloseClick()} />}
        />
        <List list={cart} buttonTitle={buttonTitle} onClick={onClick} />
        <div className="Modal__total">
          <span><b>Итого:</b></span>
          <span><b>{totalCost(cart).toLocaleString("ru-RU")} &#8381;</b></span>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
};

export default React.memo(Modal);
