import React from "react";
import "../css/Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const account = () => {
    navigate("/account");
  };
  return (
    <div className="signup_main">
      <div className="signup_content">
        <h1>Sign in to your PopX account</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="inp">
          <input type="text" id="email" placeholder=" " required />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="inp">
          <input type="password" id="pass" placeholder=" " required />
          <label htmlFor="pass">Password</label>
        </div>
        <button onClick={account}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
