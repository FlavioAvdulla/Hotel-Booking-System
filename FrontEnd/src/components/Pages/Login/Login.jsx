import React from "react";
import "./Login.css";
import { IoIosCloseCircle } from "react-icons/io";

const Login = ({ setShowLogin, setShowSignup }) => {
  const handleClose = () => {
    setShowLogin(false); // Close the login page
  };

  const handleSignupOpen = () => {
    setShowLogin(false); // Close the login page
    setShowSignup(true); // Open the signup page
  };

  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h1>Login</h1>
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
        <div className="login-button">
          <button>LOGIN</button>
          <p>Already have an account</p>
        </div>
        <div className="sign-up-button">
          <button onClick={handleSignupOpen}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
