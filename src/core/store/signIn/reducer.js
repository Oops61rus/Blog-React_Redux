import AUTH_USER from "./action";

const initialState = {
  email: "",
  name: "",
  id: "",
};

export const signInReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_USER:
      return {
        ...state,
        email: payload.email,
        name: payload.name,
        id: payload.id,
      };
    default:
      return state;
  }
};
