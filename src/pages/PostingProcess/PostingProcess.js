import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Router Props
import { withRouter } from "react-router-dom";

// import layout
import Layout from "../../hocs/Layout/Layout";

// import required components
import Content from "../../components/Content/Content";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import FormStepOne from "../../components/Forms/StepOne";
import FormStepTwo from "../../components/Forms/StepTwo";

// import CSS modules
import classes from "./PostingProcess.module.css";

class PostingProcess extends Component {
  state = {
    step: 1,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
    this.setState({ composeMenuisOpen: false });
  };

  nextStepHandler = () => {
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <Row style={{ width: "100vw", padding: ".5rem" }}>
            <Col xs={12}>
              <ProgressBar step={this.state.step} />
            </Col>
            <Col xs={12}>
              <Content>

                {/* We Show and Hide Relevant Steps of the Process */}
                {/* <FormStepOne nextStepHandler={this.nextStepHandler} /> */}
                <FormStepTwo nextStepHandler={this.nextStepHandler} />

              </Content>
            </Col>
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(PostingProcess);
