import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Lottie
import Lottie from "react-lottie";
import * as animationData from "../../assets/animations/loading/fetching.json";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";

// import required components
import BalloonLetter from "../../components/BalloonLetter/BalloonLetter";
import CaughtLetterModal from "../../containers/CaughtLetterModal/CaughtLetterModal";

// import CSS modules
import classes from "./LandingPage.module.css";

class LandingPage extends Component {
  state = {
    loadComplete: false,
    tappedOnLetter: false,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    if (!this.state.loadComplete) {
      setTimeout(() => {
        this.setState({ loadComplete: true });
      }, 2000);
    }
  }

  render() {
    const options = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <Row>
            <Col
              xs={12}
              className={
                !this.state.loadComplete
                  ? `${classes.loadingWrapper} ${classes.active}`
                  : `${classes.loadingWrapper}`
              }
            >
              <div style={{ marginBottom: "10%" }}>
                <h1>Welcome to</h1>
                <h1>The Kindness Express!</h1>
              </div>
              <Lottie options={options} height={"40%"} />
              <p>Fetching you a kind story...</p>
            </Col>
            <Col
              xs={12}
              className={
                this.state.loadComplete && !this.state.tappedOnLetter
                  ? `${classes.letterWrapper} ${classes.active}`
                  : `${classes.letterWrapper}`
              }
            >
              <BalloonLetter
                currentColour={"#abdaea"}
                currentDesign={0}
                clicked={() => this.setState({ tappedOnLetter: true })}
              />
              <div className={classes.letterInstructions}>
                <p>Oh? A letter came flying to you!</p>
              </div>
            </Col>
            <CaughtLetterModal
              activateIf={this.state.tappedOnLetter}
              clickedOpenLetter={() => this.props.history.push("/letter")}
            />
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(LandingPage);
