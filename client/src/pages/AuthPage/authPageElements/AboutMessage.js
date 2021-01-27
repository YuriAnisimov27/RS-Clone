import React from "react";
import { NavLink } from "react-router-dom";
import "./Messages.css";

const AboutMessage = ({ active, setActive }) => (
  <>
    <div className="donat-mes" style={active ? { left: 0 } : { left: -8000 }}>
      <p className="donation-text">
        пройдя не долгую процедуру регистрации вы получите:{" "}
      </p>
      <p className="donation-text">
        - доступ к ошеломительному продолжению бестселлера Google Dinosaur
      </p>
      <p className="donation-text">
        - возможность кастомизировать внешний вид приложения
      </p>
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
