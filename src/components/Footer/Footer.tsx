import React, { FC } from "react";
import s from "./Footer.module.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const logoName = "/images/logoName.png";
const logoPicture = "/images/logoPicture.png";

const Footer: FC = () => {
  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.nav}>
          <div className={s.logo}>
            <Link to='/'>
              <img className={s.img} src={logoPicture} alt='logo' />
              <img className={s.img} src={logoName} alt='logo' />
            </Link>
          </div>
          <Navigation />
        </div>
        <div className={s.smmCopy}>
          <div className={s.smm}>
            <Link className={s.link} to='https://www.facebook.com/'>
              <FaFacebookF className={s.icon} />
            </Link>
            <Link className={s.link} to='https://www.linkedin.com/'>
              <FaLinkedinIn className={s.icon} />
            </Link>
            <Link className={s.link} to='https://www.linkedin.com/'>
              <FaGoogle className={s.icon} />
            </Link>
          </div>
          Copyright © 2019
        </div>
      </div>
    </div>
  );
};

export default Footer;
