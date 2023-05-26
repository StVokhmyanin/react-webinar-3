import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ItemLink({title, link}) {
  return (
    <Link to={`/goods/${link}`} className="Item-link">
      {title}
    </Link>
  );
}

export default ItemLink;
