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

// import CSS modules
// import classes from "./PostProcess.module.css";

class PostingProcess extends Component {
  clickedBackButtonHandler = () => {
    this.props.history.push("/");
    this.setState({ composeMenuisOpen: false });
  };

  render() {
    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <h1>Hello World</h1>
        </Layout>
      </>
    );
  }
}

export default withRouter(PostingProcess);
