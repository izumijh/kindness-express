import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

// import Lottie
import Lottie from "react-lottie-wrapper";
import * as animationOne from "../../assets/animations/registration-carousel/1.json";
import * as animationTwo from "../../assets/animations/registration-carousel/3.json";
import * as animationThree from "../../assets/animations/registration-carousel/2.json";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import required components
import SignUpModal from "../../containers/SignUpModal/SignUpModal";

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
    const optionOne = {
      loop: true,
      autoplay: true,
      speed: 3,
      animationData: JSON.parse(JSON.stringify(animationOne.default)),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const optionTwo = {
      loop: true,
      autoplay: true,
      animationData: JSON.parse(JSON.stringify(animationTwo.default)),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    const optionThree = {
      loop: true,
      autoplay: true,
      animationData: JSON.parse(JSON.stringify(animationThree.default)),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <TopSpacing />
          <Row>
            <Col xs={12} className={`loginCarousel ${classes.wrapper}`}>
              <Carousel
                controls={false}
                interval={this.state.signUpStatus !== null ? null : 4000}
              >
                <Carousel.Item className={classes.carouselPage}>
                  <Lottie options={optionOne} width={"100%"} />
                  <h3>Let's start some noise!</h3>
                  <p>Together, we can remind people of kindness again!</p>
                </Carousel.Item>
                <Carousel.Item className={classes.carouselPage}>
                  <Lottie options={optionTwo} width={"100%"} />
                  <h3>Your Stories Make Real Impact.</h3>
                  <p>
                    The more stories shared, the more we will donate to the
                    charities involved.
                  </p>
                </Carousel.Item>
                <Carousel.Item className={classes.carouselPage}>
                  <Lottie options={optionThree} width={"100%"} />
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
