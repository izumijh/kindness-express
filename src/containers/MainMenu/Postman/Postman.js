import React from "react";

// import React Bootstrap components
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import SVG image
import icon from "../../../assets/images/postman-default.svg";

// import css modules
import classes from "./Postman.module.css";

const Postman = (props) => {
  return (
    <div className={classes.iconContainer}>
      <Image src={icon} alt="postman icon" />
    </div>
  );
};

export default Postman;
