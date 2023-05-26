import { memo, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import './style.css';
import useLanguage from "../../store/use-language";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import ItemInfo from "../../components/item-info";
import { addToCartButton } from "../../data/language";

function Item() {

  const store = useStore();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    store.actions.item
      .load(id)
      .then(() => setIsLoading(false));
      store.actions.modals.close('basket');
  }, [id]);

  const select = useSelector((state) => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    item: state.item.item
  }));

  const callbacks = {
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  };

  const buttonTitle = useLanguage(addToCartButton);

  return (
    <PageLayout>
      {!isLoading && (
        <>
          <Head title={select.item.title} />
          <BasketTool
            onOpen={callbacks.openModalBasket}
            amount={select.amount}
            sum={select.sum}
          />
          <ItemInfo item={select.item} />
          <button className="Item__button" onClick={() => callbacks.addToBasket(select.item._id)}>
            {buttonTitle}
          </button>
        </>
      )}
    </PageLayout>
  );
}

export default memo(Item);
