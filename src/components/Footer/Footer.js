import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";

// import css modules
import classes from "./Footer.module.css";

class Footer extends Component {
  render() {
    return <Row className={classes.footerContainer}></Row>;
  }
}

export default Footer;
