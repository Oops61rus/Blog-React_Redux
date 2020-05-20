import React from "react";
import "./styles.css";

export const RegistrationSuccess = () => (
  <div className="registration__success">Registration successful</div>
);

export const RegistrationFailure = () => (
  <div className="registration__failure">Registration failure, user is already registered</div>
);

export const WrongField = () => (
  <div className="error">Wrong email or password</div>
)