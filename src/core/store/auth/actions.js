import { showLoader, hideLoader } from "../loader/action";
import apiClient from "../../../utils/axios";

export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";
export const AUTH_USER_FAILURE = "AUTH_USER_FAILURE";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";
export const REDIRECTION_TO_HOMEPAGE = "REDIRECTION_TO_HOMEPAGE";

export function showMessage() {
  return {
    type: REGISTRATION_SUCCESS,
  };
}

export function showMessageFailure() {
  return {
    type: REGISTRATION_FAILURE,
  };
}

export function signIn(data) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await apiClient.post("/signIn", data);
      dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
      dispatch(hideLoader());
      setTokens(response.data)
      dispatch({ type: REDIRECTION_TO_HOMEPAGE });
    } catch (e) {
      console.error(e);
      dispatch({ type: AUTH_USER_FAILURE });
      dispatch(hideLoader());
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
      setTokens(response.data)
      dispatch(showMessage());
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
      dispatch(showMessageFailure());
    }
  };
}

export function redirectToHomepage() {
  return {
    type: REDIRECTION_TO_HOMEPAGE,
  };
}

export function setTokens(data) {
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
}
