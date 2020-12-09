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
import * as registered from "./DialoguesList/registeredDialoguesList";

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
  let isRegisteredUser = sessionStorage.getItem("registeredUser");
  let isNewlyRegisteredUser = sessionStorage.getItem("isNewlyRegisteredUser");

  // Component did mount
  useEffect(() => {
    console.log("running useEffect for Determining Chatbot Dialogue");
    // Show different dialogue depending on circumstances

    if (isOldUser) {
      console.log("default to guest chat");

      nextPage(0);
      nextTopic(dialogues["defaultChat"]);
      if (isRegisteredUser) {
        console.log("isRegisteredUser!");

        nextPage(0);
        nextTopic(registered["newDefaultChat"]);
        if (
          isNewlyRegisteredUser === "true" ||
          isNewlyRegisteredUser === true
        ) {
          console.log("isNEWRegisteredUser!");

          nextPage(0);
          nextTopic(registered["profileIntro"]);
        }
      }
    }
  }, [isRegisteredUser, isNewlyRegisteredUser, isOldUser]);

  const userRespondedHandler = (response) => {
    // lets say user selected response number 0
    // what is the next action? for response number 0
    const action = currentTopic[pageInTopic].responseHandler[response]; //returns an action name

    // check for command to follow
    if (action === "next") {
      nextPage(pageInTopic + 1);
      nextTopic(currentTopic);
    } else if (action === "quit") {
      sessionStorage.setItem("doneTutorial", true);
      nextPage(0);
      nextTopic(dialogues["defaultChat"]);
      props.clicked();
    } else if (action === "viewMyProfile") {
      sessionStorage.removeItem("isNewlyRegisteredUser");
      nextPage(0);
      nextTopic(registered["newDefaultChat"]);
      props.routeToProfile();
    } else {
      // if command doesn't match the above, it's probably a topic command
      // in which case, we determine if user is registered or not
      if (isRegisteredUser) {
        nextPage(0);
        nextTopic(registered[action]);
      } else {
        nextPage(0);
        nextTopic(dialogues[action]);
      }
    }
  };

  const undoResponseHandler = () => {
    // check if pageinTopic is 0
    if (pageInTopic === 0) {
      // if yes, go back to default chat
      // but check first if its a registered or old user
      if (isRegisteredUser) {
        nextPage(0);
        nextTopic(registered["newDefaultChat"]);
      } else {
        nextPage(0);
        nextTopic(dialogues["defaultChat"]);
      }
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
        <Image
          src={bubble}
          alt="postman icon"
          className={
            currentTopic === registered["profileIntro"]
              ? `${classes.notifBubble} ${classes.active}`
              : `${classes.notifBubble} `
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
