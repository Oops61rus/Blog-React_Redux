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
// import instance from "./utils/apiClient";

// import { logOut } from "./core/store/auth/actions";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/signIn" component={SignIn} exact />
        <Route path="/signUp" component={SignUp} exact />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
    <Loader />
    <PopUp />
  </Provider>
);

// const { dispatch } = store;

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       dispatch(logOut());
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default App;
