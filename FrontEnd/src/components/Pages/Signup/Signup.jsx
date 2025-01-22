import React, { useState, useEffect } from "react"; // Import React and hooks
import "./Signup.css"; // Import CSS file for styling
import { IoIosCloseCircle } from "react-icons/io"; // Import Close icon from react-icons library
import axios from "axios"; // Import axios for HTTP requests

// Signup component definition
const Signup = ({ setShowSignup, setShowLogin }) => {
  // State variables for form inputs and messages
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");

  // Effect hook to reset form inputs when the component mounts
  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        console.log(result);
        setSuccessMessage("Successfully registered.");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Email already in use.");
      });
  };

  // Function to close the signup modal
  const handleClose = () => {
    setShowSignup(false);
  };

  // Function to open the login modal
  const handleLoginOpen = () => {
    setShowSignup(false);
    setShowLogin(true);
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
          <p className="success-message">{successMessage}</p>
          <p className="error-message">{ErrorMessage}</p>
        </div>
        <div className="login-button">
          <button type="button" onClick={handleLoginOpen}>
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
