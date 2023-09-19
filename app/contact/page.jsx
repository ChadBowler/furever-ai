// pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>We're here to assist you with any questions, concerns, or feedback you may have. Please don't hesitate to get in touch with us!</p>

      <h2>Contact Information</h2>
      <ul>
        <li><strong>Email:</strong> contact@fureverai.com</li>
        <li><strong>Phone:</strong> +1 (123) 456-7890</li>
        <li><strong>Address:</strong> 123 Pet Care Avenue, Cityville, ST 12345</li>
      </ul>

      <h2>Contact Form</h2>
      <p>If you prefer to send us a message directly, you can use the contact form below:</p>
      
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" cols="50" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
