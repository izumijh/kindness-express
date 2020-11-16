import React from "react";

// import CSS modules
import classes from "./ActionButton.module.css";

const ActionButton = (props) => {
  return (
    <button
      className={
        props.fullWidth
          ? `${classes.actionButton} ${classes.fullWidth}`
          : `${classes.actionButton}`
      }
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default ActionButton;
