import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email(),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });

  const onSubmit = (values) => console.log("Form data:", values);

  const dropdownOptions = [
    { name: 'Select an option', value: ''},
    { name: 'Option 1', value: 'option1'},
    { name: 'Option 2', value: 'option2'},
    { name: 'Option 3', value: 'option3'},
  ];

  return (
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
              control="textarea"
              type="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              type="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
