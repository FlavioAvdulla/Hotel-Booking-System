import React from "react";
import "./Contacts.css";

// Photos

import about_us_01 from "../../../assets/images/About-us/about_us_01.jpg";
import contacts_01 from "../../../assets/images/Contacts/contacts_01.jpg";
import contacts_02 from "../../../assets/images/Contacts/contacts_02.jpg";

// Icons
import { IoLocationOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";


// Scroll to top
import ScrollToTop from "../../ScrollToTop/ScrollToTop.jsx";

const Contacts = () => {
  // State to manage form submission result
  const [result, setResult] = React.useState("");

  // Function to handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...."); // Display sending message
    const formData = new FormData(event.target);

    formData.append("access_key", "6051b6b5-751e-4800-8de9-89c9c0bb27e9");

    // Send form data to the API endpoint
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // Check response status and update result
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); // Reset the form after successful submission
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contacts">
      <ScrollToTop/>
      <div className="section-01">
        <div className="banner-info">
          <h1>CONTACT US</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.
          </p>
          <button>
            HOME <i className="fa-solid fa-arrow-right"></i> CONTACTS
          </button>
        </div>
        <div className="banner-photo">
          <img src={about_us_01} alt={about_us_01} />
        </div>
      </div>

      {/* ====================== section 2 */}
      <div className="section-02">
        <div className="contact-container">
          <div className="input-form">
            <form onSubmit={onSubmit}>
              <div className="input-form-wrapper">
                <div className="inputs">
                  <input
                    type="text"
                    name="Firstname"
                    placeholder="Firstname"
                    required
                  />
                  <input
                    type="text"
                    name="Lastname"
                    placeholder="Lastname"
                    required
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    name="Phone"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="message-textarea">
                  <textarea
                    name="message"
                    placeholder="Enter you message"
                    required
                  ></textarea>
                </div>
                <button type="submit">SUBMIT NOW</button>
                <span>{result}</span>
              </div>
            </form>
          </div>
          {/* =============================================================== */}
          <div className="contact-info">
            <div className="location">
              <i>
                <IoLocationOutline className="location-icon" />
              </i>
              <div className="location-info">
                <h1>Our Location</h1>
                <p>
                  121 King Street, Melbourne <br />
                  Victoria 3000 Australia
                </p>
              </div>
            </div>
            <div className="phone-number">
              <i>
                <MdAddIcCall className="call-icon" />
              </i>
              <div className="phone-number-info">
                <h1>Phone Number</h1>
                <p>+355 67 63 11 918</p>
                <p>+355 67 63 11 918</p>
              </div>
            </div>
            <div className="email-us">
              <i>
                <IoMailOutline className="email-icon" />
              </i>
              <div className="email-us-info">
                <h1>Email Us</h1>
                <p>a.flavio4366@gmail.com</p>
                <p>a.flavio4366@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ====================== section 3 */}
      <div className="contacts-03">
        <div className="contacts-03-content">
          <div className="hotel-location-photo">
            <img src={contacts_01} alt={contacts_01} />
          </div>
          <div className="hotel-location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47934.113366870646!2d19.776623563815935!3d41.33317735423729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTiran%C3%AB%2C%20Albania!5e0!3m2!1sen!2s!4v1736454535510!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="hotel-location-photo">
            <img src={contacts_02} alt={contacts_02} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
