export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";

export function showPopUp(text, popupType) {
  return {
    type: SHOW_POPUP,
    text,
    popupType,
  };
}

export function hidePopUp() {
  return {
    type: HIDE_POPUP,
  };
}
