import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import svg hint overlays
import top from "../../assets/images/tutorial-overlay/top.svg";
import middle from "../../assets/images/tutorial-overlay/middle.svg";
import bottom from "../../assets/images/tutorial-overlay/bottom.svg";
import bottomS from "../../assets/images/tutorial-overlay/bottom-s.svg";

// import css modules
import classes from "./TutorialOverlay.module.css";

const TutorialOverlay = (props) => {
  return (
    <Row
      className={
        props.activateIf
          ? `${classes.background} ${classes.active}`
          : classes.background
      }
      onClick={props.hideTutorial}
    >
      <Col xs={12} className={classes.top}>
        <img src={top} alt="navigation menu at top left" />
      </Col>
      <Col xs={12} className={classes.middle}>
        <img
          src={middle}
          alt="kind stories from your location at the middle of screen"
        />
      </Col>
      <Col xs={12} className={classes.bottom}>
        <img
          src={bottom}
          alt="chatbot at the left, compose feature at the right"
        />
        <img
          src={bottomS}
          alt="kind stories from your location at the middle of screen"
        />
      </Col>
    </Row>
  );
};

export default TutorialOverlay;
