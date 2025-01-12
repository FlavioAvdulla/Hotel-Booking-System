import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NavbarTop.css";

const NavbarTop = ({ setShowLogin }) => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("/Login");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/login") {
      setActiveSection("login");
    } else if (path.includes("/Login")) {
    }
  }, [location]);

  const handleLoginClick = () => {
    setActiveSection("login");
    setShowLogin(true);
  };

  return (
    <div className="navbar-top">
      <div className="navbar-sections-top">
        <div className="navbar-left">
          <div className="credit-card">
            <i className="fa-regular fa-credit-card"></i>
            <p>Payment options</p>
          </div>
          <div className="terms-conditions">
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
          <div className="bookings">
            <i className="fa-regular fa-envelope"></i>
            <p>My bookings</p>
          </div>
          <div className="review">
            <i className="fa-regular fa-star"></i>
            <p>Add Your Review</p>
          </div>
          <div
            className={`login-default ${
              activeSection === "login" ? "login-active" : ""
            }`}
            onClick={handleLoginClick}
          >
            <i className="fa-solid fa-user"></i>
            <div className="login-info">
              <p>My account</p>
              <p className="login-text">LOG IN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
