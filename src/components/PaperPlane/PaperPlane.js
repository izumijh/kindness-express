import React from "react";

// import paper plane svg image
import plane from "../../assets/images/paper-plane.svg";

// import css module
import classes from "./PaperPlane.module.css";

const PaperPlane = (props) => {
  return (
    <div className={classes.wrapper} onClick={props.clicked}>
      <img src={plane} alt="paper plane" />
    </div>
  );
};

export default PaperPlane;
