import React from "react";
import { NavLink } from "react-router-dom";
import "./Messages.css";

const AboutMessage = ({ active, setActive }) => (
  <>
    <div className="donat-mes" style={active ? { left: 0 } : { left: -8000 }}>
      <p className="donation-text">Hello, we are developers of this app</p>
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
);

export default AboutMessage;
