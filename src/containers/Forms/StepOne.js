import React from "react";

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

const StepOne = (props) => (
  <Formik
    initialValues={{
      picked: "",
    }}
    validationSchema={schema}
    onSubmit={async (values) => {
      await new Promise((r) => setTimeout(r, 250));
      sessionStorage.setItem("starter", values.picked);
      props.nextStepHandler();
    }}
  >
    {({ values, errors }) => (
      <Form>
        <div
          role="group"
          aria-labelledby="select-letter-starter"
          className={classes.formWrapper}
        >
          <h2>Start Your Story With...</h2>
          <p className={classes.sampletext}>"Dear Stranger..."</p>
          <label>
            <Field type="radio" name="picked" value="0" />
            <p>Today is going to be a good day! And here’s why…”</p>
          </label>
          <label>
            <Field type="radio" name="picked" value="1" />
            <p>I did something nice for someone today!"</p>
          </label>
          <label>
            <Field type="radio" name="picked" value="2" />
            <p>I'll write my own custom starter.</p>
          </label>
        </div>
        {errors.picked ? <p className={classes.error}>{errors.picked}</p> : null}
        <NextBackButtons goBack={props.goBackHandler} />
      </Form>
    )}
  </Formik>
);

export default StepOne;
