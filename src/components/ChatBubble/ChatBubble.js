import React from "react";

// import CSS modules
import classes from "./ChatBubble.module.css";

const ChatBubble = (props) => {
  return <span className={classes.chatBubble}>{props.children}</span>;
};

export default ChatBubble;
