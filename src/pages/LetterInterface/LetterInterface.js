import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import required components
import Layout from "../../hocs/Layout/Layout";
import Letter from "../../components/Letter/Letter";
import TopSpacing from "../../components/TopSpacing/TopSpacing";
import ReactionToolbar from "../../components/ReactionToolbar/ReactionToolbar";
import ActionButton from "../../components/ActionButton/ActionButton";
import RepostModal from "../../containers/RepostModal/RepostModal";
import UndoRepostModal from "../../containers/UndoRepostModal/UndoRepostModal";
import RepostInfoModal from "../../containers/RepostInfoModal/RepostInfoModal";
import OtherLetterActions from "../../containers/OtherLetterActions/OtherLetterActions";
import FeatureWIPModal from "../../containers/FeatureWIPModal/FeatureWIPModal";

// import SVG image
import calendar from "../../assets/images/calendar.svg";
import location from "../../assets/images/map-pin.svg";

// import kind stories
import { stories } from "../../database/kind-stories/kind-stories";

// import css modules
import classes from "./LetterInterface.module.css";

class LetterInterface extends Component {
  state = {
    randomNum: Math.floor(Math.random() * Math.floor(stories.length)),
    isReposting: false,
    doneReposting: false,
    showReposted: false,
    inUndoingRepost: false,
    showRepostInfo: false,
    isShowingMoreMenu: false,
    featureNotAvailable: false,
  };

  quitInterfaceHandler = () => {
    if (sessionStorage.getItem("readingOwnStory")) {
      // remove reading story status
      sessionStorage.removeItem("readingOwnStory");

      //  remove animation
      sessionStorage.removeItem("letterSent");
    }

    //  Send user to homepage
    this.props.history.push("/");
  };

  render() {
    // randomly pick a story from database
    let story = stories[this.state.randomNum];

    // letter starter database
    let starters = [
      `Dear stranger, today is going to be a good day! And here’s why…`,
      `Dear stranger, I did something nice for someone today, and it felt great!`,
      `Dear stranger,`,
    ];

    // If user is reading their own story, publish user's content instead
    if (sessionStorage.getItem("readingOwnStory")) {
      story = {
        author:
          sessionStorage.getItem("authorName") === "initials"
            ? `- ${sessionStorage.getItem("username").charAt(0)}`
            : `- ${sessionStorage.getItem("username")}`,
        date: sessionStorage.getItem("date"),
        location: sessionStorage.getItem("location"),
        content: (
          <>
            <p>
              <b>{starters[sessionStorage.getItem("starter")]}</b>
            </p>
            <p>{sessionStorage.getItem("story")}</p>
          </>
        ),
        reactions: [0, 0, 0],
      };
    }

    return (
      <Layout
        currentLocation={this.props.location.pathname}
        clickedBackButton={this.quitInterfaceHandler}
        clickedMoreButton={() => this.setState({ isShowingMoreMenu: true })}
      >
        <TopSpacing />
        <Row>
          <Col xs={12} className={classes.wrapper}>
            <Letter>
              {story.content}

              <p>{story.author}</p>

              <span className={classes.dashedLine}></span>

              <p className={classes.details}>
                <Image src={calendar} alt="icon of a calendar" />
                {story.date}
              </p>
              <p className={classes.details}>
                <Image src={location} alt="icon that means location" />
                {story.location}
              </p>
            </Letter>
            <ReactionToolbar
              passingOn="this story"
              isReposted={this.state.showReposted}
              clickedInfo={() => this.setState({ showRepostInfo: true })}
              clickedRepost={() =>
                //  if already reposted, run Undo repost modal instead of repost modal
                this.state.showReposted
                  ? this.setState({ isUndoingRepost: true })
                  : this.setState({ isReposting: true, doneReposting: false })
              }
              count={story.reactions}
            />
            <ActionButton clicked={this.quitInterfaceHandler}>
              Done
            </ActionButton>
            <TopSpacing />
          </Col>
        </Row>
        <RepostModal
          isReposting={this.state.isReposting}
          doneReposting={this.state.doneReposting}
          clickedRepost={() =>
            this.setState({ doneReposting: true, showReposted: true })
          }
          clickedExit={() => this.setState({ isReposting: false })}
        />
        <UndoRepostModal
          activateIf={this.state.isUndoingRepost}
          clickedExit={() => {
            this.setState({ isUndoingRepost: false });
          }}
          clickedUndoRepost={() =>
            this.setState({ showReposted: false, isUndoingRepost: false })
          }
        />
        <OtherLetterActions
          activateIf={this.state.isShowingMoreMenu}
          clickedExit={() => this.setState({ isShowingMoreMenu: false })}
          clickedShare={() => this.setState({ featureNotAvailable: true })}
          clickedReport={() => this.setState({ featureNotAvailable: true })}
        />
        <RepostInfoModal
          activateIf={this.state.showRepostInfo}
          clickedExit={() => this.setState({ showRepostInfo: false })}
        />
        <FeatureWIPModal
          activateIf={this.state.featureNotAvailable}
          clickedExit={() => this.setState({ featureNotAvailable: false })}
        />
      </Layout>
    );
  }
}

export default LetterInterface;
