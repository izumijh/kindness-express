import React, { Component } from "react";

// import layout
import Layout from "../../hocs/Layout/Layout";

// Import required components
import MainMenu from "../../containers/MainMenu/MainMenu";
import BalloonFeed from "../../containers/BalloonFeed/BalloonFeed";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

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

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <TopSpacing />
          <span
            className={
              this.props.location.pathname === "/"
                ? `${classes.balloons} ${classes.active}`
                : `${classes.balloons}`
            }
          >
            <BalloonFeed
              clickedOnLetter={() => this.props.history.push("/letter")}
            />
          </span>
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
          />
        </Layout>
      </>
    );
  }
}

export default withRouter(HomePage);
