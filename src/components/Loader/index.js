import React from "react";
import "./styles.css";
import { connect } from "react-redux";

export const Loader = ({ isLoading }) => {
  console.log(isLoading)
  return isLoading ? (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.loader.isLoading,
});

export default connect(mapStateToProps, null)(Loader);
