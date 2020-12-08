import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import MainMenu buttons
import Postman from "./Postman/Postman";
import Compose from "./Compose/Compose";

// import CSS modules
import classes from "./MainMenu.module.css";

const MainMenu = (props) => {
  return (
    <Row>
      <Col
        className={
          props.postmanMenuisOpen
            ? `${classes.menu} ${classes.active}`
            : `${classes.menu}`
        }
      >
        <Postman
          composeMenuisOpen={props.composeMenuisOpen}
          postmanMenuisOpen={props.postmanMenuisOpen}
          clicked={props.togglePostman}
        />
      </Col>
      <Col
        className={
          props.composeMenuisOpen
            ? `${classes.menu} ${classes.active}`
            : `${classes.menu}`
        }
      >
        <Compose
          composeMenuisOpen={props.composeMenuisOpen}
          postmanMenuisOpen={props.postmanMenuisOpen}
          clicked={props.toggleComposeMenu}
          wantToPostStory={props.wantToPostStory}
          wantToPostMessage={props.wantToPostMessage}
          startLogin={props.startLogin}
        />
      </Col>
    </Row>
  );
};

export default MainMenu;
