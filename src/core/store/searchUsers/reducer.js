import {
  SEARCH_USER_SUCCESS,
  SEARCH_USER_ERROR,
  CHANGE_FOLLOWING_STATUS_ERROR,
  CHANGE_FOLLOWING_STATUS_SUCCESS,
} from "./actions";

const initialState = {
  list: [],
};

export const users = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SEARCH_USER_SUCCESS:
      return { ...state, list: payload };
    case CHANGE_FOLLOWING_STATUS_SUCCESS:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === payload) {
            item.following = !item.following;
            return { ...item };
          }
          return item;
        }),
      };
    case SEARCH_USER_ERROR:
    case CHANGE_FOLLOWING_STATUS_ERROR:
    default:
      return state;
  }
};
