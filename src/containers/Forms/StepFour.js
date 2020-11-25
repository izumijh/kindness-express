import React, { Component } from "react";

// import required components
import NextBackButtons from "../NextBackButtons/NextBackButtons";
import EnvelopePreview from "../../components/EnvelopePreview/EnvelopePreview";
import DesignToolbar from "../DesignToolbar/DesignToolbar";

// import CSS modules
import classes from "./StepFour.module.css";

class StepFour extends Component {
  state = {
    balloonColour: "#ABDAEA",
    currentDesign: 0,
    activeToolbar: 0,
  };

  setColour = (colour) => {
    sessionStorage.setItem("balloonColour", colour);
    this.setState({ balloonColour: colour });
  };

  setDesign = (id) => {
    sessionStorage.setItem("currentDesign", id);
    this.setState({ currentDesign: id });
  };

  toggleToolbarHandler = () => {
    if (this.state.activeToolbar === 0) {
      this.setState({ activeToolbar: 1 });
    } else {
      this.setState({ activeToolbar: 0 });
    }
  };

  render() {
    return (
      <>
        <div className={classes.formWrapper}>
          <h2>Make it look pretty!</h2>

          <EnvelopePreview
            currentColour={this.state.balloonColour}
            currentDesign={this.state.currentDesign}
          />

          <DesignToolbar
            activeToolbar={this.state.activeToolbar}
            setColour={this.setColour}
            currentColour={this.state.balloonColour}
            setDesign={this.setDesign}
            currentDesign={this.state.currentDesign}
            toggleToolbar={this.toggleToolbarHandler}
          />
        </div>
        <NextBackButtons
          goBack={this.props.goBackHandler}
          nextStep={this.props.submitLetterHandler}
        />
      </>
    );
  }
}

export default StepFour;
