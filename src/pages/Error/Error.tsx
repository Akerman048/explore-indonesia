import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from "./Error.module.css";
import { PiSmileySad } from "react-icons/pi";

const Error: FC = () => {
  return (
    <div className={s.error}>
      <PiSmileySad className={s.smile} />
      <span>404</span> <h3>Page not found</h3>
      <Link to='/'>
        <button className={s.button}>Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
