import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";

import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader";
import PopUp from "./components/PopUp";

import store from "./core/store";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/signIn" component={SignIn} exact />
        <Route path="/signUp" component={SignUp} exact />
        <PrivateRoute path="/" component={Home} exact />
      </Switch>
    </Router>
    <Loader />
    <PopUp />
  </Provider>
);

export default App;
