import { SEARCH_USER_SUCCESS, SEARCH_USER_ERROR } from "./actions";

const initialState = {
  list: [],
};

export const users = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SEARCH_USER_SUCCESS:
      return { ...state, list: payload };
    case SEARCH_USER_ERROR:
      return { ...state };
    default:
      return state;
  }
};
