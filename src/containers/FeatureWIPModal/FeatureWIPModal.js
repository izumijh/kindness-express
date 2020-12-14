import React from "react";

// import required components
import SlideUpModal from "../../components/SlideUpModal/SlideUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required SVG images
import postmanCry from "../../assets/images/error-pages/postman-cry.svg";
import chatCross from "../../assets/images/error-pages/chatbubble-cross.svg";

// import css module
import classes from "./FeatureWIPModal.module.css";

const FeatureWIPModal = (props) => {
  return (
    <SlideUpModal activateIf={props.activateIf} clickedExit={props.clickedExit}>
      <div
        className={
          props.activateIf ? `${classes.iconContainer} ${classes.active}` : null
        }
      >
        <img
          src={postmanCry}
          alt="crying emoji"
          className={classes.postmanIcon}
        />
        <img
          src={chatCross}
          alt="chatbubble with X symbol"
          className={classes.chatbubble}
        />
      </div>
      <div className={classes.textWrapper}>
        <h2>Oops, feature not available yet.</h2>
        <p>We’re working super hard on it.</p>
        <p>Thanks for understanding!</p>
      </div>
      <div className={classes.button}>
        <ActionButton clicked={props.clickedExit}>
          Yay! Looking forward to it!
        </ActionButton>
      </div>
    </SlideUpModal>
  );
};

export default FeatureWIPModal;
