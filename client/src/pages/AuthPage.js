import React, {useState, useEffect, useContext} from 'react';
import emailIcon from '../assets/UI/mail.svg';
import passwordIcon from '../assets/UI/password.svg';
import LoginIcon from '../assets/UI/login.svg';
import singInIcon from '../assets/UI/login auth.svg';
import GoogleLogin from 'react-google-login';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';
import {AuthContext} from '../context/AuthContext';
import './AuthPage.css';
import {DialogPage} from './authPageElements/DialogPage';
import {Footer} from './authPageElements/Footer';
import {Header} from './authPageElements/Header';
import {MainNav} from './authPageElements/MainNav';
import {MusicPlayer} from './authPageElements/MusicPlayer';
import ChromeDinoGame from 'react-chrome-dino';
import {showStartPage} from './authPageElements/helpers';
import cross from '../assets/UI/cross.svg';

const clientId = '573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com';

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const {loading, error, request, clearError} = useHttp();
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
    setForm({...form, [event.target.name]: event.target.value});
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      message(data['message']);
      // console.log('Data', data);
    } catch (e) {
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form});
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


  // const dino = React.createRef();
  // document.onkeypress = function (e) {
  //   console.log(e.code);
  //
  //   // if (e.code === 'Space') {
  //   //   alert('Space!');
  //   // }
  //   console.log(dino);
  //   // dino.innerText = 'sf';
  // }

  return (
    <div className='row d-flex'>
      <div className='col authcard off'>
        <div className="card N/A transparent darken-1">
        <div className='exitauth' onClick={showStartPage}><img className='exitimg' src={cross} alt='exit'/></div>
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
              <label className='label' htmlFor="email"><img className='emailicon authicons' src={emailIcon}
                                                            alt='email'/><span>Email</span></label>
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
              <label className='label' htmlFor="password"> <img className='emailicon authicons' src={passwordIcon}
                                                                alt='passw'/>Password</label>
            </form>
          </div>
          <div className="card-action">
            <button
              className='btn N/A transparent darken-3 label '
              onClick={loginHandler}
              disabled={loading}
            >
              <img className='authicons loginicon' src={LoginIcon} alt='login'/>
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
              className='googlebtn'
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
        <Header/>
        <MainNav/>
        <div className='content'>
          <div className='game gamefullscr'>
            {/*<div id="game">*/}
            {/*  <img id="dino" alt="dino" />*/}
            {/*  <div ref={dino} id="cactus">addsd</div>*/}
            {/*</div>*/}
            <ChromeDinoGame/>
          </div>
          <MusicPlayer/>
        </div>
        <Footer/>
      </div>
      <DialogPage/>
    </div>
  );
};
