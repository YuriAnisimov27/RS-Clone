import React from "react";
import "./SettingsPage.css";
import {
  backgroundColorSwitcher,
  textColorSwitcher,
  decreaseTextSizeHandler,
  increaseTextSizeHandler,
  backgroundOnChangeHandler,
  textColorOnChangeHandler,
  imageSwitcherHandler,
  resetStyles,
} from "../AuthPage/authPageElements/settings";
import { storage } from "../AuthPage/authPageElements/helpers";

if (storage(`customBackgroundColor`)) {
  document.body.style.backgroundImage = `none`;
  document.body.style.backgroundColor = storage(`customBackgroundColor`);
}

if (storage(`customTextColor`)) {
  // textColorSwitcher(storage(`customTextColor`));
}

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
    <div className="background-container">
      <div className="background-color-switcher-container">
        <div className="color-changer-container">
          <p className="setting-p">Background color switcher</p>
          <input
            type="color"
            className="background-color-input"
            name="colorPicker"
          />
        </div>
        <button
          type="button"
          className="change-color_btn btn black waves-effect waves-light"
          onClick={(e) => {
            backgroundColorSwitcher(e);
          }}
        >
          Change color
        </button>
      </div>
      <div className="background-color-switcher1-container">
        <input
          type="color"
          className="background-color-input1"
          onChange={(e) => backgroundOnChangeHandler(e)}
        />
        <p className="setting-p">Super background color switcher</p>
      </div>
      <div className="back-ground-img-switcher">
        <button
          onClick={imageSwitcherHandler}
          type="button"
          className="btn black waves-effect waves-light change-color_btn"
        >
          Switch background image
        </button>
      </div>
    </div>
    <div className="text-container">
      <div className="text-color-switcher-container">
        <div className="color-changer-container">
          <p className="setting-p">Text color switcher</p>
          <input type="color" className="text-color-input" name="head" />
        </div>
        <button
          type="button"
          className="change-color_btn btn black waves-effect waves-light"
          onClick={(e) => {
            textColorSwitcher(e);
          }}
        >
          Change color
        </button>
      </div>
      <div className="text-color-switcher1-container">
        <p className="setting-p">Super text color switcher</p>
        <input
          type="color"
          className="text-color-input1"
          onChange={(e) => textColorOnChangeHandler(e)}
        />
      </div>
      <div className="text-size-switcher-container">
        <p className="setting-p">
          Font-size controller <br /> &apos;Shift +&apos; and &apos;Shift-&apos;
        </p>
        <div className="font-size-btn-handler">
          <button
            className="decrease-text-size btn black waves-effect waves-light"
            onClick={decreaseTextSizeHandler}
            type="button"
          >
            -
          </button>
          <button
            className="increase-text-size btn black waves-effect waves-light"
            onClick={increaseTextSizeHandler}
            type="button"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <button
      type="button"
      onClick={resetStyles}
      className="btn black waves-effect waves-light"
    >
      Reset style
    </button>
  </div>
);

export default SettingsPage;
