import React, { useState } from "react";
import Axios from "axios";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleContact = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({ ...contact, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("http://localhost:8000/api/v1/contact", {
        name: contact.name,
        email: contact.email,
        message: contact.message,
      });
      if (res.status === 200) {
        alert("Message Send Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <p className="contact-description">
          If you have any questions, feel free to reach out. But be careful,
          leaving a message without your name might summon a Shinigami...
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contact.name}
              onChange={handleContact}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleContact}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={contact.message}
              onChange={handleContact}
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button" onClick={postData}>
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>123 Shinigami Street, Tokyo, Japan</p>
          <p>
            Email: <a href="mailto:[your-email]">light@deathnote.com</a>
          </p>
          <p>
            Phone: <a href="tel:[your-phone]">+123456789</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
