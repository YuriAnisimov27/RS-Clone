import React from "react";
import { NavLink } from "react-router-dom";
import "./Messages.css";
import AuthContext from "../../../context/AuthContext";

const AboutMessage = ({ active, setActive }) => (
  <AuthContext.Consumer>
    {(context) => (
      <>
        <div
          className="donat-mes"
          style={active ? { left: 0 } : { left: -8000 }}
        >
          <p className="donation-text">
            {context.state.aboutText1}
            {` `}
          </p>
          <p className="donation-text">{context.state.aboutText2}</p>
          <p className="donation-text">{context.state.aboutText3}</p>

          <button type="button" className="btn waves-effect waves-light purple">
            {context.state.aboutButton}
          </button>
        </div>
        <NavLink
          className="shadow"
          style={active ? { display: "block" } : { display: "none" }}
          to=""
          onClick={() => {
            setActive(false);
          }}
        />
      </>
    )}
  </AuthContext.Consumer>
);

export default AboutMessage;
