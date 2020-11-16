import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Variations of Navbar
import Logo from "./Logo/Logo";
import BackButton from "./BackButton/BackButton";

// Import CSS module
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  console.log(props.currentLocation);
  // Show and hide navbar components depending on route name
  return (
    <Row>
      <Col
        xs={10}
        className={classes.logoContainer}
        style={{ padding: "3rem 1rem" }}
      >
        <Logo isShown={props.currentLocation === "/" ? true : false} />
        <BackButton
          isShown={props.currentLocation === "/compose" ? true : false}
          clicked={props.clickedBackButton}
        />
        <BackButton
          isShown={
            props.currentLocation === "/compose/post-a-story" ? true : false
          }
          clicked={props.clickedBackButton}
        />
      </Col>
    </Row>
  );
};

export default Navbar;
