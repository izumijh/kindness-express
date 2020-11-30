import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required SVG
import Haha from "./Reactions/Haha";
import Love from "./Reactions/Love";
import Wow from "./Reactions/Wow";

// import css modules
import classes from "./ReactModal.module.css";

const ReactModal = (props) => {
  return (
    <span className={classes.wrapper}>
      <SlideUpModal
        activateIf={props.isReacting}
        clickedExit={props.clickedExit}
      >
        <h1>Send them a response!</h1>
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
        <span
          className={
            props.isReacting
              ? `${classes.texts} ${classes.active}`
              : `${classes.texts}`
          }
        >
          <p style={props.currentReaction === 0 ? { fontWeight: "700" } : null}>
            This made me smile!
          </p>
          <p style={props.currentReaction === 1 ? { fontWeight: "700" } : null}>
            I feel so inspired!
          </p>
          <p style={props.currentReaction === 2 ? { fontWeight: "700" } : null}>
            This warms my heart.
          </p>
        </span>

        <ActionButton white clicked={props.clickedExit}>
          Not Now
        </ActionButton>
        <ActionButton> Send it! </ActionButton>
      </SlideUpModal>
    </span>
  );
};

export default ReactModal;
