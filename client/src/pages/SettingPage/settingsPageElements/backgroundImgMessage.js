import React from "react";
// import "./Messages.css";
import { NavLink } from "react-router-dom";
// import AuthContext from "../../../context/AuthContext";

const BackgroundImgMessage = ({ active, setActive }) => (
  <>
    <div className="donat-mes" style={active ? { left: 0 } : { left: -8000 }}>
      <p>EEEEEEEEEEEEEEE</p>
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

export default BackgroundImgMessage;
