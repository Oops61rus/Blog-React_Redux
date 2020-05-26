import ADD_POST from "./actions";

export const posts = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return state;
    default:
      return state;
  }
};
