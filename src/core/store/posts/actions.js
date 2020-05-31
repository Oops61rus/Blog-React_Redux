import apiClient from "../../../utils/apiClient";
import { showLoader, hideLoader } from "../loader/actions";
import { showPopUp, hidePopUp } from "../popUp/actions";

export const ADD_POST = "ADD_POST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_ERROR = "LOAD_POSTS_ERROR";

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

export function loadPosts(id) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      await apiClient
        .get(`/users/${id}/posts`)
        .then((res) => {
          dispatch({ type: LOAD_POSTS_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.error(err);
          dispatch({ type: LOAD_POSTS_ERROR });
        });
      dispatch(hideLoader());
      dispatch(showPopUp("Loading posts...", "info"));
      setTimeout(() => dispatch(hidePopUp()), 1000);
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
      dispatch(showPopUp("Failed! Posts not loaded", "error"));
      setTimeout(() => dispatch(hidePopUp()), 3000);
    }
  };
}
