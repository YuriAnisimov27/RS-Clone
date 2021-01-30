/* eslint-disable */
import React, { useState } from "react";
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
import arrowRight from "../../assets/UI/right-arrow.png";
import AuthContext from "../../context/AuthContext";
import BackgroundImgMessage from "./settingsPageElements/BGroundImgMessage"
import BackgroundColorMessage from "./settingsPageElements/BGroundColorMessage"
import FontColorMessage from "./settingsPageElements/FontColorMessage"
import FontSizeMessage from "./settingsPageElements/FontSizeMessage"

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

const SettingsPage = () => {
  const [activeBackgroundColorMessage, setActiveactiveBackgroundColorMessage] = useState(false);
  const [activeBackgroundImgMessage, setActiveBackgroundImgMessage] = useState(false);
  const [activeFontColorMessage, setActiveFontColorMessage] = useState(false);
  const [activeFontSizeMessage, setActiveFontSizeMessageMessage] = useState(false);

  return (
    <AuthContext.Consumer>
      {(context) => (
        <div className="settings-wrapper">
          <BackgroundImgMessage active={activeBackgroundImgMessage} setActive={setActiveBackgroundImgMessage} />
          <BackgroundColorMessage active={activeBackgroundColorMessage} setActive={setActiveactiveBackgroundColorMessage} />
          <FontColorMessage active={activeFontColorMessage} setActive={setActiveFontColorMessage} />
          <FontSizeMessage active={activeFontSizeMessage} setActive={setActiveFontSizeMessageMessage} />
          <div className="settings-container">
            <div className="setting">
              <button
                className="waves-effect waves-light btn grey lighten-1 back-image"
                type="button"
                onClick={imageSwitcherHandler}
              >
                {context.state.changeBackgroundImg}
              </button>
              <button
                href="#!"
                className="info btn-floating waves-effect waves-light red"
                onClick={() => {
                  setActiveBackgroundImgMessage(!activeBackgroundImgMessage);
                }}
              >
                info
            </button>
            </div>
            <div className="setting">
              <div className="color-input-container card-panel lighten-2 grey lighten-1">
                <p className="input-name back-name">
                  {context.state.changeBackgroundColor}
                  <img className="arrow-back" src={arrowRight} alt="arrow" />
                </p>
                <input type="color" onChange={backgroundOnChangeHandler} />
              </div>
              <button
                type="button"
                className="info btn-floating waves-effect waves-light red"
                onClick={() => {
                  setActiveactiveBackgroundColorMessage(!activeBackgroundColorMessage);
                }}
              >
                info
            </button>
            </div>
            <div className="setting">
              <div className="color-input-container card-panel lighten-2 grey lighten-1">
                <p className="input-name">
                  {context.state.changeFontColor}
                  <img className="arrow-font" src={arrowRight} alt="arrow" />
                </p>
                <input type="color" onChange={textColorOnChangeHandler} />
              </div>
              <button
                type="button"
                className="info btn-floating waves-effect waves-light red"
                onClick={() => {
                  setActiveFontColorMessage(!activeFontColorMessage);
                }}
              >
                info
            </button>
            </div>
            <div className="setting">
              <div className="font-size-container card-panel lighten-2">
                <button
                  className="font-handler font-pl btn grey lighten-1"
                  type="button"
                  onClick={decreaseTextSizeHandler}
                >
                  {context.state.decrFontSize}
                </button>
                <button
                  className="font-handler font-min btn grey lighten-1"
                  type="button"
                  onClick={increaseTextSizeHandler}
                >
                  {context.state.incrFontSize}
                </button>
              </div>
              <button
                type="button"
                className="info btn-floating waves-effect waves-light red"
                onClick={() => {
                  setActiveFontSizeMessageMessage(!activeFontSizeMessage);
                }}
              >
                info
            </button>
            </div>
            <button
              className="btn grey lighten-2 reset"
              type="button"
              onClick={resetStyles}
            >
              {context.state.resetStyle}
            </button>
          </div>
        </div>
      )}
    </AuthContext.Consumer>
  )
};

export default SettingsPage;
