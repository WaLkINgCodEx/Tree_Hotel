import React from "react";
import connectImg from "../../assets/images/connect-img.webp";

export default function ubscriptionBanner() {
  return (
    <div className="connect-banner-wrapper">
      <span className="connect-background">
        <img src={connectImg} alt="connect banner" />
      </span>

      <div className="connect-banner-overlay"></div>

      <div className="connect-banner-container">
        <h2>Connect With us</h2>
        <p>
          Please click below to chat with our team of Banyan Tree Hosts directly
          via WhatsApp.
        </p>
        <a>
          <span className="connect-btn">Click to chat</span>
        </a>
      </div>
    </div>
  );
}
