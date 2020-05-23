import { SHOW_POPUP, HIDE_POPUP } from "./actions";

const initialState = {
  showPopUp: false,
  text: "",
  className: "",
};

export const popUp = (state = initialState, action) => {
  const { type, text, className } = action;
  switch (type) {
    case SHOW_POPUP:
      return {
        ...state,
        showPopUp: true,
        text: text,
        className: className,
      };
    case HIDE_POPUP:
      return { ...state, showPopUp: false };
    default:
      return state;
  }
};
