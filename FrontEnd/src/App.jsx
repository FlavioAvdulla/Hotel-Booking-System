import React, { useState, useEffect } from "react";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";
import Header from "./components/Home/Header/Header";
import HotelBayView from "./components/Home/HotelBayView/HotelBayView";
import BestRooms from "./components/Home/BestRooms/BestRooms";
import HotelLocation from "./components/Home/HotelLocation/HotelLocation";
import Restaurant from "./components/Home/Restaurant/Restaurant";
import HotelVideo from "./components/Home/HotelVideo/HotelVideo";
import HotelNews from "./components/Home/HotelNews/HotelNews";
import Hotel_Footer from "./components/Hotel_Footer/Hotel_Footer";
import Rooms from "./components/Pages/Rooms/Rooms";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Contacts from "./components/Pages/Contacts/Contacts";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Signup/Signup";
import Logout from "./components/Pages/Logout/Logout";
import axios from 'axios';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Check token validity on component mount
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('http://localhost:3001/verify-token', { token })
        .then(result => {
          setUserName(result.data.name);
        })
        .catch(err => {
          console.error(err);
          localStorage.removeItem('token');
        });
    }
  }, []);

  const handleLogout = () => {
    setUserName('');
    localStorage.removeItem('token'); // Remove token on logout
    setShowLogout(false);
  };

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup} setUserName={setUserName} />}
      {showSignup && <Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin} />}
      {showLogout && <Logout setShowLogout={setShowLogout} userName={userName} handleLogout={handleLogout}/>}

      <div className="app">
        <Router>
          <NavbarTop setShowLogin={setShowLogin} userName={userName} setShowLogout={setShowLogout} setUserName={setUserName} />
          <NavbarBottom />
          <Routes>
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/" element={
              <>
                <Header />
                <HotelBayView />
                <BestRooms />
                <HotelLocation />
                <Restaurant />
                <HotelVideo />
                <HotelNews />
              </>
            } />
          </Routes>
          <Hotel_Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
