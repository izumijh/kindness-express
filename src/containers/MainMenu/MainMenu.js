import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";

// import MainMenu buttons
import Postman from "./Postman/Postman";
import Compose from "./Compose/Compose";

// import css modules
import classes from "./MainMenu.module.css";

class MainMenu extends Component {
  state = {};

  render() {
    return (
      <>
        <Postman />
        <Compose />
      </>
    );
  }
}

export default MainMenu;
