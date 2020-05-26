import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import { signUp } from "../../core/store/auth/actions";

import "./styles.css";

const defaultErrors = {
  email: "",
  name: "",
  password: "",
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      errors: defaultErrors,
    };
  }

  handleChange = (fieldName) => {
    return (e) => {
      this.setState({ [fieldName]: e.target.value });
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = { name: "", email: "", password: "" };
    const { name, email, password, passwordConfirm } = this.state;
    if (!name) {
      errors.name = "Field name cant be empty!";
      this.setState({ errors: { ...this.state.errors, ...errors } });
      setTimeout(() => {
        this.setState({ errors: defaultErrors });
      }, 3000);
      return;
    }
    if (!email) {
      errors.email = "Field email cant be empty!";
      this.setState({ errors: { ...this.state.errors, ...errors } });
      setTimeout(() => {
        this.setState({ errors: defaultErrors });
      }, 3000);
      return;
    }
    if (!password || !passwordConfirm) {
      errors.password = "Field password cant be empty!";
      this.setState({ errors: { ...this.state.errors, ...errors } });
      setTimeout(() => {
        this.setState({ errors: defaultErrors });
      }, 3000);
      return;
    }
    if (password !== passwordConfirm) {
      errors.password = "Passwords mismatch!";
      this.setState({ errors: { ...this.state.errors, ...errors } });
      setTimeout(() => {
        this.setState({ errors: defaultErrors });
      }, 3000);
      return;
    }
    this.props.signUp({ ...this.state });
    this.setState((state) => ({
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    }));
  };

  render = () => {
    const { errors } = this.state;
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      setTimeout(() => history.push("/"), 3000);
    }
    return (
      <div className="sign__up">
        <h1>Sign up</h1>
        <form className="sign__up__block">
          <input
            type="text"
            className="name"
            placeholder="Enter your Name"
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
          <input
            type="email"
            className="email"
            placeholder="Enter your Email"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />
          <input
            type="password"
            className="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
          <input
            type="password"
            className="password"
            placeholder="Confirm your password"
            value={this.state.passwordConfirm}
            onChange={this.handleChange("passwordConfirm")}
          />
          <button
            type="submit"
            onClick={this.handleSubmit}
            className="sign__up__btn"
          >
            Sign Up
          </button>
        </form>
        <Link to="/signIn" className="signIn_link">
          Back to sign in
        </Link>
        <div className="errors">
          {errors.name || errors.email || errors.password}
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (data) => dispatch(signUp(data)),
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
