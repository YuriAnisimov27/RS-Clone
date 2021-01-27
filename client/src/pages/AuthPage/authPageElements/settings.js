/* eslint-disable */
import { storage } from "./helpers";
import img1 from "../../../assets/images/backGrounds/1.png";
import img2 from "../../../assets/images/backGrounds/2.png";
import img3 from "../../../assets/images/backGrounds/3.png";
import img4 from "../../../assets/images/backGrounds/4.png";
import img5 from "../../../assets/images/backGrounds/5.png";
import img6 from "../../../assets/images/backGrounds/6.png";
import img7 from "../../../assets/images/backGrounds/7.png";
import img8 from "../../../assets/images/backGrounds/8.png";

export const backgroundColorSwitcher = () => {
  const colorInput = document.querySelector(".background-color-input");
  const newColor = colorInput.value;
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = newColor;
  storage("customBackgroundColor", newColor);
};

export const textColorSwitcher = () => {
  const colorInput = document.querySelector(".text-color-input");
  const newColor = colorInput.value;
  document.body.style.color = newColor;

  const allLinks = document.querySelectorAll("a");
  allLinks.forEach((item) => {
    item.style.color = newColor;
  });
  storage("customTextColor", newColor);
};

let currentFontSizeFooter = 14;
let currentFontSizeNav = 25;
export const decreaseTextSizeHandler = () => {
  const allLinks = document.querySelectorAll("a");
  if (currentFontSizeFooter > 9) {
    currentFontSizeFooter--;
    allLinks.forEach((item) => {
      if (!item.classList.contains('nav-link')) {
        item.style.fontSize = `${currentFontSizeFooter}px`;
      }
    });
  }

  const allLinksNav = document.querySelectorAll(".nav-link");

  if (currentFontSizeNav > 20) {
    currentFontSizeNav--;
    allLinksNav.forEach((item) => {
      item.style.fontSize = `${currentFontSizeNav}px`;
    });
  } else {
    window.M.toast({ html: "Minimum size!" });
  }
};

export const increaseTextSizeHandler = () => {
  const allLinks = document.querySelectorAll("a");
  if (currentFontSizeFooter < 19) {
    currentFontSizeFooter++;
    allLinks.forEach((item) => {
      if (!item.classList.contains('nav-link')) {
        item.style.fontSize = `${currentFontSizeFooter}px`;
      }
    });
  }

  const allLinksNav = document.querySelectorAll(".nav-link");

  if (currentFontSizeNav < 30) {
    currentFontSizeNav++;
    allLinksNav.forEach((item) => {
      item.style.fontSize = `${currentFontSizeNav}px`;
    });
  } else {
    window.M.toast({ html: "Maximum size!" });
  }
};

export const backgroundOnChangeHandler = (e) => {
  const colorPicker = e.target;
  const newColor = colorPicker.value;
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = newColor;
  storage("customBackgroundColor", newColor);
};

export const textColorOnChangeHandler = (e) => {
  const colorPicker = e.target;
  const newColor = colorPicker.value;
  document.body.style.color = newColor;

  const allLinks = document.querySelectorAll("a");
  currentFontSize++;
  allLinks.forEach((item) => {
    // if (!item.classList.contains('nav-link')) {
    item.style.color = newColor;
    // }
  });

  storage("customTextColor", newColor);
};

let currentNumberOfbackground = 1;
const arrayOfBackgrounds = [img1, img2, img3, img4, img5, img6, img7, img8];
export const imageSwitcherHandler = () => {
  document.body.style.backgroundImage = `url(${arrayOfBackgrounds[currentNumberOfbackground++]
    })`;
  if (currentNumberOfbackground === 8) {
    currentNumberOfbackground = 0;
  }
};
