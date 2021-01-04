import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-1" style={{padding: '0 2rem'}}>
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
