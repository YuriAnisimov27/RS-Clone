import logo from '../assets/UI/dinoSmall.png';
import buble from '../assets/UI/buble.svg';
import russia from '../assets/UI/russia.svg';
import uk from '../assets/UI/united-kingdom.svg';
import bel from '../assets/UI/belarus.svg';
import rslogo from '../assets/UI/rs_school_js.svg';
import music from '../assets/music/Super Mario.mp3';
import cross from '../assets/UI/cross.svg';
import emailIcon from '../assets/UI/mail.svg';
import passwordIcon from '../assets/UI/password.svg';
import LoginIcon from '../assets/UI/login.svg';
import singInIcon from '../assets/UI/login auth.svg';
import GoogleIcon from '../assets/UI/password.svg';

import React, { useState, useEffect, useContext } from 'react';
import GoogleLogin from 'react-google-login'
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';
import './AuthPage.css';

const clientId = '573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      message(data['message']);
      // console.log('Data', data);
    } catch (e) {
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
      message(data['message']);
      // console.log('Data', data);
    } catch (e) {
    }
  };

  const responseGoogle = async (res) => {
    try {
      // console.log('Login Success: currentUser:', res.profileObj);
      await request('/api/auth/register', 'POST', {
        email: res.profileObj.email,
        password: res.profileObj.email
      });
      message('Created');
    } catch (e) {
      console.log('register error');
    }
    try {
      const data = await request('/api/auth/login', 'POST', {
        email: res.profileObj.email,
        password: res.profileObj.email
      });
      auth.login(data.token, data.userId);
      message('Welcome!');
      // console.log('Data', data);
    } catch (e) {
      console.log('login error');
    }
  };

  const onFailure = () => {
    message(`Failed to login. 😢`);
  };

  const showPlayer = () => {
    document.querySelector('.music').classList.toggle('playeroff');
    document.querySelector('.game').classList.toggle('gamefullscr')
  };
  const changeLanguage = () => {
    console.log('language changed');
  };
  const showDialog = () => {
    document.querySelector('.AuthPage').classList.toggle('off');
    document.querySelector('.DialogPage').classList.toggle('off');
    document.body.classList.toggle('scroll__off');
  };
  const showRegistartion = () => {
    document.querySelector('.DialogPage').classList.toggle('off');
    document.querySelector('.authcard').classList.toggle('off');
    document.body.classList.toggle('scroll__off');
  };
  const showAbout = () => {
    console.log('Showing about')
  };
  const showDonation = () => {
    console.log('Showing Donation')
  };

  return (
    <div className='row d-flex'>

      <div className='col authcard off'>
        <div className="card N/A transparent darken-1">
          <div className="card-content white-text">
            <span className="card-title black-text">Registration</span>
            <p className="card-paragraph black-text">Fill in all fields to create an accaunt</p>

            <div className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                name='email'
                onChange={changeHandler}
                value={form.email}
              />
              <label className='label' htmlFor="email"><img className='emailicon authicons' src={emailIcon} alt='email'/><span>Email</span></label>
            </div>

            <form className="input-field">
              <input
                id="password"
                type="password"
                className="validate"
                name='password'
                onChange={changeHandler}
                value={form.password}
                autoComplete="on"
              />
              <label className='label' htmlFor="password"> <img className='emailicon authicons' src={passwordIcon} alt='passw'/>Password</label>
            </form>
          </div>
          <div className="card-action">
            <button
              className='btn N/A transparent darken-3 label '
              onClick={loginHandler}
              disabled={loading}
            >
              <img className='authicons' src={LoginIcon} alt='login'/>
              LogIn
            </button>
            <button
              className='btn N/A transparent darken-3 label'
              onClick={registerHandler}
              disabled={loading}
            >
              <img className='authicons' src={singInIcon} alt='singin'/>
              Registration
            </button>
              <GoogleLogin
                clientId={clientId}
                buttonText="Sing In"
                onSuccess={responseGoogle}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
              />

          </div>
        </div>
      </div>

      <div className='AuthPage'>
        <header>
          <div className='logo'>
            <div className='logoImg-container'>
              <img className='logoImg' src={logo} alt='logo' />
            </div>
            <h1> Game </h1>
          </div>
          <div className='languages'>
            <ul className='languages-selector'>
              <li className='Lselector' onClick={changeLanguage}><img src={russia} alt='rus' /></li>
              <li className='Lselector' onClick={changeLanguage}><img src={uk} alt='uk' /></li>
              <li className='Lselector' onClick={changeLanguage}><img src={bel} alt='bel' /></li>
            </ul>
          </div>
        </header>
        <nav className='N/A transparent'>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right nav-ul">
              <li className='nav-ul__li'><a className='nav-link' onClick={showPlayer}>Playlist</a></li>
              <li className='nav-ul__li'><a className='nav-link' href="/">Settings</a></li>
              <li className='nav-ul__li'><a className='nav-link' onClick={showDialog}>Registration</a></li>
            </ul>
          </div>
        </nav>
        <div className='content'>
          <div className='game gamefullscr'>
          </div>
          <div className='music playeroff'>
            <audio controls>
              <source src={music} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <footer>
          <div className='rslogo'>
            <a href='https://rs.school/'>
              <img className='rsimg' src={rslogo} alt='rslogo' />
            </a>
          </div>
          <div className='materials'>
            <h5>2020</h5>
            <hr />
            <ul className='materials-ul'>
              <li className='material-ul__li'><a className='materials__link youtube' href='/'>YOUTUBE</a></li>
              <li className='material-ul__li'><a className='materials__link' href='/'>MEDIUM</a></li>
            </ul>
          </div>
          <div className='developers'>
            <h5>DEVELOPERS</h5>
            <hr />
            <ul className='developers-ul'>
              <li className='developers-ul__li'><a className='developers__link' href='/'>Yuri Anisimov</a></li>
              <li className='developers-ul__li'><a className='developers__link' href='/'>Alexander Kovbenya</a></li>
              <li className='developers-ul__li'><a className='developers__link' href='/'>Alex Martinkevich</a></li>
              <li className='developers-ul__li'><a className='developers__link' href='/'>Alexander Alexander</a></li>
            </ul>
          </div>
        </footer>
      </div>
      <div className='DialogPage off'>
        <div className='dinodialog'>
          <img className='dinodialog-Img' src={logo} alt='dino' />
        </div>
        <div className='dialog-buble'>
          <img className='bubledialog-Img' src={buble} alt='buble' />
          <div className='dialog-nav'>
            <div className='exitbtn' onClick={showDialog}><img className='exitimg' src={cross} alt='exit' /></div>
            <h5 className='dialog-greeting'>HELLO!</h5>
            <ul className='dialog-nav-ul'>
              <li className='dialog-nav-ul__li'><a className='dialog-link signin' onClick={showRegistartion}>Sign in</a></li>
              <li className='dialog-nav-ul__li'><a className='dialog-link' onClick={showAbout}>About</a></li>
              <li className='dialog-nav-ul__li'><a className='dialog-link' onClick={showDonation}>Donation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
