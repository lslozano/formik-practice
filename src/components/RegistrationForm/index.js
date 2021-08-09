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
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email(),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when('modeOfContact', {
        is: 'phonemoc',
        then: Yup.string().required("Required"),
      })
  });

  const onSubmit = (values) => {
    console.log('This were the values submitted', values);
  };

  const contactOptions = [
    { name: "Email", value: "emailmoc" },
    { name: "Telephone", value: "phonemoc" },
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
                name="modeOfContact"
                options={contactOptions}
              />
              <FormikControl
                control="input"
                type="text"
                label="Phone number"
                name="phone"
              />
              <button className="link-button" type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
          );
        }}
      </Formik>
      <ButtonLink path="/" text="Back home" />
    </div>
  );
};

export default FormikContainer;
