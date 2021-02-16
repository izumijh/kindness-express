import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required SVG images
import undoRepost from "../../assets/images/undo-repost.svg";

// import css module
import classes from "./UndoRepostModal.module.css";

const UndoRepostModal = (props) => {
  return (
    <SlideUpModal activateIf={props.activateIf} clickedExit={props.clickedExit}>
      <div
        className={
          props.activateIf ? `${classes.iconContainer} ${classes.active}` : null
        }
      >
        <img
          src={undoRepost}
          alt="crying emoji"
          className={classes.postmanIcon}
        />
      </div>
      <div className={classes.textWrapper}>
        <h2>Undo Repost?</h2>
        <p>This will undo the repost of this story.</p>
      </div>
      <div className={classes.button}>
        <ActionButton white clicked={props.clickedExit}>Not Now</ActionButton>
        <ActionButton clicked={props.clickedUndoRepost}>
          Yes, undo repost.
        </ActionButton>
      </div>
    </SlideUpModal>
  );
};

export default UndoRepostModal;
