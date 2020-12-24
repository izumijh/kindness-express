import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required SVG
import Haha from "./Reactions/Haha";
import Love from "./Reactions/Love";
import Wow from "./Reactions/Wow";

// import Lottie
import Lottie from "react-lottie";
import * as animationData from "../../assets/animations/success/success.json";

// import css modules
import classes from "./ReactModal.module.css";

const ReactModal = (props) => {
  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <span className={classes.wrapper}>
      <SlideUpModal
        activateIf={props.isReacting}
        clickedExit={props.clickedExit}
      >
        <div
          className={
            props.doneReacting
              ? `${classes.reactWrapper}`
              : `${classes.reactWrapper} ${classes.active}`
          }
        >
          <h1>Send them a response!</h1>

          {/* Reaction Choices */}
          <span
            className={
              props.isReacting
                ? `${classes.reacts} ${classes.active}`
                : `${classes.reacts}`
            }
          >
            <Haha
              isActive={props.currentReaction === 0}
              clicked={() => props.pickedReaction(0)}
            />
            <Wow
              isActive={props.currentReaction === 1}
              clicked={() => props.pickedReaction(1)}
            />
            <Love
              isActive={props.currentReaction === 2}
              clicked={() => props.pickedReaction(2)}
            />
          </span>

          {/* Reaction Texts */}
          <span
            className={
              props.isReposting
                ? `${classes.texts} ${classes.active}`
                : `${classes.texts}`
            }
          >
            <p
              style={props.currentReaction === 0 ? { fontWeight: "700" } : null}
            >
              This made me smile!
            </p>
            <p
              style={props.currentReaction === 1 ? { fontWeight: "700" } : null}
            >
              I feel so inspired!
            </p>
            <p
              style={props.currentReaction === 2 ? { fontWeight: "700" } : null}
            >
              This warms my heart.
            </p>
          </span>

          <ActionButton white clicked={props.clickedExit}>
            Not Now
          </ActionButton>
          <ActionButton clicked={props.clickedSend}> Send it! </ActionButton>
        </div>

        <div
          className={
            props.doneReacting
              ? `${classes.doneWrapper} ${classes.active}`
              : `${classes.doneWrapper}`
          }
        >
          <Lottie
            options={lottieOptions}
            width={"55%"}
            isStopped={props.doneReacting === false}
          />
          <span style={{ display: "block", transform: "translateY(-20%)" }}>
            <h1>Reaction Successfully Sent!</h1>
            <p>Thanks! We're sure they will appreciate it.</p>
            <ActionButton clicked={props.clickedExit}> Done </ActionButton>
          </span>
        </div>
      </SlideUpModal>
    </span>
  );
};

export default ReactModal;
