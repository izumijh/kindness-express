import React from "react";

// import css modules
import classes from "./Colours.module.css";

const Colours = (props) => {
  const colours = ["#F8B67B", "#ABDAEA", "#8BD9C4", "#F8E48C", "#F4C3E5"];

  return (
    <>
      {colours.map((colour) => (
        <span
          className={classes.choice}
          key={colour}
          // grab colours from array and turn them into choices
          // find currentColour and outline it
          style={
            props.currentColour === colour
              ? { backgroundColor: `${colour}`, border: "3px solid #547394" }
              : { backgroundColor: `${colour}`, opacity: "0.5" }
          }
          // clicking on colour sets the colour for balloon in parent JSX
          onClick={() => props.setColour(colour)}
        ></span>
      ))}
    </>
  );
};

export default Colours;
