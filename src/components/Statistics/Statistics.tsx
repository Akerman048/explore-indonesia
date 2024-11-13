import React, { FC } from "react";
import s from "./Statistics.module.css";

const Statistics: FC = () => {
  return (
    <div className={s.statistics}>
      <div className={s.wrapper}>
        <h2 className={s.title}>By The Numbers</h2>
        <p className={s.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo
          magna et libero.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <div className={s.items}>
          <div className={s.item}>
            <h5 className={s.numbers}>100+</h5>
            <p className={s.smallDescription}>
              Different travel ideas for every taste
            </p>
          </div>
          <div className={s.item}>
            <h5 className={s.numbers}>43,000+</h5>
            <p className={s.smallDescription}>
              High-quality realized tours during the history of existence
            </p>
          </div>
          <div className={s.item}>
            <h5 className={s.numbers}>30+</h5>
            <p className={s.smallDescription}>
              Years of successful work to satisfy all wishes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
