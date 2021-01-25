import React from "react";
import "./Messages.css";

const AboutMessage = ({ active, setActive }) => (
  <>
    <div className="donat-mes" style={active ? { left: 0 } : { left: -8000 }}>
      <p className="donation-text">Hello, we are developers of this app</p>
    </div>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <div
      className="shadow"
      style={active ? { display: "block" } : { display: "none" }}
      onClick={() => {
        setActive(false);
      }}
    />
  </>
);

export default AboutMessage;
