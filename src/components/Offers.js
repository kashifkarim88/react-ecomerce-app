import React from "react";
import "../css/Offers.css";

function Offers() {
  return (
    <div className="offers-wrapper">
      <div className="offers-inner-wrapper">
        <h1 className="title-h1">Exclusive Offers</h1>
        <h1 className="offer-h1">
          <span className="offers-signUp">Signup</span> and get discount Up to
          50%
        </h1>
      </div>
      <div className="deals-div">
        <div className="crazy-deal">
          <h3>Crazy Deals</h3>
          <h1>buy 1 get 1 free</h1>
          <p>The classic dress is on sale at shop.me</p>
          <button className="learnmore-btn">Learn More</button>
        </div>
        <div className="upcoming-deal">
          <h3>Summer/Spring</h3>
          <h1>Upcoming Season</h1>
          <p>The classic dress is on sale at shop.me</p>
          <button className="learnmore-btn">Learn More</button>
        </div>
      </div>
        <div className="classic-baners">
          <div className="baner-1">
            <h1>SEASONAL SALE</h1>
            <p>Winter Collection-50% off</p>
          </div>
          <div className="baner-2">
            <h1>NEW FOOTWARE COLLECTION</h1>
            <p>Spring/Summer 2024</p>
          </div>
          <div className="baner-3">
            <h1>T-ShIRTS</h1>
            <p>New Trendy Prints</p>
          </div>
        </div>
    </div>
  );
}

export default Offers;
