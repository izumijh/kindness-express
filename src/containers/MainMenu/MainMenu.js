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
      <Col
        style={
          props.postmanMenuisOpen
            ? { position: "fixed", bottom: "0" }
            : { position: "fixed", bottom: "-30vh" }
        }
      >
        <Postman
          composeMenuisOpen={props.composeMenuisOpen}
          postmanMenuisOpen={props.postmanMenuisOpen}
          clicked={props.togglePostman}
        />
      </Col>
      <Col>
        <Compose
          composeMenuisOpen={props.composeMenuisOpen}
          postmanMenuisOpen={props.postmanMenuisOpen}
          clicked={props.toggleComposeMenu}
          wantToPostStory={props.wantToPostStory}
          wantToPostMessage={props.wantToPostMessage}
        />
      </Col>
    </Row>
  );
};

export default MainMenu;
