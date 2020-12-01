import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required svg Images
import repost from "../../assets/images/illustrations/export-illust.svg";

// import lottie animation
import SuccessAnim from "../../assets/animations/success/success";

// import css modules
import classes from "./RepostModal.module.css";

const RepostModal = (props) => {
  // If detected done reposting, change the interface

  return (
    <span className={classes.wrapper}>
      <SlideUpModal
        activateIf={props.isReposting}
        clickedExit={props.clickedExit}
      >
        <div
          className={
            props.doneReposting
              ? `${classes.repostWrapper}`
              : `${classes.repostWrapper}  ${classes.active}`
          }
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
          <ActionButton clicked={props.clickedRepost}>
            {" "}
            Yes, pass it on!{" "}
          </ActionButton>
        </div>

        <div
          className={
            props.doneReposting
              ? `${classes.doneWrapper} ${classes.active}`
              : `${classes.doneWrapper}`
          }
        >
          {props.doneReposting ? <SuccessAnim /> : null}
          <span style={{ display: "block", transform: "translateY(-20%)" }}>
            <h1>Story Successfully Reposted!</h1>
            <p>Thanks for sharing a great story with others!</p>
            <ActionButton clicked={props.clickedExit}> Done </ActionButton>
          </span>
        </div>
      </SlideUpModal>
    </span>
  );
};

export default RepostModal;
