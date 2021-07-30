import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home/index';
import LoginForm from './components/LoginForm/index'
import FormikContainer from './components/NewForm/index';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/formik-example" component={FormikContainer} />
          <Route exact path="/login-form" component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
