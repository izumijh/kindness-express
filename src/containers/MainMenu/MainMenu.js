import React, { Component } from "react";

import { withRouter } from "react-router-dom";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import MainMenu buttons
import Postman from "./Postman/Postman";
import Compose from "./Compose/Compose";

class MainMenu extends Component {
  state = {
    composeMenuisOpen: false,
  };

  openComposeMenuHandler = () => {
    if (this.state.composeMenuisOpen) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/compose");
    }
    this.setState({ composeMenuisOpen: !this.state.composeMenuisOpen });
  };

  render() {
    return (
      <Row>
        <Col>
          <Postman composeMenuisOpen={this.state.composeMenuisOpen} />
        </Col>
        <Col>
          <Compose
            composeMenuisOpen={this.state.composeMenuisOpen}
            clicked={this.openComposeMenuHandler}
          />
        </Col>
      </Row>
    );
  }
}

export default withRouter(MainMenu);
