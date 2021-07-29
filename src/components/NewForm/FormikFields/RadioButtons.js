import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

const RadioButtons = ({ type, label, name, options }) => {
  const createRadioOptions = (option, field) => {
    const { name, value } = option;

    return (
      <div key={value} className="radio-option">
        <input
          type={type}
          id={value}
          name={field.name}
          onBlur={field.onBlur}
          onChange={field.onChange}
          value={value}
          checked={field.value === option.value}
        />
        <label htmlFor={value}>{name}</label>
      </div>
    );
  };

  return (
    <div className="form-control radio-options-container">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name}>
        {({ field }) => options.map((option) => createRadioOptions(option, field))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioButtons;
