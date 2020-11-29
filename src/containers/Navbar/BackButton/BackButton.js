import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// Import SVG Images
import back from "../../../assets/images/Back.svg";

// Import CSS module
import classes from "./BackButton.module.css";

const BackButton = (props) => {
  return (
    <div
      onClick={props.clicked}
      style={{ padding: "1rem .5rem" }}
      className={
        props.isShown ? `${classes.active} ${classes.wrapper}` : classes.wrapper
      }
    >
      <Image src={back} alt="back button" />
      <p className={classes.text}> {props.children} </p>
    </div>
  );
};

export default BackButton;
