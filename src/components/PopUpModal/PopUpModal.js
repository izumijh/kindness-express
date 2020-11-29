import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import required components
import Content from "../Content/Content";

// import css module
import classes from "./PopUpModal.module.css";

const PopUpModal = (props) => {
  return (
    <Row className={classes.wrapper} onClick={props.clicked}>
      <Col>
        <Content>{props.children}</Content>
      </Col>
    </Row>
  );
};

export default PopUpModal;
