import React, { Component } from "react";

// import layout
import Layout from "../../hocs/Layout/Layout";

// Import required components
import TopSpacing from "../../components/TopSpacing/TopSpacing";
import MedalBlock from "../../containers/MedalBlock/MedalBlock";
import DailyKindTasks from "../../containers/DailyKindTasks/DailyKindTasks";
import RecentStories from "../../containers/RecentStories/RecentStories";
import MyStories from "../../containers/MyStories/MyStories";

// Import Router Props
import { withRouter } from "react-router-dom";

// import css module
// import classes from "./Profile.module.css";

class Profile extends Component {
  state = {};

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
        >
          <TopSpacing />
          <MedalBlock />
          <DailyKindTasks />
          <RecentStories />
          <MyStories />
        </Layout>
      </>
    );
  }
}

export default withRouter(Profile);
