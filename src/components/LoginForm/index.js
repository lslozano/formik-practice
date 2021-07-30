import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div>
      <button className="link-button">
        <Link to='/'>
          Back home
        </Link>
      </button>
      <h1>Hi there</h1>
    </div>
  )
};

export default LoginForm;
