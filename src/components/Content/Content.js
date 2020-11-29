import React from "react";

// Import CSS module
import classes from "./Content.module.css";

// function: to wrap static content
const Content = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      {props.children}
    </div>
  );
};

export default Content;
