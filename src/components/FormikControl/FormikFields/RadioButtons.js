import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../TextError";

const RadioButtons = ({ type, label, name, options }) => {
  const createRadioOptions = (option, field) => {
    const { name, value } = option;
    const { onBlur, onChange } = field;

    return (
      <div key={value} className="radio-option">
        <input
          type={type}
          id={value}
          name={field.name}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          checked={field.value === value}
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
