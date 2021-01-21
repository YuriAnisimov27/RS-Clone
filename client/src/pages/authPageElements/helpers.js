export const showDialog = () => {
  document.querySelector('.AuthPage').classList.toggle('off');
  document.querySelector('.DialogPage').classList.toggle('off');
  document.body.classList.toggle('scroll__off');
};
export const showRegistartion = () => {
  document.querySelector('.DialogPage').classList.toggle('off');
  document.querySelector('.authcard').classList.toggle('off');
  document.body.classList.toggle('scroll__off');
};
export const showAbout = () => {
  console.log('Showing about')
};
export const showDonation = () => {
  console.log('Showing Donation')
};
export const changeLanguage = () => {
  console.log('language changed');
};
export const showPlayer = () => {
  document.querySelector('.music').classList.toggle('playeroff');
  document.querySelector('.game').classList.toggle('gamefullscr')
};
export const showStartPage = () => {
  document.querySelector('.authcard').classList.toggle('off');
  document.querySelector('.AuthPage').classList.toggle('off');
}
export const storage = (key, data = null) => {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(data));
  return undefined;
}
