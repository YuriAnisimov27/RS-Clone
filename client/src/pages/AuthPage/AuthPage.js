import React, { useState, useEffect, useContext } from "react";
import ChromeDinoGame from "react-chrome-dino";
import AuthContext from "../../context/AuthContext";
import useHttp from "../../hooks/http.hook";
import useMessage from "../../hooks/message.hook";
import DialogPage from "../../components/DialogPage/DialogPage";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainNav from "../../components/MainNav/MainNav";
import AuthPageCard from "./AuthPageCard";
import "./AuthPage.css";

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
      <AuthPageCard
        onFailure={onFailure}
        responseGoogle={responseGoogle}
        loginHandler={loginHandler}
        registerHandler={registerHandler}
        changeHandler={changeHandler}
        loading={loading}
        form={form}
      />

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
