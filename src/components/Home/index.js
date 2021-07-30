import React from "react";

import ButtonLink from "../ButtonLink";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Forms examples</h1>
      <div className="buttons-container">
        <ButtonLink path="/formik-example" text="Full form example" />
        <ButtonLink path="/login-form" text="Login form example" />
      </div>
    </div>
  );
};

export default Home;
