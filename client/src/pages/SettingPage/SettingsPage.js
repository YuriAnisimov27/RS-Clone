/* eslint-disable */
import React from "react";
import "./SettingsPage.css";
import {
  decreaseTextSizeHandler,
  increaseTextSizeHandler,
  backgroundOnChangeHandler,
  textColorOnChangeHandler,
  imageSwitcherHandler,
  resetStyles,
} from "../AuthPage/authPageElements/settings";
import { storage } from "../AuthPage/authPageElements/helpers";
import img1 from "../../assets/images/backGrounds/1.png";
import img2 from "../../assets/images/backGrounds/2.png";
import img3 from "../../assets/images/backGrounds/3.png";
import img4 from "../../assets/images/backGrounds/4.png";
import img5 from "../../assets/images/backGrounds/5.png";
import img6 from "../../assets/images/backGrounds/6.png";
import img7 from "../../assets/images/backGrounds/7.png";
import img8 from "../../assets/images/backGrounds/8.png";

if (storage(`customBackgroundColor`)) {
  document.body.style.backgroundImage = `none`;
  document.body.style.backgroundColor = storage(`customBackgroundColor`);
  // const dropDownElements = document.querySelectorAll(`.dropdown-li`);
  // dropDownElements.forEach((item) => {
  //   const link = item;
  //   link.style.backgroundColor = storage(`customBackgroundColor`);
  // });
  window.onload = function () {
    const dropDownElements = document.querySelectorAll(`.dropdown-li`);
    dropDownElements.forEach((item) => {
      const link = item;
      link.style.backgroundColor = storage(`customBackgroundColor`);
    });
  };
}

if (storage(`customTextColor`)) {
  window.onload = function () {
    console.log(`+++`);
    console.log(storage(`customTextColor`));
    const allLinks = document.querySelectorAll("a");
    document.body.style.color = storage(`customTextColor`);
    allLinks.forEach((item) => {
      const link = item;
      link.style.color = storage(`customTextColor`);
    });
  };
}

const arrayOfBackgrounds = [img1, img2, img3, img4, img5, img6, img7, img8];
if (storage("customBackgroundImg")) {
  document.body.style.backgroundImage = `url(${arrayOfBackgrounds[storage("customBackgroundImg") - 1]
    })`;
}

// if (storage("footerSize") && storage("navSize")) {
//   window.onload = function () {
//     const allLinks = document.querySelectorAll("a");
//     allLinks.forEach((item) => {
//       const link = item;
//       if (!link.classList.contains("nav-link")) {
//         link.style.fontSize = `${storage("footerSize")}px`;
//       } else {
//         link.style.fontSize = `${storage("navSize")}px`;
//       }
//     });
//   };
// }

let isShiftDown = false;
document.addEventListener("keydown", (e) => {
  if (e.code === "ShiftLeft") {
    isShiftDown = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "ShiftLeft") {
    isShiftDown = false;
  }

  if (e.code === "Equal") {
    if (isShiftDown) {
      increaseTextSizeHandler();
    }
  }

  if (e.code === "Minus") {
    if (isShiftDown) {
      decreaseTextSizeHandler();
    }
  }
});

const SettingsPage = () => (
  <div className="settings-container">
    <div className="setting">
      <button
        className="waves-effect waves-light btn back-image"
        type="button"
        onClick={imageSwitcherHandler}
      >
        Background image
      </button>
      <button type="button" className="info">
        info
      </button>
    </div>
    <div className="setting">
      <div className="color-input-container">
        <span className="input-name">Background color</span>
        <input type="color" onChange={backgroundOnChangeHandler} />
      </div>
      <button type="button" className="info">
        info
      </button>
    </div>
    <div className="setting">
      <div className="color-input-container">
        <span className="input-name">Font color</span>
        <input type="color" onChange={textColorOnChangeHandler} />
      </div>
      <button type="button" className="info">
        info
      </button>
    </div>
    <div className="setting">
      <div className="font-size-container">
        <button type="button" onClick={increaseTextSizeHandler}>
          Font +
        </button>
        <button type="button" onClick={decreaseTextSizeHandler}>
          Font -
        </button>
      </div>
      <button type="button" className="info">
        info
      </button>
    </div>
    <button type="button" onClick={resetStyles}>
      Reset styles
    </button>
  </div>
);

export default SettingsPage;
