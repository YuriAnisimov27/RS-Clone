import React from "react";
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
              {" "}
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <img
                onClick={closePlayer}
                className="cross"
                src={cross}
                alt="cross"
              />{" "}
            </li>
            <li className="nav-ul__li music" />
            <li className="nav-ul__li">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="nav-link">
                {context.state.authNavPlaylist}
                <img className="arrow" src={arrow} alt="arrowlist" />
              </a>
              <ul className="dropdown">
                <li className="dropdown-li">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <a onClick={(e) => playSong(e)} className="song">
                    Super Mario{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </a>
                </li>
                <li className="dropdown-li">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <a onClick={(e) => playSong(e)} className="song">
                    Awo-Run{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </a>
                </li>
                <li className="dropdown-li">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <a onClick={(e) => playSong(e)} className="song">
                    OST Subway Surfers{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </a>
                </li>
                <li className="dropdown-li">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <a onClick={(e) => playSong(e)} className="song">
                    Battle Toads{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </a>
                </li>
                <li className="dropdown-li">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <a onClick={(e) => playSong(e)} className="song">
                    GTA San-Andreas{" "}
                    <img className="play-music" src={playMusic} alt="play" />
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-ul__li">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a className="nav-link" onClick={showDialog}>
                {context.state.authNavRegistration}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )}
  </AuthContext.Consumer>
);

export default MainNav;
