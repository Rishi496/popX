import React, { useState } from "react";
import "../css/Account.css";
import { FaCamera } from "react-icons/fa";

const Account = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="account-container">
      <div className="account-content">
        <div className="account_head">
          <h1>Account Settings</h1>
        </div>

        <div className="profile-section">
          <label htmlFor="profile-upload" className="upload-label">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="profile-pic" />
            ) : (
              <div className="camera-icon">
                <FaCamera size={30} color="#777" />
              </div>
            )}
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
          <div className="user-info">
            <h3>Rishi</h3>
            <p>rishi@Gmail.com</p>
          </div>
        </div>
        <p className="bio-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Account;
