import React, { useState } from "react";
import "./Header.css";
import Header_02 from "../../../assets/images/header_02.jpg";

// Array of month abbreviations
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const Header = () => {
  // State variables for check-in month, check-out month, and number of guests
  const [checkInMonthIndex, setCheckInMonthIndex] = useState(0);
  const [checkOutMonthIndex, setCheckOutMonthIndex] = useState(1);
  const [guestNum, setGuestNum] = useState(1);

  // Function to validate check-in date input
  const validateDateInputCheckIn = (event) => {
    const input = event.target;
    const value = input.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    const dateValue = parseInt(numericValue, 10);

    // Check if date is valid (1-31)
    if (!isNaN(dateValue) && dateValue >= 1 && dateValue <= 31) {
      input.value = dateValue;
    } else {
      input.value = "";
    }
  };

  // Function to validate number of guests input
  const validateDateInputCheckOut = (event) => {
    const input = event.target;
    const value = input.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    const dateValue = parseInt(numericValue, 10);

    // Check if number of guests is valid (1-6)
    if (!isNaN(dateValue) && dateValue >= 1 && dateValue <= 31) {
      input.value = dateValue;
    } else {
      input.value = "";
    }
  };

  const validateDateInputGuests = (event) => {
    const input = event.target;
    const value = input.value;
    const numericValue = value.replace(/[^0-9]/g, "");
    const guestValue = parseInt(numericValue, 10);

    if (!isNaN(guestValue) && guestValue >= 1 && guestValue <= 6) {
      setGuestNum(guestValue);
      input.value = guestValue.toString().padStart(2, "0");
    } else {
      setGuestNum(0);
      input.value = "";
    }
  };

  // Function to change the check-in month
  const changeMonthCheckIn = (direction) => {
    setCheckInMonthIndex((prevIndex) => {
      if (direction === "up") {
        return (prevIndex + 1) % 12;
      } else {
        return (prevIndex - 1 + 12) % 12;
      }
    });
  };

  // Function to change the check-out month
  const changeMonthCheckOut = (direction) => {
    setCheckOutMonthIndex((prevIndex) => {
      if (direction === "up") {
        return (prevIndex + 1) % 12;
      } else {
        return (prevIndex - 1 + 12) % 12;
      }
    });
  };

  // Function to change the number of guests
  const changeGuestNum = (direction) => {
    setGuestNum((prevNum) => {
      if (direction === "up") {
        return prevNum < 6 ? prevNum + 1 : prevNum;
      } else {
        return prevNum > 1 ? prevNum - 1 : prevNum;
      }
    });
  };

  return (
    <div className="header">
      <img src={Header_02} alt={Header_02} />
      <div className="first-container">
        <div className="blend-overlay"></div>
        <h1>
          ENJOY A LUXURY
          <br />
          EXPERIENCE
        </h1>
      </div>
      <div className="second-container">
        <p>ROOMS & SUITES</p>
        <div className="blend-overlay-black"></div>
      </div>
      <div className="third-container">
        <div className="section-1">
          <div className="check-in">
            <p>CHECK IN</p>
          </div>

          <div className="date-month">
            <div className="date">
              <input
                type="text"
                onInput={validateDateInputCheckIn}
                placeholder="01"
              />
            </div>

            <div className="month">
              <i
                className="fa-solid fa-chevron-up"
                onClick={() => changeMonthCheckIn("up")}
              ></i>
              <p>{months[checkInMonthIndex]}</p>
              <i
                className="fa-solid fa-chevron-down"
                onClick={() => changeMonthCheckIn("down")}
              ></i>
            </div>
          </div>
        </div>

        <div className="section-2">
          <div className="check-in">
            <p>CHECK OUT</p>
          </div>

          <div className="date-month">
            <div className="date">
              <input
                type="text"
                onInput={validateDateInputCheckOut}
                placeholder="01"
              />
            </div>

            <div className="month">
              <i
                className="fa-solid fa-chevron-up"
                onClick={() => changeMonthCheckOut("up")}
              ></i>
              <p>{months[checkOutMonthIndex]}</p>
              <i
                className="fa-solid fa-chevron-down"
                onClick={() => changeMonthCheckOut("down")}
              ></i>
            </div>
          </div>
        </div>

        <div className="section-3">
          <div className="check-in">
            <p>GUESTS</p>
          </div>

          <div className="date-month">
            <div className="date">
              <input
                type="text"
                onInput={validateDateInputGuests}
                placeholder="01"
                value={
                  guestNum === 0 ? "" : guestNum.toString().padStart(2, "0")
                }
              />
            </div>

            <div className="month">
              <i
                className="fa-solid fa-chevron-up"
                onClick={() => changeGuestNum("up")}
              ></i>
              <p></p>
              <i
                className="fa-solid fa-chevron-down"
                onClick={() => changeGuestNum("down")}
              ></i>
            </div>
          </div>
        </div>

        <div className="section-4">
          <p>
            CHECK
            <br />
            AVAILABILITY
          </p>
          <div className="section-4-overlay-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
