import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../FormikControl";
import ButtonLink from "../ButtonLink";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email(),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
    contact: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log('This were the values submitted', values);
  };

  const contactOptions = [
    { name: "Email", value: "email" },
    { name: "Telephone", value: "phone" },
  ];

  return (
    <div className="full-form">
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
              <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />
              <FormikControl
                control="radio"
                type="radio"
                label="Mode of contact"
                name="radioOption"
                options={contactOptions}
              />
              <FormikControl
                control="input"
                type="tel"
                label="Phone"
                name="phone"
              />
              <button className="link-button" type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
      <ButtonLink path="/" text="Back home" />
    </div>
  );
};

export default FormikContainer;
