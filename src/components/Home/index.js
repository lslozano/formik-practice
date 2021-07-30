import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <button className="link-button">
        <Link to='/formik-example'>
          Formik example
        </Link>
      </button>
      <button className="link-button">
        <Link to='/login-form'>
          Login form example
        </Link>
      </button>
    </div>
  )
};

export default Home;
