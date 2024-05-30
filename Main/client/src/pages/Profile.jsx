import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../utils/users';
import './Profile.css';

const Profile = () => {
  const { username } = useParams();
  const user = users.find((u) => u.username === username);

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div className="profile-container">
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
