import React from "react";
import GalleryGrid from "../../components/GalleryGrid/GalleryGrid";
import { galleryImgs } from "../../data/galleryImgs";
import s from "./Gallery.module.css";

const Gallery: React.FC = () => {
  return (
    <div className={s.gallery}>
      <GalleryGrid
        images={galleryImgs}
        amount={Number(`${galleryImgs.length - 1}`)}
      />
    </div>
  );
};

export default Gallery;
