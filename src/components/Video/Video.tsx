import React, {FC} from "react";
import s from './Video.module.css'
import ReactPlayer from "react-player";

interface VideoProps {
    videoUrl: string;
}

const Video:FC<VideoProps> = ({videoUrl}) => {
    return(<div className={s.playerWrapper}>
        <ReactPlayer className={s.reactPlayer}
        url={videoUrl}
        controls={true}
        width="100%"
        height="100%"
         />
    </div>);
};

export default Video;