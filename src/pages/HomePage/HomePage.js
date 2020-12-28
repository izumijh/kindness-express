import React, { Component } from "react";

// import layout
import Layout from "../../hocs/Layout/Layout";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import required components
import MainMenu from "../../containers/MainMenu/MainMenu";
import BalloonFeed from "../../containers/BalloonFeed/BalloonFeed";
import TopSpacing from "../../components/TopSpacing/TopSpacing";
import BalloonLetter from "../../components/BalloonLetter/BalloonLetter";
import PaperPlane from "../../components/PaperPlane/PaperPlane";

// Import Router Props
import { withRouter } from "react-router-dom";

// import css module
import classes from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    composeMenuisOpen: false,
    postmanMenuisOpen: false,
    readingLetter: false,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
    this.setState({ composeMenuisOpen: false, postmanMenuisOpen: false });
  };

  toggleComposeMenuHandler = () => {
    if (this.props.location.pathname === "/compose") {
      this.props.history.push("/");
      this.setState({ composeMenuisOpen: false });
    } else {
      this.props.history.push("/compose");
      this.setState({ composeMenuisOpen: true });
    }
  };

  togglePostmanHandler = () => {
    if (this.props.location.pathname === "/postman") {
      this.props.history.push("/");
      this.setState({ postmanMenuisOpen: false });
    } else {
      this.props.history.push("/postman");
      this.setState({ postmanMenuisOpen: true });
    }
  };

  clickedOwnStoryHandler = () => {
    // Check if there really is an animation playing right now
    if (sessionStorage.getItem("letterSent")) {
      // Tell the next page that user is currently reading own story
      sessionStorage.setItem("readingOwnStory", true);

      // Redirect the user
      this.props.history.push("/letter");
    }
  };

  clickedOwnMessageHandler = () => {
    // Check if there really is an animation playing right now
    if (sessionStorage.getItem("planeSent")) {
      // Tell the next page that user is currently reading own story
      sessionStorage.setItem("readingOwnMessage", true);

      // Redirect the user
      this.props.history.push("/paperplane");
    }
  };

  componentDidMount = () => {
    // If plane/story sent animation is playing. set timeout to remove its effects later
    if (sessionStorage.getItem("planeSent")) {
      setTimeout(() => {
        // remove animation
        sessionStorage.removeItem("planeSent");
      }, 9000);
    }
    if (sessionStorage.getItem("letterSent")) {
      setTimeout(() => {
        // remove animation
        sessionStorage.removeItem("letterSent");
      }, 9000);
    }
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          // Navigation Menu functions
          clickedNav={() => this.props.history.push("/menu")}
          clickedBackButton={this.clickedBackButtonHandler}
          clickedExit={() => this.props.history.push("/")}
          launchFAQ={() => this.props.history.push("/faq")}
          launchNews={() => this.props.history.push("/news")}
          launchAbout={() => this.props.history.push("/about")}
          launchCredits={() => this.props.history.push("/credits")}
        >
          <TopSpacing />
          <Row
            style={{ overflow: "hidden", maxHeight: "70vh" }}
            className={
              this.props.location.pathname === "/"
                ? `${classes.balloons} ${classes.active}`
                : `${classes.balloons}`
            }
          >
            <Col xs={12}>
              <BalloonFeed
                clickedOnLetter={() => this.props.history.push("/letter")}
                clickedOnPlane={() => this.props.history.push("/paperplane")}
              />
            </Col>
          </Row>
          <MainMenu
            composeMenuisOpen={
              this.props.location.pathname === "/compose"
                ? true
                : this.state.composeMenuisOpen
            }
            postmanMenuisOpen={
              this.props.location.pathname === "/postman"
                ? true
                : this.state.postmanMenuisOpen
            }
            toggleComposeMenu={this.toggleComposeMenuHandler}
            togglePostman={this.togglePostmanHandler}
            wantToPostStory={() => this.props.history.push("/post-a-story")}
            wantToPostMessage={() =>
              this.props.history.push("/post-kind-words")
            }
            startLogin={() => this.props.history.push("/login")}
            routeToProfile={() => this.props.history.push("/profile")}
          />
          <Row>
            <Col
              xs={4}
              className={
                sessionStorage.getItem("letterSent")
                  ? `${classes.newLetter} ${classes.active}`
                  : classes.newLetter
              }
            >
              <BalloonLetter
                currentDesign={parseInt(
                  sessionStorage.getItem("currentDesign")
                )}
                currentColour={sessionStorage.getItem("balloonColour")}
                clicked={this.clickedOwnStoryHandler}
              />
            </Col>

            <Col
              xs={4}
              className={
                sessionStorage.getItem("planeSent")
                  ? `${classes.newPlane} ${classes.active}`
                  : classes.newPlane
              }
            >
              <PaperPlane clicked={this.clickedOwnMessageHandler} />
            </Col>
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(HomePage);
