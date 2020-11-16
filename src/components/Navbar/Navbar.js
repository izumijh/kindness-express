import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import SVG Images
import logo from "../../assets/images/Logo.svg";

// Import CSS module
import classes from "./Navbar.module.css";

// Different prop values passed to navbar, different appearance and function....
//  each form is a component; use switch case javascript

class Navbar extends Component {
  render() {
    return (
      <Row>
        <Col xs={10} className={classes.logoContainer}>
          <Image src={logo} alt="logo" fluid />
        </Col>
      </Row>
    );
  }
}

export default Navbar;
