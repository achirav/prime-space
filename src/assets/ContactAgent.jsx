import React from "react";
import "./ContactAgent.css";

function ContactAgent() {
  return (
    <main className="contact-page">

      {/* Header Section */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Speak with our experienced real estate team and discover premium
          living opportunities with Opulenza.
        </p>
      </section>

      {/* Info Cards */}
      <section className="contact-info-grid">
        <div className="info-card">
          <h3>Call Us</h3>
          <p>+94 76 123 4567</p>
        </div>

        <div className="info-card">
          <h3>Email</h3>
          <p>info@opulenza.lk</p>
        </div>

        <div className="info-card">
          <h3>Visit Office</h3>
          <p>123 Lotus Grove Lane,<br />Colombo 07, Sri Lanka</p>
        </div>
      </section>

      {/* Map + Form Section */}
      <section className="contact-main">

        {/* Map */}
        <div className="map-box">
          <iframe
            title="Opulenza Location"
            src="https://www.google.com/maps?q=Colombo+7,+Colombo,+Sri+Lanka&z=15&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form */}
        <div className="form-box">
          <h2>Send Us a Message</h2>

          <form className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea rows="4" placeholder="Your Message"></textarea>

            <button type="submit">Submit Enquiry</button>
          </form>
        </div>

      </section>

    </main>
  );
}

export default ContactAgent;
