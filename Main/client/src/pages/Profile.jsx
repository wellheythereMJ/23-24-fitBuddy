import React, { useState } from 'react';
import { users } from '../utils/users';
import './Profile.css';

const Profile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const user = users[4];

  if (!user) {
    return <h1>User not found</h1>;
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="profile-container">
      <div className="settings">
        <button onClick={toggleDropdown}>Settings</button>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <ul>
              <li>Profile Settings</li>
              <li>Workout Plan</li>
              <li>Change User</li>
            </ul>
          </div>
        )}
      </div>
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h1 className="profile-name">{user.name}</h1>
      </div>
      <div className="profile-details">
        <h2>About Me</h2>
        <p>{user.bio}</p>
        <h2>My Goals</h2>
        <ul>
          {user.goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
