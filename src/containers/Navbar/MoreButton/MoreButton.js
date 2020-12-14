import React from "react";

// import react bootstrap component
import Image from "react-bootstrap/Image";

// Import svg image
import more from "../../../assets/images/buttons/more.svg";

// import css modules
import classes from "./MoreButton.module.css";

const MoreButton = (props) => {
  return (
    <div
      className={
        props.isShown ? `${classes.active} ${classes.wrapper}` : classes.wrapper
      }
      onClick={props.clicked}
    >
      <Image src={more} alt="more" fluid />
    </div>
  );
};

export default MoreButton;
