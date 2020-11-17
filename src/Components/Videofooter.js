import { MusicNote } from "@material-ui/icons";
import React from "react";
import "./Videofooter.css";
import Ticker from "react-ticker";

function Videofooter(props) {
  return (
    <div className="videofooter">
      <div className="videofooter_text">
        <h3>@{props.channel}</h3>
        <p>{props.description}</p>
        <div className="videofooter_ticker">
          <MusicNote className="videofooter_icon" />
          <Ticker mode="smooth" className="videofooter_innerticker">
            {({ index }) => {
              <>{props.song}</>;
            }}
          </Ticker>
        </div>
      </div>
      <img className="videofooter_record" />
    </div>
  );
}

export default Videofooter;
