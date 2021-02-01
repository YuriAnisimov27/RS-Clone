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

  const songs = [
    "Super Mario",
    "Awo-Run",
    "OST Subway Surfers",
    "Battle Toads",
    "GTA San-Andreas",
  ];

  return (
    <AuthContext.Consumer>
      {(context) => (
        <nav className="N/A transparent">
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right nav-ul">
              <li className="nav-ul__li">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={closePlayer}
                  className="player-cross-btn"
                >
                  <img className="cross" src={cross} alt="cross" />
                </div>
              </li>
              <li className="nav-ul__li music" />
              <li className="nav-ul__li">
                <NavLink className="nav-link" to="">
                  {context.state.authNavPlaylist}
                  <img className="arrow" src={arrow} alt="arrow list" />
                </NavLink>
                <ul className="dropdown">
                  {songs.map((el) => (
                    <li className="dropdown-li" key={el}>
                      <NavLink
                        onClick={(e) => playSong(e)}
                        className="song"
                        to=""
                      >
                        {el}
                        <img
                          className="play-music"
                          src={playMusic}
                          alt="play"
                        />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-ul__li">
                <NavLink className="nav-link" to="/game">
                  {context.state.game}
                </NavLink>
              </li>
              <li className="nav-ul__li">
                <NavLink className="nav-link" to="/settings">
                  {context.state.authNavSettings}
                </NavLink>
              </li>
              <li className="nav-ul__li">
                <NavLink
                  className="nav-link"
                  href="/"
                  onClick={logoutHandler}
                  to=""
                >
                  {context.state.logout}
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </AuthContext.Consumer>
  );
};

export default Navbar;
