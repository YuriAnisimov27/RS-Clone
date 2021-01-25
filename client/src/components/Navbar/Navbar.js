import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useGoogleLogout } from "react-google-login";
import AuthContext from "../../context/AuthContext";
import playSong, {
  closePlayer,
} from "../../pages/AuthPage/authPageElements/musicHandler";
import arrow from "../../assets/UI/angle-arrow-down.svg";
import playMusic from "../../assets/UI/play.svg";
import cross from "../../assets/UI/cross.svg";

const clientId =
  "573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const { signOut } = useGoogleLogout({
    clientId,
  });

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    signOut();
    setTimeout(() => {
      auth.logout();
      signOut();
    }, 100);
    history.push("/");
  };

  return (
    <nav className="N/A transparent">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right nav-ul">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
              Playlist
              <img className="arrow" src={arrow} alt="arrow list" />
            </a>
            <ul className="dropdown">
              <li className="dropdown-li">
                <a onClick={(e) => playSong(e)} className="song" href="..">
                  Super Mario{" "}
                  <img className="play-music" src={playMusic} alt="play" />
                </a>
              </li>
              <li className="dropdown-li">
                <a onClick={(e) => playSong(e)} className="song" href="..">
                  Awo-Run{" "}
                  <img className="play-music" src={playMusic} alt="play" />
                </a>
              </li>
              <li className="dropdown-li">
                <a onClick={(e) => playSong(e)} className="song" href="..">
                  OST Subway Surfers{" "}
                  <img className="play-music" src={playMusic} alt="play" />
                </a>
              </li>
              <li className="dropdown-li">
                <a onClick={(e) => playSong(e)} className="song" href="..">
                  Battle Toads{" "}
                  <img className="play-music" src={playMusic} alt="play" />
                </a>
              </li>
              <li className="dropdown-li">
                <a onClick={(e) => playSong(e)} className="song" href="..">
                  GTA San-Andreas{" "}
                  <img className="play-music" src={playMusic} alt="play" />
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-ul__li">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-ul__li">
            <NavLink className="nav-link" to="/settings">
              Settings
            </NavLink>
          </li>
          <li className="nav-ul__li">
            <a className="nav-link" href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
