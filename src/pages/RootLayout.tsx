import React, { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Navigation from "../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import s from "./RootLayout.module.css";
import Burger from "../components/Burger/Burger";
import Footer from "../components/Footer/Footer";
import logoName from "../images/logo/logoName.png";
import logoPicture from "../images/logo/logoPicture.png";
import { IoIosArrowDropupCircle } from "react-icons/io";

const RootLayout: FC = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const burgerToggle = (): void => {
    setBurger((prevBurger) => !prevBurger);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(burger);
  }, [burger]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className={s.container}>
      {isVisible && (
        <div className={s.arrowUp} onClick={scrollUp}>
          <IoIosArrowDropupCircle className={s.arrowUp} />
        </div>
      )}
      <header className={s.wrapper}>
        <div className={s.logoNavWrap}>
          <div className={s.logo}>
            <Link to='/'>
              <img className={s.img} src={logoPicture} alt='logo' />
              <img className={s.img} src={logoName} alt='logo' />
            </Link>
          </div>
          {burger ? null : <Navigation />}
        </div>
        <FiMenu onClick={burgerToggle} className={s.icon} />
        {burger ? <Burger burgerToggle={burgerToggle} /> : null}
      </header>
      <main className={s.main}>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
