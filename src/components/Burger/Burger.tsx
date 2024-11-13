import React, { FC } from "react";
import { FiX } from "react-icons/fi";
import s from "./Burger.module.css";
import Navigation from "../Navigation/Navigation";

interface BurgerProps{
    burgerToggle: () => void;
}

const navigationStyles: React.CSSProperties = {
  display: 'flex', 
  flexDirection: 'column',
};

const Burger: FC<BurgerProps> = ({burgerToggle}) => {
  return (
    <div className={s.burger}>
      <FiX onClick={burgerToggle} className={s.closeBurger} />
      <Navigation burgerToggle={burgerToggle} style={navigationStyles}/>
    </div>
  );
};

export default Burger;
