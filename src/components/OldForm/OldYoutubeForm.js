import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  // The values object contains all the properties established as values in the input fields.
  console.log(values);
};

// Manual way to validate for errors:
// const validate = values => {
  // values.name values.email values.channel
  // errors.name errors.email errors.channel
  // errors.name = 'This field is required'

//   let errors = {};

//   if (!values.name) {
//     errors.name = 'Required';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
//     errors.email = 'Invalid email format';
//   }

//   if (!values.channel) {
//     errors.channel = 'Required';
//   }

//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Required"),
  channel: Yup.string().required("Required"),
});

const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { 
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched } = formik;

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          {errors.name && touched.name ? (
            <div className="error">{errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          {errors.email && touched.email ? (
            <div className="error">{errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.channel}
          />

          {errors.channel && touched.channel ? (
            <div className="error">{errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;