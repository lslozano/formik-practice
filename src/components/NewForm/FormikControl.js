import React from "react";

import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";

const FormikControl = ({ control, type, label, name, options }) => {
  switch (control) {
    case "input":
      return <Input type={type} label={label} name={name} />;
    case "textarea":
      return <Textarea type={type} label={label} name={name} />;
    case "select":
      return <Select type={type} label={label} name={name} options={options} />;
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
