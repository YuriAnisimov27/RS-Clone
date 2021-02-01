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
    logout: "logout",
    game: "Play",
    comment: `You can also leave a review - and remember -
     your review is very important to you`,
    footerContent: "Footer Content__EN",
    developers: "DEVELOPERS",
    kovbenya: "Alexander Kovbenya",
    anisimov: "Yuri Anisimov",
    martinkevich: "Alex Martinkevich",
    chazov: "Alexander Chazov",
    send: "send",
    donationText: `We are pleased that you have pressed this button.
     If you really want to donate use this link.`,
    donationInfo: "our details: rsclone.dino.2021.supp0rt@yandex.by",
    hello: "Hello!",
    signIn: "Sign in",
    about: "About",
    donation: "Donation",
    aboutText1: `After completing a short registration procedure,
     you will receive:`,
    aboutText2: `access to stunning sequel 
    to the bestselling Google Dinosaur`,
    aboutText3: "the ability to customize the appearance of the application",
    aboutButton: "Go!",
    registrationInfo: "Fill in all fields to create an account",
    email: "email",
    password: "Password",
    logIn: "LogIn",
    registration: "Registration",
    changeBackgroundImg: "Background image",
    changeBackgroundColor: "Background color",
    changeFontColor: "Font color",
    incrFontSize: "Font+",
    decrFontSize: "Font-",
    resetStyle: "Reset",
    backImgMessage: `Change the background image.
    After reloading the page, the selected background image is saved`,
    backColorMessage: `Change the background color.
    After reloading the page, the selected color is saved`,
    fontColorMessage: `Change the color of the text.
    After reloading the page, the selected color is saved`,
    fontSizeColor: `Change the size of the text.
    After reloading the page, the selected size is saved`,
    fontSizeColorHotkeys: `You can use the key combination Shift + '+' and Shift + '-'`,
  },

  ru: {
    authNavPlaylist: "Плейлист",
    authNavSettings: "Настройки",
    authNavRegistration: "Регистрация",
    logout: "Выход",
    game: "Игра",
    comment: `Также Вы можете оставить отзыв - и помните -
     Ваш отзыв очень важен для вас`,
    footerContent: "Футер контент__",
    developers: "РАЗРАБОТЧИКИ",
    kovbenya: "Александр Ковбеня",
    anisimov: "Юрий Анисимов",
    martinkevich: "Алексей Мартинкевич",
    chazov: "Александр Чазов",
    send: "Отправить",
    donationText: `Мы рады, что вы нажали эту кнопку.
     Если вы действительно хотите сделать пожертвование, воспользуйтесь этой ссылкой.`,
    donationInfo: "Наши реквизиты: rsclone.dino.2021.supp0rt@yandex.by",
    hello: "Привет!",
    signIn: "Войти",
    about: "Информация",
    donation: "Пожертвование",
    aboutText1: "Пройдя недолгую процедуру регистрации вы получите:",
    aboutText2: `доступ к ошеломительному
     продолжению бестселлера Google Dinosaur`,
    aboutText3: "возможность кастомизировать внешний вид приложения",
    aboutButton: "Вперёд!",
    registrationInfo: "Заполните все поля, чтобы создать учетную запись",
    email: "Почта",
    password: "Пароль",
    logIn: "Логин",
    registration: "Регистрация",
    changeBackgroundImg: "Фоновое изображение",
    changeBackgroundColor: "Цвет фона",
    changeFontColor: "Цвет шрифта",
    incrFontSize: "Шрифт+",
    decrFontSize: "Шрифт-",
    resetStyle: "Сброс",
    backImgMessage: `Изменение фонового изображения. 
    После перезагрузки страницы выбранное фоновое изображение сохраняется.`,
    backColorMessage: `Изменение цвета фона. 
    После перезагрузки страницы выбранный цвет сохраняется`,
    fontColorMessage: `Изменение цвета текста. 
    После перезагрузки страницы выбранный цвет сохраняется`,
    fontSizeColor: `Изменение размера текста. 
    После перезагрузки страницы выбранный размер сохраняется`,
    fontSizeColorHotkeys: `Вы можете использовать комбинацию клавиш Shift+'+' и Shift+'-'`,
  },

  bel: {
    authNavPlaylist: "Плэйліст",
    authNavSettings: "Налады",
    authNavRegistration: "Рэгістрацыя",
    logout: "Выхад",
    game: "Гульня",
    comment: `Таксама Вы можаце пакінуць водгук - і памятайце -
     Ваш водгук вельмі важны для вас`,
    footerContent: "Футэр контэнт",
    developers: "РАСПРАЦОУНIКI",
    kovbenya: "Аляксандр Каўбеня",
    anisimov: "Юрый Анiсiмаў",
    martinkevich: "Аляксей Марцiнкевiч",
    chazov: "Аляксандр Чазаў",
    send: "адправіць",
    donationText: `Мы рады, што вы націснулі гэтую кнопку.
     Калі вы сапраўды хочаце зрабіць ахвяраванне, скарыстайцеся гэтай спасылкай.`,
    donationInfo: "Нашы рэквізіты: rsclone.dino.2021.supp0rt@yandex.by",
    hello: "Прывітанне!",
    signIn: "Увайсці",
    about: "Iнфармацыя",
    donation: "Ахвяраванне",
    aboutText1: "Прайшоўшы нядоўгую працэдуру рэгістрацыі вы атрымаеце:",
    aboutText2: `доступ да ашаламляльны
    прадаўжэння бэстсэлера Google Dinosaur`,
    aboutText3: "магчымасць змяняць знешні выгляд прыкладання",
    aboutButton: "Уперад!",
    registrationInfo: "Запоўніце ўсе палі, каб стварыць уліковы запіс",
    email: "Пошта",
    password: "Пароль",
    logIn: "Логiн",
    registration: "Рэгістрацыя",
    changeBackgroundImg: "Фонавы малюнак",
    changeBackgroundColor: "Колер фону",
    changeFontColor: "Колер шрыфта",
    incrFontSize: "Шрыфт+",
    decrFontSize: "Шрыфт-",
    resetStyle: "Скід",
    backImgMessage: `Змена фонавага малюнка.
    Пасля перазагрузкі старонкі абранае фонавы малюнак захоўваецца`,
    backColorMessage: `Змяненне колеру фону.
    Пасля перазагрузкі старонкі абраны колер захоўваецца`,
    fontColorMessage: `Змяненне колеру тэксту.
    Пасля перазагрузкі старонкі абраны колер захоўваецца`,
    fontSizeColor: `Змена памеру тэксту.
    Пасля перазагрузкі старонкі абраны памер захоўваецца`,
    fontSizeColorHotkeys: `Вы можаце выкарыстоўваць камбінацыю клавіш Shift + '+' і Shift + '-'`,
  },
};

export default initialState;
