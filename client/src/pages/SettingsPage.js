import React from 'react';
import './SettingsPage.css'
import { storage } from './authPageElements/helpers'


if (storage('customBackgroundColor')) {
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = storage('customBackgroundColor');
}

if (storage('customTextColor')) {
  document.body.style.color = storage('customTextColor');
}


const backgroundColorSwitcher = () => {
  const colorInput = document.querySelector('.backgroundColorInput');
  const newColor = colorInput.value;
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = newColor;
  storage('customBackgroundColor', newColor);
}

const textColorSwitcher = () => {
  const colorInput = document.querySelector('.textColorInput');
  const newColor = colorInput.value;
  document.body.style.color = newColor;
  storage('customTextColor', newColor);
}



let currentFontSize = 14;

const decreaseTextSizeHandler = () => {
  const allLinks = document.querySelectorAll('a');
  currentFontSize--;
  allLinks.forEach(item => {
    // if (!item.classList.contains('nav-link')) {
    item.style.fontSize = `${currentFontSize}px`
    // }
  })
}

const increaseTextSizeHandler = () => {
  const allLinks = document.querySelectorAll('a');
  currentFontSize++;
  allLinks.forEach(item => {
    // if (!item.classList.contains('nav-link')) {
    item.style.fontSize = `${currentFontSize}px`
    // }
  })
}

let isShiftDown = false;
document.addEventListener('keydown', (e) => {
  if (e.code === 'ShiftLeft') {
    isShiftDown = true;
  }
})


document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft') {
    isShiftDown = false;
  }

  if (e.code === 'Equal') {
    if (isShiftDown) {
      increaseTextSizeHandler();
    }
  }

  if (e.code === 'Minus') {
    if (isShiftDown) {
      decreaseTextSizeHandler();
    }
  }

})



export const SettingsPage = () => {
  return (
    <div>
      <div className="backgroundColorSwitcher-container">
        <div>
          <label className="backgroundColorInput-container-label" htmlFor="head">Background-color</label>
          <input type="color" className="backgroundColorInput" name="head" />
          <label className="backgroundColorInputr-container-label" htmlFor="head">SomeText</label>
        </div>
        <button className="changeColor_btn" onClick={backgroundColorSwitcher}>Change color</button>
      </div>
      <div className="textColorSwitcher-container">
        <div>
          <label className="textColorInput-label" htmlFor="head">Text-color</label>
          <input type="color" className="textColorInput" name="head" />
          <label className="textColorInput-label" htmlFor="head">SomeText</label>
        </div>
        <button className="changeColor_btn" onClick={textColorSwitcher}>Change color</button>
      </div>
      <div className="textSizeSwitcher">
        <h6>You also can use <b>Shift</b>+<b>'+'</b> and <b>Shift</b>+<b>'-'</b></h6>
        <button className="decreaseTextSize" onClick={decreaseTextSizeHandler}>-</button>
        <button className="increaseTextSize" onClick={increaseTextSizeHandler}> +</button>
      </div>
    </div>
  )
}
