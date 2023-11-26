import React from "react";
import "../css/AboutUs.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Aboutus() {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">About US</h1>
      <div className="about-flex">
        <div className="about1 about-box">
          <h3>Mission and Values</h3>
          <p>
            Clearly articulate the mission and values that drive your business.
            Explain the purpose and principles that guide your decisions,
            emphasizing how they align with the needs and values of your
            customers.
          </p>
        </div>
        <div className="about2 about-box">
          <h3>Company Culture</h3>
          <p>
            Clearly articulate the mission and values that drive your business.
            Explain the purpose and principles that guide your decisions,
            emphasizing how they align with the needs and values of your
            customers.
          </p>
        </div>
        <div className="about1 about-box">
          <h3>Commitment to Quality</h3>
          <p>
            Communicate your commitment to providing high-quality products or
            services. Showcase any certifications, awards, or processes that
            demonstrate your dedication to delivering excellence.
          </p>
        </div>
      </div>
      <h2 className="email-title">Email</h2>
      <p className="email-txt">Send us email if you have any query.</p>
      <div className="email-box">
        <input className="email-input" type="email" placeholder="email"/>
        <button className="email-btn">Send</button>
      </div>
      <div className="footer">
        <FacebookIcon className="social-icons"/>
        <TwitterIcon className="social-icons"/>
        <InstagramIcon className="social-icons"/>
      </div>
    </div>
  );
}

export default Aboutus;
