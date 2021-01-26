import React from "react";
import { NavLink } from "react-router-dom";
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
            <li className="Lselector">
              <NavLink onClick={context.state.setRu} to="">
                <img src={russia} alt="rus" />
              </NavLink>
            </li>
            <li className="Lselector">
              <NavLink onClick={context.state.setEn} to="">
                <img src={uk} alt="uk" />
              </NavLink>
            </li>
            <li className="Lselector">
              <NavLink onClick={context.state.setBel} to="">
                <img src={bel} alt="bel" />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    )}
  </AuthContext.Consumer>
);

export default Header;
