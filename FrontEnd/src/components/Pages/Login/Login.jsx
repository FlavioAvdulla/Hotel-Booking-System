// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Login.css";
import { IoIosCloseCircle } from "react-icons/io"; // Icon for closing the login form
import axios from "axios"; // Library for making HTTP requests

// eslint-disable-next-line react/prop-types
const Login = ({ setShowLogin, setShowSignup, setUserName }) => {
  // State variables for managing email, password, and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted. Email: ${email}, Password: ${password}`);
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result.data);
        setErrorMessage(""); // Clear any previous error messages
        setUserName(result.data.name); // Set the username
        localStorage.setItem("token", result.data.token); // Save the token
        setShowLogin(false); // Close the login form
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Login failed. Please check your email and password.");
      });
  };

  // Handle closing the login form
  const handleClose = () => {
    setShowLogin(false);
  };

  // Handle opening the signup form
  const handleSignupOpen = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <div className="login">
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="login-title">
          <h1>Login</h1>
          <i onClick={handleClose}>
            <IoIosCloseCircle className="close-icon" />
          </i>
        </div>
        <div className="email">
          <h2>Email</h2>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            required
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <h2>Password</h2>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            required
            aria-label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-button">
          <button>LOGIN</button>
          {errorMessage && <p>{errorMessage}</p>}
        </div>
        <div className="sign-up-button">
          <button type="button" onClick={handleSignupOpen}>
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
