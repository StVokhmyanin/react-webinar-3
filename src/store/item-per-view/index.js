import StoreModule from "../module";

class ItemsPerView extends StoreModule {

  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
      itemsPerView: 10
    }
  }

  setItemsPerView(itemsPerView) {
    this.setState({
      ... this.getState(),
      itemsPerView: itemsPerView
    }, 'Изменено количество отображаемых товаров на странице')
  }
}

export default ItemsPerView;