import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarBottom.css";
import Hotel_Bookin_Logo_White from "../../assets/images/Hotel_Bookin_Logo_White.svg";

const NavbarBottom = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="navbar-bottom">
      <div className="navbar-sections-bottom">
        <img src={Hotel_Bookin_Logo_White} alt="Hotel Booking Logo" />
        <div className="page-sections">
          <ul>
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
