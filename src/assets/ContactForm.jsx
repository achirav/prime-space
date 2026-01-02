import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const agentName = queryParams.get('agent') || 'our team';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agent: agentName
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
  };

  return (
    <div className="contact-form-container">
      <h1>Contact {agentName}</h1>
      <p className="form-subtitle">
        Fill out the form below and we'll get back to you shortly
      </p>

      <form onSubmit={handleSubmit} className="contact-form">

        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="07X XXX XXXX"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>

        <input type="hidden" name="agent" value={formData.agent} />

        <button type="submit" className="submit-btn">
          Send Message
        </button>

      </form>
    </div>
  );
};

export default ContactForm;
