import React, { useRef, useState } from "react";
import "./Video.css";
import Videofooter from "./Videofooter";
import Videosidebar from "./Videosidebar";

//install react-ticker
//npm install react-ticker

function Video() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        src=""
        ref={videoRef}
        className="video_player"
        loop=""
        onClick={handleClick}
      />
      <Videofooter />
      <Videosidebar />
    </div>
  );
}

export default Video;
