import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// Import SVG Images
import back from "../../../assets/images/Back.svg";

// Import CSS module
import classes from "./BackButton.module.css";

const Navbar = (props) => {
  return (
    <div
      style={{ padding: "1rem .5rem" }}
      className={
        props.isShown ? `${classes.active} ${classes.wrapper}` : classes.wrapper
      }
    >
      <Image src={back} alt="back button" />
      <p className={classes.text}> Go back to home </p>
    </div>
  );
};

export default Navbar;
