import React from "react";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="rooms">
      <div className="rooms-container">
        <div className="photo-section">
          <div className="photo-section-01"></div>
          <div className="photo-section-02">
            <div className="photo-01"></div>
            <div className="photo-02"></div>
          </div>
        </div>
        <div className="room-info">
          <div className="room-rating">
            <i className="fa-solid fa-star-half-stroke"></i>
            <p>(98) Popular</p>
          </div>
          <div className="room-price">
            <h1>AMBASSADOR SUITE</h1>
            <p>
              From: $ 225<span> / night</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="room-details">
          <div className="room-detail-01">
            <div className="room-detail-01-icon">
              <i className="fa-solid fa-hotel"></i>
            </div>
            <div className="room-detail-01-text">
              <h2>Entire room</h2>
              <p>All for your needs.</p>
            </div>
          </div>
          <div className="room-detail-02">
            <div className="room-detail-02-icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <div className="room-detail-02-text">
              <h2>9 Guests</h2>
              <p>Great stays for guests.</p>
            </div>
          </div>
          <div className="room-detail-03">
            <div className="room-detail-03-icon">
              <i className="fa-solid fa-couch"></i>
            </div>
            <div className="room-detail-03-text">
              <h2>3 Bedrooms</h2>
              <p>Highly rated apartments.</p>
            </div>
          </div>
          <div className="room-detail-04">
            <div className="room-detail-04-icon">
              <i className="fa-regular fa-calendar-xmark"></i>
            </div>
            <div className="room-detail-04-text">
              <h2>Cancelation policy</h2>
              <p>Flexible cancelation details.</p>
            </div>
          </div>
        </div>
        <div className="room-about">
          <div className="room-about-description">
            <h1>About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="room-about-icons">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
