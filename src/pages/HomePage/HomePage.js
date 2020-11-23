import React, { Component } from "react";

// import layout
import Layout from "../../hocs/Layout/Layout";

// Import main menu
import MainMenu from "../../containers/MainMenu/MainMenu";
import BalloonFeed from "../../containers/BalloonFeed/BalloonFeed";

// Import Router Props
import { withRouter } from "react-router-dom";

class HomePage extends Component {
  state = {
    composeMenuisOpen: false,
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
          <BalloonFeed />
          <MainMenu
            composeMenuisOpen={
              this.props.location.pathname === "/compose"
                ? true
                : this.state.composeMenuisOpen
            }
            toggleComposeMenu={this.toggleComposeMenuHandler}
            wantToPostStory={() =>
              this.props.history.push("/post-a-story")
            }
          />
        </Layout>
      </>
    );
  }
}

export default withRouter(HomePage);
