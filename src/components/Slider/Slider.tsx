import React, { FC, useEffect, useState } from "react";
import s from "./Slider.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface SliderProps {
  images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 700) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1200) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );
  };

  const translateX = -(currentIndex * (100 / slidesToShow));

  return (
    <div className={s.slider}>
      <IoIosArrowBack className={s.button} onClick={goToPrev} />

      <div className={s.sliderWrapper}>
        <div
          className={s.sliderTrack}
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {images.map((image, index) => (
            <div className={s.slide} key={index}>
              <img src={image} alt={`slide ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <IoIosArrowForward className={s.button} onClick={goToNext} />
    </div>
  );
};

export default Slider;
