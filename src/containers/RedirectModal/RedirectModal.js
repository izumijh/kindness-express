import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required SVG images
import compose from "../../assets/images/compose.svg";

// import css module
import classes from "./RedirectModal.module.css";

const RedirectModal = (props) => {
  return (
    <SlideUpModal activateIf={props.activateIf} clickedExit={props.clickedExit}>
      <img src={compose} alt="compose icon" className={classes.composeIcon} />
      <div className={classes.textWrapper}>
        <h2>Ready to leave this page?</h2>
        <p>We will now direct you to the “Post a Story” page.</p>
      </div>
      <div className={classes.button}>
        <ActionButton clicked={props.clickedExit} white>Not Now</ActionButton>
        <ActionButton clicked={props.clickedRedirect}>Let's Go!</ActionButton>
      </div>
    </SlideUpModal>
  );
};

export default RedirectModal;
