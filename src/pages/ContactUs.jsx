import React from 'react';
import './ContactUs.css'; // Separate CSS file for styling.

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or want to get involved? Reach out to us using the form below or via the provided contact details.
        </p>
      </section>
<hr />
      <section className="contact-details">
        <h2>Get in Touch</h2>
        <p>Email: support@togetherforgaza.org</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Solidarity Street, Compassion City, Global 45678</p>
      </section>
    <hr />
      <section className="contact-form-section">
        <h2>Contact Form</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
