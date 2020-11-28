import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

//import required images
import stamp from "../../assets/images/stamp.svg";

// import css modules
import classes from "./Letter.module.css";

const Letter = (props) => {
  return (
    <div className={classes.wrapper}>
      <div style={{ textAlign: "right", marginBottom: "1rem" }}>
        <Image src={stamp} style={{ width: "50%" }} />
      </div>
      {props.children}
    </div>
  );
};

export default Letter;
