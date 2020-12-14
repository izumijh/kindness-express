import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Variations of Navbar
import Logo from "./Logo/Logo";
import BackButton from "./BackButton/BackButton";
import MoreButton from "./MoreButton/MoreButton";

// Import CSS module
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  console.log(props.currentLocation);
  // Show and hide navbar components depending on route name

  // Show Go Back To Homepage in These Circumstances
  let showGoBackToHomepage = false;
  if (
    props.currentLocation === "/compose" ||
    props.currentLocation === "/postman" ||
    props.currentLocation === "/letter" ||
    props.currentLocation === "/post-kind-words" ||
    props.currentLocation === "/post-a-story" ||
    props.currentLocation === "/login" ||
    props.currentLocation === "/profile"
  ) {
    showGoBackToHomepage = true;
  }

  // Show "More" Button in these circumstances
  let showMoreButton = false;
  if (
    props.currentLocation === "/letter" ||
    props.currentLocation === "/profile"
  ) {
    showMoreButton = true;
  }

  return (
    <Row
      className={
        props.currentLocation === "/"
          ? `${classes.navWrapper} ${classes.moreSpace}`
          : `${classes.navWrapper}`
      }
    >
      <Col
        xs={9}
        className={classes.logoContainer}
        style={{ padding: "3rem 1rem" }}
      >
        <Logo isShown={props.currentLocation === "/" ? true : false} />

        <BackButton
          isShown={showGoBackToHomepage}
          clicked={props.clickedBackButton}
        >
          Go back to Home
        </BackButton>

        <BackButton
          isShown={
            props.currentLocation === "/post-a-story/process" ? true : false
          }
          clicked={props.clickedBackButton}
        >
          Quit Writing
        </BackButton>
      </Col>
      <Col xs={3} style={{ padding: "3rem 1rem" }}>
        <MoreButton
          isShown={showMoreButton}
          clicked={props.clickedMoreButton}
        />
      </Col>
    </Row>
  );
};

export default Navbar;
