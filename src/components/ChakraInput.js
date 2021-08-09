import React from "react";
import { Field, ErrorMessage } from "formik";
import { Input, FormControl } from "@chakra-ui/react";

import TextError from "./TextError";

const ChakraInput = ({ type, label, name }) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <label htmlFor={name}>{label}</label>
            <Input id={name} type={type} name={name} {...field} />
            <ErrorMessage name={name} component={TextError} />
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraInput;
