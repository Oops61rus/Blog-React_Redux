import {
  AUTH_USER_SUCCESS,
  SHOW_POPUP,
  HIDE_POPUP,
} from "./actions";

const initialState = {
  email: "",
  name: "",
  id: "",
  isAuthenticated: false,
  showPopUp: false,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        email: payload.email,
        name: payload.name,
        id: payload.id,
        isAuthenticated: true,
      };
    case SHOW_POPUP:
      return { ...state, showPopUp: true };
    case HIDE_POPUP:
      return { ...state, showPopUp: false };
    default:
      return state;
  }
};
