import React from "react";

import Input from "./FormikFields/Input";
import Textarea from "./FormikFields/Textarea";
import Select from "./FormikFields/Select";
import RadioButtons from "./FormikFields/RadioButtons";

const FormikControl = ({ control, type, label, name, options }) => {
  switch (control) {
    case "input":
      return <Input type={type} label={label} name={name} />;
    case "textarea":
      return <Textarea type={type} label={label} name={name} />;
    case "select":
      return <Select type={type} label={label} name={name} options={options} />;
    case "radio":
      return <RadioButtons type={type} label={label} name={name} options={options} />;
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
