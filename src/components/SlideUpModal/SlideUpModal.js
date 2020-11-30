import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import CSS module
import classes from "./SlideUpModal.module.css";

// function: to wrap slide up contents
const SlideUpModal = (props) => {
  return (
    <Row>
      <Col
        className={
          props.activateIf
            ? `${classes.wrapper} ${classes.active}`
            : `${classes.wrapper}`
        }
      >
        {props.children}
      </Col>
      <Col
        className={
          props.activateIf
            ? `${classes.container} ${classes.active}`
            : `${classes.container}`
        }
        onClick={props.clickedExit}
      ></Col>
    </Row>
  );
};

export default SlideUpModal;
