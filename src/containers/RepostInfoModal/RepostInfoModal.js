import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required SVG images
import repost from "../../assets/images/repost-info-illust.svg";

// import css module
import classes from "./RepostInfoModal.module.css";

const RepostInfoModal = (props) => {
  return (
    <SlideUpModal
      withHandle
      activateIf={props.activateIf}
      clickedExit={props.clickedExit}
    >
      <img src={repost} alt="repost icon" className={classes.icon} />
      <div className={classes.textWrapper}>
        <h2>About Reposting</h2>
        <p>Repost a story to send it back into the sky again!</p>
        <p>So, others will get a chance to read it too.</p>
      </div>
      <div className={classes.button}>
        <ActionButton clicked={props.clickedExit}>Okay, got it!</ActionButton>
      </div>
    </SlideUpModal>
  );
};

export default RepostInfoModal;
