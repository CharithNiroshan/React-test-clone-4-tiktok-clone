import { MusicNote } from "@material-ui/icons";
import React from "react";
import "./Videofooter.css";
import Ticker from "react-ticker";

function Videofooter(props) {
  return (
    <div className="videofooter">
      <h3>@{props.channel}</h3>
      <p>{props.description}</p>
      <div className="videofooter_ticker">
        <MusicNote className="videofooter_icon" />
        <Ticker mode="smooth">
          {({}) => {
            return (
              <>
                <h1 className="ticker_text">{props.song} </h1>
              </>
            );
          }}
        </Ticker>
      </div>
    </div>
  );
}

export default Videofooter;
