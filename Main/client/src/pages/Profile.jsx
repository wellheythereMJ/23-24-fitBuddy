import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="../assets/profile-picture.jpg" alt="Profile" className="profile-picture" />
        <h1 className="profile-name">John Doe</h1>
      </div>
      <div className="profile-details">
        <h2>About Me</h2>
        <p>
          Hello! I'm John Doe, a fitness enthusiast and software developer. I love working out and helping others achieve their fitness goals.
        </p>
        <h2>My Goals</h2>
        <ul>
          <li>Run a marathon</li>
          <li>Improve my strength</li>
          <li>Maintain a healthy diet</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
