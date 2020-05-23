export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";

export function showPopUp(text, className) {
  return {
    type: SHOW_POPUP,
    text,
    className,
  };
}

export function hidePopUp() {
  return {
    type: HIDE_POPUP,
  };
}
