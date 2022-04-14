import React from "react";
import MainImg from "../images/MainImg.svg";
import MainText from "../images/MainText.svg";

function Main() {
  return (
    <>
      <div className="mainDiv">
        <img src={MainImg} />
      </div>
      <div className="mainText">
        <img src={MainText} />
      </div>
      <div className="description">
        <p className="descrHeader">
          Even the all-powerful Pointing has no control about the blind texts.
        </p>
        <p className="descrParag">
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful Pointing has no control about
          the blind texts it is an almost unorthographic life One day however a
          small line of blind text by the name of Lorem Ipsum decided to leave
          for the far World of Grammar.
        </p>
        <p className="brownLink">Read the full Story</p>
      </div>
    </>
  );
}

export default Main;
