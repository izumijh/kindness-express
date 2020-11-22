import React, { useState, useEffect } from "react";

// import formik - a form library
import { Formik, Field, Form } from "formik";

// import required components
import NextBackButtons from "../NextBackButtons/NextBackButtons";

// import CSS modules
import classes from "./StepThree.module.css";

const StepThree = (props) => {
  const [defaultRadio, setRadio] = useState("");
  useEffect(() => {
    setRadio(sessionStorage.getItem("authorName"));
  }, []);

  return (
    <Formik
      initialValues={{
        location: "",
        date: "",
        authorName: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 250));
        sessionStorage.setItem("location", values.location);
        sessionStorage.setItem("date", values.date);
        sessionStorage.setItem("authorName", values.authorName);

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
            <h2>Almost There...</h2>

            <label htmlFor="location">Where did this happen?</label>
            <Field
              type="text"
              name="location"
              className={classes.locationInput}
            />

            <label htmlFor="date">When did it happen?</label>
            <Field type="date" name="date" placeholder="xx/xx/xx" />

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
          </div>
          <NextBackButtons goBack={props.goBackHandler} />
        </Form>
      )}
    </Formik>
  );
};

export default StepThree;
