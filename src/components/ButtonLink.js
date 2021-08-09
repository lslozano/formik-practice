import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ className, path, text }) => {
  return (
    <button className="link-button">
      <Link to={path}>
        {text}
      </Link>
    </button>
  )
};

export default ButtonLink;
