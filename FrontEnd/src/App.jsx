import React from "react";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";
import Header from "./components/Header/Header";
import HotelBayView from "./components/HotelBayView/HotelBayView.JSX";
import BestRooms from "./components/BestRooms/BestRooms";
import HotelLocation from "./components/HotelLocation/HotelLocation";
import Restaurant from "./components/Restaurant/Restaurant";
import HotelVideo from "./components/HotelVideo/HotelVideo";
import HotelNews from "./components/HotelNews/HotelNews";
import Hotel_Footer from "./components/Hotel_Footer/Hotel_Footer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavbarTop />
        <NavbarBottom />
        <Header />
        <HotelBayView />
        <BestRooms />
        <HotelLocation />
        <Restaurant />
        <HotelVideo />
        <HotelNews />
        <Hotel_Footer />
      </Router>
    </div>
  );
};

export default App;
