import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
