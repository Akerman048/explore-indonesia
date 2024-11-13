import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from "./Articles.module.css";
import Button from "../Button/Button";
import img1 from "../../images/articlesImages/Rectangle9.png";
import img2 from "../../images/articlesImages/Rectangle10.png";

const Articles: FC = () => {
  const buttonStyles = {
    padding: "16px 40px",
    fontSize: "20px",
  };

  const bgImg1 = {
    backgroundImage: `url(${img1})`,
  };
  const bgImg2 = {
    backgroundImage: `url(${img2})`,
  };

  return (
    <div className={s.articles}>
      <div className={s.articleWrapper}>
        <div className={s.articleBg} style={bgImg1}>
          <div className={s.article}>
            <img src={img1} className={s.img} />
            <div className={s.info}>
              <h4 className={s.title}>The walkways of Indonesia spellbind</h4>
              <p className={s.text}>
                The diverse walkways of Indonesia take you on a journey through
                lush jungles, ancient temples, and vibrant villages. Each path
                reveals the nation's rich culture and breathtaking natural
                beauty, leaving travelers enchanted.
              </p>
              <Link className={s.link} to='/destinations'>
                <Button text='Larn more' style={buttonStyles}></Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={s.articleBg} style={bgImg2}>
          <div className={s.article}>
            <div className={s.info}>
              <h4 className={s.title}>
                Perfect beaches exude relaxation and fun
              </h4>
              <p className={s.text}>
                Indonesia's perfect beaches offer a blend of serene relaxation
                and exciting adventures. From soft sands to crystal-clear
                waters, they create the ultimate escape for every traveler.
              </p>
              <Link className={s.link} to='/destinations'>
                <Button style={buttonStyles} text='Larn more' />
              </Link>
            </div>
            <img src={img2} className={s.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
