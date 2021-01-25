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
  <div>
    <div className="backgroundColorSwitcher-container">
      <div>
        <p>BackgroundColor-Changer</p>
        <input
          type="color"
          className="backgroundColorInput"
          name="colorPicker"
        />
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        className="changeColor_btn"
        onClick={(e) => {
          backgroundColorSwitcher(e);
        }}
      >
        Change color
      </button>
    </div>
    <div className="backgroundColorSwitcher1-container">
      <input
        type="color"
        className="backgroundColorInput1"
        onChange={(e) => backgroundOnChangeHandler(e)}
      />
      <p>Super-BackgroundColor-Changer</p>
    </div>
    <div className="textColorSwitcher-container">
      <div>
        <p>TextColor-Changer</p>
        <input type="color" className="textColorInput" name="head" />
      </div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        type="button"
        className="changeColor_btn"
        onClick={(e) => {
          textColorSwitcher(e);
        }}
      >
        Change color
      </button>
    </div>
    <div className="textColorSwitcher1-container">
      <div>
        <p>Super-TextColor-Changer</p>
        <input
          type="color"
          className="textColorInput1"
          onChange={(e) => textColorOnChangeHandler(e)}
        />
      </div>
    </div>
    <div className="textSizeSwitcher-container">
      <h6>
        You also can use <b>Shift</b>+<b> + </b> and <b>Shift</b>+<b> - </b>
      </h6>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="decreaseTextSize" onClick={decreaseTextSizeHandler}>
        -
      </button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className="increaseTextSize" onClick={increaseTextSizeHandler}>
        {" "}
        +
      </button>
    </div>
    <div className="backGroundImgSwitcher">
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={imageSwitcherHandler}>Switch backGround image</button>
    </div>
  </div>
);

export default SettingsPage;
