import React from "react";

// import balloons component
import Balloon from "../../components/BalloonLetter/BalloonLetter";

// import css modules
import classes from "./BalloonFeed.module.css";

const BalloonFeed = (props) => {
  return (
    <>
      <Balloon BalloonColour="#ABDAEA" currentDesign={0} />
      <Balloon BalloonColour="#ABDAEA" currentDesign={0} />
      <Balloon BalloonColour="#ABDAEA" currentDesign={0} />
    </>
  );
};

export default BalloonFeed;
