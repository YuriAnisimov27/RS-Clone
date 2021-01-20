const initialState = {
  currentLanguage: 'en',

  en: {
    authNavPlaylist: 'Playlist',
    authNavSettings: 'Settings',
    authNavRegistration: 'Registration',

    footerContent: 'Footer Content__',
    kovbenya: 'Alexander Kovbenya',
    anisimov: 'Yuri Anisimov',
    martinkevich: 'Alex Martinkevich',
    chazov: 'Alexander Chazov',
  },

  ru: {
    authNavPlaylist: 'Плейлист',
    authNavSettings: 'Настройки',
    authNavRegistration: 'Регистрация',

    footerContent: 'Футер контент__',
    kovbenya: 'Александр Ковбеня',
    anisimov: 'Юрий Аниссимов',
    martinkevich: 'Алексей Мартинкевич',
    chazov: 'Александр Чазов',
  },

  bel: {
    authNavPlaylist: 'Плэйліст',
    authNavSettings: 'Налады',
    authNavRegistration: 'Рэгістрацыя',

    footerContent: 'Футэр контэнт',
    kovbenya: 'Аляксандр Каубеня',
    anisimov: 'Юра Аниссiмау',
    martinkevich: 'Аляксей Марцiнкевич',
    chazov: 'Аляксандр Чазау',
  }
}

export default function reducer(state = initialState, action) {
  const state_ = Object.assign({}, state);

  if (action.type === 'CHANGE_LNG') {

    if (action.lng === 'ru') {
      state_.currentLanguage = 'ru';
      return state_;
    }

    if (action.lng === 'en') {
      state_.currentLanguage = 'en';
      return state_;
    }

    if (action.lng === 'bel') {
      state_.currentLanguage = 'bel';
      return state_;
    }
  }

  return state_;

}
