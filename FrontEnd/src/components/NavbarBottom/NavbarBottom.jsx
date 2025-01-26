// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarBottom.css";
import Hotel_Bookin_Logo_White from "../../assets/images/Hotel_Bookin_Logo_White.svg";

const NavbarBottom = () => {
  // State variables to manage active section and mobile menu status
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("/");
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMobileMenu((prevMenu) => !prevMenu);
  };

  // useEffect hook to update active section based on current URL path
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("Home");
    } else if (path.includes("/rooms")) {
      setActiveSection("Rooms");
    } else if (path.includes("/about-us")) {
      setActiveSection("About us");
    } else if (path.includes("/pages")) {
      setActiveSection("Pages");
    } else if (path.includes("/news")) {
      setActiveSection("News");
    } else if (path.includes("/contacts")) {
      setActiveSection("Contacts");
    }
      else if (path.includes("/gallery")) {
      setActiveSection("Gallery");
    }
  }, [location]);

  // Function to handle logo click, navigates to home and closes mobile menu
  const handleLogoClick = () => {
    navigate("/");
    setActiveSection("Home");
    setMobileMenu(false); // Ensure menu closes when navigating to Home
  };

  // useEffect hook to handle window resize and clicks outside the menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 750 && mobileMenu) {
        setMobileMenu(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  return (
    <div className="navbar-bottom" ref={menuRef}>
      <div className="navbar-sections-bottom">
        <i
          className={`fa-solid fa-bars ${
            mobileMenu ? "open-icon" : "closed-icon"
          }`}
          onClick={toggleMenu}
        ></i>
        <img
          src={Hotel_Bookin_Logo_White}
          alt="Hotel Booking Logo"
          onClick={handleLogoClick}
        />
        <div className="page-sections">
          <ul className={`navbar-menu ${mobileMenu ? "open" : "closed"}`}>
            <li
              className={activeSection === "Home" ? "active" : ""}
              onClick={() => {
                setActiveSection("Home");
                setMobileMenu(false); // Close menu on link click
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={activeSection === "Rooms" ? "active" : ""}
              onClick={() => {
                setActiveSection("Rooms");
                setMobileMenu(false);
              }}
            >
              <Link to="/rooms">Rooms</Link>
            </li>
            <li
              className={activeSection === "About us" ? "active" : ""}
              onClick={() => {
                setActiveSection("About us");
                setMobileMenu(false);
              }}
            >
              <Link to="/about-us">About us</Link>
            </li>
            <li
              className={activeSection === "Pages" ? "active" : ""}
              onClick={() => {
                setActiveSection("Pages");
                setMobileMenu(false);
              }}
            >
              <Link to="/pages">Pages</Link>
            </li>
            <li
              className={activeSection === "Gallery" ? "active" : ""}
              onClick={() => {
                setActiveSection("Gallery");
                setMobileMenu(false);
              }}
            >
              <Link to="/gallery">Gallery</Link>
            </li>
            <li
              className={activeSection === "Contact" ? "active" : ""}
              onClick={() => {
                setActiveSection("Contacts");
                setMobileMenu(false);
              }}
            >
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        <button>BOOK NOW</button>
      </div>
      <div className="navbar-line"></div>
    </div>
  );
};

export default NavbarBottom;
