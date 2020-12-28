import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout and TopSpacing
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import required components
import Content from "../../components/Content/Content";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import FormStepOne from "../../containers/Forms/StepOne";
import FormStepTwo from "../../containers/Forms/StepTwo";
import FormStepThree from "../../containers/Forms/StepThree";
import FormStepFour from "../../containers/Forms/StepFour";
import QuitWritingModal from "../../containers/QuitWritingModal/QuitWritingModal";
import SendingModal from "../../containers/SendingModal/SendingModal";

// import CSS modules
import classes from "./PostingProcess.module.css";

class PostingProcess extends Component {
  state = {
    step: 1,
    stepAnim: [classes.slideIn, classes.idle, classes.idle, classes.idle],
    isQuitting: false,
    sendingStory: false,
    stopAnimation: true,
  };

  componentDidUpdate = () => {
    // Make animation happen after timer of 0.6s ends
    if (this.state.sendingStory && this.state.stopAnimation) {
      setTimeout(() => {
        this.setState({ stopAnimation: false });
      }, 600);
    }
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
    // remove all related details about that letter
    sessionStorage.removeItem("currentDesign");
    sessionStorage.removeItem("balloonColour");
    sessionStorage.removeItem("starter");
    sessionStorage.removeItem("story");
    sessionStorage.removeItem("location");
    sessionStorage.removeItem("date");
    sessionStorage.removeItem("authorName");

    // go back to homepage
    this.props.history.push("/");
  };

  goBackHandler = () => {
    if (this.state.step === 1) {
      // If this is the first step, and we can't go back any further
      // Remove all records
      this.setState({ isQuitting: true });
    } else {
      // If we can still move back a step
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
    this.setState({ sendingStory: true });
  };

  storySentHandler = () => {
    this.props.history.push("/");
    sessionStorage.setItem("letterSent", true);
    this.setState({ sendingStory: false, stopAnimation: true });
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.toggleQuitHandler}
        >
          <TopSpacing />
          <Row>
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
          <Row
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
          </Row>
          <Row
            className={
              this.state.sendingStory
                ? `${classes.sendModal} ${classes.active}`
                : `${classes.sendModal}`
            }
          >
            <SendingModal
              isStopped={this.state.stopAnimation}
              afterAnimation={this.storySentHandler}
            />
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(PostingProcess);
