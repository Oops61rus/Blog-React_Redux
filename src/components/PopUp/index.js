import React from "react";
import { connect } from "react-redux";
import "./styles.css";

const PopUp = ({ showPopUp, text, className }) => {
  return showPopUp ? (
    <div className={className}>{text}</div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  showPopUp: state.popUp.showPopUp,
  text: state.popUp.text,
  className: state.popUp.className,
});

export default connect(mapStateToProps)(PopUp);
