import React, { useState } from "react";

// import formik - a form library
import { Formik, Field, Form } from "formik";

// impot Yup - a validation library
import * as Yup from "yup";

// import required components
import NextBackButtons from "../NextBackButtons/NextBackButtons";

// import CSS modules
import classes from "./StepThree.module.css";

const schema = Yup.object().shape({
  location: Yup.string().required("*Required"),
  date: Yup.string().required("*Required"),
  authorName: Yup.string().required("*Required"),
});

const StepThree = (props) => {
  const [defaultRadio, setRadio] = useState("");

  return (
    <Formik
      initialValues={{
        location: "",
        date: "",
        authorName: "",
      }}
      validationSchema={schema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 250));
        sessionStorage.setItem("location", values.location);
        sessionStorage.setItem("date", values.date);
        sessionStorage.setItem("authorName", values.authorName);

        props.nextStepHandler();
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div
            role="group"
            aria-labelledby="select-letter-starter"
            className={classes.formWrapper}
          >
            <h2>Almost There...</h2>

            <label htmlFor="location">Where did this happen?</label>
            <Field
              type="text"
              name="location"
              className={classes.locationInput}
            />
            {errors.location && touched.location ? (
              <p className={classes.error}>{errors.location}</p>
            ) : null}

            <label htmlFor="date">When did it happen?</label>
            <Field type="date" name="date" placeholder="xx/xx/xx" />
            {errors.date && touched.date ? (
              <p className={classes.error}>{errors.date}</p>
            ) : null}

            <p style={{ marginBottom: ".5rem" }}>Show author name as...</p>

            <label
              className={
                defaultRadio === "initials"
                  ? `${classes.authorNameButton} ${classes.active}`
                  : `${classes.authorNameButton}`
              }
              style={{ marginRight: "2%" }}
              onClick={() => setRadio("initials")}
            >
              <Field type="radio" name="authorName" value="initials" />
              <p>Initials Only</p>
            </label>

            <label
              className={
                defaultRadio === "username"
                  ? `${classes.authorNameButton} ${classes.active}`
                  : `${classes.authorNameButton}`
              }
              onClick={() => setRadio("username")}
            >
              <Field type="radio" name="authorName" value="username" />
              <p>Username</p>
            </label>

            {errors.authorName && touched.authorName ? (
              <p className={classes.error}>{errors.authorName}</p>
            ) : null}
          </div>
          <NextBackButtons goBack={props.goBackHandler} />
        </Form>
      )}
    </Formik>
  );
};

export default StepThree;
