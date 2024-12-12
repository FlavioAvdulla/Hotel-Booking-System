import React from "react";
import "./Restaurant.css";
import restaurant_01 from "../../assets/images/restaurant_01.jpg";
import restaurant_02 from "../../assets/images/restaurant_02.jpg";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <div className="restaurant-section">
        <div className="restaurant-section-left">
          <img src={restaurant_01} alt={restaurant_01} />
          <div className="restaurant-section-left-info">
            <div className="restaurant-section-left-info-head">
            <h2>LUXURY HOTEL</h2>
            <hr />
            <h1>BEST ROOMS</h1>
            </div>
            
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod ti. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod ti. nibh euismod
              ti. nibh euismod ti. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod ti. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod ti. nibh euismod ti. nibh euismod ti.
            </p>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="restaurant-section-left">
          
          <div className="restaurant-section-left-info">
            <div className="restaurant-section-left-info-head">
            <h2>LUXURY HOTEL</h2>
            <hr />
            <h1>BEST ROOMS</h1>
            </div>
            
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod ti. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod ti. nibh euismod
              ti. nibh euismod ti. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod ti. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod ti. nibh euismod ti. nibh euismod ti.
            </p>
            <button>READ MORE</button>
          </div>
          <img src={restaurant_02} alt={restaurant_02} />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
