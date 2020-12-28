import React, { Component } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Router Props
import { withRouter } from "react-router-dom";

// import formik - a form library
import { Formik, Field, Form } from "formik";

// import Yup - a validation library
import * as Yup from "yup";

// import layout and top spacing component
import Layout from "../../hocs/Layout/Layout";
import TopSpacing from "../../components/TopSpacing/TopSpacing";

// import required components
import Content from "../../components/Content/Content";
import ActionButton from "../../components/ActionButton/ActionButton";
import SendingModal from "../../containers/SendingModal/SendingModal";

// import CSS modules
import classes from "./PostaMessage.module.css";

class PostaMessage extends Component {
  state = {
    sendingStory: false,
    stopAnimation: true,
  };

  clickedBackButtonHandler = () => {
    this.props.history.push("/");
  };

  submitMessageHandler = () => {
    sessionStorage.setItem("planeSent", true);
    this.setState({ sendingStory: true });
  };

  messageSentHandler = () => {
    this.props.history.push("/");
    this.setState({ sendingStory: false, stopAnimation: true });
  };

  componentDidUpdate = () => {
    // Make animation happen after timer of 0.6s ends
    if (this.state.sendingStory && this.state.stopAnimation) {
      setTimeout(() => {
        this.setState({ stopAnimation: false });
      }, 600);
    }
  };

  render() {
    const schema = Yup.object().shape({
      kindwords: Yup.string().required("*Required"),
    });

    return (
      <>
        <Layout
          currentLocation={this.props.location.pathname}
          clickedBackButton={this.clickedBackButtonHandler}
        >
          <TopSpacing />
          <Row style={{ width: "100vw", padding: ".5rem" }}>
            <Col xs={12} className={classes.wrapper}>
              <Content>
                <h2>Send Some Kind Words!</h2>
                <p>Your messages will be posted out in a paper plane!</p>
              </Content>
              <Content>
                <Formik
                  initialValues={{
                    kindwords: "",
                  }}
                  validationSchema={schema}
                  onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 250));
                    sessionStorage.setItem("kindwords", values.kindwords);
                  }}
                >
                  {({ errors }) => (
                    <Form>
                      <div
                        role="group"
                        aria-labelledby="post-kind-words"
                        className={classes.formWrapper}
                      >
                        <Field
                          component="textarea"
                          name="kindwords"
                          placeholder="Write Something..."
                        />
                      </div>
                      {errors.kindwords ? (
                        <p className={classes.error}>{errors.kindwords}</p>
                      ) : null}
                      <ActionButton clicked={this.submitMessageHandler} forSubmit>
                        Make Someone's Day Better
                      </ActionButton>
                    </Form>
                  )}
                </Formik>
              </Content>
            </Col>
          </Row>
          <Row
            className={
              this.state.sendingStory
                ? `${classes.sendModal} ${classes.active}`
                : `${classes.sendModal}`
            }
          >
            <SendingModal
              alt
              isStopped={this.state.stopAnimation}
              afterAnimation={this.messageSentHandler}
            />
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(PostaMessage);
