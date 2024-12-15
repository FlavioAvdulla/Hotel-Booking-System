import React from "react";
import "./HotelNews.css";

const HotelNews = () => {
  return (
    <div className="hotel-news">
      <div className="hotel-news-head">
        <h2>LUXURY HOTEL</h2>
        <hr />
        <h1>BEST ROOMS</h1>
      </div>
      <div className="hotel-news-sections">
        <div className="hotel-news-section_01">
          <div className="hotel-news-section_01_post"></div>
          <div className="hotel-news-section_01_image"></div>
        </div>
        <div className="hotel-news-section_02">
          <div className="hotel-news-section_02_post"></div>
          <div className="hotel-news-section_02_image"></div>
        </div>
        <div className="hotel-news-section_03">
          <div className="hotel-news-section_03_post"></div>
          <div className="hotel-news-section_03_image"></div>
        </div>
      </div>
    </div>
  );
};

export default HotelNews;
