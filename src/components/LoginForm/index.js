import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../FormikControl";
import ButtonLink from "../ButtonLink";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email(),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("The values of the form are:", values);
  };

  return (
    <div className="login-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <button className="link-button" type="submit">
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      <ButtonLink path="/" text="Back home" />
    </div>
  );
};

export default LoginForm;
