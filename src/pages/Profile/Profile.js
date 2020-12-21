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
import FeatureWIPModal from "../../containers/FeatureWIPModal/FeatureWIPModal";
import RedirectModal from "../../containers/RedirectModal/RedirectModal";

// Import Router Props
import { withRouter } from "react-router-dom";

class Profile extends Component {
  state = {
    howToLevelIsOpen: false,
    otherMenuIsOpen: false,
    featureNotAvailable: false,
    redirecting: false,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
    this.setState({ composeMenuisOpen: false, postmanMenuisOpen: false });
  };

  logOutHandler = () => {
    sessionStorage.removeItem("registeredUser");
    this.props.history.push("/");
  };

  redirectHandler = () => {
    this.setState({ redirecting: false });
    this.props.history.push("/post-a-story");
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
          <DailyKindTasks
            clickedPost={() => this.setState({ redirecting: true })}
          />
          <RecentStories
            clickedSeeAll={() => this.setState({ featureNotAvailable: true })}
          />
          <MyStories
            clickedSeeAll={() => this.setState({ featureNotAvailable: true })}
          />
          <ShareProfile
            clickedShareProfile={() =>
              this.setState({ featureNotAvailable: true })
            }
          />

          {/* Slide Up Modals */}
          <HowScoringWorks
            activateIf={this.state.howToLevelIsOpen}
            clickedExit={() => this.setState({ howToLevelIsOpen: false })}
          />
          <RedirectModal
            activateIf={this.state.redirecting}
            clickedExit={() => this.setState({ redirecting: false })}
            clickedRedirect={this.redirectHandler}
          />
          <OtherProfileActions
            activateIf={this.state.otherMenuIsOpen}
            clickedExit={() => this.setState({ otherMenuIsOpen: false })}
            clickedShareProfile={() =>
              this.setState({ featureNotAvailable: true })
            }
            clickedEditPref={() => this.setState({ featureNotAvailable: true })}
            clickedLogOut={this.logOutHandler}
          />
          <FeatureWIPModal
            activateIf={this.state.featureNotAvailable}
            clickedExit={() => this.setState({ featureNotAvailable: false })}
          />
        </Layout>
      </>
    );
  }
}

export default withRouter(Profile);
