import React, { FC } from "react";
import s from "./Map.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Map: FC = () => {
  const buttonStyles = {
    padding: "18px 64px",
    fontSize: "20px",
  };
  return (
    <div className={s.map}>
      <div className={s.content}>
        <h2 className={s.title}>Indonesia Tours & Itineraries</h2>
        <p className={s.text}>
          Experience ✨some of Indonesia's  highlights with a carefully crafted
          kimkim itinerary. Enjoy the highlights of Bali 🌅over eight days,
          exploring the culture, countryside, and coastline of the "Island of
          the Gods"🏝 as you drive through rice fields, temples, villages, and the
          Monkey Forest🐒, and concluding your trip on the beach⛱. If you have more
          time, embark on the three-week adventure of Sumatra, Java, and Bali,
          beginning with a jungle trek where you'll spot rare orangutans, visit
          ancient Buddhist temples, climb active volcanoes🌋, and raft down the
          Ayung River🚣‍♂️. You can also experience the best of Bali over 10 days,
          where you can experience Balinese nature and culture, such as hiking🧗🏼‍♀️
          around rice terraces, cycling through villages, visiting the region's
          famous temples, and exploring beaches, boat cruises, and snorkeling🌞.
        </p>
        <Link className={s.link}  to='/destinations'>
          <Button style={buttonStyles} text='Learn More' />
        </Link>
      </div>
    </div>
  );
};

export default Map;
