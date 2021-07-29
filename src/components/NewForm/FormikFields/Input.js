import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

const Input = ({ type, label, name }) => {
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} type={type} name={name} />
      <ErrorMessage name={name} component={TextError} />     
    </div>
  )
};

export default Input;
