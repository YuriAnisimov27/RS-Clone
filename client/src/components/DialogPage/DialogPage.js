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
import AuthContext from "../../context/AuthContext";

const DialogPage = () => {
  const [activeDonat, setActiveDonat] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);

  return (
    <AuthContext.Consumer>
      {(context) => (
        <div className="DialogPage off">
          <DonatMessage active={activeDonat} setActive={setActiveDonat} />
          <AboutMessage active={activeAbout} setActive={setActiveAbout} />
          <div className="dino-dialog">
            <img className="dino-dialog-img" src={logo} alt="dino" />
          </div>
          <div className="dialog-bubble">
            <img className="bubble-dialog-Img" src={bubble} alt="bubble" />
            <div className="dialog-nav">
              <button type="button" className="exit-btn" onClick={showDialog}>
                <img className="exit-img" src={cross} alt="exit" />
              </button>
              <h5 className="dialog-greeting">{context.state.hello}</h5>
              <ul className="dialog-nav-ul">
                <li className="dialog-nav-ul__li">
                  <a
                    href="#!"
                    className="dialog-link signin"
                    onClick={showRegistration}
                  >
                    {context.state.signIn}
                  </a>
                </li>
                <li className="dialog-nav-ul__li">
                  <a
                    href="#!"
                    className="dialog-link"
                    onClick={() => {
                      setActiveAbout(!activeAbout);
                    }}
                  >
                    {context.state.about}
                  </a>
                </li>
                <li className="dialog-nav-ul__li">
                  <a
                    href="#!"
                    className="dialog-link"
                    onClick={() => {
                      setActiveDonat(!activeDonat);
                    }}
                  >
                    {context.state.donation}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </AuthContext.Consumer>
  );
};

export default DialogPage;
