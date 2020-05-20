import React from "react";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./core/store";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import { Loader } from "./components/Loader";

const App = () => (
  <Provider store={store}>
    <Loader />
    <Router>
      <Switch>
        <Route path="/signIn" component={SignIn} exact />
        <Route path="/signUp" component={SignUp} exact />
        <PrivateRoute path="/" component={Home} exact />
      </Switch>
    </Router>
  </Provider>
);

export default App;
