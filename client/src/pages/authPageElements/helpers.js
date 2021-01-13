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