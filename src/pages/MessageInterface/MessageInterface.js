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

// import kind words
import { messages } from "../../database/kind-words/kind-words";

// import css modules
import classes from "./MessageInterface.module.css";

class MessageInterface extends Component {
  state = {
    randomNum: Math.floor(Math.random() * Math.floor(messages.length)),
    isReposting: false,
    doneReposting: false,
    showReposting: false,
    isUndoingRepost: false,
    showRepostInfo: false,
    isReacting: false,
    pickedReaction: null,
    doneReacting: false,
    isShowingMoreMenu: false,
    featureNotAvailable: false,
  };

  quitInterfaceHandler = () => {
    if (sessionStorage.getItem("readingOwnMessage")) {
      // remove reading message status
      sessionStorage.removeItem("readingOwnMessage");

      //  remove animation
      sessionStorage.removeItem("planeSent");
    }

    //  Send user to homepage
    this.props.history.push("/");
  };

  render() {
    // generate a random message from database
    let message = messages[this.state.randomNum];

    // if user is reading his own message, render his message instead
    if (sessionStorage.getItem("readingOwnMessage", true)) {
      message = {
        author: `- ${sessionStorage.getItem("username")}`,
        date: `30/12/2020`,
        location: `The One Academy`,
        content: (
          <>
            <p>{`"${sessionStorage.getItem("kindwords")}"`}</p>
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
            <Letter alt>
              {message.content}

              <p>{message.author}</p>

              <span className={classes.dashedLine}></span>

              <p className={classes.details}>
                <Image src={calendar} alt="icon of a calendar" />
                {message.date}
              </p>
              <p className={classes.details}>
                <Image src={location} alt="icon that means location" />
                {message.location}
              </p>
            </Letter>
            <ReactionToolbar
              isMessage
              isReposted={this.state.showReposted}
              clickedInfo={() => this.setState({ showRepostInfo: true })}
              clickedRepost={() =>
                //  if already reposted, run Undo repost modal instead of repost modal
                this.state.showReposted
                  ? this.setState({ isUndoingRepost: true })
                  : this.setState({ isReposting: true, doneReposting: false })
              }
              count={message.reactions}
            />
            <ActionButton clicked={this.quitInterfaceHandler}>
              Done Reading
            </ActionButton>
            <TopSpacing />
          </Col>
        </Row>
        <RepostModal
          isMessage
          isReposting={this.state.isReposting}
          doneReposting={this.state.doneReposting}
          clickedRepost={() =>
            this.setState({ doneReposting: true, showReposted: true })
          }
          clickedExit={() => this.setState({ isReposting: false })}
        />
        <UndoRepostModal
          isMessage
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

export default MessageInterface;
