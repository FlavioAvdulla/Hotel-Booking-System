// eslint-disable-next-line no-unused-vars
import React from "react"; // Import React library
import "./Rooms.css"; // Import CSS file for styling
import room_01 from "../../../assets/images/rooms/room_01.jpg"; // Import room images
import room_02 from "../../../assets/images/rooms/room_02.jpg";
import room_03 from "../../../assets/images/rooms/room_03.jpg";
import room_04 from "../../../assets/images/rooms/room_04.jpg";
import room_05 from "../../../assets/images/rooms/room_05.jpg";
import room_06 from "../../../assets/images/rooms/room_06.jpg";
import room_07 from "../../../assets/images/rooms/room_07.jpg";

// Rooms component definition
const Rooms = () => {
  return (
    <div className="rooms">
      <div className="rooms-container">
        <div className="photo-section">
          <div className="photo-section-01">
            <div className="photo-03">
              <img src={room_01} alt={room_01} />
            </div>
          </div>
          <div className="photo-section-02">
            <div className="photo-01">
              <img src={room_02} alt={room_02} />
            </div>
            <div className="photo-02">
              <img src={room_03} alt={room_03} />
            </div>
            <div className="photo-03">
              <img src={room_05} alt={room_05} />
            </div>
            <div className="photo-04">
              <img src={room_06} alt={room_06} />
            </div>
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
          <div className="room-about-left">
            <div className="room-about-description">
              <h1>About</h1>
              <hr />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s. Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>
            <div className="room-about-icons">
              <div className="icon-section-01">
                <div className="kitchen">
                  <i className="fa-solid fa-utensils"></i>
                  <p>Kitchen</p>
                </div>
                <div className="breakfast">
                  <i className="fa-solid fa-mug-saucer"></i>
                  <p>Breakfast</p>
                </div>
                <div className="tv">
                  <i className="fa-solid fa-tv"></i>
                  <p>TV</p>
                </div>
                <div className="free-parking">
                  <i className="fa-solid fa-car"></i>
                  <p>Free parking</p>
                </div>
              </div>

              <div className="icon-section-02">
                <div className="laptop-friendly">
                  <i className="fa-solid fa-laptop"></i>
                  <p>Laptop-friendly</p>
                </div>
                <div className="washer">
                  <i className="fa-solid fa-soap"></i>
                  <p>Washer</p>
                </div>
                <div className="first-aid-kit">
                  <i className="fa-solid fa-kit-medical"></i>
                  <p>First aid kit</p>
                </div>
                <div className="wifi">
                  <i className="fa-solid fa-wifi"></i>
                  <p>Wifi</p>
                </div>
              </div>

              <div className="icon-section-03">
                <div className="restaurants">
                  <i className="fa-solid fa-utensils"></i>
                  <p>Restaurant</p>
                </div>
                <div className="business-centre">
                  <i className="fa-solid fa-landmark"></i>
                  <p>Business Centre</p>
                </div>
                <div className="sun-terrace">
                  <i className="fa-solid fa-umbrella-beach"></i>
                  <p>Sun terrace</p>
                </div>
                <div className="concierge-service">
                  <i className="fa-solid fa-bell-concierge"></i>
                  <p>Concierge service</p>
                </div>
              </div>
            </div>
          </div>
          <div className="room-about-right">
            <img src={room_04} alt={room_04} />
          </div>
        </div>
      </div>
      <div className="banner">
        <img src={room_07} alt={room_07} />
      </div>
      <div className="rooms-rates">
        <div className="rooms-rates-content">
          <div className="rooms-rates-content-title">
            <h1>ROOMS RATES</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="rooms-rates-content-info">
            <div className="high-season">
              <h2>High Season</h2>
              <div className="high-season-details">
                <p>
                  <span>499.00 $</span> / apartment / night
                </p>
                <p>May 15th to October 15th 2018</p>
                <button>CHECK AVAILABILITY</button>
              </div>
            </div>
            <div className="medium-season">
              <h2>Medium Season</h2>
              <div className="medium-season-details">
                <p>
                  <span>499.00 $</span> / apartment / night
                </p>
                <p>May 15th to October 15th 2018</p>
                <button>CHECK AVAILABILITY</button>
              </div>
            </div>
            <div className="low-season">
              <h2>Low Season</h2>
              <div className="low-season-details">
                <p>
                  <span>499.00 $</span> / apartment / night
                </p>
                <p>May 15th to October 15th 2018</p>
                <button>CHECK AVAILABILITY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
