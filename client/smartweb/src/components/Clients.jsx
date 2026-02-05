import React from "react";
import "../css/Clients.css";

const clients = [
  { name: "NovaTech", industry: "Startup" },
  { name: "ShopEase", industry: "E-commerce" },
  { name: "EduSpark", industry: "Education" },
  { name: "FinGrow", industry: "Finance" },
  { name: "HealthPlus", industry: "Healthcare" },
  { name: "LocalMart", industry: "Retail" },
];

const testimonials = [
  {
    text: "SmartWeb AI delivered exactly what we needed. Clean design, fast performance and great support.",
    author: "Founder, Startup Company",
  },
  {
    text: "Excellent communication and timely delivery. Highly recommended for web and AI projects.",
    author: "Business Owner",
  },
  {
    text: "They understood our idea clearly and converted it into a scalable product.",
    author: "Product Manager",
  },
];

const Clients = () => {
  return (
    <div className="clients-page">
      {/* Hero Section */}
      <section className="clients-hero">
        <h1>Our Happy Clients</h1>
        <p>
          We’ve helped startups and businesses build powerful digital products
          that grow faster and smarter.
        </p>
      </section>

      {/* Clients Grid */}
      <section className="clients-section">
        <h2>Trusted by Businesses & Startups</h2>
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <div className="client-logo">{client.name[0]}</div>
              <h3>{client.name}</h3>
              <span>{client.industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="services-section">
        <h2>How We Help Our Clients</h2>
        <div className="services-grid">
          <div className="service-card">Website Development</div>
          <div className="service-card">Mobile App Development</div>
          <div className="service-card">AI Automation</div>
          <div className="service-card">Custom Software Solutions</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p>“{item.text}”</p>
              <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
              <h4>{item.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stat">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>30+</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat">
          <h3>5+</h3>
          <p>Industries Served</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta">
        <h2>Ready to Be Our Next Success Story?</h2>
        <div className="cta-buttons">
          <button className="btn-primary">Get Free Quote</button>
          <button className="btn-outline">WhatsApp Us</button>
        </div>
      </section>
    </div>
  );
};

export default Clients;