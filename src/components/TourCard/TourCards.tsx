import React, { FC } from "react";
import s from "./TourCards.module.css";
import { Tour } from "../../types/Tour";
import Card from "../Card/Card";

interface TourListProps {
  tours: Tour[];
}

const TourCards: FC<TourListProps> = ({ tours }) => {
  return (
    <div className={s.tourCardWrap}>
      {tours.map((tour, id) => (
        <Card tour={tour} id={id} key={id} />
      ))}
    </div>
  );
};

export default TourCards;
