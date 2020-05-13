import { showLoader, hideLoader } from "../loader/action";
import axios from "axios";

export const AUTH_USER = "AUTH_USER";

export default function signIn(props) {
  return async (dispatch) => {
    console.log(props)
    try {
      dispatch(showLoader());
      const response = await axios.post("/api/v1/signIn", {
        // props.email,
        // props.password,
      });
      const json = await response.json();
      dispatch({ type: AUTH_USER, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      console.error(e);
      dispatch(hideLoader());
    }
  };
}
