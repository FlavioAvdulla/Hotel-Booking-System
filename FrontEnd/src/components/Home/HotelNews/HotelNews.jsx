// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HotelNews.css";
import hotel_news_01 from "../../../assets/images/hotel_news_01.jpg";
import hotel_news_02 from "../../../assets/images/hotel_news_02.jpg";
import hotel_news_03 from "../../../assets/images/hotel_news_03.jpg";
import hotel_news_04 from "../../../assets/images/hotel_news_04.jpg";
import hotel_news_05 from "../../../assets/images/hotel_news_05.jpg";

const HotelNews = () => {
  return (
    <div className="hotel-news">
      <div className="hotel-news-head">
        <h2>HOTEL NEWS</h2>
        <hr />
        <h1>OUR BLOG</h1>
      </div>
      <div className="hotel-news-sections">
        <div className="hotel-news-section-01">
          <div className="hotel-news-section-01-post">
            <div className="hotel-news-section-01-post-img">
              <img src={hotel_news_02} alt={hotel_news_02} />
              <div className="hotel-news-section-01-post-info">
                <h2>LUXURY HOTEL</h2>
                <hr />
                <h1>BEST ROOMS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="hotel-news-section-01-image">
            <div className="blend-color"></div>
            <img src={hotel_news_01} alt={hotel_news_01} />
          </div>
        </div>

        <div className="hotel-news-section-02">
          <div className="hotel-news-section-02-image">
            <div className="blend-color"></div>
            <img src={hotel_news_03} alt={hotel_news_03} />
          </div>
          <div className="hotel-news-section-02-post">
            <div className="hotel-news-section-02-post-img">
              <img src={hotel_news_02} alt={hotel_news_02} />
              <div className="hotel-news-section-02-post-info">
                <h2>LUXURY HOTEL</h2>
                <hr />
                <h1>BEST ROOMS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-news-section-03">
          <div className="hotel-news-section-03-post">
            <div className="hotel-news-section-02-post-img">
              <img src={hotel_news_04} alt={hotel_news_04} />
              <div className="hotel-news-section-02-post-info">
                <h2>LUXURY HOTEL</h2>
                <hr />
                <h1>BEST ROOMS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam.
                </p>
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="hotel-news-section-03-image">
            <div className="blend-color"></div>
            <img src={hotel_news_05} alt={hotel_news_05} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelNews;
