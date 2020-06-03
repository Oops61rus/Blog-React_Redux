import apiClient from "../../../utils/apiClient";
import { showLoader, hideLoader } from "../loader/actions";
import { showPopUp, hidePopUp } from "../popUp/actions";

export const SEARCH_USER_SUCCESS = "SEARCH_USER_SUCCESS";
export const SEARCH_USER_ERROR = "SEARCH_USER_ERROR";

export function searchUsers(searchedUser, profileId) {
  return (dispatch) => {
    dispatch(showLoader());
    return apiClient
      .get("/users/search", {
        params: {
          requiredUser: searchedUser,
          activeUserId: profileId,
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
