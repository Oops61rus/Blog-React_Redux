import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const PopUp = (text, className, showPopUp) => {
  return showPopUp ? <div className={className}>{text}</div> : <></>;
};

const mapStateToProps = (state) => ({
  showPopUp: state.auth.showPopUp,
});

export default connect(mapStateToProps, null)(PopUp);
