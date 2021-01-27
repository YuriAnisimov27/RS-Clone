import initialState from "./state";
import { storage } from "../pages/AuthPage/authPageElements/helpers";
import { SET_LANG_TO_BY, SET_LANG_TO_ENG, SET_LANG_TO_RUS } from "./types";

export default function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_LANG_TO_RUS:
      newState.currentLanguage = "ru";
      storage("currentLanguage", "ru");
      return newState;
    case SET_LANG_TO_ENG:
      newState.currentLanguage = "en";
      storage("currentLanguage", "en");
      return newState;
    case SET_LANG_TO_BY:
      newState.currentLanguage = "bel";
      storage("currentLanguage", "bel");
      return newState;
    default:
      return newState;
  }

  // if (action.type === "CHANGE_LNG") {
  //   if (action.lng === "ru") {
  //     newState.currentLanguage = "ru";
  //     storage("currentLanguage", "ru");
  //     return newState;
  //   }
  //
  //   if (action.lng === "en") {
  //     newState.currentLanguage = "en";
  //     storage("currentLanguage", "en");
  //     return newState;
  //   }
  //
  //   if (action.lng === "bel") {
  //     newState.currentLanguage = "bel";
  //     storage("currentLanguage", "bel");
  //     return newState;
  //   }
  // }
  //
  // return newState;
}
