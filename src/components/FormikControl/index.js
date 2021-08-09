import React from "react";

import Input from "./FormikFields/Input";
import Textarea from "./FormikFields/Textarea";
import Select from "./FormikFields/Select";
import RadioButtons from "./FormikFields/RadioButtons";
import CheckboxGroup from "./FormikFields/CheckboxGroup";
import DatePicker from "./FormikFields/DatePicker";
import ChakraInput from "../ChakraInput";

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
      return <CheckboxGroup type={type} label={label} name={name} options={options} />;
    case "date":
      return <DatePicker label={label} name={name} />
    case "chakrainput":
      return <ChakraInput type={type} label={label} name={name} />
    default:
      return null;
  }
};

export default FormikControl;
