import React from "react";
import "./ContactAgent.css";

function ContactAgent() {
  return (
    <main className="contact-page">

      {/* Header Section */}
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Engage with our trusted real estate team and unlock premium 
          property opportunities with Prime Space.
        </p>
      </section>

      {/* Info Cards */}
      <section className="contact-info-grid">
        <div className="info-card">
          <h3>Call Us</h3>
          <p>+94 76 887 1461</p>
        </div>

        <div className="info-card">
          <h3>Email</h3>
          <p>info@primespace.lk</p>
        </div>

        <div className="info-card">
          <h3>Visit Office</h3>
          <p>142 Primrose Road,<br />Kandy, Sri Lanka</p>
        </div>
      </section>

      {/* Map + Form Section */}
      <section className="contact-main">

        {/* Map */}
        <div className="map-box">
          <iframe
            title="PrimeSpace Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.287413122161!2d80.60860993924551!3d7.281318463260515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3689391b468ed%3A0xfabafcaf980cb7f5!2sPrimrose%2C%20Kandy!5e0!3m2!1sen!2slk!4v1767370704741!5m2!1sen!2slk" 
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
