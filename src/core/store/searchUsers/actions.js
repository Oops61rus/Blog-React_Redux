import apiClient from "utils/apiClient";
import { showLoader, hideLoader } from "../loader/actions";
import { showPopUp, hidePopUp } from "../popUp/actions";

export const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
export const SEARCH_USER_ERROR = "SEARCH_USER_ERROR";
export const CHANGE_FOLLOWING_STATUS_SUCCESS =
  "CHANGE_FOLLOWING_STATUS_SUCCESS";
export const CHANGE_FOLLOWING_STATUS_ERROR = "CHANGE_FOLLOWING_STATUS_ERROR";

export function searchUsers(requiredUser, profileId) {
  return (dispatch) => {
    dispatch(showLoader());
    return apiClient
      .get("/users/search", {
        params: {
          requiredUser: requiredUser,
          profileId: profileId,
        },
      })
      .then((res) => {
        dispatch({ type: SEARCH_USER_SUCCESS, payload: [...res.data] });
        dispatch(hideLoader());
        dispatch(showPopUp("Searching users...", "info"));
        setTimeout(() => dispatch(hidePopUp()), 1000);
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: SEARCH_USER_ERROR });
        dispatch(hideLoader());
        dispatch(showPopUp("Failed! Users can't be loaded", "error"));
        setTimeout(() => dispatch(hidePopUp()), 3000);
      });
  };
}

export function addSubscriber(followingId, profileId) {
  return (dispatch) => {
    dispatch(showLoader());
    apiClient
      .put("/users/search", { followingId, profileId })
      .then(() => {
        dispatch({
          type: CHANGE_FOLLOWING_STATUS_SUCCESS,
          payload: followingId,
        });
        dispatch(hideLoader());
        dispatch(showPopUp("Success!", "success"));
        setTimeout(() => dispatch(hidePopUp()), 1000);
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: CHANGE_FOLLOWING_STATUS_ERROR });
        dispatch(hideLoader());
        dispatch(showPopUp("Failed!", "error"));
        setTimeout(() => dispatch(hidePopUp()), 3000);
      });
  };
}

export function removeSubscriber(followingId, profileId) {
  return (dispatch) => {
    dispatch(showLoader());
    apiClient
      .delete("/users/search", {
        data: { followingId, profileId },
      })
      .then(() => {
        dispatch({
          type: CHANGE_FOLLOWING_STATUS_SUCCESS,
          payload: followingId,
        });
        dispatch(hideLoader());
        dispatch(showPopUp("Success!", "success"));
        setTimeout(() => dispatch(hidePopUp()), 1000);
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: CHANGE_FOLLOWING_STATUS_ERROR });
        dispatch(hideLoader());
        dispatch(showPopUp("Failed!", "error"));
        setTimeout(() => dispatch(hidePopUp()), 3000);
      });
  };
}
