import React from "react";

// import Required Components
import ChatBubble from "../../../../components/ChatBubble/ChatBubble";

// import Postman and his Emotes c
import PostmanEmotes from "../PostmanEmotes/PostmanEmotes";

// import css modules
import classes from "./RenderChatBubbles.module.css";

const RenderChatBubbles = (props) => {
  return (
    <>
      <PostmanEmotes
        clicked={props.clicked}
        postmanEmote={props.postmanEmote}
      />
      {props.chat.map((c, id) => {
        return (
          <div key={c + id} className={classes.animated}>
            <ChatBubble>{c}</ChatBubble>
          </div>
        );
      })}
    </>
  );
};

export default RenderChatBubbles;
