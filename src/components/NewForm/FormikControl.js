import React from "react";

import Input from "./Input";
import Textarea from "./Textarea";

const FormikControl = ({ control, type, label, name }) => {
  switch (control) {
    case "input":
      return <Input type={type} label={label} name={name} />;
    case "textarea":
      return <Textarea type={type} label={label} name={name} />
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
