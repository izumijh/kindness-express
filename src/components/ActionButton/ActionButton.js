import React from "react";

// import CSS modules
import classes from "./ActionButton.module.css";

const ActionButton = (props) => {
  // If "white" is passed as a prop, the resulting button will be white
  let color = { backgroundColor: "#FFF89B" };
  if (props.white) {
    color = { backgroundColor: "#F4F4F4" };
  }

  // If "fullWidth" is passed as a prop, resulting button will take up 80% of container width
  // If "forSubmit" is passed as a prop, resulting button will be a "submit" type button
  return (
    <button
      className={
        props.fullWidth
          ? `${classes.actionButton} ${classes.fullWidth}`
          : `${classes.actionButton}`
      }
      onClick={props.clicked}
      style={color}
      type={props.forSubmit ? "submit" : "button"}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
