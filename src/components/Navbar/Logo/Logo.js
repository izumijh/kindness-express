import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// Import SVG Images
import logo from "../../../assets/images/Logo.svg";

// Import CSS module
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div
      className={
        props.isShown ? `${classes.active} ${classes.wrapper}` : classes.wrapper
      }
    >
      <Image src={logo} alt="logo" fluid />
    </div>
  );
};

export default Logo;
