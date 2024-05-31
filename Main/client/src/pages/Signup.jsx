import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users, profilePictures } from '../utils/users';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [goals, setGoals] = useState('');
  const [profilePicture, setProfilePicture] = useState(profilePictures[0]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (users.some(user => user.username === username)) {
      alert('Username already taken');
      return;
    }
    users.push({
      username,
      password,
      name,
      bio,
      goals: goals.split(',').map(goal => goal.trim()),
      profilePicture
    });
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>
        <label>
          Goals (comma-separated):
          <input
            type="text"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
          />
        </label>
        <label>
          Profile Picture:
          <select
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          >
            {profilePictures.map((picture, index) => (
              <option key={index} value={picture}>
                Profile Picture {index + 1}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <div className="preview">
        <h2>Profile Picture Preview</h2>
        <img src={profilePicture} alt="Profile Preview" className="profile-preview" />
      </div>
    </div>
  );
};

export default Signup;
