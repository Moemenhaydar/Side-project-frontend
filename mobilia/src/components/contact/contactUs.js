import React from "react";
import "./contactUs.css";

const contactUs = () => {
  return (
    <div className="contact-us-wrapper">
      <div className="contact-us-container">
        <h1 className="contact-us-heading">Contact Us</h1>
        <form className="contact-us-form">
          <div className="form-field">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" id="name" className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" id="email" className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="form-textarea"
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contactUs;
