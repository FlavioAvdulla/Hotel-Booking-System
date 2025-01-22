import React, { useState, useEffect } from "react"; // Import React and hooks
import NavbarTop from "./components/NavbarTop/NavbarTop"; // Import NavbarTop component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components for routing
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS for icons
import NavbarBottom from "./components/NavbarBottom/NavbarBottom"; // Import NavbarBottom component
import Header from "./components/Home/Header/Header"; // Import Header component
import HotelBayView from "./components/Home/HotelBayView/HotelBayView"; // Import HotelBayView component
import BestRooms from "./components/Home/BestRooms/BestRooms"; // Import BestRooms component
import HotelLocation from "./components/Home/HotelLocation/HotelLocation"; // Import HotelLocation component
import Restaurant from "./components/Home/Restaurant/Restaurant"; // Import Restaurant component
import HotelVideo from "./components/Home/HotelVideo/HotelVideo"; // Import HotelVideo component
import HotelNews from "./components/Home/HotelNews/HotelNews"; // Import HotelNews component
import Hotel_Footer from "./components/Hotel_Footer/Hotel_Footer"; // Import Hotel_Footer component
import Rooms from "./components/Pages/Rooms/Rooms"; // Import Rooms component
import AboutUs from "./components/Pages/AboutUs/AboutUs"; // Import AboutUs component
import Contacts from "./components/Pages/Contacts/Contacts"; // Import Contacts component
import Login from "./components/Pages/Login/Login"; // Import Login component
import Signup from "./components/Pages/Signup/Signup"; // Import Signup component
import Logout from "./components/Pages/Logout/Logout"; // Import Logout component
import axios from 'axios'; // Import axios for HTTP requests

// Main App component definition
const App = () => {
  const [showLogin, setShowLogin] = useState(false); // State for showing Login modal
  const [showSignup, setShowSignup] = useState(false); // State for showing Signup modal
  const [showLogout, setShowLogout] = useState(false); // State for showing Logout modal
  const [userName, setUserName] = useState(''); // State for showing Logout modal

  useEffect(() => {
    // Check token validity on component mount
    const token = localStorage.getItem('token');
    if (token) {
      axios.post('http://localhost:3001/verify-token', { token })
        .then(result => {
          setUserName(result.data.name); // Set the user's name from the token verification result
        })
        .catch(err => {
          console.error(err); // Log error
          localStorage.removeItem('token'); // Remove token if invalid
        });
    }
  }, []);

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from local storage
    setUserName(''); // Clear user's name
    setShowLogout(false); // Close Logout modal
  };

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} setShowSignup={setShowSignup} setUserName={setUserName} />}
      {showSignup && <Signup setShowSignup={setShowSignup} setShowLogin={setShowLogin} />}
      {showLogout && <Logout setShowLogout={setShowLogout} userName={userName} handleLogout={handleLogout} />}

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
