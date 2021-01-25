export const showDialog = () => {
  document.querySelector(".AuthPage").classList.toggle("off");
  document.querySelector(".DialogPage").classList.toggle("off");
  document.body.classList.toggle("scroll__off");
};

export const showRegistration = () => {
  document.querySelector(".DialogPage").classList.toggle("off");
  document.querySelector(".auth-card").classList.toggle("off");
  document.body.classList.toggle("scroll__off");
};

export const showAbout = () => {
  console.log("Showing about");
};

export const changeLanguage = () => {
  console.log("language changed");
};

export const showStartPage = () => {
  document.querySelector(".auth-card").classList.toggle("off");
  document.querySelector(".AuthPage").classList.toggle("off");
};

export const storage = (key, data = null) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
  return undefined;
};
