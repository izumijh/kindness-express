import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// import required components
import Layout from "../../hocs/Layout/Layout";
import Letter from "../../components/Letter/Letter";
import TopSpacing from "../../components/TopSpacing/TopSpacing";
import ReactionCounter from "../../components/ReactionCounter/ReactionCounter";
import ReactionToolbar from "../../components/ReactionToolbar/ReactionToolbar";
import ActionButton from "../../components/ActionButton/ActionButton";
import RepostModal from "../../containers/RepostModal/RepostModal";
import ReactModal from "../../containers/ReactModal/ReactModal";
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
    isReacting: false,
    pickedReaction: null,
    doneReacting: false,
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
      `Dear Stranger, today is going to be a good day! And here’s why…`,
      `Dear stranger, I did something nice for someone today!`,
      ``,
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
            <ReactionCounter />
            <ReactionToolbar
              passingOn="story"
              clickedRepost={() =>
                this.setState({ isReposting: true, doneReposting: false })
              }
              clickedReact={() =>
                this.setState({
                  isReacting: true,
                  pickedReaction: null,
                  doneReacting: false,
                })
              }
            />
            <ActionButton clicked={this.quitInterfaceHandler}>
              Done
            </ActionButton>
            <TopSpacing />
          </Col>
        </Row>
        <RepostModal
          repostingA="story"
          isReposting={this.state.isReposting}
          doneReposting={this.state.doneReposting}
          clickedRepost={() => this.setState({ doneReposting: true })}
          clickedExit={() => this.setState({ isReposting: false })}
        />
        <ReactModal
          isReacting={this.state.isReacting}
          clickedExit={() => this.setState({ isReacting: false })}
          pickedReaction={(r) => this.setState({ pickedReaction: r })}
          currentReaction={this.state.pickedReaction}
          doneReacting={this.state.doneReacting}
          clickedSend={() => this.setState({ doneReacting: true })}
        />
        <OtherLetterActions
          activateIf={this.state.isShowingMoreMenu}
          clickedExit={() => this.setState({ isShowingMoreMenu: false })}
          clickedShare={() => this.setState({ featureNotAvailable: true })}
          clickedReport={() => this.setState({ featureNotAvailable: true })}
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
