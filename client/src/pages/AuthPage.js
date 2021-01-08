import React, { useState, useEffect, useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
// import { refreshTokenSetup } from '../auth.util/refreshToken'; // function from reference 
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

const clientId =
  '573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com'; // must be in the context

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
      console.log('Data', data);
    } catch (e) {
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form });
      auth.login(data.token, data.userId);
      // message(data['message']);
      console.log('Data', data);
    } catch (e) {
    }
  };

  const onSuccess = async (res) => {
    try {
      console.log('Login Success: currentUser:', res.profileObj);
      const data = await request('/api/auth/register', 'POST', { email: res.profileObj.email, password: res.profileObj.email }); // registration of new google user
      // refreshTokenSetup(res); // it is a function from refernece.  
    } catch (e) {
    }
    try {
      const data = await request('/api/auth/login', 'POST', { email: res.profileObj.email, password: res.profileObj.email }); // login of google user
      auth.login(data.token, data.userId);
      console.log('Data', data);
    } catch (e) {
    }
  }


  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  }

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <p>I am a very simple card</p>

            <div className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                name='email'
                onChange={changeHandler}
                value={form.email}
              />
              <label htmlFor="email">Email</label>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>

            <div className="input-field">
              <input
                id="password"
                type="password"
                className="validate"
                name='password'
                onChange={changeHandler}
                value={form.password}
              />
              <label htmlFor="password">Password</label>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>

          </div>
          <div className="card-action">
            <a href="https://materializecss.com/">This is a link</a>
            <hr />
            <button
              className='btn yellow darken-3'
              style={{ marginRight: 30 }}
              onClick={loginHandler}
              disabled={loading}
            >
              LogIn
            </button>
            <button
              className='btn yellow darken-3'
              onClick={registerHandler}
              disabled={loading}
            >
              Registration
            </button>
            <hr />
            <div>
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
