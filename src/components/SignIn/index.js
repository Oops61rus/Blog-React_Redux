import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import { Loader } from "../Loader/index";
import signIn from "../../core/store/signIn/action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Your email: " +
        this.state.email +
        " " +
        "Your password: " +
        this.state.password
    );
    this.props.signIn({ ...this.state }); // здесь пробросить данные из инпутов?
  };

  handleChange = (fieldName) => {
    return (e) => {
      this.setState({ [fieldName]: e.target.value });
    };
  };

  render = () => {
    return (
      <div className="signin__block">
        <h1>SignIn, please</h1>
        <form className="signIn__form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            className="email"
            placeholder="E-mail:"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />
          <input
            type="password"
            className="password"
            placeholder="Password:"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
          <button type="submit" className="signIn__btn">
            LogIn
          </button>
          <div className="wrong"></div>
          <div className="not__registered">
            <p>Not registered yet?</p>
            <a href="sign-up.html" className="signUp">
              Sign Up
            </a>
          </div>
        </form>
        <Loader />
      </div>
    );
  };
}

const mapDispatchToProps = {
  signIn,
};

export default connect(null, mapDispatchToProps)(SignIn);
