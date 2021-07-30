import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Required").email(),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().min(1, "Required"),
  });

  const onSubmit = (values) => console.log("Form data:", values);

  const dropdownOptions = [
    { name: "Select an option", value: "" },
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { name: "Option 4", value: "option4" },
    { name: "Option 5", value: "option5" },
    { name: "Option 6", value: "option6" },
  ];

  const checkboxOptions = [
    { name: "Option 7", value: "option7" },
    { name: "Option 8", value: "option8" },
    { name: "Option 9", value: "option9" },
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
            <FormikControl
              control="radio"
              type="radio"
              label="Pick one option"
              name="radioOption"
              options={radioOptions}
            />
            <FormikControl
              control="checkbox"
              type="checkbox"
              label="Pick options"
              name="checkboxOption"
              options={checkboxOptions}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
