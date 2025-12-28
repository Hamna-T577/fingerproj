import React from "react";
import "../styles/result.css";
import heroImage from "../assets/result-illustration.png";

function ResultPage() {
  return (
    <div className="page-wrapper">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">Q</span> Bloodgroup Detector
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Accuracy</a></li>
          <li>
            <button className="nav-btn">Get Started</button>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Get your <span>Results</span>
          </h1>
          <p>New way of Detecting Blood Group with Fingerprint</p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Bloodgroup Illustration" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📦</div>
          <h3>Lorem Ipsum</h3>
          <p>
            Voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <h3>Dolor Sitema</h3>
          <p>
            Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip exa
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Sed ut perspiciatis</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          </p>
        </div>
      </section>

      {/* RESULT TEXT */}
      <section className="prediction">
        <h2>Blood Group Predicted is</h2>
        <p className="predicted-value">B+</p>
      </section>
    </div>
  );
}

export default ResultPage;
