import React from 'react';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1>Welcome to HorsePower</h1>
        <p>Your personal fitness companion</p>
      </header>
      <main className="welcome-main">
        <section className="welcome-intro">
          <h2>About Us</h2>
          <p>
            HorsePower is your go-to fitness app to track your workouts, monitor your progress, and achieve your fitness goals. Join our community today and start your journey to a healthier lifestyle.
          </p>
        </section>
        <section className="welcome-links">
          <h2>Get Started</h2>
          <div className="welcome-buttons">
            <a href="/login" className="welcome-button">Login</a>
            <a href="/signup" className="welcome-button">Sign Up</a>
          </div>
        </section>
      </main>
      <footer className="welcome-footer">
        <p>&copy; 2024 HorsePower. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
