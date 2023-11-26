import React from "react";
import "../css/hero.css";
import { useNavigate } from "react-router";
import heroImage from '../images/hero-image.png'

function HeroPage() {
    const navigate = useNavigate()
  return (
    <div className="hero-wrapper">
      <div className="hero-text">
        <h2>Welcome To</h2>
        <h1>
          SHOP<span>.me</span>
        </h1>
        <p>
          Start exploring our collection today and unlock a world of
          convenience, quality, and style. We can't wait to make your shopping
          dreams come true!
        </p>
        <button className="get-started-btn" onClick={()=> navigate('/products')}>Start Shoping</button>
      </div>
      <div className="hero-logo">
        <div className="egg"></div>
        <div className="egg-1"></div>
        <img src={heroImage} className="hero-image" alt="" />
      </div>
    </div>
  );
}


export default HeroPage;
