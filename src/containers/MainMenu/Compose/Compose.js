import React, { useState, useEffect } from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// import SVG image
import icon from "../../../assets/images/compose.svg";

// import ActionButtons and ChatBubbles
import ActionButton from "../../../components/ActionButton/ActionButton";
import ChatBubble from "../../../components/ChatBubble/ChatBubble";

// import dialogues
import * as dialogues from "./DialoguesList/DialoguesList";

// import css modules
import classes from "./Compose.module.css";

const Compose = (props) => {
  const [defaultMenu, setMenu] = useState(dialogues.defaultMenu);
  const isRegisteredUser = sessionStorage.getItem("registeredUser");

  useEffect(() => {
    console.log("registered: ", isRegisteredUser);

    //  If haven't registered, show the guest menu
    if (
      isRegisteredUser === false ||
      isRegisteredUser === "false" ||
      !isRegisteredUser
    ) {
      setMenu(dialogues.guestMenu);
    } else {
      setMenu(dialogues.defaultMenu);
    }
  }, [isRegisteredUser]);

  // handles whether compose menu is open or closed
  let displayStatus = `${classes.iconContainer}`;
  if (props.composeMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.active}`;
  }
  if (props.postmanMenuisOpen) {
    displayStatus = `${classes.iconContainer} ${classes.inactive}`;
  }

  // handles contents rendered
  let chatContent = defaultMenu[0].chat;
  let responses = defaultMenu[0].response;
  let responseHandler = defaultMenu[0].responseHandler;

  return (
    <>
      <div className={displayStatus} onClick={props.clicked}>
        <Image src={icon} alt="compose icon" />
      </div>
      <div className={props.composeMenuisOpen ? classes.active : null}>
        <div className={classes.chatBubble}>
          <Image src={icon} alt="compose icon" onClick={props.clicked} />
          <ChatBubble>{chatContent}</ChatBubble>
        </div>
        <div className={classes.composeOptions}>
          {responses.map((r, id) => (
            <ActionButton clicked={props[`${responseHandler[id]}`]} key={r}>
              {r}
            </ActionButton>
          ))}
        </div>
      </div>
    </>
  );
};

export default Compose;
