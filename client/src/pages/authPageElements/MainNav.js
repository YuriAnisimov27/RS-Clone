import React from 'react';
import {showDialog, showPlayer} from './helpers';

export const MainNav = () => (
  <nav className='N/A transparent'>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right nav-ul">
              <li className='nav-ul__li'><a className='nav-link' onClick={showPlayer}>Playlist</a></li>
              <li className='nav-ul__li'><a className='nav-link' href="/">Settings</a></li>
              <li className='nav-ul__li'><a className='nav-link' onClick={showDialog}>Registration</a></li>
            </ul>
          </div>
        </nav>
)