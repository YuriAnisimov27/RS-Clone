import React from "react";
import logo from "../../assets/UI/dinoSmall.png";
import russia from "../../assets/UI/russia.svg";
import uk from "../../assets/UI/united-kingdom.svg";
import bel from "../../assets/UI/belarus.svg";
import AuthContext from "../../context/AuthContext";
import "./Header.css";

const Header = () => (
  <AuthContext.Consumer>
    {(context) => (
      <header className="container header">
        <div className="logo">
          <div className="logoimg-container">
            <img className="logo-img" src={logo} alt="logo" />
          </div>
          <h1 className="game-name"> Game </h1>
        </div>
        <div className="languages">
          <ul className="languages-selector-ul">
            <li className="language-selector">
              <div
                className="changeLngBtn"
                role="button"
                tabIndex={0}
                onClick={context.state.setRu}
                to=""
              >
                <img src={russia} alt="rus" />
              </div>
            </li>
            <li className="language-selector">
              <div
                className="changeLngBtn"
                role="button"
                tabIndex={0}
                onClick={context.state.setEn}
                to=""
              >
                <img src={uk} alt="uk" />
              </div>
            </li>
            <li className="language-selector">
              <div
                className="changeLngBtn"
                role="button"
                tabIndex={0}
                onClick={context.state.setBel}
                to=""
              >
                <img src={bel} alt="bel" />
              </div>
            </li>
          </ul>
        </div>
      </header>
    )}
  </AuthContext.Consumer>
);

export default Header;
