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
} from "../AuthPage/authPageElements/settings";

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
          <p>BackgroundColor-Changer</p>
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
        <p>Super-BackgroundColor-Changer</p>
      </div>
      <div className="back-ground-img-switcher">
        <button
          onClick={imageSwitcherHandler}
          type="button"
          className="btn black waves-effect waves-light"
        >
          Switch backGround image
        </button>
      </div>
    </div>
    <div className="text-container">
      <div className="text-color-switcher-container">
        <div className="color-changer-container">
          <p>TextColor-Changer</p>
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
        <p>Super-TextColor-Changer</p>
        <input
          type="color"
          className="text-color-input1"
          onChange={(e) => textColorOnChangeHandler(e)}
        />
      </div>
      <div className="text-size-switcher-container">
        <h6>
          You also can use <b>Shift</b>+<b> + </b> and <b>Shift</b>+<b> - </b>
        </h6>
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
);

export default SettingsPage;
