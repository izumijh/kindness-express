import React from "react";

// import React Bootstrap components
import Col from "react-bootstrap/Col";

// import required components
import Content from "../Content/Content";

// import css module
import classes from "./PopUpModal.module.css";

const PopUpModal = (props) => {
  return (
    <Col className={classes.wrapper} onClick={props.clicked}>
      <Content>{props.children}</Content>
    </Col>
  );
};

export default PopUpModal;
