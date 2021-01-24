import { storage } from './authPageElements/helpers'


export const backgroundColorSwitcher = (e) => {
  const colorInput = document.querySelector('.backgroundColorInput');
  const newColor = colorInput.value;
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = newColor;
  storage('customBackgroundColor', newColor);
}

export const textColorSwitcher = () => {
  const colorInput = document.querySelector('.textColorInput');
  const newColor = colorInput.value;
  document.body.style.color = newColor;

  const allLinks = document.querySelectorAll('a');
  currentFontSize++;
  allLinks.forEach(item => {
    // if (!item.classList.contains('nav-link')) {
    item.style.color = newColor;
    // }
  })


  storage('customTextColor', newColor);
}

let currentFontSize = 14;

export const decreaseTextSizeHandler = () => {
  const allLinks = document.querySelectorAll('a');
  currentFontSize--;
  allLinks.forEach(item => {
    // if (!item.classList.contains('nav-link')) {
    item.style.fontSize = `${currentFontSize}px`
    // }
  })
}

export const increaseTextSizeHandler = () => {
  const allLinks = document.querySelectorAll('a');
  currentFontSize++;
  allLinks.forEach(item => {
    // if (!item.classList.contains('nav-link')) {
    item.style.fontSize = `${currentFontSize}px`
    // }
  })
}

export const backgroundOnChangeHandler = (e) => {
  const colorPicker = e.target;
  const newColor = colorPicker.value;
  document.body.style.backgroundColor = newColor;
  storage('customBackgroundColor', newColor);
}

export const textColorOnChangeHandler = (e) => {
  const colorPicker = e.target;
  const newColor = colorPicker.value;
  document.body.style.color = newColor;

  const allLinks = document.querySelectorAll('a');
  currentFontSize++;
  allLinks.forEach(item => {
    // if (!item.classList.contains('nav-link')) {
    item.style.color = newColor;
    // }
  })

  storage('customTextColor', newColor);
}