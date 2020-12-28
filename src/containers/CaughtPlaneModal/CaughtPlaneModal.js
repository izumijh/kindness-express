import React from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";

// import required components
import PopUpModal from "../../components/PopUpModal/PopUpModal";
import PaperPlane from "../../components/PaperPlane/PaperPlane";
import ActionButton from "../../components/ActionButton/ActionButton";

// import css modules
import classes from "./CaughtPlaneModal.module.css";

const CaughtPlaneModal = (props) => {
  const activateIf = props.activateIf;

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
              ? `${classes.plane} ${classes.active}`
              : `${classes.plane}`
          }
        >
          <PaperPlane />
        </div>
        <p>Oh, it's a paper plane!</p>
        <ActionButton clicked={props.clickedOpenPlane}>
          Open Paper Plane
        </ActionButton>
      </PopUpModal>
    </Row>
  );
};

export default CaughtPlaneModal;
