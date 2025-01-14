import React, { useState } from "react";
import "./Login.css";
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Login = ({ setShowLogin, setShowSignup, setUserName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted. Email: ${email}, Password: ${password}`);
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data);
        setErrorMessage('');
        setUserName(result.data.name);
        localStorage.setItem('token', result.data.token); // Save token
        setShowLogin(false);
      })
      .catch(err => {
        console.error(err);
        setErrorMessage('Login failed. Please check your email and password.');
      });
  };

  const handleClose = () => {
    setShowLogin(false);
  };

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
          <button type="button" onClick={handleSignupOpen}>SIGN UP</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
