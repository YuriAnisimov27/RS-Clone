import React from "react";
import "./Messages.css";
import { NavLink } from "react-router-dom";

const DonatMessage = ({ active, setActive }) => {
  const clickHandler = () => {
    const text = document.querySelector(".donation-input").value;
    if (text) {
      window.M.toast({ html: "Done!" });
      document.querySelector(".donation-input").value = "";
    } else {
      window.M.toast({ html: "first you need to write something!" });
    }
  };

  return (
    <>
      <div className="donat-mes" style={active ? { left: 0 } : { left: -8000 }}>
        <p className="donation-text">
          Положите денег на номер +379(**)***-**-** и мы Вам обязательно
          перезвоним (но это не точно)
        </p>
        <p className="donation-text">
          Также Вы можете оставить отзыв - и помните - Ваш отзыв очень важен для
          Вас
        </p>

        <input className="donation-input" type="text" />
        <button
          type="button"
          className="btn waves-effect waves-light purple"
          onClick={clickHandler}
        >
          Отправить Send Адправіць
        </button>

        <p className="donation-text">
          We are pleased that you have pressed this button. If you really want
          to donate use this link.
        </p>
        <a
          className="btn-floating btn-large waves-effect waves-light green donat-link"
          href="https://opencollective.com/rsschool#section-contribute"
        >
          <i className="material-icons d-img">$</i>
        </a>
      </div>
      <NavLink
        className="shadow"
        to=""
        style={active ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setActive(false);
        }}
      />
    </>
  );
};

export default DonatMessage;
