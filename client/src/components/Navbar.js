import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useGoogleLogout } from 'react-google-login';
import { playSong, closePlayer } from '../pages/authPageElements/musicHandler';
import arrow from '../assets/UI/angle-arrow-down.svg';
import playMusic from '../assets/UI/play.svg'
import cross from '../assets/UI/cross.svg';

const clientId = '573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com';

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const { signOut } = useGoogleLogout({
    clientId,
  });

  const logoutHandler = (event) => {
    try {
      event.preventDefault();
      auth.logout();
      signOut();
      setTimeout(() => {
        auth.logout();
        signOut();
      }, 100);
      history.push('/');
    } catch (e) {
      console.log('catch error');
    }
  };

  return (
    <nav className='N/A transparent'>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right nav-ul">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <li className='nav-ul__li'> <img onClick={closePlayer} className='cross' src={cross} alt='cross' /> </li>
          <li className='nav-ul__li music'>
          </li>
          <li className='nav-ul__li'>
            <a className='nav-link'>Playlist
          <img className='arrow' src={arrow} alt='arrowlist' />
            </a>
            <ul className='dropdown'>
              <li className='dropdown-li'><a onClick={(e) => playSong(e)} className='song' href='./'>Super Mario <img className='playmusic' src={playMusic} alt='play' /></a></li>
              <li className='dropdown-li'><a onClick={(e) => playSong(e)} className='song' href='./'>Awolnation-Run <img className='playmusic' src={playMusic} alt='play' /></a></li>
              <li className='dropdown-li'><a onClick={(e) => playSong(e)} className='song' href='./'>OST Subway Surfers <img className='playmusic' src={playMusic} alt='play' /></a></li>
              <li className='dropdown-li'><a onClick={(e) => playSong(e)} className='song' href='./'>Battle Toads <img className='playmusic' src={playMusic} alt='play' /></a></li>
              <li className='dropdown-li'><a onClick={(e) => playSong(e)} className='song' href='./'>GTA San-Andreas <img className='playmusic' src={playMusic} alt='play' /></a></li>
            </ul>
          </li>
          <li className='nav-ul__li'><NavLink className='nav-link' to='/about'>About</NavLink></li>
          <li className='nav-ul__li'><NavLink className='nav-link' to='/settings'>Settings</NavLink></li>
          <li className='nav-ul__li'><a className='nav-link' href='/' onClick={logoutHandler}>Logout</a></li>
        </ul>
      </div>
    </nav>
    // <nav>
    //   <div className="nav-wrapper blue-grey darken-1" style={{padding: '0 2rem'}}>
    //     <a href="/" className="brand-logo">Logo</a>
    //     <ul id="nav-mobile" className="right hide-on-med-and-down">
    //       <li><NavLink to='/data'>Data</NavLink></li>
    //       <li><NavLink to='/about'>About</NavLink></li>
    //       <li><NavLink to='/settings'>Settings</NavLink></li>
    //       <li><a href='/' onClick={logoutHandler}>Logout</a></li>
    //     </ul>
    //   </div>
    // </nav>
  );
};
