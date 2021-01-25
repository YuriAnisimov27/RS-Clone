import React, { useState, useEffect, useContext } from "react";
import GoogleLogin from "react-google-login";
import ChromeDinoGame from "react-chrome-dino";
import emailIcon from "../../assets/UI/mail.svg";
import passwordIcon from "../../assets/UI/password.svg";
import LoginIcon from "../../assets/UI/login.svg";
import singInIcon from "../../assets/UI/login auth.svg";
import useHttp from "../../hooks/http.hook";
import useMessage from "../../hooks/message.hook";
import AuthContext from "../../context/AuthContext";
import DialogPage from "../../components/DialogPage/DialogPage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainNav from "../../components/MainNav/MainNav";
import { showStartPage } from "./authPageElements/helpers";
import cross from "../../assets/UI/cross.svg";
import "./AuthPage.css";

const clientId =
  "573054707008-n6gc2nku822ale1dagf6m6d8go5emrpa.apps.googleusercontent.com";

const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
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
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {
      message("register error");
    }
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      message(data.message);
    } catch (e) {
      message("register error");
    }
  };

  const responseGoogle = async (res) => {
    try {
      await request("/api/auth/register", "POST", {
        email: res.profileObj.email,
        password: res.profileObj.email,
      });
      message("Created");
    } catch (e) {
      message("register error");
    }
    try {
      const data = await request("/api/auth/login", "POST", {
        email: res.profileObj.email,
        password: res.profileObj.email,
      });
      auth.login(data.token, data.userId);
      message("Welcome!");
    } catch (e) {
      message("login error");
    }
  };

  const onFailure = () => {
    message(`Failed to login. 😢`);
  };

  return (
    <div className="row d-flex">
      <div className="col auth-card off">
        <div className="card N/A transparent darken-1">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div className="exit-auth" onClick={showStartPage}>
            <img className="exit-img" src={cross} alt="exit" />
          </div>
          <div className="card-content white-text">
            <span className="card-title black-text">Registration</span>
            <p className="card-paragraph black-text">
              Fill in all fields to create an account
            </p>

            <div className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                onChange={changeHandler}
                value={form.email}
              />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="label" htmlFor="email">
                <img
                  className="email-icon auth-icons"
                  src={emailIcon}
                  alt="email"
                />
                <span>Email</span>
              </label>
            </div>

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
                Password
              </label>
            </form>
          </div>
          <div className="card-action">
            <div className="log-reg">
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                className="btn N/A transparent darken-3 label log-btn "
                onClick={loginHandler}
                disabled={loading}
              >
                <img
                  className="auth-icons login-icon"
                  src={LoginIcon}
                  alt="login"
                />
                LogIn
              </button>
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                className="btn N/A transparent darken-3 label reg-btn"
                onClick={registerHandler}
                disabled={loading}
              >
                <img
                  className="auth-icons reg-icon"
                  src={singInIcon}
                  alt="sing in"
                />
                Registration
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
      <div className="AuthPage">
        <Header />
        <MainNav />
        <div className="content">
          <div className="game game-full-scr">
            <ChromeDinoGame />
          </div>
        </div>
        <Footer />
      </div>
      <DialogPage />
    </div>
  );
};

export default AuthPage;
