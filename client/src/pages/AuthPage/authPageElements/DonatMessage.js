import React from "react";
import "./Messages.css";
import { NavLink } from "react-router-dom";

const DonatMessage = ({ active, setActive }) => (
  <>
    <div className="donat-mes" style={active ? { left: 0 } : { left: -8000 }}>
      <p className="donation-text">
        We are pleased that you have pressed this button. If you really want to
        donate use this link.
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

export default DonatMessage;
