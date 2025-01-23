// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hotel_Footer.css";

const Hotel_Footer = () => {
  return (
    <div className="hotel-footer">
      <div className="hotel-footer-section">
        <div className="hotel-footer-section-info">
          <div className="phone-support">
            <h1>PHONE SUPPORT</h1>
            <h2>24 Hours a Day</h2>
            <p>+355 (0) 67 63 11 918</p>
          </div>
          <div className="connect-with-us">
            <h1>CONNECT WITH US</h1>
            <h2>Social Media Channels</h2>
            <div className="connect-with-us-icons">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-square-x-twitter"></i>
              <i className="fa-brands fa-square-whatsapp"></i>
            </div>
          </div>

          <div className="news-letter">
            <h1>NEWSLETTER</h1>
            <h2>Sign up for special offers!</h2>
            <div className="news-letter-input">
              <input
                type="text"
                name="email"
                row="10"
                placeholder="Enter your email."
                required
              />
              <button>BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel-footer-section_copyright">
        <p>Copyright 2025 © Flavio Avdulla - All rights reserved</p>
      </div>
    </div>
  );
};

export default Hotel_Footer;
