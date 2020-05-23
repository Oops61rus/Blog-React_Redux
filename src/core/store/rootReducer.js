import { combineReducers } from "redux";
import { auth } from "./auth/reducers";
import { loader } from "./loader/reducer";
import { popUp } from "./popUp/reducer";

export default combineReducers({
  loader,
  auth,
  popUp,
});
