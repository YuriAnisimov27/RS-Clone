const initialState = {
  currentLanguage: 'en',

  en: {
    authNavPlaylist: 'Playlist',
    authNavSettings: 'Settings',
    authNavRegistration: 'Registration',

    footerContent: 'Footer Content__',
  },

  ru: {
    authNavPlaylist: 'Плейлист',
    authNavSettings: 'Настройки',
    authNavRegistration: 'Регистрация',

    footerContent: 'Футер контент__',
  }
}

export default function reducer(state = initialState, action) {
  // console.log(state);
  console.log(action);

  if (action.type === 'CHANGE_LNG') {

    if (action.lng === 'ru') {

      return {
        currentLanguage: 'ru',
        ru: {
          authNavPlaylist: 'Плейлист',
          authNavSettings: 'Настройки',
          authNavRegistration: 'Регистрация',

          footerContent: 'Футер контент__',
        }
      }
    }

    if (action.lng === 'en') {

      return {
        currentLanguage: 'en',

        en: {
          authNavPlaylist: 'Playlist',
          authNavSettings: 'Settings',
          authNavRegistration: 'Registration',

          footerContent: 'Footer Content__',
        }
      }
    }

    if (action.lng === 'bel') {

      return {
        currentLanguage: 'bel',

        bel: {
          authNavPlaylist: 'Плэйліст',
          authNavSettings: 'Налады',
          authNavRegistration: 'Рэгістрацыя',

          footerContent: 'Футэр контэнт',
        }
      }
    }





  }


  return state
}

