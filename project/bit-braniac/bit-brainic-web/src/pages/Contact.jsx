import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="info-subtitle">
                Fill out the form and our team will get back to you within 24 hours
              </p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>support@bit-brainiac.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📱</span>
                  <div className="info-text">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div className="info-text">
                    <h3>Office</h3>
                    <p>123 Tech Street<br/>San Francisco, CA 94102</p>
                  </div>
                </div>

                <div className="info-item">
                  <span className="info-icon">⏰</span>
                  <div className="info-text">
                    <h3>Hours</h3>
                    <p>Monday - Friday<br/>9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">📸</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
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
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I reset my password?</h3>
              <p>Click on "Forgot Password" on the login page and follow the instructions sent to your email.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>Yes, we offer a 30-day money-back guarantee if you're not satisfied with our courses.</p>
            </div>
            <div className="faq-item">
              <h3>Can I switch courses?</h3>
              <p>Absolutely! You can switch between courses anytime with your subscription.</p>
            </div>
            <div className="faq-item">
              <h3>Is there a mobile app?</h3>
              <p>Yes, our mobile app is available on both iOS and Android platforms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
