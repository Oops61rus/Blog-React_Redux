import { SHOW_LOADER, HIDE_LOADER } from './actions'

const initialState = {
  isLoading: false,
};

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
