import React from "react";
import { numberFormat } from "../../utils";
import useLanguage from "../../store/use-language";
import { addToCartButton } from "../../data/language";
import "./style.css";

const ItemInfo = ({ item, onAdd }) => {

  const callbacks = {
    onAdd: () => onAdd(item._id)
  }

  const buttonTitle = useLanguage(addToCartButton);

  return (
    <ul className="Item-info">
      <li className="Item-info__item">{item.description}</li>
      <li className="Item-info__item">
        Страна производитель:{" "}
        <b>
          {item.madeIn.title} ({item.madeIn.code})
        </b>
      </li>
      <li className="Item-info__item">
        Категория: <b>{item.category.title}</b>
      </li>
      <li className="Item-info__item">
        Год выпуска: <b>{item.edition}</b>
      </li>
      <li className="Item-info__item Item-info__item_size_large">
        <b>Цена: {numberFormat(item.price)} &#8381;</b>
      </li>
      <li className="Item-info__item Item-info__item_size_large">
        <button className="Item-info__button" onClick={callbacks.onAdd}>
          {buttonTitle}
        </button>
      </li>
    </ul>
  );
};

export default React.memo(ItemInfo);
