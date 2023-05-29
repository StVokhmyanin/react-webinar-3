import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import useLanguage from "../../store/use-language";
import { mainLink } from "../../data/language";
import "./style.css";

function NavMenu() {
  const links = [
    {
      title: useLanguage(mainLink),
      link: "/",
    },
  ];

  return (
    <ul className="nav-menu">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <NavLink to={link.link} className="nav-menu__link">
              {link.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(NavMenu);
