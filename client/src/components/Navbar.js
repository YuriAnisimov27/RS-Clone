import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useGoogleLogout } from "react-google-login";

const clientId =
  '573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com'; // must be in the context

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const { signOut } = useGoogleLogout({
    clientId
  });
  const logoutHandler = (event) => {
    event.preventDefault();
    signOut(); // probably asynch function, cant resolve console errors
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1" style={{ padding: '0 2rem' }}>
        <a href="/" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to='/data'>Data</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/settings'>Settings</NavLink></li>
          <li><a href='/' onClick={logoutHandler}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};
