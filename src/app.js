import React, { useCallback, useState } from "react";
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    onDeleteItem: useCallback(
      (code) => {
        store.deleteItem(code);
      },
      [store]
    ),

    onSelectItem: useCallback(
      (code) => {
        store.selectItem(code);
      },
      [store]
    ),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddItemToCart: useCallback(
      (code) => {
        store.addItemToCart(code);
      },
      []
    ),

    onDeleteItemFromCart: useCallback(
      (code) => {
        store.deleteItemFromCart(code);
      },
      []
    ),

    onOpenModal: useCallback(() => {
      setIsModalOpen(true);
    }, []),

    onCloseClick: useCallback(() => {
      setIsModalOpen(false);
    }, []),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls onClick={callbacks.onOpenModal} store={cart}/>
      <List
        list={list}
        buttonTitle="Добавить"
        onDeleteItem={callbacks.onDeleteItem}
        onClick={callbacks.onAddItemToCart}
      />
      <Modal
        isModalOpen={isModalOpen}
        onCloseClick={callbacks.onCloseClick}
        cart={cart}
        buttonTitle="Удалить"
        onClick={callbacks.onDeleteItemFromCart}
      />
    </PageLayout>
  );
}

export default App;
