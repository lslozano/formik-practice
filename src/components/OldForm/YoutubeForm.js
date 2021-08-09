import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";

import TextError from "./TextError";

import savedValues from "../../data/formData";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  // The values object contains all the properties established as values in the input fields.
  console.log('Form data:', values);
  console.log('On submit props:', onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format.").required("Required"),
  channel: Yup.string().required("Required"),
  // comments: Yup.string().required('Required'),
  address: Yup.string().required("Required"),
});

// This method will automatically receive the value of the comments field.
const validateComments = (value) => {
  let error;

  if (!value) {
    error = "Required";
  }

  return error;
};

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnMount
      // This two can be set to false so the validation wont trigger automatically
      // validateOnChange 
      // validateOnBlur
    >
      {/* Function as children for the Formik component */}
      {/* It gives us access to the formik props, which lets us control everything that has to do with our form. */}
      {(formik) => {
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  const { field } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      <ErrorMessage name="address" component={TextError} />
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="address" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumber[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
            </div>

            <div className="form-control">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const {
                    push,
                    remove,
                    form: {
                      values: { phNumbers },
                    },
                  } = fieldArrayProps;
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => {
                        return (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type="button"
              onClick={() => formik.validateField('comments')}
            >
              Validate comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button type="submit">Submit</button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit comments
            </button>
            <button type="button" onClick={() => formik.setTouched({
              name: true,
              email: true,
              channel: true,
              comments: true,
            })}>
              Visit all fields
            </button> */}
            {/* <button type="submit" disabled={!formik.isValid}>Submit</button> */}
            {/* Automatically resets the form values (not when they have been loaded) */}
            <button type="reset">Reset form values</button>
            <button type="button" onClick={() => setFormValues(savedValues)}>Load saved data</button>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default YoutubeForm;
