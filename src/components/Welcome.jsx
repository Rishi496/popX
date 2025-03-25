import React from "react";
import "../css/welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const creataccount = () => {
    navigate("/creataccount");
  };
  const signup = () => {
    navigate("/signup");
  };
  return (
    <div className="welcome_main">
      <div className="welcome_content">
        <h2>Welcome To PopX</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <div className="but">
          <button className="primary" onClick={creataccount}>
            Create Account
          </button>
          <button className="secondary" onClick={signup}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
