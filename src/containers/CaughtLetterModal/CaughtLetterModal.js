import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";

// import required components
import PopUpModal from "../../components/PopUpModal/PopUpModal";
import BalloonLetter from "../../components/BalloonLetter/BalloonLetter";
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./CaughtLetterModal.module.css";

const CaughtLetterModal = (props) => {
  const activateIf = props.activateIf;

  // balloon colour settings
  let currentColour = props.currentColour ? props.currentColour : "#ABDAEA";
  let currentDesign = props.currentDesign ? props.currentDesign : 0;

  return (
    <Row
      className={
        activateIf
          ? `${classes.wrapper} ${classes.active}`
          : `${classes.wrapper}`
      }
    >
      <PopUpModal clickedExit={props.clickedExit}>
        <div
          className={
            activateIf
              ? `${classes.balloon} ${classes.active}`
              : `${classes.balloon}`
          }
        >
          <BalloonLetter
            currentColour={currentColour}
            currentDesign={currentDesign}
          />
        </div>
        <p>Yay! You caught a letter.</p>
        <ActionButton clicked={props.clickedOpenLetter}>
          Open Letter
        </ActionButton>
      </PopUpModal>
    </Row>
  );
};

export default CaughtLetterModal;
