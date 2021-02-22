import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";

// import css modules
import classes from "./Footer.module.css";

class Footer extends Component {
  render() {
    return <Row className={this.props.currentLocation === "/" || this.props.currentLocation === "/postman" || this.props.currentLocation === "/compose" ? `${classes.footerContainer} ${classes.fadeIn}` : `${classes.footerContainer} ${classes.active}`}></Row>;
  }
}

export default Footer;
