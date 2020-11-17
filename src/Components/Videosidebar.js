import React, { useState } from "react";
import "./Videosidebar.css";
import { Chat, Favorite, FavoriteBorder, Share } from "@material-ui/icons";

function Videosidebar(props) {
  const [like, setlike] = useState(false);

  return (
    <div className="video_sidebar">
      <div className="sidebar_button">
        {like ? (
          <Favorite fontSize="large" onclick={(e) => setlike(false)} />
        ) : (
          <FavoriteBorder fontSize="large" onclick={(e) => setlike(true)} />
        )}
        <p>{like ? props.likes + 1 : props.likes}</p>
      </div>
      <div className="sidebar_button">
        <Chat fontSize="large" />
        <p>{props.comments}</p>
      </div>
      <div className="sidebar_button">
        <Share fontSize="large" />
        <p>{props.shares}</p>
      </div>
    </div>
  );
}

export default Videosidebar;
