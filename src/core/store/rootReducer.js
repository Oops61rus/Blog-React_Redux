import { combineReducers } from "redux";
import { auth } from './auth/reducers'
import { loader } from "./loader/reducer";

export default combineReducers({
  loader,
  auth,
});
