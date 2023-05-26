import React, { useCallback } from "react";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import "./style.css";

const Pagination = () => {

  const store = useStore();
  const select = useSelector((state) => ({
    totalCount: state.catalog.count,
    currentPage: state.currentPage.currentPage,
    itemsPerView: state.itemsPerView.itemsPerView,
  }));

  const callbacks = {
    setCurrentPage: useCallback((page) => store.actions.currentPage.setCurrentPage(page),[store]),
  };

  const totalPages = Math.ceil(select.totalCount / select.itemsPerView);

  function pageRange(leftPage, rightPage) {
    let i = leftPage;
    const range = [];
    while (i <= rightPage) {
      range.push(i);
      i += 1;
    }
    return range;
  }

  const leftPage = "left";
  const rightPage = "right";

  function fetchPageNumbers() {
    if (totalPages > 1) {
      const startPage = Math.max(2, select.currentPage - 1);
      const endPage = Math.min(totalPages - 1, select.currentPage + 1);

      let pages = pageRange(startPage, endPage);

      const hasLeftPage = startPage > 2;
      const hasRightPage = totalPages - endPage > 1;
      const pagesPerView = 4 - (pages.length + 1);

      switch (true) {
        case hasLeftPage && !hasRightPage: {
          const extraPages = pageRange(startPage - pagesPerView, startPage - 1);
          pages = [leftPage, ...extraPages, ...pages];
          break;
        }

        case !hasLeftPage && hasRightPage: {
          const extraPages = pageRange(endPage + 1, endPage + pagesPerView);
          pages = [...pages, ...extraPages, rightPage];
          break;
        }

        case hasLeftPage && hasRightPage: {
          pages = [leftPage, ...pages, rightPage];
          break;
        }
      }
      return [1, ...pages, totalPages];
    }
    return pageRange(1, totalPages);
  }

  const pages = fetchPageNumbers();

  return (
    <ul className="Pagination">
      {pages.map((page, index) => {
        if (page === leftPage)
          return (
            <li key={index} className="Pagination__item Pagination__item_dots">
              <a href={`/#${page}`}>
                <span className="Pagination__dots">...</span>
              </a>
            </li>
          );

        if (page === rightPage)
          return (
            <li key={index} className="Pagination__item Pagination__item_dots">
              <a href={`/#${page}`}>
                <span className="Pagination__dots">...</span>
              </a>
            </li>
          );

        return (
          <li
            key={index}
            className={`Pagination__item ${
              select.currentPage === page ? "Pagination__item_active" : ""
            }`}
          >
            <a href={`/#${page}`} onClick={() => callbacks.setCurrentPage(page)}>
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
