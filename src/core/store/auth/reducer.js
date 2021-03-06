import { AUTH_USER_SUCCESS, LOGOUT } from "./actions";

const initialState = {
  email: "",
  name: "",
  id: "",
  isAuthenticated: Boolean(localStorage.getItem('access_token')),
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
    case LOGOUT:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
