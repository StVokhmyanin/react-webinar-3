import { memo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";
import { numberFormat, plural } from "../../utils";
import "./style.css";
import useLanguage from "../../store/use-language";
import { mainLink, cartTitle, cartOpenButton, emptyCart } from "../../data/language";

function BasketTool({ sum, amount, onOpen }) {

  const cn = bem("BasketTool");

  const emptyCartTitle = useLanguage(emptyCart);

  return (
    <div className={cn()}>
      <NavLink to={"/"} className={cn("link")}>
        {useLanguage(mainLink)}
      </NavLink>
      <span className={cn("label")}>{useLanguage(cartTitle)}:</span>
      <span className={cn("total")}>
        {amount
          ? `${amount} ${plural(amount, {
              one: "товар",
              few: "товара",
              many: "товаров",
            })} / ${numberFormat(sum)} ₽`
          : `${emptyCartTitle}`}
      </span>
      <button onClick={onOpen}>{useLanguage(cartOpenButton)}</button>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
};

BasketTool.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0,
};

export default memo(BasketTool);
