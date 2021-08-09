import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikControl";

import ButtonLink from "../ButtonLink";

const EnrollmentForm = () => {
  const courseOptions = [
    { name: "Select your course", value: "" },
    { name: "React", value: "react" },
    { name: "Angular", value: "angular" },
    { name: "Vue", value: "vue" },
  ];

  const skillOptions = [
    { name: "HTML", value: "html" },
    { name: "CSS", value: "css" },
    { name: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div>
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
                label="Bio"
                name="bio"
              />
              <FormikControl
                control="select"
                type="select"
                label="Course"
                name="course"
                options={courseOptions}
              />
              <FormikControl
                control="checkbox"
                type="checkbox"
                label="Skillset"
                name="skills"
                options={skillOptions}
              />
              <FormikControl
                control="date"
                type="date"
                label="Pick a date"
                name="courseDate"
              />
              <button
                className="link-button"
                type="submit"
                disabled={!formik.isValid}
              >
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

export default EnrollmentForm;
