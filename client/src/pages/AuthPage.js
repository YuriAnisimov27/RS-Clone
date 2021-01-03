import React, {useState, useEffect} from 'react';
import {useHttp} from '../hooks/http.hook';
import {useMessage} from '../hooks/message.hook';

export const AuthPage = () => {
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

  const changeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      message(data.message);
      console.log('Data', data);
    } catch (e) {
    }
  };

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <p>I am a very simple card</p>

            <div className="input-field">
              <input id="email" type="email" className="validate" name='email' onChange={changeHandler}/>
              <label htmlFor="email">Email</label>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>

            <div className="input-field ">
              <input id="password" type="password" className="validate" name='password' onChange={changeHandler}/>
              <label htmlFor="password">Password</label>
              <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
            </div>

          </div>
          <div className="card-action">
            <a href="https://materializecss.com/">This is a link</a>
            <hr/>
            <button className='btn yellow darken-3' style={{marginRight: 30}} disabled={loading}>LogIn</button>
            <button className='btn yellow darken-3' onClick={registerHandler} disabled={loading}>Registration</button>
          </div>
        </div>
      </div>
    </div>
  );
};
