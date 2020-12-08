import React, { useState, useEffect } from "react";

// import React Bootstrap components
import Row from "react-bootstrap/Row";

// import formik - a form library
import { Formik, Field, Form } from "formik";

// impot Yup - a validation library
import * as Yup from "yup";

// import required components
import PopUpModal from "../../components/PopUpModal/PopUpModal";
import NextBackButtons from "../../containers/NextBackButtons/NextBackButtons";

// import CSS modules
import classes from "./SignUpModal.module.css";

const schema = Yup.object().shape({
  name: Yup.string().required("*Done filling up everything yet?"),
  language: Yup.string().required("*Done filling up everything yet?"),
  colour: Yup.string().required("*Done filling up everything yet?"),
});

const SignUpModal = (props) => {
  const [defaultLanguage, setLanguage] = useState([]);
  const [defaultColour, setColour] = useState("");

  useEffect(() => {
    console.log(JSON.stringify(defaultLanguage));
  }, [defaultLanguage]);

  const languagesArray = [
    { display: "ENG", value: "ENG" },
    { display: "BM", value: "BM" },
    { display: "中文", value: "CN" },
    { display: "தமிழ்", value: "TAMIL" },
  ];
  const coloursArray = ["#FFD9D9", "#FDFFC6", "#CBFFCD", "#D0EFFF", "#F6CEFF"];

  const handleLanguageRadios = (langValue) => {
    let defaultArray = [...defaultLanguage];
    let flattenedArray = defaultArray.flat(Infinity);

    if (flattenedArray.includes(langValue)) {
      // delete the language from selection
      let newArray = flattenedArray.filter((v) => {
        return v !== langValue;
      });
      setLanguage(newArray);
    }

    if (!defaultArray.includes(langValue)) {
      // add the language to selection
      let newArray = [...flattenedArray, langValue];
      setLanguage(newArray);
    }
  };

  return (
    <Row
      key={props.signUpStatus}
      className={props.signUpStatus !== null ? classes.fadeInAnim : null}
    >
      {props.signUpStatus === 0 ? (
        <PopUpModal>
          <p style={{ margin: 0 }}>Authenticating...</p>
        </PopUpModal>
      ) : null}
      {props.signUpStatus === 1 ? (
        <PopUpModal>
          <Formik
            initialValues={{
              name: "",
              language: "",
              colour: "",
            }}
            validationSchema={schema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 250));
              sessionStorage.setItem("username", values.name);
              sessionStorage.setItem("preferredLanguage", defaultLanguage);
              sessionStorage.setItem("colour", values.colour);

              props.nextStepHandler();
            }}
          >
            {({ errors }) => (
              <Form>
                <div
                  role="group"
                  aria-labelledby="sign-up"
                  className={classes.formWrapper}
                >
                  <h1>Almost There!</h1>
                  <p style={{ marginBottom: "1.5rem" }}>
                    We want to know more about you!
                  </p>

                  {/* Nickname Field */}
                  <label htmlFor="name">Pen name / Nickname</label>
                  <Field
                    type="text"
                    name="name"
                    className={classes.nameInput}
                  />

                  {/* Language Field */}
                  <h3 style={{ marginBottom: ".5rem" }}>
                    I prefer letters that are in...
                  </h3>
                  <div className={classes.languageButtons}>
                    {languagesArray.map((lang) => {
                      return (
                        <label
                          key={lang.value}
                          className={
                            defaultLanguage.includes(lang.value)
                              ? `${classes.languageButton} ${classes.active}`
                              : `${classes.languageButton}`
                          }
                        >
                          <Field
                            type="radio"
                            name="language"
                            value={lang.value}
                            onClick={() => handleLanguageRadios(lang.value)}
                          />
                          <p>{lang.display}</p>
                        </label>
                      );
                    })}
                  </div>

                  {/* Favourite Colour Field */}
                  <h3 style={{ marginBottom: ".5rem" }}>Favourite Color</h3>
                  <div className={classes.colourButtons}>
                    {coloursArray.map((c) => {
                      return (
                        <label
                          key={c}
                          className={
                            defaultColour === c
                              ? `${classes.colourButton} ${classes.active}`
                              : `${classes.colourButton}`
                          }
                          style={{ backgroundColor: c }}
                          onClick={() => setColour(c)}
                        >
                          <Field type="radio" name="colour" value={c} />
                        </label>
                      );
                    })}
                  </div>
                </div>
                {errors.name && errors.language && errors.colour ? (
                  <p className={classes.error}>{errors.name}</p>
                ) : null}
                <NextBackButtons back="Cancel" next="Done" />
              </Form>
            )}
          </Formik>
        </PopUpModal>
      ) : null}
      {props.signUpStatus === 2 ? (
        <PopUpModal>
          <p style={{ margin: 0 }}>You're logged in!</p>
        </PopUpModal>
      ) : null}
    </Row>
  );
};

export default SignUpModal;
