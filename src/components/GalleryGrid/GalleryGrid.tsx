import React, { FC } from "react";
import s from "./GalleryGrid.module.css";

interface GalleryGridProps {
  images: string[];
  amount: number;
}
const GalleryGrid: FC<GalleryGridProps> = ({ images, amount }) => {
  return (
    <div className={s.GalleryGrid}>
      <div className={s.wrapper}>
        {images.slice(0, amount).map((image, index) => (
          <div className={s.itemContainer}>
            <img className={s.img} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
