import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import content component
import Content from "../../components/Content/Content";

// import CSS modules
import classes from "./CreditsPage.module.css";

class CreditsPage extends Component {
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
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(CreditsPage);
