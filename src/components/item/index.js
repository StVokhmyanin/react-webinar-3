import { memo, useState } from "react";
import ItemLink from "../item-link";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import { numberFormat } from "../../utils";
import "./style.css";
import useLanguage from "../../store/use-language";

function Item(props) {

  const cn = bem("Item");

  const callbacks = {
    onAdd: (e) => props.onAdd(props.item._id),
  };

  const button = [
    {
      language: "RU",
      text: "Добавить",
    },
    {
      language: "EN",
      text: "Add to cart",
    },
  ];

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn("title")}>
        <ItemLink title={props.item.title} link={`/${props.link}/${props.item._id}`} />
      </div>
      <div className={cn("actions")}>
        <div className={cn("price")}>{numberFormat(props.item.price)} ₽</div>
        <button className={cn("button")} onClick={callbacks.onAdd}>{useLanguage(button)}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    key: PropTypes.number,
  }).isRequired,
  onAdd: PropTypes.func,
};

Item.defaultProps = {
  onAdd: () => {},
};

export default memo(Item);
