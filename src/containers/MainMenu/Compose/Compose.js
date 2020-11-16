import React from "react";

// import React Bootstrap components
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import SVG image
import icon from "../../../assets/images/compose.svg";

// import css modules
import classes from "./Compose.module.css";

const Compose = (props) => {
  return (
    <div className={classes.iconContainer}>
      <Image src={icon} alt="compose icon" />
    </div>
  );
};

export default Compose;
