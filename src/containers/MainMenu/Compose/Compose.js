import React from "react";

import { withRouter } from "react-router-dom";

// import React Bootstrap components
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import SVG image
import icon from "../../../assets/images/compose.svg";

// import css modules
import classes from "./Compose.module.css";

const Compose = (props) => {
  return (
    <div
      className={classes.iconContainer}
      onClick={() => props.history.push("post-a-story")}
    >
      <Image src={icon} alt="compose icon" />
    </div>
  );
};

export default withRouter(Compose);
