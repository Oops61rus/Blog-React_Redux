import {
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from "./actions";

const initialState = {
  email: "",
  name: "",
  id: "",
  isRegistrationSuccess: false,
  isAlreadyRegistered: false,
  isAuthFailure: false,
  isAuthenticated: false
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
        isAuthenticated: true
      };
    case AUTH_USER_FAILURE:
      return { ...state, isAuthFailure: true };
    case REGISTRATION_SUCCESS:
      return { ...state, isRegistrationSuccess: true };
    case REGISTRATION_FAILURE:
      return { ...state, isAlreadyRegistered: true };
    default:
      return state;
  }
};
