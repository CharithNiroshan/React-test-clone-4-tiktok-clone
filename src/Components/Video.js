import React, { useRef, useState } from "react";
import "./Video.css";
import Videofooter from "./Videofooter";
import Videosidebar from "./Videosidebar";

function Video(props) {
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
        className="video_player"
        src={props.url}
        loop
        onClick={handleClick}
        ref={videoRef}
      ></video>
      <Videofooter
        channel={props.channel}
        description={props.description}
        song={props.song}
      />
      <Videosidebar
        likes={props.likes}
        shares={props.shares}
        comments={props.comments}
      />
    </div>
  );
}

export default Video;
