import React, { FC } from "react";
import s from "./Destination.module.css";

import { destinations } from "../../data/destinations";
import TourCards from "../../components/TourCard/TourCards";

const Destination: FC = () => {
  return (
    <div className={s.destination}>
      <div className={s.wrapper}>
        <div className={s.grid}>
          <TourCards tours={destinations} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
