import React from "react";
import "./Logout.css";
import { IoIosCloseCircle } from "react-icons/io";

const Logout = ({ setShowLogout, userName, handleLogout }) => {
  const handleClose = () => {
    setShowLogout(false);
  };

  return (
    <div className="logout">
      <div className="logout-container">
        <div className="logout-title">
          <h1>Logout</h1>
          <i onClick={handleClose}>
            <IoIosCloseCircle className="close-icon" />
          </i>
        </div>
        <div className="user-profile">
          <div className="user-info">
            <i className="fa-solid fa-user"></i>
            <p>{userName}</p>
          </div>
          <div className="logout-button">
            <button onClick={handleLogout}>LOG OUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
