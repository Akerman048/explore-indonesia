import React, { FC } from "react";
import s from "./GalleryBlock.module.css";
import GalleryGrid from "../GalleryGrid/GalleryGrid";
import { galleryImgs } from "../../data/galleryImgs";
import { Link } from "react-router-dom";

const GalleryBlock: FC = () => {
  return (
    <div className={s.galleryBlock}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Photo Gallery</h2>
        <p className={s.text}>
          Discover the breathtaking beauty of Indonesia through vibrant photos
          showcasing its stunning landscapes, rich culture, and unforgettable
          travel experiences. From lush jungles to serene beaches, explore the
          magic of this diverse archipelago.
        </p>
        <Link to='/destinations'>
          <GalleryGrid images={galleryImgs} amount={6} />
        </Link>
      </div>
    </div>
  );
};

export default GalleryBlock;
