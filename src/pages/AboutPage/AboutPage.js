import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// Import Router Props
import { withRouter } from "react-router-dom";

// import Font Awesome library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Font Awesome Icons
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import content component
import Content from "../../components/Content/Content";

// import required images
import logo from "../../assets/images/Logo.svg";

// import CSS modules
import classes from "./AboutPage.module.css";

class AboutPage extends Component {
  clickedBackButtonHandler = () => {
    this.props.history.push("/");
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
                <h2>About Us</h2>
              </Content>
            </Col>
            <Col xs={12} className={classes.body}>
              <Content>
                <div className={classes.logo}>
                  <Image src={logo} alt="The Kindness Express" fluid />
                </div>
                <div className={classes.bodytext}>
                  <p>
                    <b>The Kindness Express</b> is brought to you by{" "}
                    <b>Kindness Malaysia</b> and <b>Pos Malaysia </b>. It is a
                    social good campaign that is running in spirits of
                    celebrating the International Kindness Day (Nov 13).
                  </p>
                  <p>
                    At the end of this digital campaign, based on the number of
                    stories submitted,{" "}
                    <b>
                      we will donate to several Malaysian charity organisations
                      - such as CHILD, Murni and SPCA Malaysia.
                    </b>
                  </p>
                  <p>
                    From now onwards until the end of November 2021, be sure to
                    come back often for your dose of local heartwarming stories!
                    This platform can be your <b>wholesome social media</b>.
                  </p>
                  <p>Let’s remind each other of the magic in kindness!</p>
                </div>
                <div className={classes.socials}>
                  <FontAwesomeIcon icon={faInstagram} />
                  <p>@Kindness.Express</p>
                </div>
              </Content>
            </Col>
            <TopSpacing />
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(AboutPage);
