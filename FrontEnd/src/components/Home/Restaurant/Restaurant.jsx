import React from "react";
import "./Restaurant.css";
import restaurant_01 from "../../../assets/images/restaurant_01.jpg";
import restaurant_02 from "../../../assets/images/restaurant_02.jpg";

const Restaurant = () => {
  return (
    <div className="restaurant">
      <div className="restaurant-sections">
        <div className="restaurant-section">
          <img src={restaurant_01} alt={restaurant_01} />
          <div className="restaurant-section-info">
            <div className="restaurant-section-info-head">
              <h2>FINE FOOD</h2>
              <hr />
              <h1>RESTAURANT</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod ti. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod ti. nibh euismod
              ti. nibh euismod ti. Lorem ipsum dolor consectetuer adipiscing
              elit.
            </p>
            <button>READ MORE</button>
          </div>
        </div>

        <div className="restaurant-section">
          <div className="restaurant-section-info">
            <div className="restaurant-section-info-head">
              <h2>FINE FOOD</h2>
              <hr />
              <h1>RESTAURANT</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod ti. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod ti. nibh euismod
              ti. nibh euismod ti. Lorem ipsum dolor consectetuer adipiscing
              elit.
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
