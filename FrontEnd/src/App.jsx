import React from "react";
import NavbarTop from "./components/NavbarTop/NavbarTop";
import { BrowserRouter as Router } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <NavbarTop />
        <NavbarBottom />
      </Router>
    </div>
  );
};

export default App;
