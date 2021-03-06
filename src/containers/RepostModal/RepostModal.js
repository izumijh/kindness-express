import React from "react";

// import Lottie
import Lottie from "react-lottie-wrapper";
import * as animationData from "../../assets/animations/success/success.json";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required svg Images
import repost from "../../assets/images/illustrations/export-illust.svg";

// import css modules
import classes from "./RepostModal.module.css";

const RepostModal = (props) => {
  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData.default)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <h1>Repost this {props.isMessage ? "message" : "story"}?</h1>
          <p>
            Give other people on this website a chance to read about this too.
          </p>
          <ActionButton white clicked={props.clickedExit}>
            Not Now
          </ActionButton>
          <ActionButton clicked={props.clickedRepost}>
            {" "}
            Yes, repost it!{" "}
          </ActionButton>
        </div>

        <div
          className={
            props.doneReposting
              ? `${classes.doneWrapper} ${classes.active}`
              : `${classes.doneWrapper}`
          }
        >
          <Lottie
            options={lottieOptions}
            width={"55%"}
            isStopped={props.doneReposting === false}
          />
          <span style={{ display: "block", transform: "translateY(-20%)" }}>
            <h1>
              <span style={{ textTransform: "capitalize" }}>
                {props.isMessage ? "Message" : "Story"}
              </span>{" "}
              Reposted!
            </h1>
            <p>Thanks! We're sure they will appreciate it.</p>
            <ActionButton clicked={props.clickedExit}> Done </ActionButton>
          </span>
        </div>
      </SlideUpModal>
    </span>
  );
};

export default RepostModal;
