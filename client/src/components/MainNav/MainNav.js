import React from "react";
import { NavLink } from "react-router-dom";
import playSong, {
  closePlayer,
} from "../../pages/AuthPage/authPageElements/musicHandler";
import { showDialog } from "../../pages/AuthPage/authPageElements/helpers";
import arrow from "../../assets/UI/angle-arrow-down.svg";
import playMusic from "../../assets/UI/play.svg";
import cross from "../../assets/UI/cross.svg";
import AuthContext from "../../context/AuthContext";
import "./MainNav.css";

const MainNav = () => (
  <AuthContext.Consumer>
    {(context) => (
      <nav className="N/A transparent">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right nav-ul">
            <li className="nav-ul__li">
              <NavLink onClick={closePlayer} to="">
                <img className="cross" src={cross} alt="cross" />
              </NavLink>
            </li>
            <li className="nav-ul__li music" />
            <li className="nav-ul__li">
              <NavLink className="nav-link" to="">
                {context.state.authNavPlaylist}
                <img className="arrow" src={arrow} alt="arrowlist" />
              </NavLink>
              <ul className="dropdown">
                <li className="dropdown-li">
                  <NavLink onClick={(e) => playSong(e)} className="song" to="">
                    Super Mario{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </NavLink>
                </li>
                <li className="dropdown-li">
                  <NavLink onClick={(e) => playSong(e)} className="song" to="">
                    Awo-Run{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </NavLink>
                </li>
                <li className="dropdown-li">
                  <NavLink onClick={(e) => playSong(e)} className="song" to="">
                    OST Subway Surfers{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </NavLink>
                </li>
                <li className="dropdown-li">
                  <NavLink onClick={(e) => playSong(e)} className="song" to="">
                    Battle Toads{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </NavLink>
                </li>
                <li className="dropdown-li">
                  <NavLink onClick={(e) => playSong(e)} className="song" to="">
                    GTA San-Andreas{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-ul__li">
              <NavLink className="nav-link" onClick={showDialog} to="">
                {context.state.authNavRegistration}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )}
  </AuthContext.Consumer>
);

export default MainNav;
