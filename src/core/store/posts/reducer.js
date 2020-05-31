import { ADD_POST, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } from "./actions";

const initialState = {
  list: [],
};

export const posts = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_POST:
      return { ...state };
    case LOAD_POSTS_SUCCESS:
      return { ...state, list: payload };
    case LOAD_POSTS_ERROR:
      return { ...state };
    default:
      return state;
  }
};
