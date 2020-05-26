import { SHOW_POPUP, HIDE_POPUP } from "./actions";

const initialState = {
  showPopUp: false,
  text: "",
  popupType: ""
};

export const popUp = (state = initialState, action) => {
  const { popupType, text, type } = action;
  switch (type) {
    case SHOW_POPUP:
      return {
        ...state,
        showPopUp: true,
        text,
        popupType
      };
    case HIDE_POPUP:
      return { ...state, showPopUp: false };
    default:
      return state;
  }
};
