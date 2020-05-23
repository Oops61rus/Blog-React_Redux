import { showLoader, hideLoader } from "../loader/actions";
import { showPopUp, hidePopUp } from "../popUp/actions"
import apiClient from "../../../utils/axios";

export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";

export function signIn(data) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await apiClient.post("/signIn", data);
      dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
      dispatch(hideLoader());
      setTokens(response.data);
      dispatch(showPopUp("Logining", "success"));
      setTimeout(() => dispatch(hidePopUp()), 3000);
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
      dispatch(showPopUp("Wrong email or password!", "error"));
      setTimeout(() => dispatch(hidePopUp()), 3000);
    }
  };
}

export function signUp(data) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await apiClient.post("/signUp", data);
      dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
      dispatch(hideLoader());
      setTokens(response.data);
      dispatch(showPopUp("Registration successfuly!", "success"));
      setTimeout(() => dispatch(hidePopUp()), 3000);
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
      dispatch(
        showPopUp("Registration failure! User is already registered!", "error")
      );
      setTimeout(() => dispatch(hidePopUp()), 3000);
    }
  };
}

export function setTokens(data) {
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
}
