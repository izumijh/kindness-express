import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import MainMenu buttons
import Postman from "./Postman/Postman";
import Compose from "./Compose/Compose";

const MainMenu = (props) => {
  return (
    <Row>
      <Col>
        <Postman composeMenuisOpen={props.composeMenuisOpen} />
      </Col>
      <Col>
        <Compose
          composeMenuisOpen={props.composeMenuisOpen}
          clicked={props.toggleComposeMenu}
        />
      </Col>
    </Row>
  );
};

export default MainMenu;
