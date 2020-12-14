import React, { Component } from "react";

// import layout
import Layout from "../../hocs/Layout/Layout";

// Import required components
import TopSpacing from "../../components/TopSpacing/TopSpacing";
import MedalBlock from "../../containers/MedalBlock/MedalBlock";
import DailyKindTasks from "../../containers/DailyKindTasks/DailyKindTasks";
import RecentStories from "../../containers/RecentStories/RecentStories";
import MyStories from "../../containers/MyStories/MyStories";
import ShareProfile from "../../containers/ShareProfile/ShareProfile";
import HowScoringWorks from "../../containers/HowScoringWorks/HowScoringWorks";
import OtherProfileActions from "../../containers/OtherProfileActions/OtherProfileActions";

// Import Router Props
import { withRouter } from "react-router-dom";

// import css module
// import classes from "./Profile.module.css";

class Profile extends Component {
  state = {
    howToLevelIsOpen: false,
    otherMenuIsOpen: false,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
    this.setState({ composeMenuisOpen: false, postmanMenuisOpen: false });
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
          clickedMoreButton={() => this.setState({ otherMenuIsOpen: true })}
        >
          <TopSpacing />

          {/* Profile Content */}
          <MedalBlock
            toggleHowToLevel={() => this.setState({ howToLevelIsOpen: true })}
          />
          <DailyKindTasks />
          <RecentStories />
          <MyStories />
          <ShareProfile />

          {/* Slide Up Modals */}
          <HowScoringWorks
            activateIf={this.state.howToLevelIsOpen}
            clickedExit={() => this.setState({ howToLevelIsOpen: false })}
          />
          <OtherProfileActions
            activateIf={this.state.otherMenuIsOpen}
            clickedExit={() => this.setState({ otherMenuIsOpen: false })}
          />
        </Layout>
      </>
    );
  }
}

export default withRouter(Profile);
