import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// to get current route
import { useLocation } from "react-router-dom";

// Import Variations of Navbar
import Logo from "./Logo/Logo";
import BackButton from "./BackButton/BackButton";

// Import CSS module
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  // Get route name
  const location = useLocation();
  console.log(location.pathname);

  // Show and hide components depending on route name
  return (
    <Row>
      <Col
        xs={10}
        className={classes.logoContainer}
        style={{ padding: "3rem 1rem" }}
      >
        <Logo isShown={location.pathname === "/" ? true : false} />
        <BackButton
          isShown={location.pathname === "/post-a-story" ? true : false}
        />
      </Col>
    </Row>
  );
};

export default Navbar;
