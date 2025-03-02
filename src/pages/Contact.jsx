import React, { useEffect, useState } from "react";
import "./CSS/Contact.css";
import contactUsImg from "../assets/images/contactUs/contactus.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // Track submission status

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000); // Hide message after 3s
      return () => clearTimeout(timer); // Cleanup function
    }
  }, [status]);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Prevent empty form submission
    if (!name || !email || !message) {
      setStatus({ type: "error", message: "All fields are required!" });
      return;
    }

    const formData = {
      access_key: "7d39c420-f66b-4f4a-a49a-7ff7271d8e4d",
      fullname: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const res = await response.json();

      if (res.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({ type: "error", message: "Submission failed, try again!" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error, try again!" });
    }
  };

  return (
    <section>
      <div
        className="contact-hero"
        style={{ backgroundImage: `url(${contactUsImg})` }}
      >
        <h1>Contact Us For Booking Your Therapy</h1>
      </div>

      {status && (
        <div className={`status-message ${status.type}`}>{status.message}</div>
      )}

      <form className="form" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="fullname">
            Name
            <input
              type="text"
              name="fullname"
              className="form-input"
              id="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              className="form-input"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-row">
          <label htmlFor="message">
            Message
            <textarea
              name="message"
              className="form-input"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="8" /* Increase the number of visible rows */
              cols="50"
              required
            />
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <iframe
        className="map-img"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424953.29658916796!2d73.04788476093296!3d33.68442020613186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1740345081957!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
