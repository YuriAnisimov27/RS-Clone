import { initialState } from './state'

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);

  if (action.type === 'CHANGE_LNG') {

    if (action.lng === 'ru') {
      newState.currentLanguage = 'ru';
      return newState;
    }

    if (action.lng === 'en') {
      newState.currentLanguage = 'en';
      return newState;
    }

    if (action.lng === 'bel') {
      newState.currentLanguage = 'bel';
      return newState;
    }
  }

  return newState;
}
