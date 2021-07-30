import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

const CheckboxGroup = ({ type, label, name, options }) => {
  const createCheckboxes = (option, field) => {
    const { name, value } = option;
    const { onBlur, onChange } = field;
    
    return (
      <div key={value} className="checkbox-option">
        <input
          type={type}
          id={name}
          name={field.name}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          checked={field.value.includes(option.value)}
        />
        <label htmlFor={value}>{name}</label>
      </div>
    );
  };

  return (
    <div className="form-control checkbox-options-container">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name}>
        {({ field }) =>
          options.map((option) => createCheckboxes(option, field))
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default CheckboxGroup;
