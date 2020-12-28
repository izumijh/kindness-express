import React, { Component } from "react";

// import balloons component
import BalloonLetter from "../../components/BalloonLetter/BalloonLetter";

// import paper plane component
import PaperPlane from "../../components/PaperPlane/PaperPlane";

// import css modules
import classes from "./BalloonFeed.module.css";

class BalloonFeed extends Component {
  state = {
    balloons: [
      { colour: "#F8B67B", design: 0 },
      { colour: "#ABDAEA", design: 1 },
      { colour: "#91D8C9", design: 4 },
    ],
    key: 0,
  };

  componentDidMount() {
    this.generateBalloons();
    this.interval = setInterval(() => {
      this.generateBalloons();
    }, 12000);
  }

  generateBalloons() {
    console.log("generating balloons");

    const colours = ["#F8B67B", "#ABDAEA", "#91D8C9"];
    const newBalloons = [...this.state.balloons];

    for (let i = 0; i < newBalloons.length; i++) {
      newBalloons[i] = {
        colour: colours[Math.floor(Math.random() * colours.length)],
        design: Math.floor(Math.random() * Math.floor(4)),
      };
    }

    this.setState({ balloons: newBalloons, key: this.state.key + 1 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span key={this.state.key}>
        <span className={classes.middleBalloon}>
          <BalloonLetter
            currentColour={this.state.balloons[0].colour}
            currentDesign={this.state.balloons[0].design}
            clicked={() =>
              this.props.clickedOnLetter(
                this.state.balloons[0].colour,
                this.state.balloons[0].design
              )
            }
          />
        </span>

        <span className={classes.firstBalloon}>
          <BalloonLetter
            currentColour={this.state.balloons[1].colour}
            currentDesign={this.state.balloons[1].design}
            clicked={() =>
              this.props.clickedOnLetter(
                this.state.balloons[1].colour,
                this.state.balloons[1].design
              )
            }
          />
        </span>

        <span className={classes.thirdBalloon}>
          <BalloonLetter
            currentColour={this.state.balloons[2].colour}
            currentDesign={this.state.balloons[2].design}
            clicked={() =>
              this.props.clickedOnLetter(
                this.state.balloons[2].colour,
                this.state.balloons[2].design
              )
            }
          />
        </span>

        <span className={classes.paperPlanes}>
          <PaperPlane clicked={this.props.clickedOnPlane} />
          <PaperPlane clicked={this.props.clickedOnPlane} />
        </span>
      </span>
    );
  }
}

export default BalloonFeed;
