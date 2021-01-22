/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { playSong, closePlayer } from './musicHandler';
import { showDialog } from './helpers';
import arrow from '../../assets/UI/angle-arrow-down.svg';
import playMusic from '../../assets/UI/play.svg'
import cross from '../../assets/UI/cross.svg';


import './MainNav.css';
import { AuthContext } from '../../context/AuthContext'

export const MainNav = () => {
  return (
    <AuthContext.Consumer>
      {context => (
        <nav className='N/A transparent'>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right nav-ul">
              <li className='nav-ul__li'> <img onClick={closePlayer} className='cross' src={cross} alt='cross' /> </li>
              <li className='nav-ul__li music'>
              </li>
              <li className='nav-ul__li'>
                <a className='nav-link'>{context.state.authNavPlaylist}
                  <img className='arrow' src={arrow} alt='arrowlist' />
                </a>
                <ul className='dropdown'>
                  <li className='dropdown-li'><a onClick={(e) => playSong(e.target.innerText)} className='song'>Super Mario <img className='playmusic' src={playMusic} alt='play' /></a></li>
                  <li className='dropdown-li'><a onClick={(e) => playSong(e.target.innerText)} className='song'>Awolnation-Run <img className='playmusic' src={playMusic} alt='play' /></a></li>
                  <li className='dropdown-li'><a onClick={(e) => playSong(e.target.innerText)} className='song'>OST Subway Surfers <img className='playmusic' src={playMusic} alt='play' /></a></li>
                  <li className='dropdown-li'><a onClick={(e) => playSong(e.target.innerText)} className='song'>Battle Toads <img className='playmusic' src={playMusic} alt='play' /></a></li>
                  <li className='dropdown-li'><a onClick={(e) => playSong(e.target.innerText)} className='song'>GTA San-Andreas <img className='playmusic' src={playMusic} alt='play' /></a></li>
                </ul>
              </li>
              <li className='nav-ul__li'><a className='nav-link' href="/">{context.state.authNavSettings}</a></li>
              <li className='nav-ul__li'><a className='nav-link' onClick={showDialog}>{context.state.authNavRegistration}</a></li>
            </ul>
          </div>
        </nav>
      )
      }
    </AuthContext.Consumer>
  )
};

