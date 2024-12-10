import React from "react";
import "./NavbarBottom.css";
import Hotel_Bookin_Logo_White from "../../assets/images/Hotel_Bookin_Logo_White.svg";

const NavbarBottom = () => {
  return (
    <div className="navbar-bottom">
      <div className="navbar-sections-bottom">
        <img src={Hotel_Bookin_Logo_White} alt="" />
        <div className="page-sections">
          <ul>
            <li>Home</li>
            <li>Rooms</li>
            <li>About us</li>
            <li>Pages</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
        <button>BOOK NOW</button>
      </div>
    </div>
  );
};

export default NavbarBottom;
