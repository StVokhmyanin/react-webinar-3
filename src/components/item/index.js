import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Button from "../button";

function Item(props) {
  const callbacks = {
    onClick: () => {
      props.onClick(props.item.code);
    },
  };

  return (
    <div className="Item">
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title}</div>
      <div className="Item-price">
        {props.item.price.toLocaleString("ru-RU")}&nbsp;&#8381;
      </div>
      {props.item.quantity && (
        <div className="Item-quantity">{props.item.quantity}&nbsp;шт</div>
      )}
      <div className="Item-actions">
        <Button onClick={callbacks.onClick} title={props.buttonTitle} />
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func,
};

Item.defaultProps = {
  onDelete: () => {},
  onSelect: () => {},
};

export default React.memo(Item);
