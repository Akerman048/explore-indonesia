import React, { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Navigation from "../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import s from "./RootLayout.module.css";
import Burger from "../components/Burger/Burger";
import Footer from "../components/Footer/Footer";
import logoName from "../images/logo/logoName.png";
import logoPicture from "../images/logo/logoPicture.png"



const RootLayout: FC = () => {
  const [burger, setBurger] = useState<boolean>(false);

  const burgerToggle = (): void => {
    setBurger((prevBurger) => !prevBurger);
  };

  useEffect(() => {
    console.log(burger);
  }, [burger]);
  return (
    <div className={s.container}>
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
