import React from "react";
import { connect } from "react-redux";
import "./styles.css";

export const popupType = {
  error: "error",
  success: "success",
}

const PopUp = ({ showPopUp, text, popupType }) => {
  return showPopUp && <div className={`popup-${popupType}`}>{text}</div>;
};

const mapStateToProps = (state) => ({
  showPopUp: state.popUp.showPopUp,
  text: state.popUp.text,
  popupType: state.popUp.popupType,
});

export default connect(mapStateToProps)(PopUp);
