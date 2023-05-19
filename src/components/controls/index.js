import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";
import { plural, totalCost } from "../../utils";

function Controls({ onClick, store }) {

  console.log('render controls');

  return (
    <div className="Controls">
      <span>В корзине:</span>
      <span><b>{store.length} {plural(store.length, {one: 'товар', few: 'товара', many: 'товаров'})} / {totalCost(store).toLocaleString("ru-RU")} &#8381;</b></span>
      <Button title={"Перейти"} onClick={onClick} />
    </div>
  );
}

Controls.propTypes = {
  onClick: PropTypes.func,
};

Controls.defaultProps = {
  onClick: () => {},
};

export default React.memo(Controls);
