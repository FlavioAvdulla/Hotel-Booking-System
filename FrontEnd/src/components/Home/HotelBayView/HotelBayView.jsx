// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HotelBayView.css";
import bayview_01 from "../../../assets/images/bayview_01.png";

const HotelBayView = () => {
  return (
    <div className="hotel-bay-view">
      <div className="hotel-bay-view-info">
        <h2>HOTEL BAYVIEW</h2>
        <h1 className="h1-thin">RELAX IN OUR</h1>
        <h1 className="h1-bold">RESORT</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
        <button>ABOUT US</button>
      </div>

      <div className="hotel-bay-view-right">
        <img src={bayview_01} alt={bayview_01} />
      </div>
    </div>
  );
};

export default HotelBayView;
