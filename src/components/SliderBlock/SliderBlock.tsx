import React, { FC } from "react";

import s from "./SliderBlock.module.css";
import Slider from "../Slider/Slider";
import { sliderImgs } from "../../data/sliderImgs";
import Statistics from "../Statistics/Statistics";

const SliderBlock: FC = () => {
  return (
    <div className={s.sliderBlock}>
      <h2 className={s.title}>Explore Our Secrets</h2>
      
        <Slider images={sliderImgs} />
      <Statistics></Statistics>
    </div>
  );
};

export default SliderBlock;
