import React, { FC } from "react";
import s from "./GettingThere.module.css";
import Video from "../Video/Video";
import { gettingTherevideo } from "../../data/links";
import ReadMore from "../ReadMore/ReadMore";

const text1 = `Secure your journey to Indonesia with ease! Find the best options and prepare for an unforgettable escape to stunning landscapes and vibrant culture.`;

const text2 = `Choose your perfect hotel in Indonesia and enjoy a stay that suits your style. From luxury resorts to cozy retreats, we've got the ideal spot for your dream getaway!`;

const text3 = `Set off on your next great adventure and immerse yourself in the beauty of Indonesia. Discover hidden gems, experience local culture, and make memories that will last a lifetime!`;

const GettingThere: FC = () => {
  return (
    <div className={s.gettingThere}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Getting there</h2>
        <div className={s.contentWrapper}>
          <div className={`${s.firstStep} ${s.item}`}>
            <h3 className={s.stepTitle}>Bookings your flights</h3>
            <p className={s.stepText}>
              <ReadMore text={text1} />
            </p>
          </div>
          <div className={`${s.secondStep} ${s.item}`}>
            {" "}
            <h3 className={s.stepTitle}>Choosing your hotel</h3>
            <p className={s.stepText}>
              <ReadMore text={text2} />
            </p>
            <div className={s.videoBlock}>
              <div className={s.video}>
                <Video videoUrl={gettingTherevideo} />
              </div>
              <div className={s.videoContent}>
                <h4 className={s.videotitle}>Travelling there</h4>
                <p className={s.videoText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus dapibus mauris in lectus tempus, eget tincidunt.
                </p>
              </div>
            </div>
          </div>
          <div className={`${s.thirdStep} ${s.item}`}>
            {" "}
            <h3 className={s.stepTitle}>Planning your experiences</h3>
            <p className={s.stepText}>
              <ReadMore text={text3} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingThere;
