import React from "react";

// import css modules
import classes from "./DesignToolbar.module.css";

// import toolbar components
import Colours from "./Colours/Colours";
import Designs from "./Designs/Designs";

const DesignToolbar = (props) => {
  return (
    <div className={classes.toolbarWrapper}>
      {/* Header */}
      <div className={classes.headerGroup}>
        <h3
          onClick={props.toggleToolbar}
          className={
            props.activeToolbar === 0
              ? `${classes.header} ${classes.active}`
              : classes.header
          }
        >
          Balloon
        </h3>

        <h3
          onClick={props.toggleToolbar}
          className={
            props.activeToolbar !== 0
              ? `${classes.header} ${classes.active}`
              : classes.header
          }
        >
          Envelope
        </h3>
      </div>

      {/* Contents */}
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
