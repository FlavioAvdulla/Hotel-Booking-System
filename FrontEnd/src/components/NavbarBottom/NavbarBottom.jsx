import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./NavbarBottom.css";
import Hotel_Bookin_Logo_White from "../../assets/images/Hotel_Bookin_Logo_White.svg";

const NavbarBottom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("/");
  const [mobileMenu, setMobileMenu] = useState(true);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

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
    } else if (path.includes("/contact")) {
      setActiveSection("Contact");
    }
  }, [location]);

  const handleLogoClick = () => {
    navigate("/");
    setActiveSection("Home");
  };

  return (
    <div className="navbar-bottom">
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
              onClick={() => setActiveSection("Home")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={activeSection === "Rooms" ? "active" : ""}
              onClick={() => setActiveSection("Rooms")}
            >
              <Link to="/rooms">Rooms</Link>
            </li>
            <li
              className={activeSection === "About us" ? "active" : ""}
              onClick={() => setActiveSection("About us")}
            >
              <Link to="/about-us">About us</Link>
            </li>
            <li
              className={activeSection === "Pages" ? "active" : ""}
              onClick={() => setActiveSection("Pages")}
            >
              <Link to="/pages">Pages</Link>
            </li>
            <li
              className={activeSection === "News" ? "active" : ""}
              onClick={() => setActiveSection("News")}
            >
              <Link to="/news">News</Link>
            </li>
            <li
              className={activeSection === "Contact" ? "active" : ""}
              onClick={() => setActiveSection("Contact")}
            >
              <Link to="/contact">Contact</Link>
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
