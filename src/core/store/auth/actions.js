import { showLoader, hideLoader } from "../loader/actions";
import { showPopUp, hidePopUp } from "../popUp/actions";
import apiClient from "utils/apiClient";

export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";
export const LOGOUT = "LOGOUT";

export function signIn(data) {
  return (dispatch) => {
    dispatch(showLoader());
    apiClient
      .post("/signIn", data)
      .then((response) => {
        dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
        dispatch(hideLoader());
        setTokens(response.data);
        localStorage.setItem("profileName", response.data.name);
        dispatch(showPopUp("Logining", "success"));
        setTimeout(() => dispatch(hidePopUp()), 1000);
      })
      .catch((e) => {
        console.error(e);
        dispatch(hideLoader());
        dispatch(showPopUp("Wrong email or password!", "error"));
        setTimeout(() => dispatch(hidePopUp()), 3000);
      });
  };
}

export function signUp(data) {
  return (dispatch) => {
    dispatch(showLoader());
    apiClient
      .post("/signUp", data)
      .then((response) => {
        dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
        dispatch(hideLoader());
        setTokens(response.data);
        console.log(response.data)
        localStorage.setItem("profileName", response.data.name);
        dispatch(
          showPopUp(
            "Registration successfuly! You`ll be redirected to Homepage",
            "success"
          )
        );
        setTimeout(() => dispatch(hidePopUp()), 3000);
      })
      .catch((e) => {
        console.error(e);
        dispatch(hideLoader());
        dispatch(
          showPopUp(
            "Registration failure! User is already registered!",
            "error"
          )
        );
        setTimeout(() => dispatch(hidePopUp()), 3000);
      });
  };
}

export function setTokens(data) {
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
}

export function logOut() {
  deleteTokens();
  window.location.replace(window.location.origin);
}

export function deleteTokens() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
}
