import React from "react";
import "./BestRooms.css";
import best_room_01 from "../../../assets/images/best_room_01.jpg";
import best_room_02 from "../../../assets/images/best_room_02.jpg";
import best_room_03 from "../../../assets/images/best_room_03.jpg";
import best_room_04 from "../../../assets/images/best_room_04.jpg";
import best_room_05 from "../../../assets/images/best_room_05.jpg";

const BestRooms = () => {
  return (
    <div className="best-rooms">
      <div className="best-rooms-head">
        <h2>LUXURY HOTEL</h2>
        <hr />
        <h1>BEST ROOMS</h1>
        <div className="best-rooms-container">
          <div className="best-rooms-left">
            <img src={best_room_01} alt={best_room_01} />
            <div className="best-rooms-left-info">
              <h1>Best Room</h1>
              <div className="best-rooms-left-icons">
                <i className="fa-regular fa-circle-user"></i>
                <p>2 GUESTS</p>
                <img src="src/assets/images/Rooms.svg" alt="" />
                <p>25m²</p>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod ti. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed.
              </p>
              <button>BOOK NOW</button>
            </div>
          </div>
          <div className="best-rooms-right">
            <div className="best-rooms-right-photos">
              <img src={best_room_02} alt={best_room_02} />
              <img src={best_room_03} alt={best_room_03} />
              <img src={best_room_04} alt={best_room_04} />
              <img src={best_room_05} alt={best_room_05} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRooms;
