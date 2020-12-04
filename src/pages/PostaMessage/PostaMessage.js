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

// import content component
import Content from "../../components/Content/Content";

// import Action Button component
import ActionButton from "../../components/ActionButton/ActionButton";

// import CSS modules
import classes from "./PostaMessage.module.css";

class PostaMessage extends Component {
  clickedBackButtonHandler = () => {
    this.props.history.push("/");
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
          <Row style={{ width: "100vw", padding: ".5rem"}}>
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
                    </Form>
                  )}
                </Formik>
                <ActionButton>Make Someone's Day Better</ActionButton>
              </Content>
            </Col>
          </Row>
        </Layout>
      </>
    );
  }
}

export default withRouter(PostaMessage);
