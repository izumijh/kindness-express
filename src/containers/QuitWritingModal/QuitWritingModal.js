import React from "react";

// import React Bootstrap components
import Image from "react-bootstrap/Image";

// import required components
import PopUpModal from "../../components/PopUpModal/PopUpModal";
import ActionButton from "../../components/ActionButton/ActionButton";

// import required svg image
import cross from "../../assets/images/cross.svg";

// import css modules
import classes from "./QuitWritingModal.module.css";

const QuitWritingModal = (props) => {
  return (
    <PopUpModal clicked={props.continueWriting}>
      <h1>Quit Writing?</h1>
      <p>Your progress will not be saved.</p>
      <div style={{ margin: "2rem" }}>
        <Image src={cross} alt="image of a delete icon" />
      </div>
      <div className={classes.buttons}>
        <ActionButton fullWidth clicked={props.quitWriting}>
          Yes, Quit Writing.
        </ActionButton>
        <ActionButton white fullWidth clicked={props.continueWriting}>
          No, Continue Writing.
        </ActionButton>
      </div>
    </PopUpModal>
  );
};

export default QuitWritingModal;
