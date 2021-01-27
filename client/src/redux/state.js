import { storage } from "../pages/AuthPage/authPageElements/helpers";

if (!storage("currentLanguage")) {
  storage("currentLanguage", "en");
}

const currentLanguage = storage("currentLanguage");

const initialState = {
  currentLanguage,

  en: {
    authNavPlaylist: "Playlist",
    authNavSettings: "Settings",
    authNavRegistration: "Registration",

    footerContent: "Footer Content__EN",
    developers: "DEVELOPERS",
    kovbenya: "Alexander Kovbenya",
    anisimov: "Yuri Anisimov",
    martinkevich: "Alex Martinkevich",
    chazov: "Alexander Chazov",
  },

  ru: {
    authNavPlaylist: "Плейлист",
    authNavSettings: "Настройки",
    authNavRegistration: "Регистрация",

    footerContent: "Футер контент__",
    developers: "РАЗРАБОТЧИКИ",
    kovbenya: "Александр Ковбеня",
    anisimov: "Юрий Анисимов",
    martinkevich: "Алексей Мартинкевич",
    chazov: "Александр Чазов",
  },

  bel: {
    authNavPlaylist: "Плэйліст",
    authNavSettings: "Налады",
    authNavRegistration: "Рэгістрацыя",

    footerContent: "Футэр контэнт",
    developers: "РАСПРАЦОУНIКI",
    kovbenya: "Аляксандр Каўбеня",
    anisimov: "Юрый Анiсiмаў",
    martinkevich: "Аляксей Марцiнкевич",
    chazov: "Аляксандр Чазаў",
  },
};

export default initialState;
