import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const Select = ({ type, label, name, options }) => {
  const option = (option) => {
    const { value, name } = option;
    return (
      <option key={value} value={value}>
        {name}
      </option>
    );
  };

  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as={type} id={name} name={name}>
        {options.map(option)}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
