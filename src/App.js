import React from "react";
import SignIn from "./components/SignIn";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./core/store";
import "./App.css";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={SignIn} />
    </Router>
  </Provider>
);
// function App() {
//   return (
//  <Provider store={store}>
//       <SignIn />
// </Provider>
//   );
// }

export default App;
