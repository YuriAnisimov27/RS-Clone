import React, { useState } from "react";
import logo from "../../assets/UI/dinoSmall.png";
import bubble from "../../assets/UI/buble.svg";
import cross from "../../assets/UI/cross.svg";
import {
  showDialog,
  showRegistration,
} from "../../pages/AuthPage/authPageElements/helpers";
import DonatMessage from "../../pages/AuthPage/authPageElements/DonatMessage";
import AboutMessage from "../../pages/AuthPage/authPageElements/AboutMessage";
import "./DialogPage.css";

const DialogPage = () => {
  const [activeDonat, setActiveDonat] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);

  return (
    <div className="DialogPage off">
      <DonatMessage active={activeDonat} setActive={setActiveDonat} />
      <AboutMessage active={activeAbout} setActive={setActiveAbout} />
      <div className="dino-dialog">
        <img className="dino-dialog-img" src={logo} alt="dino" />
      </div>
      <div className="dialog-bubble">
        <img className="bubble-dialog-Img" src={bubble} alt="bubble" />
        <div className="dialog-nav">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="exit-btn" onClick={showDialog}>
            <img className="exit-img" src={cross} alt="exit" />
          </div>
          <h5 className="dialog-greeting">HELLO!</h5>
          <ul className="dialog-nav-ul">
            <li className="dialog-nav-ul__li">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a className="dialog-link signin" onClick={showRegistration}>
                Sign in
              </a>
            </li>
            <li className="dialog-nav-ul__li">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a
                className="dialog-link"
                onClick={() => {
                  setActiveAbout(!activeAbout);
                }}
              >
                About
              </a>
            </li>
            <li className="dialog-nav-ul__li">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a
                className="dialog-link"
                onClick={() => {
                  setActiveDonat(!activeDonat);
                }}
              >
                Donation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DialogPage;
