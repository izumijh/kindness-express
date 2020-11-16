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
  return (
    <>
      <div
        className={
          props.composeMenuisOpen
            ? `${classes.iconContainer} ${classes.active}`
            : `${classes.iconContainer}`
        }
        onClick={props.clicked}
      >
        <Image src={icon} alt="compose icon" />
      </div>
      <div className={props.composeMenuisOpen ? classes.active : null}>
        <div className={classes.chatBubble}>
          <ChatBubble>What should I do today?</ChatBubble>
        </div>
        <div className={classes.composeOptions}>
          <ActionButton>Post a Story</ActionButton>
          <ActionButton>Post Kind Words</ActionButton>
        </div>
      </div>
    </>
  );
};

export default Compose;
