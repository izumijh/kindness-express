import React, { useState } from "react";

// import formik - a form library
import { Formik, Field, Form } from "formik";

// impot Yup - a validation library
import * as Yup from "yup";

// import required components
import NextBackButtons from "../NextBackButtons/NextBackButtons";

// import CSS modules
import classes from "./StepOne.module.css";

const schema = Yup.object().shape({
  picked: Yup.string().required("*Required"),
});

const StepOne = (props) => {
  // State is just for recording which <p> should be highlighted
  const [currentPick, updatePick] = useState("0");

  return (
    <Formik
      initialValues={{
        picked: "0",
      }}
      validationSchema={schema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 250));
        sessionStorage.setItem("starter", values.picked);
        props.nextStepHandler();
      }}
    >
      {({ values, errors }) => (
        <Form
          onChange={(e) => {
            values[e.target.name] = e.target.value;
            updatePick(values.picked);
          }}
        >
          <div
            role="group"
            aria-labelledby="select-letter-starter"
            className={classes.formWrapper}
          >
            <h2>Start Your Story With...</h2>
            <p className={classes.sampletext}>"Dear Stranger..."</p>
            <label className={currentPick === "0" ? classes.active : null}>
              <Field type="radio" name="picked" value="0" />
              <p>Today is going to be a good day! And here’s why…”</p>
            </label>
            <label className={currentPick === "1" ? classes.active : null}>
              <Field type="radio" name="picked" value="1" />
              <p>I did something nice for someone today!"</p>
            </label>
            <label>
              <Field type="radio" name="picked" value="2" />
              <p>I'll write my own custom starter.</p>
            </label>
          </div>
          {errors.picked ? (
            <p className={classes.error}>{errors.picked}</p>
          ) : null}
          <NextBackButtons goBack={props.goBackHandler} />
        </Form>
      )}
    </Formik>
  );
};

export default StepOne;
