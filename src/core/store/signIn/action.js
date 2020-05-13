import { showLoader, hideLoader } from "../loader/action";
import axios from "axios";

export const AUTH_USER = "AUTH_USER";

export default function signIn(data) {
  return async (dispatch) => {
    console.log(data)
    try {
      dispatch(showLoader());
      const response = await axios.post("/api/v1/signIn", {...data});
      dispatch({ type: AUTH_USER, payload: response.data });
      dispatch(hideLoader());
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
    }
  };
}
