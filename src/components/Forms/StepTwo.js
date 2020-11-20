import React from "react";

// import formik - a form library
import { Formik, Field, Form } from "formik";

// import required components
import NextBackButtons from "../NextBackButtons/NextBackButtons";

// import CSS modules
import classes from "./StepTwo.module.css";

const StepTwo = (props) => (
  <div>
    <Formik
      initialValues={{
        picked: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        sessionStorage.setItem("starter", values.picked);
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
            <label>
              <Field type="radio" name="picked" value="0" />
              <p>Today is going to be a good day! And here’s why…”</p>
            </label>
            <label>
              <Field type="radio" name="picked" value="1" />
              <p>This made my day! So I hope it makes your day better too…”</p>
            </label>
            <label>
              <Field type="radio" name="picked" value="3" />
              <p>I did something nice today, and it made me feel great!"</p>
            </label>
            <label>
              <Field type="radio" name="picked" value="4" />
              <p>I'll write my own custom starter.</p>
            </label>
          </div>
          <NextBackButtons />
        </Form>
      )}
    </Formik>
  </div>
);

export default StepTwo;
