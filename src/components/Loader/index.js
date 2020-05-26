import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const Loader = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.loader.isLoading,
});

export default connect(mapStateToProps)(Loader);
