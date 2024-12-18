import React from "react";
import "./Header.css";
import Header_02 from "../../assets/images/header_02.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={Header_02} alt={Header_02} />
      <div className="first-container">
        <div className="blend-overlay"></div>
        <h1>
          ENJOY A LUXURY
          <br />
          EXPERIENCE
        </h1>
      </div>
      <div className="second-container">
        <p>ROOMS & SUITES</p>
        <div className="blend-overlay-black"></div>
      </div>
      <div className="third-container">
        <div className="section-1">
          <div className="check-in">
            <p>CHECK IN</p>
          </div>

          <div className="date-month">
            <div className="date">
              <p>05</p>
            </div>

            <div className="month">
              <i className="fa-solid fa-chevron-up"></i>
              <p>FEB</p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className="section-2">
        <div className="check-in">
            <p>CHECK IN</p>
          </div>

          <div className="date-month">
            <div className="date">
              <p>05</p>
            </div>

            <div className="month">
              <i className="fa-solid fa-chevron-up"></i>
              <p>FEB</p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className="section-3">
        <div className="check-in">
            <p>CHECK IN</p>
          </div>

          <div className="date-month">
            <div className="date">
              <p>05</p>
            </div>

            <div className="month">
              <i className="fa-solid fa-chevron-up"></i>
              <p>FEB</p>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>

        <div className="section-4">
            <p>CHECK<br/>AVAILABILITY</p>
          <div className="section-4-overlay-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
