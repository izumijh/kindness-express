import React from "react";

// import css modules
import classes from "./DesignToolbar.module.css";

// import toolbar components
import Colours from "./Colours/Colours";
import Designs from "./Designs/Designs";

const DesignToolbar = (props) => {
  return (
    <div className={classes.toolbarWrapper}>
      <div className={classes.header}>
        <span
          type="span"
          className={classes.backButton}
          onClick={props.toggleToolbar}
        >{`<`}</span>
        <h3>
          {props.activeToolbar === 0 ? "Balloon Colour" : "Letter Design"}
        </h3>
        <span
          type="span"
          className={classes.nextButton}
          onClick={props.toggleToolbar}
        >{`>`}</span>
      </div>
      <div className={classes.body}>
        <div
          className={
            props.activeToolbar === 0
              ? `${classes.toolbar} ${classes.active}`
              : `${classes.toolbar}`
          }
        >
          <Colours
            setColour={props.setColour}
            currentColour={props.currentColour}
          />
        </div>
        <div
          className={
            props.activeToolbar === 1
              ? `${classes.toolbar} ${classes.active}`
              : `${classes.toolbar}`
          }
        >
          <Designs
            setDesign={props.setDesign}
            currentDesign={props.currentDesign}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignToolbar;
