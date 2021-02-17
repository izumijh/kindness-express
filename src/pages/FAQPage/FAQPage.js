import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import required components
import Content from "../../components/Content/Content";
import ActionButton from "../../components/ActionButton/ActionButton";
import ExpandingCard from "../../components/ExpandingCard/ExpandingCard";
import NonExpandingCard from "../../components/NonExpandingCard/NonExpandingCard";
import FeatureWIPModal from "../../containers/FeatureWIPModal/FeatureWIPModal";

// import required svg icons
import intro from "../../assets/images/faq-icons/introduction.svg";
import features from "../../assets/images/faq-icons/features.svg";
import pwa from "../../assets/images/faq-icons/add-to-home.svg";
import report from "../../assets/images/faq-icons/report.svg";

// import FAQ list
import * as FAQ from "./FAQs";

// import CSS modules
import classes from "./FAQPage.module.css";

class FAQPage extends Component {
  state = {
    currentlyActive: { about: null, features: null },
    featureNotAvailable: false,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
  };

  expandHandler = (category, id) => {
    if (category === "about") {
      if (id === this.state.currentlyActive.about) {
        this.setState({ currentlyActive: { about: null, features: null } });
      } else {
        this.setState({ currentlyActive: { about: id, features: null } });
      }
    }
    if (category === "features") {
      if (id === this.state.currentlyActive.features) {
        this.setState({ currentlyActive: { about: null, features: null } });
      } else {
        this.setState({ currentlyActive: { about: null, features: id } });
      }
    }
  };

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
              <Content>
                <h2>FAQ</h2>
              </Content>
            </Col>
          </Row>

          {/* Intro to Campaign */}
          <Row className={classes.intro}>
            <Col xs={12} className={classes.section}>
              <Content>
                <img src={intro} alt="balloon" />
                <h3> Introduction to Campaign</h3>
              </Content>
              {FAQ.AboutTheCampaign.map((faq, id) => {
                return (
                  <ExpandingCard
                    key={faq.q}
                    question={faq.q}
                    answer={faq.a}
                    borderColor={"#DCF3FA"}
                    active={this.state.currentlyActive.about === id}
                    clicked={() => this.expandHandler("about", id)}
                  />
                );
              })}
            </Col>
          </Row>

          {/* Website Features */}
          <Row className={classes.features}>
            <Col xs={12} className={classes.section}>
              <Content>
                <img src={features} alt="features" />
                <h3>Website Features</h3>
              </Content>
              {FAQ.WebsiteFeatures.map((faq, id) => {
                return (
                  <ExpandingCard
                    key={faq.q}
                    question={faq.q}
                    answer={faq.a}
                    borderColor={"#FFFAB7"}
                    active={this.state.currentlyActive.features === id}
                    clicked={() => this.expandHandler("features", id)}
                  />
                );
              })}
            </Col>
          </Row>

          {/* Install to Home Page */}
          <Row className={classes.addToHomepage}>
            <Col xs={12} className={classes.section}>
              <Content>
                <img src={pwa} alt="install" />
                <h3>Add to Homepage</h3>
              </Content>
              <div className={classes.card}>
                <p className={classes.question}>{FAQ.InstalltoHomepage[0].q}</p>
                <ActionButton clicked={() => this.setState({ featureNotAvailable: true })}>Install it Now!</ActionButton>
              </div>
            </Col>
          </Row>

          {/* Report a Problem */}
          <Row className={classes.reportProblem}>
            <Col xs={12} className={classes.section}>
              <Content>
                <img src={report} alt="report" />
                <h3>Report a Problem</h3>
              </Content>
              {FAQ.ReportProblem.map((faq, id) => {
                return (
                  <NonExpandingCard
                    key={faq.q}
                    question={faq.q}
                    borderColor={"#FDE9D7"}
                    clicked={() => this.setState({ featureNotAvailable: true })}
                  />
                );
              })}
            </Col>
          </Row>
          <FeatureWIPModal
            activateIf={this.state.featureNotAvailable}
            clickedExit={() => this.setState({ featureNotAvailable: false })}
          />
        </Layout>
      </>
    );
  }
}

export default withRouter(FAQPage);
