import React from "react";
import GoogleLogin from "react-google-login";
import { NavLink } from "react-router-dom";
import { showStartPage } from "./authPageElements/helpers";
import cross from "../../assets/UI/cross.svg";
import emailIcon from "../../assets/UI/mail.svg";
import passwordIcon from "../../assets/UI/password.svg";
import LoginIcon from "../../assets/UI/login.svg";
import singInIcon from "../../assets/UI/login auth.svg";
import AuthContext from "../../context/AuthContext";

const clientId =
  "573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com";

const AuthPageCard = ({
  onFailure,
  changeHandler,
  loading,
  loginHandler,
  registerHandler,
  responseGoogle,
  form,
}) => (
  <AuthContext.Consumer>
    {(context) => (
      <div className="col auth-card off">
        <div className="card N/A transparent darken-1">
          <NavLink className="exit-auth" onClick={showStartPage} to="">
            <img className="exit-img" src={cross} alt="exit" />
          </NavLink>
          <div className="card-content white-text">
            <span className="card-title black-text">
              {context.state.registration}
            </span>
            <p className="card-paragraph black-text">
              {context.state.registrationInfo}
            </p>

            <form className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                onChange={changeHandler}
                value={form.email}
              />
              <label className="label" htmlFor="email">
                {" "}
                <img
                  className="email-icon auth-icons"
                  src={emailIcon}
                  alt="email"
                />
                <span>{context.state.email}</span>
              </label>
            </form>

            <form className="input-field">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                onChange={changeHandler}
                value={form.password}
                autoComplete="on"
              />
              <label className="label" htmlFor="password">
                {" "}
                <img
                  className="email-icon auth-icons"
                  src={passwordIcon}
                  alt="password"
                />
                {context.state.password}
              </label>
            </form>
          </div>

          <div className="card-action">
            <div className="log-reg">
              <button
                type="button"
                className="btn N/A transparent darken-3 label log-btn "
                onClick={loginHandler}
                disabled={loading}
              >
                <img
                  className="auth-icons login-icon"
                  src={LoginIcon}
                  alt="login"
                />
                {context.state.logIn}
              </button>
              <button
                type="button"
                className="btn N/A transparent darken-3 label reg-btn"
                onClick={registerHandler}
                disabled={loading}
              >
                <img
                  className="auth-icons reg-icon"
                  src={singInIcon}
                  alt="sing in"
                />
                {context.state.registration}
              </button>
            </div>
            <GoogleLogin
              className="google-btn"
              clientId={clientId}
              buttonText="Sing In"
              onSuccess={responseGoogle}
              onFailure={onFailure}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    )}
  </AuthContext.Consumer>
);

export default AuthPageCard;
