import React, { FC } from "react";
import s from "./Videos.module.css";
import Video from "../Video/Video";
import {
  videoBlockMainVideo,
  videoBlockSmallVideo1,
  videoBlockSmallVideo2,
} from "../../data/links";

const Videos: FC = () => {
  return (
    <div className={s.videos}>
      <div className={s.wrapper}>
        <h3 className={s.title}>
          Live a life like you wouldn’t imagine, experience a life you wouldn’t
          expect.
        </h3>
        <div className={s.mainVideo}>
          <Video videoUrl={videoBlockMainVideo} />
        </div>
        <div className={s.items}>
          <div className={s.item}>
            <div className={s.smallVideo}>
              <Video videoUrl={videoBlockSmallVideo2} />
            </div>
            <div className={s.infoWrapper}>
              <h5 className={s.itemTitle}>In The Country</h5>
              <p className={s.itemText}>
                Is a peaceful escape into the heart of nature, where rolling
                hills and serene landscapes invite tranquility. Enjoy the
                simplicity of rural life, with scenic views and the beauty of
                untouched wilderness
              </p>
            </div>
          </div>
          <div className={s.item}>
            <div className={s.smallVideo}>
              <Video videoUrl={videoBlockSmallVideo1} />
            </div>
            <div className={s.infoWrapper}>
              <h5 className={s.itemTitle}>In The City</h5>
              <p className={s.itemText}>
                Is a vibrant journey through bustling streets, towering
                skyscrapers, and dynamic culture. Experience the fast pace of
                urban life, where innovation and excitement pulse through every
                corner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
