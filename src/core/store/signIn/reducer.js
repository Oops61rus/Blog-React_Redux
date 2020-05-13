import AUTH_USER from "./action";

const initialState = {
  email: "",
  password: "",
};

export const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, email: state.email, password: state.password };
    default:
      return state;
  }
};
