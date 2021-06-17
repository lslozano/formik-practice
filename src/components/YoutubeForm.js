import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

import TextError from './TextError';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumber: ['', ''],
  phNumbers: [''],
};

const onSubmit = (values) => {
  // The values object contains all the properties established as values in the input fields.
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format.').required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
});

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email'>
            {errorMsg => <div className='error'>{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field type='text' id='channel' name='channel' />

          <ErrorMessage name='channel' component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='comments'>Comments</label>
          <Field as='textarea' id='comments' name='comments' />

          <ErrorMessage name='comments' component={TextError}/>
        </div>

        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <Field name='address'>
            {props => {
                const { field } = props;
                return (
                  <div>
                    <input type='text' id='address' {...field}/>
                    <ErrorMessage name='address' component={TextError} />
                  </div>
                ) 
              }
            }
          </Field>
        </div>

        <div className='form-control'>
          <label htmlFor='facebook'>Facebook profile</label>
          <Field type='text' id='address' name='social.facebook' />    
        </div>

        <div className='form-control'>
          <label htmlFor='twitter'>Twitter</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>

        <div className='form-control'>
          <label htmlFor='primaryPh'>Primary phone number</label>
          <Field type='text' id='primaryPh' name='phoneNumber[0]' />    
        </div>

        <div className='form-control'>
          <label htmlFor='secondaryPh'>Secondary phone number</label>
          <Field type='text' id='secondaryPh' name='phoneNumber[1]' />
        </div>

        <div className='form-control'>
          <label>List of phone numbers</label>
          <FieldArray name='phNumbers'>
            {fieldArrayProps => {
              const { push, remove, form: { values: { phNumbers }} } = fieldArrayProps;
              return (
                <div>
                  {phNumbers.map((phNumber, index) => {
                    return (
                      <div key={index}>
                        <Field name={`phNumbers[${index}]`} />
                        {index > 0 && <button type='button'onClick={() => remove(index)}>-</button>}
                        <button type='button'onClick={() => push('')}>+</button>
                      </div>
                    )
                  })
                  }
                </div>
              )
            }}
          </FieldArray>
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
