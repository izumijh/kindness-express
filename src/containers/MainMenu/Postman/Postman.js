import React from "react";

// import React Bootstrap components
// import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import SVG image
import icon from "../../../assets/images/postman-default.svg";

// import ActionButtons and ChatBubbles
import ActionButton from "../../../components/ActionButton/ActionButton";
import ChatBubble from "../../../components/ChatBubble/ChatBubble";

// import css modules
import classes from "./Postman.module.css";

const Postman = (props) => {
  let displayStatus = `${classes.iconContainer}`;

  if (props.composeMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.inactive}`;
  }
  if (props.postmanMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.active}`;
  }

  return (
    <>
      <div className={displayStatus} onClick={props.clicked}>
        <Image src={icon} alt="postman icon" />
      </div>

      <div className={props.postmanMenuisOpen ? classes.active : null}>
        <div className={classes.chatBubble}>
          <ChatBubble>What should I do today?</ChatBubble>
        </div>
        <div className={classes.postmanOptions}>
          <ActionButton clicked={props.wantToPostStory}>
            Post a Story
          </ActionButton>
          <ActionButton clicked={props.wantToPostMessage}>
            Post Kind Words
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default Postman;
