import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";

// import Font Awesome Package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import solid icons
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

// import required svgs
import cog from "../../assets/images/buttons/cogs.svg";
import exit from "../../assets/images/buttons/exit.svg";

// import css modules
import classes from "./OtherProfileActions.module.css";

const OtherProfileActions = (props) => {
  return (
    <SlideUpModal
      withHandle
      activateIf={props.activateIf}
      clickedExit={props.clickedExit}
    >
      <p>Other Actions</p>
      <ul className={classes.menuWrapper}>
        <li onClick={props.clickedShareProfile}>
          <span style={{ fontSize: "1.2rem" }}>
            <FontAwesomeIcon icon={faShareAlt} />
          </span>
          Share My Profile
        </li>
        <li onClick={props.clickedEditPref}>
          <img src={cog} alt="cogs" />
          Edit Preferences
        </li>
        <li onClick={props.clickedLogOut}>
          <img src={exit} alt="log out" />
          Log Out
        </li>
      </ul>
    </SlideUpModal>
  );
};

export default OtherProfileActions;
