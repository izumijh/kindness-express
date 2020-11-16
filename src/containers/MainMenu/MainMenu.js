import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";

// import MainMenu buttons
import Postman from "./Postman/Postman";
import Compose from "./Compose/Compose";

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
