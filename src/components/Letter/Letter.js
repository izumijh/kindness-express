import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

//import required images
import stamp from "../../assets/images/stamp.svg";

// import css modules
import classes from "./Letter.module.css";

const Letter = (props) => {
  // Render blue border if props.alt is true
  const letterBorder = props.alt
    ? `${classes.wrapper} ${classes.alt}`
    : classes.wrapper;

  return (
    <div className={letterBorder}>
      {/* Don't render stamp if props.alt is true */}
      {props.alt ? null : (
        <div style={{ textAlign: "right", marginBottom: "2rem" }}>
          <Image src={stamp} style={{ width: "47%" }} />
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Letter;
