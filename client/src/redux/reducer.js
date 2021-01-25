import initialState from "./state";
import { storage } from "../pages/AuthPage/authPageElements/helpers";

export default function reducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === "CHANGE_LNG") {
    if (action.lng === "ru") {
      newState.currentLanguage = "ru";
      storage("currentLanguage", "ru");
      return newState;
    }

    if (action.lng === "en") {
      newState.currentLanguage = "en";
      storage("currentLanguage", "en");
      return newState;
    }

    if (action.lng === "bel") {
      newState.currentLanguage = "bel";
      storage("currentLanguage", "bel");
      return newState;
    }
  }

  return newState;
}
