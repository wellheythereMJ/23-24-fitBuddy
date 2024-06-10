import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../utils/users';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { username } = useParams();
  const user = users.find((u) => u.username === username);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate()

  if (!user) {
    return <h1>User not found</h1>;
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="profile-container">
      <div className="settings">
        <button onClick={toggleDropdown}>Options</button>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <ul>
              <li><a onClick={() => {
                if (dropdownVisible) {navigate(`/Settings/${user.username}`)}
              }}>Profile Settings</a></li>
              <li><a onClick={() => {
                if (dropdownVisible) {navigate(`/dashboard/${user.username}`)}
              }}>My Plans</a></li>
              <li><a onClick={() => {
                if (dropdownVisible) {navigate('/login')}
              }}>Change User</a></li>
              <li><a onClick={() =>{
                if (dropdownVisible) {navigate('/')}
              }}>Home</a></li>
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
