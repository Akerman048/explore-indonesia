import React, { FC } from "react";
import s from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Articles from "../../components/Articles/Articles";
import SliderBlock from "../../components/SliderBlock/SliderBlock";
import Map from "../../components/Map/Map";
import Videos from "../../components/Videos/Videos";
import GalleryBlock from "../../components/GalleryBlock/GalleryBlock";
import GettingThere from "../../components/GettingThere/GettingThere";

const Home: FC = () => {
  return (
    <div className={s.wrapper}>
      <Hero></Hero>
      <Articles></Articles>
      <SliderBlock />
      <Map />
      <Videos />
      <GalleryBlock></GalleryBlock>
      <GettingThere />
    </div>
  );
};

export default Home;
