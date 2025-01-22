import React from "react"; // Import React library
import "./Logout.css"; // Import CSS file for styling
import { IoIosCloseCircle } from "react-icons/io"; // Import Close icon from react-icons library

// Logout component definition
const Logout = ({ setShowLogout, userName, handleLogout }) => {
  // Function to handle the closing of the logout modal
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

// Export the Logout component as default
export default Logout;
