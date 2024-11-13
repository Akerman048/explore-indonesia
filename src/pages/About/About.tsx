import React from "react";
import s from "./About.module.css";
import aboutUsMarket from "../../images/aboutUs/aboutUsMarket.jpg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const buttonStyles = {
    padding: "18px 64px",
    fontSize: "20px",
    width: "100%",
  };

  return (
    <div className={s.about}>
      <div className={s.wrapper}>
        <div className={s.hero}>
          <h2>Make memories</h2>
        </div>
        <div className={s.content}>
          <div className={s.textBlock}>
            <h3 className={s.title}>Unforgettable travel experiences</h3>
            <p className={s.text}>
              No matter where your travels take you, GetYourGuide offers the
              best way to connect with your destination. Make memories all over
              the globe with our locally-vetted, expertly-curated experiences.
              From must-see iconic attractions to unexpected under-the-radar
              gems, we have something for everyone.
            </p>
          </div>
          <div className={s.textBlock}>
            <h3 className={s.title}>Maximize your trip</h3>
            <p className={s.text}>
              We take the stress out of trip planning. Access everything in our
              app so you can focus on enjoying the moment, not taking care of
              logistics. Explore what you want to do, then count on our flexible
              policies and 24/7, multilingual customer support whenever you
              need.
            </p>
          </div>
          <div className={s.textBlock}>
            <h3 className={s.title}>Find the best sights</h3>
            <p className={s.text}>
              Choose from over 140,000 experiences in 10,000 cities, including
              hard-to-book attractions and easy-to-miss surprises. With insights
              from like-minded travelers and millions of verified reviews,
              you’ll find the tips and insights you need to have an
              unforgettable experience.
            </p>
          </div>
          <h2 className={s.quote}>
            “The food was delicious, but learning about the neighborhood from
            our passionate guide really made this tour unforgettable.”
          </h2>
          <div className={s.imgWrap}>
            <img src={aboutUsMarket} className={s.img}></img>
          </div>
          <div className={s.textBlock}>
            <h3 className={s.title}></h3>
            <p className={s.text}></p>
          </div>
          <Link className={s.link} to='/destinations'>
            <Button style={buttonStyles} text='Start making memories' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
