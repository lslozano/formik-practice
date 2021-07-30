import React from "react";

import { Field, ErrorMessage } from "formik";
import TextError from "../../TextError";

import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ label, name }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value, onBlur } = field;
          return (
            <DateView
              id={name}
              name={field.name}
              selected={value}
              onBlur={onBlur}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;
