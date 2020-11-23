import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import ActionButton
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./NextBackButtons.module.css";

const NextBackButtons = (props) => {
  return (
    <Row className={classes.container}>
      <Col className="d-flex justify-content-between">
        <ActionButton white clicked={props.goBack}> Back </ActionButton>
        <ActionButton forSubmit clicked={props.nextStep}> Next </ActionButton>
      </Col>
    </Row>
  );
};

export default NextBackButtons;
