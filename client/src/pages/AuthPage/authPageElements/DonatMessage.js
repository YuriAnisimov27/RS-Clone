import React, { useState } from "react";
import "./Messages.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const DonatMessage = ({ active, setActive }) => {
  const [value, setValue] = useState("");

  const clickHandler = () => {
    setValue("");
  };

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <AuthContext.Consumer>
      {(context) => (
        <>
          <div
            className="donat-mes"
            style={active ? { left: 0 } : { left: -8000 }}
          >
            <p className="donation-text">{context.state.donationInfo}</p>
            <p className="donation-text">{context.state.comment}</p>

            <input
              className="donation-input"
              type="text"
              value={value}
              onChange={changeHandler}
            />
            <button
              type="button"
              className="btn waves-effect waves-light purple"
              onClick={clickHandler}
            >
              {context.state.send}
            </button>

            <p className="donation-text">{context.state.donationText}</p>
            <a
              className="btn-floating btn-large waves-effect waves-light green donat-link"
              href="https://opencollective.com/rsschool#section-contribute"
            >
              <i className="material-icons d-img">$</i>
            </a>
          </div>
          <NavLink
            className="shadow"
            to="/settings"
            style={active ? { display: "block" } : { display: "none" }}
            onClick={() => {
              setActive(false);
            }}
          />
        </>
      )}
    </AuthContext.Consumer>
  );
};

export default DonatMessage;
