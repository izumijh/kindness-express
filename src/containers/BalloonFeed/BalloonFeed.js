import React from "react";

// import balloons component
import BalloonLetter from "../../components/BalloonLetter/BalloonLetter";

// import css modules
import classes from "./BalloonFeed.module.css";

const BalloonFeed = (props) => {
  return (
    <>
      <BalloonLetter
        BalloonColour="#ABDAEA"
        currentDesign={0}
        onClick={props.clickedOnLetter}
      />
      <BalloonLetter
        BalloonColour="#ABDAEA"
        currentDesign={0}
        onClick={props.clickedOnLetter}
      />
      <BalloonLetter
        BalloonColour="#ABDAEA"
        currentDesign={0}
        onClick={props.clickedOnLetter}
      />
    </>
  );
};

export default BalloonFeed;
