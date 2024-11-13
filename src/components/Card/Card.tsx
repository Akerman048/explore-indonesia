import React, { FC } from "react";
import s from "./Card.module.css";
import { Tour } from "../../types/Tour";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';

interface TourProps {
  tour: Tour;
  id: number;
}

const buttonStyles = {
  padding: "10px 22px",
  fontSize: "18px",
};

const Card: FC<TourProps> = ({ tour, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destinations/${tour.id}`);
  };

  return (
    <div className={s.tourCardWrap}>
      <div className={s.tourCard} key={id}>
        <div className={s.imgWrap}>
          {" "}
          <img className={s.img} src={tour.image} />
        </div>
        <div className={s.info}>
          <span className={s.duration}>{tour.duration}</span>
          <h4 className={s.tripTitle}> {tour.tripTitle}</h4>
          <div className={s.priceWrap}>
            € <span className={s.price}>{tour.price}</span> / per person
          </div>
        </div>
        <div onClick={handleClick}>
        <Button style={buttonStyles} text='View itinerary' /></div>
      </div>
    </div>
  );
};

export default Card;
