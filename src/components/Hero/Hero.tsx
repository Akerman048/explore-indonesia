import React, { FC } from "react";
import s from "./Hero.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Video from "../Video/Video";
import { heroVideo } from "../../data/links";

const Hero: FC = () => {
  const buttonStyles = {
    padding: "18px 64px",
    fontSize: "20px",
  };
  return (
    <div className={s.wrapper}>
      <div className={s.mainInfo}>
        <h1 className={s.title}>explore Indonesia</h1>
        <Link className={s.link} to='/destinations'>
          <Button style={buttonStyles} text='Start travelling' />
        </Link>
      </div>
      <div className={s.contentWrap}>
        <div className={s.content}>
          <div className={s.item}>
            <span>01</span>
            <h3>Bali Bliss Escape</h3>
            <p>
              {" "}
              Dive into the island's vibrant culture, unwind with wellness
              retreats, and explore the rich history and art.
            </p>
          </div>
          <div className={s.item}>
            <span>02</span>
            <h3>Mystical Borobudur Journey</h3>
            <p>
              Experience the awe of the world's largest Buddhist temple,
              Borobudur.
            </p>
          </div>
          <div className={s.item}>
            <span>03</span>
            <h3>Komodo Island Explorer</h3>
            <p>
              Set sail through the Komodo National Park, home of the legendary
              Komodo dragon.
            </p>
          </div>
        </div>

        <div className={s.video}>
          <Video videoUrl={heroVideo} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
