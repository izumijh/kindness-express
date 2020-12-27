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

// import SVG image
import calendar from "../../assets/images/calendar.svg";
import location from "../../assets/images/map-pin.svg";

// import kind stories
import { stories } from "../../database/kind-stories/kind-stories";

// import css modules
import classes from "./LetterInterface.module.css";

class LetterInterface extends Component {
  state = {
    isReposting: false,
    doneReposting: false,
    isReacting: false,
    pickedReaction: null,
    doneReacting: false,
    isShowingMoreMenu: false,
  };

  render() {
    let story = Math.floor(Math.random() * Math.floor(stories.length));

    return (
      <Layout
        currentLocation={this.props.location.pathname}
        clickedBackButton={() => this.props.history.push("/")}
        clickedMoreButton={() => this.setState({ isShowingMoreMenu: true })}
      >
        <TopSpacing />
        <Row>
          <Col xs={12} className={classes.wrapper}>
            <Letter>
              {stories[story].content}

              <p>{stories[story].author}</p>

              <span className={classes.dashedLine}></span>

              <p className={classes.details}>
                <Image src={calendar} alt="icon of a calendar" />
                {stories[story].date}
              </p>
              <p className={classes.details}>
                <Image src={location} alt="icon that means location" />
                {stories[story].location}
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
            <ActionButton clicked={() => this.props.history.push("/")}>
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
        />
      </Layout>
    );
  }
}

export default LetterInterface;
