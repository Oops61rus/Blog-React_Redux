import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { WrongField } from "../../components/Messages";
import { signIn } from "../../core/store/auth/actions";

import "./styles.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn({ ...this.state });
  };

  handleChange = (fieldName) => {
    return (e) => {
      this.setState({ [fieldName]: e.target.value });
    };
  };

  render = () => {
    const { isAuthFailure, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="signin__block">
        <h1>SignIn, please</h1>
        <form className="signIn__form" onSubmit={this.handleSubmit}>
          <input
            type="text"
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
            <p>
              Not registered yet?{" "}
              <Link to="/signUp" className="signUp_link">
                Sign up
              </Link>
            </p>
          </div>
        </form>
        {isAuthFailure && <WrongField />}
      </div>
    );
  };
}

const mapDispatchToProps = {
  signIn,
};

const mapStateToProps = (state) => ({
  isAuthFailure: state.auth.isAuthFailure,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
