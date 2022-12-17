import React from "react";
import "../goLogin.css";
import { useNavigate } from "react-router-dom";

const GoLogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="containerr">
        <div className="cardd">
          <h1 className="titlee">You do not have access to this page </h1>
          <p className="subtitlee">
            Please login or register to access this page to access
          </p>
          <button className="btnn" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
        <div className="blobb"></div>
      </div>
    </div>
  );
};

export default GoLogin;
