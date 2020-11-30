import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required svg Images
import repost from "../../assets/images/illustrations/export-illust.svg";

// import css modules
import classes from "./RepostModal.module.css";

const RepostModal = (props) => {
  return (
    <span className={classes.wrapper}>
      <SlideUpModal
        activateIf={props.isReposting}
        clickedExit={props.clickedExit}
      >
        <img
          src={repost}
          alt="illustration of envelope glowing"
          className={
            props.isReposting
              ? `${classes.illust} ${classes.active}`
              : `${classes.illust}`
          }
        />
        <h1>Pass this story on?</h1>
        <p>
          Give other people on this website a chance to read about this story
          too.
        </p>
        <ActionButton white clicked={props.clickedExit}>
          Not Now
        </ActionButton>
        <ActionButton> Yes, pass it on! </ActionButton>
      </SlideUpModal>
    </span>
  );
};

export default RepostModal;
