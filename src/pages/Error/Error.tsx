import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from "./Error.module.css";

const Error: FC = () => {
  return (
    <div className={s.error}>
      404 Not Found
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Error;
