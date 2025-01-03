import React from "react";
import "./AboutUs.css";
import about_us_01 from "../../../assets/images/about-us/about_us_01.jpg";
import about_us_02 from "../../../assets/images/about-us/about_us_02.jpg";
import bed_icon from "../../../assets/images/about-us/bed_icon.svg";
import discount_icon from "../../../assets/images/about-us/discount_icon.svg";
import wifi_icon from "../../../assets/images/about-us/wifi_icon.svg";
import log_out_icon from "../../../assets/images/about-us/log_out_icon.svg";
import about_us_03 from "../../../assets/images/about-us/about_us_03.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="section-01">
        <div className="banner-info">
          <h1>ABOUT US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button>
            HOME <i className="fa-solid fa-arrow-right"></i> ABOUT
          </button>
        </div>
        <div className="banner-photo">
          <img src={about_us_01} alt={about_us_01} />
        </div>
      </div>

      {/* ====================== section 2 */}

      <div className="section-02">
        <div className="section-02-container">
          <div className="section-02-content">
            <div className="section-02-content-photo">
              <img src={about_us_02} alt={about_us_02} />
            </div>
            <div className="section-02-content-info">
              <h2>ABOUT US</h2>
              <h1>CRAFTING UNIQUE EXPERIENCES</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="ticks">
                <div className="tick-01">
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div className="tick-02">
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
                <div className="tick-03">
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Lorem Ipsum is simply dummy</p>
                </div>
              </div>
              <button>
                VIEW MORE!<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== section 3 */}
      <div className="section-03">
        <div className="section-03-container">
          <div className="section-03-content">
            <div className="section-03-content-info">
              <h2>MEMBERSHIP</h2>
              <h1>CRAFTING UNIQUE EXPERIENCES</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button>
                VIEW MORE!<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="section-03-icons">
              <div className="section-03-icons-content">
                <div className="icon-01">
                  <img src={bed_icon} alt={bed_icon} />
                  <p>
                    Earn
                    <br />
                    Free Nights
                  </p>
                </div>
                <div className="icon-02">
                  <img src={discount_icon} alt={discount_icon} />
                  <p>
                    Member
                    <br />
                    Rates
                  </p>
                </div>
                <div className="icon-03">
                  <img src={wifi_icon} alt={wifi_icon} />
                  <p>
                    Free Wifi
                    <br />
                    Service
                  </p>
                </div>
                <div className="icon-04">
                  <img src={log_out_icon} alt={log_out_icon} />
                  <p>
                    Mobile
                    <br />
                    Check-in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== section 4 */}
      <div className="section-04">
        <div className="section-04-container">
          <div className="section-04-content">
            <div className="section-04-content-photo">
              <img src={about_us_03} alt={about_us_03} />
            </div>
            <div className="section-04-content-info">
              <h2>MEMBERSHIP</h2>
              <h1>CRAFTING UNIQUE EXPERIENCES</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <button>
                VIEW MORE!<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== section 4 */}
      <div className="section-05">
        <div className="section-05-container">
          <div className="section-05-content">
            <div className="section-05-content-photo-01">
              <img src={about_us_03} alt={about_us_03} />
            </div>
            <div className="section-05-content-photo-02">
              <img src={about_us_03} alt={about_us_03} />
            </div>
            <div className="section-05-content-photo-03">
              <img src={about_us_03} alt={about_us_03} />
            </div>
            <div className="section-05-content-photo-04">
              <img src={about_us_03} alt={about_us_03} />
            </div>
            <div className="section-05-content-photo-05">
              <img src={about_us_03} alt={about_us_03} />
            </div>
            <div className="section-05-content-photo-06">
              <img src={about_us_03} alt={about_us_03} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
