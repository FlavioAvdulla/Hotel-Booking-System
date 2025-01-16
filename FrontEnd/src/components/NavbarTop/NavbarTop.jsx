import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import "./NavbarTop.css";

const NavbarTop = ({ setShowLogin, userName, setShowLogout, setUserName }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("/login");

  useEffect(() => {
    setActiveSection(location.pathname);

    // Check token validity on component mount
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('http://localhost:3001/verify-token', { token })
        .then(result => {
          setUserName(result.data.name);
        })
        .catch(err => {
          console.error(err);
          localStorage.removeItem('token');
        });
    }
  }, [location, setUserName]);

  const handleLoginClick = () => {
    setActiveSection("/login");
    setShowLogin(true);
  };

  const handleLogoutClick = () => {
    setActiveSection("/logout");
    setShowLogout(true);
  };

  return (
    <div className="navbar-top">
      <div className="navbar-sections-top">
        <div className="navbar-left">
          <div className="credit-card" aria-label="Payment options">
            <i className="fa-regular fa-credit-card"></i>
            <p>Payment options</p>
          </div>
          <div className="terms-conditions" aria-label="Terms & Conditions">
            <i className="fa-regular fa-circle-check"></i>
            <p>Terms & Conditions</p>
          </div>
          <div className="languages">
            <p>US</p>
            <p>IT</p>
            <p>AL</p>
          </div>
        </div>
        <div className="navbar-right">
          <div className="bookings" aria-label="My bookings">
            <i className="fa-regular fa-envelope"></i>
            <p>My bookings</p>
          </div>
          <div className="review" aria-label="Add Your Review">
            <i className="fa-regular fa-star"></i>
            <p>Add Your Review</p>
          </div>
          <div
            className={`login-default ${userName ? "login-active" : ""}`}
            onClick={userName ? handleLogoutClick : handleLoginClick}
            aria-label={userName ? "Log out of your account" : "Log in to your account"}
          >
            <i className="fa-solid fa-user"></i>
            <div className="login-info">
              <p>My account</p>
              <p className="login-text">{userName || "LOG IN"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
