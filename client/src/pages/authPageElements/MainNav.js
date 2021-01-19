import React from 'react';
import { showDialog, showPlayer } from './helpers';
import './MainNav.css';
import { AuthContext } from '../../context/AuthContext'

export const MainNav = () => {
  return (
    <AuthContext.Consumer>
      {context => (
        <nav className='N/A transparent'>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right nav-ul">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li className='nav-ul__li'><a className='nav-link' onClick={showPlayer}>{context.state.authNavPlaylist}</a></li>
              <li className='nav-ul__li'><a className='nav-link' href="/">{context.state.authNavSettings}</a></li>
              <li className='nav-ul__li'><a className='nav-link' onClick={showDialog}>{context.state.authNavRegistration}</a></li>
            </ul>
          </div>
        </nav>
      )
      }
    </AuthContext.Consumer >
  );
};
