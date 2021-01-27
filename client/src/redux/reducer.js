import initialState from "./state";
import { storage } from "../pages/AuthPage/authPageElements/helpers";
import { SET_LANG_TO_BY, SET_LANG_TO_ENG, SET_LANG_TO_RUS } from "./types";

export default function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case SET_LANG_TO_RUS:
      newState.currentLanguage = "ru";
      storage("currentLanguage", "ru");
      window.M.toast({ html: `Текущий язык: русский` });
      return newState;
    case SET_LANG_TO_ENG:
      newState.currentLanguage = "en";
      storage("currentLanguage", "en");
      window.M.toast({ html: `Сurrent language: english` });
      return newState;
    case SET_LANG_TO_BY:
      newState.currentLanguage = "bel";
      storage("currentLanguage", "bel");
      window.M.toast({ html: `Мова: беларуская` });
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
