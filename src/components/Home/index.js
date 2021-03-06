import React from "react";

import ButtonLink from "../ButtonLink";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Forms examples</h1>
      <div className="buttons-container">
        <ButtonLink path="/formik-example" text="Full form example" />
        <ButtonLink path="/login-form" text="Login form example" />
        <ButtonLink path="/registration-form" text="Registration form example" />
        <ButtonLink path="/course-enrollment" text="Course enrollment form" />
      </div>
    </div>
  );
};

export default Home;
