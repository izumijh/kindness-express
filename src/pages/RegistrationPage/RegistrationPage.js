import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import required components
import SignUpModal from "../../containers/SignUpModal/SignUpModal";

// import required SVG images
import one from "../../assets/images/registration-carousel/1.svg";
import two from "../../assets/images/registration-carousel/2.svg";
import three from "../../assets/images/registration-carousel/3.svg";

// import CSS modules
import classes from "./RegistrationPage.module.css";

class RegistrationPage extends Component {
  state = {
    popUpText: "Authenticating...",
    signUpStatus: null,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
  };

  loginHandler = () => {
    this.setState({ signUpStatus: 0 });
  };

  quitLoginHandler = () => {
    this.setState({ signUpStatus: null });
  };

  nextStepHandler = () => {
    this.setState({ signUpStatus: 2 });
  };

  // Let's fake some authentication processes
  componentDidUpdate() {
    if (this.state.signUpStatus === 0) {
      setTimeout(() => this.setState({ signUpStatus: 1 }), 2500);
    }
    if (this.state.signUpStatus === 2) {
      sessionStorage.setItem("registeredUser", true);
      sessionStorage.setItem("isNewlyRegisteredUser", true);
      setTimeout(() => {
        this.setState({ signUpStatus: null });
        this.props.history.push("/");
      }, 2500);
    }
  }

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <TopSpacing />
          <Row>
            <Col xs={12} className={classes.wrapper}>
              <Carousel
                controls={false}
                interval={this.state.signUpStatus !== null ? null : 5000}
              >
                <Carousel.Item className={classes.carouselPage}>
                  <img src={one} alt="hot air balloon" />
                  <h3>Let's start some noise!</h3>
                  <p>Together, we can remind people of kindness again!</p>
                </Carousel.Item>
                <Carousel.Item className={classes.carouselPage}>
                  <img
                    src={two}
                    alt="letters tied to balloons floating around"
                  />
                  <h3>Your Stories Make Real Impact.</h3>
                  <p>
                    The more stories shared, the more we will donate to the
                    charities involved.
                  </p>
                </Carousel.Item>
                <Carousel.Item className={classes.carouselPage}>
                  <img src={three} alt="you and your personal mailbox" />
                  <h3>Never Lose Your Positive Energy!</h3>
                  <p>
                    Access features such as personal goals, daily kind tasks and
                    many more!
                  </p>
                </Carousel.Item>
              </Carousel>

              <div className={classes.loginButtons}>
                <button onClick={this.loginHandler}>
                  Log in with Instagram
                </button>
                <button onClick={this.loginHandler}>Log in with Email</button>
                <button onClick={this.loginHandler}>
                  Log in with Phone Number
                </button>
              </div>
            </Col>
          </Row>
          {this.state.signUpStatus !== null ? (
            <SignUpModal
              quitLogin={this.quitLoginHandler}
              signUpStatus={this.state.signUpStatus}
              nextStepHandler={this.nextStepHandler}
            />
          ) : null}
        </Layout>
      </>
    );
  }
}

export default withRouter(RegistrationPage);
