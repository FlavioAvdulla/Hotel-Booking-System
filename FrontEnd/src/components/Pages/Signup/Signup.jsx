import React, { useState, useEffect } from "react";
import "./Signup.css";
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Signup = ({ setShowSignup, setShowLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/signup', {name, email, password})
      .then(result => {
        console.log(result);
        setSuccessMessage("Successfully registered.");
      })
      .catch(err => {
        console.log(err);
        setSuccessMessage("");
      });
  };

  const handleClose = () => {
    setShowSignup(false); // Close the signup page
  };

  const handleLoginOpen = () => {
    setShowSignup(false); // Close the signup page
    setShowLogin(true); // Open the login page
  };

  return (
    <div className="signup">
      <form className="signup-container" onSubmit={handleSubmit}>
        <div className="signup-title">
          <h1>Sign up</h1>
          <i onClick={handleClose}>
            <IoIosCloseCircle className="close-icon" />
          </i>
        </div>
        <div className="fullname">
          <h2>Fullname</h2>
          <input
            type="text"
            name="Fullname"
            placeholder="Fullname"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email">
          <h2>Email</h2>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="signup-button">
          <button>SIGN UP</button>
          <p>{successMessage}</p>
        </div>
        <div className="login-button">
          <button type="button" onClick={handleLoginOpen}>LOG IN</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
