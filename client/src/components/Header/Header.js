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
      <header>
        <div className="logo">
          <div className="logoImg-container">
            <img className="logoImg" src={logo} alt="logo" />
          </div>
          <h1> Game </h1>
        </div>
        <div className="languages">
          <ul className="languages-selector">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <li className="Lselector" onClick={context.state.setRu}>
              <img src={russia} alt="rus" />
            </li>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <li className="Lselector" onClick={context.state.setEn}>
              <img src={uk} alt="uk" />
            </li>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <li className="Lselector" onClick={context.state.setBel}>
              <img src={bel} alt="bel" />
            </li>
          </ul>
        </div>
      </header>
    )}
  </AuthContext.Consumer>
);

export default Header;
