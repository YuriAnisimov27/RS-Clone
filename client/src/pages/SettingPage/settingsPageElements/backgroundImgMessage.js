/* eslint-disable */
import React from "react";
import "./backgroundImgMessage.css";
import { NavLink } from "react-router-dom";
// import AuthContext from "../../../context/AuthContext";

const BackgroundImgMessage = ({ active, setActive }) => (
  <>
    <div className="settings-message" style={active ? { left: 0 } : { left: -8000 }}>
      <p>EEEEEEEEEEEEEEE</p>
    </div>
    <NavLink
      className="settings-shadow"
      to="/settings"
      style={active ? { display: "block" } : { display: "none" }}
      onClick={() => {
        setActive(false);
      }}
    />
  </>
);

export default BackgroundImgMessage;
