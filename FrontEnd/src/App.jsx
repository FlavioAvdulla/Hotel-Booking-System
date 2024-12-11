import React from "react";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";
import Header from "./components/Header/Header";
import HotelBayView from "./components/HotelBayView/HotelBayView.JSX";
import BestRooms from "./components/BestRooms/BestRooms";
import HotelLocation from "./components/HotelLocation/HotelLocation";

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
      </Router>
    </div>
  );
};

export default App;
