import StoreModule from "../module";

class CurrentPage extends StoreModule {

  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
      currentPage: 1,
    }
  }

  setCurrentPage(page) {
    this.setState({
       ...this.getState(),
       currentPage: page,
    }, 'Изменена страница');
  }
}

export default CurrentPage;