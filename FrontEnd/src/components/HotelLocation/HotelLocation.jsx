import React from "react";
import "./HotelLocation.css";
import location_01 from "../../assets/images/location_01.jpg";
import location_02 from "../../assets/images/location_02.jpg";
import girl from "../../assets/images/girl.jpg";

const HotelLocation = () => {
  return (
    <div className="hotel-location">
      <div className="hotel-location-container">
        <div className="photos">
          <img src={location_01} alt={location_01} />
          <img src={location_02} alt={location_02} />
        </div>
        <div className="info">
          <h2>LUXURY HOTEL & BEST RESPORT</h2>
          <h1>Discover our</h1>
          <h3>Location</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam.
          </p>
          <button>CHECK ALL PACKAGES</button>
        </div>

        <div className="assistant">
        <img src={girl} alt={girl} />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  );
};

export default HotelLocation;
