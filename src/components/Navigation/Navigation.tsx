import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { links } from "../../data/links";
import s from "./Navigation.module.css";

interface NavigationProps {
  style?: React.CSSProperties;
  burgerToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ style, burgerToggle }) => {
  return (
    <nav className={s.navigation}>
      <ul style={style} className={s.links}>
        {links.map((link) => (
          <li key={link.url}>
            <Link onClick={burgerToggle} className={s.link} to={link.url}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
