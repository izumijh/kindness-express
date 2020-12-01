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

// import SVG image
import calendar from "../../assets/images/calendar.svg";
import location from "../../assets/images/map-pin.svg";

// import css modules
import classes from "./LetterInterface.module.css";

class LetterInterface extends Component {
  state = {
    isReposting: false,
    doneReposting: false,
    isReacting: false,
    pickedReaction: null,
    doneReacting: false,
  };

  render() {
    return (
      <Layout
        currentLocation={this.props.location.pathname}
        clickedBackButton={() => this.props.history.push("/")}
      >
        <TopSpacing />
        <Row>
          <Col xs={12} className={classes.wrapper}>
            <Letter>
              <p>
                <b>
                  Dear stranger, I hope this story will prove that being kind is
                  great!
                </b>
              </p>
              <p>
                I was heading to my car today and an aunty walked up to me
                asking whether I have any parking coupons to sell her. ( She
                doesn’t know how to use a smartphone to pay for parking. )
              </p>
              <p>
                I found extras in my car, and I gave her one. She was happy and
                wanted to pay me back, but I refused. It feels great to be able
                to help someone out!
              </p>

              <span className={classes.dashedLine}></span>

              <p className={classes.details}>
                <Image src={calendar} alt="icon of a calendar" />
                28/11/2020
              </p>
              <p className={classes.details}>
                <Image src={location} alt="icon that means location" />
                The One Academy, Malaysia
              </p>
            </Letter>
            <ReactionCounter />
            <ReactionToolbar
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
      </Layout>
    );
  }
}

export default LetterInterface;
