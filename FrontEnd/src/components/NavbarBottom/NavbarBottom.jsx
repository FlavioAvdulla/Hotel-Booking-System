import React, { useState } from "react";
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
              Home
            </li>
            <li 
              className={activeSection === "Rooms" ? "active" : ""} 
              onClick={() => setActiveSection("Rooms")}
            >
              Rooms
            </li>
            <li 
              className={activeSection === "About us" ? "active" : ""} 
              onClick={() => setActiveSection("About us")}
            >
              About us
            </li>
            <li 
              className={activeSection === "Pages" ? "active" : ""} 
              onClick={() => setActiveSection("Pages")}
            >
              Pages
            </li>
            <li 
              className={activeSection === "News" ? "active" : ""} 
              onClick={() => setActiveSection("News")}
            >
              News
            </li>
            <li 
              className={activeSection === "Contact" ? "active" : ""} 
              onClick={() => setActiveSection("Contact")}
            >
              Contact
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
