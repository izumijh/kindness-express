import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import ActionButton
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./NextBackButtons.module.css";

const NextBackButtons = (props) => {
  // can pass next={text} and back={text} props, to change the text in the button
  
  return (
    <Row className={classes.container}>
      <Col className="d-flex justify-content-between">
        <ActionButton white clicked={props.goBack}>
          {" "}
          {props.back ? props.back : `Back`}{" "}
        </ActionButton>
        <ActionButton forSubmit clicked={props.nextStep}>
          {" "}
          {props.next ? props.next : `Next`}{" "}
        </ActionButton>
      </Col>
    </Row>
  );
};

export default NextBackButtons;
