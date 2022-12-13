import React from "react";
import { useNavigate } from "react-router-dom";
import "../unfound.css";
const UnFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <a
          target="_blank"
          onClick={()=>navigate("/")}
          className="more-link"
        >
         Back to home page
        </a>
      </div>
    </div>
  );
};

export default UnFound;
