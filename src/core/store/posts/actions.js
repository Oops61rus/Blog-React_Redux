import apiClient from "../../../utils/axios";
import { showLoader, hideLoader } from "../loader/actions";
import { showPopUp, hidePopUp } from "../popUp/actions";

export const ADD_POST = "ADD_POST";

export function addPost(data) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      await apiClient.post("/posts", data);
      dispatch({ type: ADD_POST });
      dispatch(hideLoader());
      dispatch(showPopUp("Post added!", "success"));
      setTimeout(() => dispatch(hidePopUp()), 1000);
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
      dispatch(showPopUp("Failed! Post not added", "error"));
      setTimeout(() => dispatch(hidePopUp()), 3000);
    }
  };
}
