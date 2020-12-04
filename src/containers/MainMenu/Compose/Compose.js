import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// import SVG image
import icon from "../../../assets/images/compose.svg";

// import ActionButtons and ChatBubbles
import ActionButton from "../../../components/ActionButton/ActionButton";
import ChatBubble from "../../../components/ChatBubble/ChatBubble";

// import css modules
import classes from "./Compose.module.css";

const Compose = (props) => {
  let displayStatus = `${classes.iconContainer}`;

  if (props.composeMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.active}`;
  }
  if (props.postmanMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.inactive}`;
  }

  return (
    <>
      <div className={displayStatus} onClick={props.clicked}>
        <Image src={icon} alt="compose icon" />
      </div>
      <div className={props.composeMenuisOpen ? classes.active : null}>
        <div className={classes.chatBubble}>
          <ChatBubble>What should I do today?</ChatBubble>
        </div>
        <div className={classes.composeOptions}>
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

export default Compose;
