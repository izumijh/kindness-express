import React from "react";

// import React Bootstrap components
import Col from "react-bootstrap/Col";

// import required components
import PopUpModal from "../../components/PopUpModal/PopUpModal";
import BalloonLetter from "../../components/BalloonLetter/BalloonLetter";
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./CaughtLetterModal.module.css";

const CaughtLetterModal = (props) => {
  const activateIf = props.activateIf;

  return (
    <Col
      xs={12}
      className={
        activateIf
          ? `${classes.wrapper} ${classes.active}`
          : `${classes.wrapper}`
      }
    >
      <PopUpModal>
        <div
          className={
            activateIf
              ? `${classes.balloon} ${classes.active}`
              : `${classes.balloon}`
          }
        >
          <BalloonLetter currentColour={"#abdaea"} currentDesign={0} />
        </div>
        <p>Yay! You caught a letter.</p>
        <ActionButton clicked={props.clickedOpenLetter}>Open Letter</ActionButton>
      </PopUpModal>
    </Col>
  );
};

export default CaughtLetterModal;
