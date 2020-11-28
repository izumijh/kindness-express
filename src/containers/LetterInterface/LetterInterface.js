import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import required components
import Letter from "../../components/Letter/Letter";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import css modules
import classes from "./LetterInterface.module.css";

const LetterInterface = (props) => {
  return (
    <>
      <TopSpacing />
      <Row>
        <Col className={classes.wrapper}>
          <Letter>
            <p>
              Dear stranger, I hope this story will make you feel that being
              kind is great!
            </p>
            <p>
              I was heading to my car today and an aunty walked up to me asking
              whether I have any parking coupons to sell her. ( She doesn’t know
              how to use a smartphone to pay for parking. )
            </p>
            <p>
              I found extras in my car, and I gave her one. She was happy and
              wanted to pay me back, but I refused. It feels great to be able to
              help someone out!
            </p>
          </Letter>
        </Col>
      </Row>
    </>
  );
};

export default LetterInterface;
