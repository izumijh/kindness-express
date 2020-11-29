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
    readingLetter: false,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
    this.setState({ composeMenuisOpen: false });
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
              this.state.composeMenuisOpen
                ? `${classes.balloons} `
                : `${classes.balloons} ${classes.active}`
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
            toggleComposeMenu={this.toggleComposeMenuHandler}
            wantToPostStory={() => this.props.history.push("/post-a-story")}
          />
        </Layout>
      </>
    );
  }
}

export default withRouter(HomePage);
