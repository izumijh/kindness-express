import React from "react";

// import Content component
import Content from "../Content/Content";

//import CSS modules
import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  // get step number from parent
  const step = props.step;

  // translate step number into UI
  let length = { width: "25%" };

  if (step === 1) {
    length = { width: "25%" };
  } else if (step === 2) {
    length = { width: "50%" };
  } else if (step === 3) {
    length = { width: "75%" };
  } else if (step === 4) {
    length = { width: "100%" };
  }

  return (
    <Content className={classes.wrapper}>
      <p style={{ marginBottom: ".5rem" }}>
        <span className={classes.bold}>Step {step}</span> of 4
      </p>
      <div className={classes.progressbar}>
        <div className={classes.progress} style={length}></div>
      </div>
    </Content>
  );
};

export default ProgressBar;
