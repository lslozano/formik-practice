import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";

import Home from "./components/Home/index";
import LoginForm from "./components/LoginForm/index";
import FormikContainer from "./components/NewForm/index";
import RegistrationForm from "./components/RegistrationForm/index";
import EnrollmentForm from "./components/EnrollmentForm/index";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/formik-example" component={FormikContainer} />
            <Route exact path="/login-form" component={LoginForm} />
            <Route
              exact
              path="/registration-form"
              component={RegistrationForm}
            />
            <Route exact path="/course-enrollment" component={EnrollmentForm} />
          </Switch>
        </Router>
      </div>
    </ChakraProvider>
  );
};

export default App;
