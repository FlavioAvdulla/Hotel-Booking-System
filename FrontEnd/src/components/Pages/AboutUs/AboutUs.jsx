// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./AboutUs.css";
import { staff } from "./Staff";
import { FaStar } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination } from "swiper/modules";

// Scroll to top
import ScrollToTop from "../../ScrollToTop/ScrollToTop.jsx";

// import  texts  from "../../pages/AboutUs/texts.json"

// Images
import about_us_01 from "../../../assets/images/About-us/about_us_01.jpg";
import about_us_02 from "../../../assets/images/About-us/about_us_02.jpg";
import bed_icon from "../../../assets/images/About-us/bed_icon.svg";
import discount_icon from "../../../assets/images/About-us/discount_icon.svg";
import wifi_icon from "../../../assets/images/About-us/wifi_icon.svg";
import log_out_icon from "../../../assets/images/About-us/log_out_icon.svg";
import review_icon from "../../../assets/images/About-us/review_icon.svg";
import about_us_03 from "../../../assets/images/About-us/about_us_03.jpg";
import review_01 from "../../../assets/images/About-us/review_01.jpg";

const AboutUs = () => {
  const [rating, setRating] = useState(null);

  return (
    <div className="about-us">
      <ScrollToTop/>
      <div className="section-01">
        <div className="banner-info">
          <h1>ABOUT US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
            text ever since the 1500s.
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
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
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
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
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
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>
              <button>
                VIEW MORE!<i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== section 5 */}
      <div className="section-05">
        <div className="section-05-content-info">
          <h2>MEMBERSHIP</h2>
          <h1>CRAFTING UNIQUE EXPERIENCES</h1>
        </div>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          // grabCursor={true}
          modules={[Pagination, Navigation]}
          className="Swiper"
          navigation
          spaceBetween={5}
          slidesPerView={3}
        >
          {staff.map((staff) => (
            <SwiperSlide key={staff._id} className="SwiperSlide">
              <div className="photo-item">
                <img src={staff.image} alt={staff.fullname} />
                <div className="photo-item-info">
                  <h1>{staff.fullname}</h1>
                  <p>{staff.position}</p>
                  <div className="photo-item-info-icons">
                    <a
                      href="https://www.behance.net/flavioavdulla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-square-facebook"></i>
                    </a>
                    <a
                      href="https://www.behance.net/flavioavdulla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                    <a
                      href="https://www.behance.net/flavioavdulla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      href="https://www.behance.net/flavioavdulla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ====================== section 6 */}
      <div className="section-06">
        <div className="section-06-content">
          <div className="section-06-content-info">
            <h2>MEMBERSHIP</h2>
            <h1>CRAFTING UNIQUE EXPERIENCES</h1>
          </div>
          <div className="section-06-content-reviews">
            {/* ====================== Column - 01 */}
            <div className="review-column-01">
              <div className="review-01">
                <div className="review-description-section">
                  <img src={review_icon} alt={review_icon} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard...
                  </p>
                </div>
                <div className="review-client">
                  <div className="client-photo">
                    <img src={review_01} alt={review_01} />
                  </div>
                  <div className="client-info">
                    <div className="client-info-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="client-info-name">
                      <h1>Grace Bennett</h1>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-02">
                <div className="review-description-section">
                  <img src={review_icon} alt={review_icon} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard...
                  </p>
                </div>
                <div className="review-client">
                  <div className="client-photo">
                    <img src={review_01} alt={review_01} />
                  </div>
                  <div className="client-info">
                    <div className="client-info-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="client-info-name">
                      <h1>Grace Bennett</h1>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================== Column - 01 */}

            <div className="review-column-02">
              <div className="review-03">
                <div className="review-description-section">
                  <img src={review_icon} alt={review_icon} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard...
                  </p>
                </div>
                <div className="review-client">
                  <div className="client-photo">
                    <img src={review_01} alt={review_01} />
                  </div>
                  <div className="client-info">
                    <div className="client-info-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="client-info-name">
                      <h1>Grace Bennett</h1>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-04">
                <div className="review-description-section">
                  <img src={review_icon} alt={review_icon} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard...
                  </p>
                </div>
                <div className="review-client">
                  <div className="client-photo">
                    <img src={review_01} alt={review_01} />
                  </div>
                  <div className="client-info">
                    <div className="client-info-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="client-info-name">
                      <h1>Grace Bennett</h1>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ====================== Column - 01 */}

            <div className="review-column-03">
              <div className="review-05">
                <div className="review-description-section">
                  <img src={review_icon} alt={review_icon} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard...
                  </p>
                </div>
                <div className="review-client">
                  <div className="client-photo">
                    <img src={review_01} alt={review_01} />
                  </div>
                  <div className="client-info">
                    <div className="client-info-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="client-info-name">
                      <h1>Grace Bennett</h1>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-06">
                <div className="review-description-section">
                  <img src={review_icon} alt={review_icon} />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard. Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry&apos;s standard. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry&apos;s standard...
                  </p>
                </div>
                <div className="review-client">
                  <div className="client-photo">
                    <img src={review_01} alt={review_01} />
                  </div>
                  <div className="client-info">
                    <div className="client-info-stars">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="client-info-name">
                      <h1>Grace Bennett</h1>
                      <p>Happy Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ====================== Submit Review */}
          <div className="submit-review">
            <h1>Add Your Review Below</h1>
            <div className="submit-review-stars">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={ratingValue}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      className="star"
                      color={
                        ratingValue <= rating
                          ? "rgb(255, 208, 0)"
                          : "rgb(105, 105, 105)"
                      }
                      // size={30}
                    />
                  </label>
                );
              })}
            </div>

            <div className="submit-review-input">
              {/* <label>Full Name</label> */}
              <input
                type="text"
                name="name"
                placeholder="Enter you name"
                required
              />
              <textarea
                type="text"
                name="email"
                placeholder="Write your review."
                required
              />
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
