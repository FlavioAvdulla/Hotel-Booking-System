import React from "react";
import "./Signup.css";
import { IoIosCloseCircle } from "react-icons/io";

const Signup = ({ setShowSignup, setShowLogin }) => {
  const handleClose = () => {
    setShowSignup(false); // Close the signup page
  };

  const handleLoginOpen = () => {
    setShowSignup(false); // Close the signup page
    setShowLogin(true); // Open the login page
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-title">
          <h1>Sign up</h1>
          <i onClick={handleClose}>
            <IoIosCloseCircle className="close-icon" />
          </i>
        </div>
        <div className="email">
          <h2>Email</h2>
          <input type="text" name="Email" placeholder="Email" required />
        </div>
        <div className="password">
          <h2>Password</h2>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            required
          />
        </div>
        <div className="repeat-password">
          <h2> Repeat-Password</h2>
          <input
            type="password"
            name="Repeat-Password"
            placeholder="Repeat Password"
            required
          />
        </div>
        <div className="signup-button">
          <button> SIGN UP</button>
          <p>Already have an account</p>
        </div>
        <div className="login-button">
          <button onClick={handleLoginOpen}>LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
