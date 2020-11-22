import React from "react";

// import formik - a form library
import { Formik, Field, Form } from "formik";

// import required components
import NextBackButtons from "../NextBackButtons/NextBackButtons";

// import CSS modules
import classes from "./StepTwo.module.css";

const StepTwo = (props) => {
  const starters = [
    `Today is going to be a good day! And here’s why…`,
    `I did something nice for someone today!`,
    `I'll write my own custom starter.`,
  ];

  const starterPicked = sessionStorage.getItem("starter");

  return (
    <Formik
      initialValues={{
        story: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 250));
        sessionStorage.setItem("story", values.story);
        console.log(values.story);

        props.nextStepHandler();
      }}
    >
      {({ values }) => (
        <Form>
          <div
            role="group"
            aria-labelledby="select-letter-starter"
            className={classes.formWrapper}
          >
            <h2>Tell Us What Happened!</h2>
            <p className={classes.sampletext}>
              "Dear Stranger...
              <span>
                {starterPicked === "2" ? `"` : starters[starterPicked]}
              </span>
            </p>

            <Field
              component="textarea"
              name="story"
              placeholder="Start Writing..."
            />
          </div>
          <NextBackButtons goBack={props.goBackHandler} />
        </Form>
      )}
    </Formik>
  );
};

export default StepTwo;
