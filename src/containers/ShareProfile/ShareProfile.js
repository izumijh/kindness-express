import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Font Awesome Package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import solid icons
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

// import required components
import Content from "../../components/Content/Content";
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./ShareProfile.module.css";

const ShareProfile = (props) => {
  return (
    <Row>
      <Col xs={12} className={classes.wrapper}>
        <Content>
          <p>Show people how you're doing!</p>

          <ActionButton white fullWidth>
            <FontAwesomeIcon icon={faShareAlt} />
            Share My Profile to...
          </ActionButton>
        </Content>
      </Col>
    </Row>
  );
};

export default ShareProfile;
