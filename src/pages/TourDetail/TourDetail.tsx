import React, { FC } from "react";
import s from "./TourDetail.module.css";
import { Tour } from "../../types/Tour";
import Button from "../../components/Button/Button";
import { useLoaderData } from "react-router-dom";

const buttonStyles = {
  padding: "10px 22px",
  fontSize: "18px",
};

const TourDetail: FC = () => {
  const tour = useLoaderData() as Tour | null;

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className={s.tourCardWrap}>
      <div className={s.tourContent} key={tour.id}>
        <div className={s.tourCard}>
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
            <Button style={buttonStyles} text='Book now' />
          </div>
        </div>
        <div className={s.description}>{tour.description}</div>
      </div>
    </div>
  );
};

export default TourDetail;
