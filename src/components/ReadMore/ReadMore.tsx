import React, { FC, useEffect, useState } from "react";
import s from "./ReadMore.module.css";

interface ReadMoreProps {
  text: string;
}

const ReadMore: FC<ReadMoreProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const previewText = text.slice(0, 30) + "...";
  return (
    <div className={s.wrapper}>
      <p>{isMobile && !isExpanded ? previewText : text}</p>
      {isMobile && (
        <button className={s.button} onClick={toggleReadMore}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
