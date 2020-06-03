import { combineReducers } from "redux";
import { auth } from "./auth/reducer";
import { loader } from "./loader/reducer";
import { popUp } from "./popUp/reducer";
import { posts } from "./posts/reducer";
import { users } from "./searchUsers/reducer";

export default combineReducers({
  auth,
  posts,
  users,
  loader,
  popUp,
});
