import React, { useState } from "react";
import "../css/CreateAccount.css";

const CreateAccount = () => {
  const [isAgency, setIsAgency] = useState("");

  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <h1>
          Create your <br /> PopX account
        </h1>

        <div className="input-group">
          <input type="text" placeholder=" " />
          <label>Full Name</label>
        </div>

        <div className="input-group">
          <input type="text" placeholder=" " />
          <label>Phone number*</label>
        </div>

        <div className="input-group">
          <input type="email" placeholder=" " />
          <label>Email address*</label>
        </div>

        <div className="input-group">
          <input type="password" placeholder=" " />
          <label>Password *</label>
        </div>

        <div className="input-group">
          <input type="text" placeholder=" " />
          <label>Company name</label>
        </div>

        <div className="agency-group">
          <label>Are you an Agency?*</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Yes"
                checked={isAgency === "Yes"}
                onChange={() => setIsAgency("Yes")}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={isAgency === "No"}
                onChange={() => setIsAgency("No")}
              />
              No
            </label>
          </div>
        </div>
        <div className="butt">
          <button className="create-account-button">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
