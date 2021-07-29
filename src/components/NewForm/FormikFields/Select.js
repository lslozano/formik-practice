import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

const Select = ({ type, label, name, options }) => {
  const createOption = (option) => {
    const { name, value } = option;
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
        {options.map(createOption)}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
