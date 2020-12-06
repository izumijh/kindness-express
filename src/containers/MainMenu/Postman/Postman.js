import React, { useState, useEffect } from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// import SVG image
import icon from "../../../assets/images/postman-default.svg";
import bubble from "../../../assets/images/postman-chatbubble.svg";

// import Required Components
import UserChoices from "./UserChoices/UserChoices";
import RenderChatBubbles from "./RenderChatBubbles/RenderChatBubbles";

// Import dialoguesList
import * as dialogues from "./DialoguesList/DialoguesList";

// import css modules
import classes from "./Postman.module.css";

const Postman = (props) => {
  const [pageInTopic, nextPage] = useState(0);
  const [currentTopic, nextTopic] = useState(dialogues.newbieIntro);

  // Rendering the current chatbot topic
  let postmanEmote = currentTopic[pageInTopic].postmanEmote;
  let chatRendered = currentTopic[pageInTopic].chat;
  let responsesRendered = currentTopic[pageInTopic].response;
  let previousResponse = currentTopic[pageInTopic].previousResponse
    ? currentTopic[pageInTopic].previousResponse
    : null;

  // Check if old user
  let isOldUser = sessionStorage.getItem("doneTutorial");

  // Component did mount
  useEffect(() => {
    // Show different dialogue if it's a new user
    if (isOldUser) {
      nextPage(0);
      nextTopic(dialogues["defaultChat"]);
    }
  }, [isOldUser]);

  const userRespondedHandler = (response) => {
    // lets say user selected response number 0
    // what is the next action? for response number 0
    const action = currentTopic[pageInTopic].responseHandler[response]; //returns an action name

    // check if a topic change is required
    if (action === "next") {
      nextPage(pageInTopic + 1);
      nextTopic(currentTopic);
    } else if (action === "quit") {
      sessionStorage.setItem("doneTutorial", "true");
      nextPage(0);
      nextTopic(dialogues["defaultChat"]);
      props.clicked();
    } else {
      // if not required, we change topic => to our response topic
      nextPage(0);
      nextTopic(dialogues[action]);
    }
  };

  const undoResponseHandler = () => {
    // check if pageinTopic is 0
    if (pageInTopic === 0) {
      // if yes, go back to default chat
      nextPage(0);
      nextTopic(dialogues["defaultChat"]);
    } else {
      // if pageinTopic is not 0
      // go back 1 page
      nextPage(pageInTopic - 1);
      nextTopic(currentTopic);
    }
  };

  // determine if the postman icon should be moved upwards
  let displayStatus = `${classes.iconContainer}`;
  if (props.composeMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.inactive}`;
  }
  if (props.postmanMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.active}`;
  }

  return (
    <>
      <button
        key={previousResponse}
        className={
          previousResponse && props.postmanMenuisOpen
            ? `${classes.undoButton} ${classes.active}`
            : `${classes.undoButton}`
        }
        onClick={undoResponseHandler}
      >
        {previousResponse}
      </button>

      {/* Icon Container, Hidden When Menu is Open */}
      <div className={displayStatus} onClick={props.clicked}>
        <Image src={icon} alt="postman icon" />
        <Image
          src={bubble}
          alt="postman icon"
          className={
            isOldUser
              ? `${classes.notifBubble}`
              : `${classes.notifBubble} ${classes.active}`
          }
        />
      </div>

      {/* Show This Menu when Toggled */}
      <div
        className={
          props.postmanMenuisOpen
            ? `${classes.chatWrapper} ${classes.active}`
            : classes.chatWrapper
        }
      >
        <RenderChatBubbles
          chat={chatRendered}
          postmanEmote={postmanEmote}
          // clicked on postman face
          clicked={props.clicked}
        />
        <div className={classes.options}>
          <UserChoices
            response={responsesRendered}
            userRespondedWith={userRespondedHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Postman;
