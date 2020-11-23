import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout
import Layout from "../../hocs/Layout/Layout";

// import required components
import Content from "../../components/Content/Content";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import FormStepOne from "../../components/Forms/StepOne";
import FormStepTwo from "../../components/Forms/StepTwo";
import FormStepThree from "../../components/Forms/StepThree";
import FormStepFour from "../../components/Forms/StepFour";
import QuitWritingModal from "../../components/QuitWritingModal/QuitWritingModal";

// import CSS modules
import classes from "./PostingProcess.module.css";

class PostingProcess extends Component {
  state = {
    step: 1,
    stepAnim: [classes.slideIn, classes.idle, classes.idle, classes.idle],
    isQuitting: false,
  };

  toggleQuitHandler = () => {
    this.setState({ isQuitting: !this.state.isQuitting });
  };

  nextStepHandler = () => {
    if (this.state.step < 4) {
      // create our own array
      let animations = [...this.state.stepAnim];
      // fade out current step
      animations.splice(this.state.step - 1, 1, classes.slideOut);
      // fade in next step
      animations.splice(this.state.step, 1, classes.slideIn);
      // apply the changes
      this.setState({ step: this.state.step + 1, stepAnim: animations });
    } else {
      return null;
    }
  };

  quitWritingHandler = () => {
    sessionStorage.clear();
    this.props.history.push("/");
  };

  goBackHandler = () => {
    if (this.state.step === 1) {
      this.setState({ isQuitting: true });
    } else {
      // create our own array
      let animations = [...this.state.stepAnim];
      // fade out current step
      animations.splice(this.state.step - 1, 1, classes.slideBackOut);
      // fade in previous step
      animations.splice(this.state.step - 2, 1, classes.slideBackIn);
      // apply the changes
      this.setState({ step: this.state.step - 1, stepAnim: animations });
    }
  };

  submitLetterHandler = () => {
    // Set default Balloon Colours if No Colour Chosen
    if (!sessionStorage.getItem("balloonColour")) {
      sessionStorage.setItem("balloonColour", "#abdaea");
    }
    if (!sessionStorage.getItem("currentDesign")) {
      sessionStorage.setItem("currentDesign", 0);
    }
    alert("letter submitted!");
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.toggleQuitHandler}
        >
          <Row style={{ width: "100vw", padding: ".5rem" }}>
            <Col xs={12}>
              <ProgressBar step={this.state.step} />
            </Col>
            <Col xs={12} className={classes.stepsContainer}>
              {/* We Show and Hide Relevant Steps of the Process */}

              <div className={this.state.stepAnim[0]}>
                <Content>
                  <FormStepOne
                    nextStepHandler={this.nextStepHandler}
                    goBackHandler={this.goBackHandler}
                  />
                </Content>
              </div>

              <div className={this.state.stepAnim[1]}>
                <Content>
                  <FormStepTwo
                    nextStepHandler={this.nextStepHandler}
                    goBackHandler={this.goBackHandler}
                  />
                </Content>
              </div>

              <div className={this.state.stepAnim[2]}>
                <Content>
                  <FormStepThree
                    nextStepHandler={this.nextStepHandler}
                    goBackHandler={this.goBackHandler}
                  />
                </Content>
              </div>

              <div className={this.state.stepAnim[3]}>
                <Content>
                  <FormStepFour
                    submitLetterHandler={this.submitLetterHandler}
                    goBackHandler={this.goBackHandler}
                  />
                </Content>
              </div>
            </Col>
          </Row>
          <div
            className={
              this.state.isQuitting
                ? `${classes.quitModal} ${classes.active}`
                : `${classes.quitModal}`
            }
          >
            <QuitWritingModal
              quitWriting={this.quitWritingHandler}
              continueWriting={this.toggleQuitHandler}
            />
          </div>
        </Layout>
      </>
    );
  }
}

export default withRouter(PostingProcess);
