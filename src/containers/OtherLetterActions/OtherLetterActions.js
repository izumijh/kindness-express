import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";

// import Font Awesome Package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import solid icons
import { faShareAlt, faFlag } from "@fortawesome/free-solid-svg-icons";

// import css modules
import classes from "./OtherLetterActions.module.css";

const OtherLetterActions = (props) => {
  return (
    <SlideUpModal
      withHandle
      activateIf={props.activateIf}
      clickedExit={props.clickedExit}
    >
      <p>Other Actions</p>
      <ul className={classes.menuWrapper}>
        <li>
          <FontAwesomeIcon icon={faShareAlt} />
          Share this Story to...
        </li>
        <li>
          <FontAwesomeIcon icon={faFlag} />
          Report this Story
        </li>
      </ul>
    </SlideUpModal>
  );
};

export default OtherLetterActions;
