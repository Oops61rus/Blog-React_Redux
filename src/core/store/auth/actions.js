import { showLoader, hideLoader } from "../loader/action";
import apiClient from "../../../utils/axios";

export const AUTH_USER_SUCCESS = "AUTH_USER_SUCCESS";
export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";

export function signIn(data) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await apiClient.post("/signIn", data);
      dispatch({ type: AUTH_USER_SUCCESS, payload: response.data });
      dispatch(hideLoader());
      setTokens(response.data);
      dispatch({ type: SHOW_POPUP });
      setTimeout(
        () =>
          dispatch({
            type: HIDE_POPUP,
          }),
        3000
      );
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
      dispatch({ type: SHOW_POPUP });
      setTimeout(
        () =>
          dispatch({
            type: HIDE_POPUP,
          }),
        3000
      );
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
      dispatch({ type: SHOW_POPUP });
      setTimeout(
        () =>
          dispatch({
            type: HIDE_POPUP,
          }),
        3000
      );
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
      dispatch({ type: SHOW_POPUP });
      setTimeout(
        () =>
          dispatch({
            type: HIDE_POPUP,
          }),
        3000
      );
    }
  };
}

export function setTokens(data) {
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
}
