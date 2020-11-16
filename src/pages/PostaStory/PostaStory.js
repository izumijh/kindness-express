import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout
import Layout from "../../hocs/Layout/Layout";

// import Action Button component
import ActionButton from "../../components/ActionButton/ActionButton";

// import SVG images
import illustration from "../../assets/images/write-something.svg";
import tip from "../../assets/images/tip.svg";

// import CSS modules
import classes from "./PostaStory.module.css";

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
          <Row>
            <Col
              xs={12}
              className="text-center"
              style={{ padding: "5vh 1.9rem" }}
            >
              <h1>Hello, You!</h1>
              <h2> Are you ready to spread some positivity?</h2>
              <Image
                src={illustration}
                alt="image of an empty paper and a pencil for you."
                fluid
                style={{ padding: "2rem 0" }}
              />
              <ActionButton fullWidth>Post a Story</ActionButton>
              <div className={classes.tip}>
                <Image
                  src={tip}
                  alt="As your stories will be sent to real people, try not to include foul language or inappropriate content in your writing."
                  fluid
                />
              </div>
            </Col>
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(HomePage);
