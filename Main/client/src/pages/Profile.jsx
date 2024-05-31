import React from 'react';
import { useParams } from 'react-router-dom';
import { users } from '../utils/users';
import './Profile.css';

// __________                _____.__.__                   __                
// \______   \_______  _____/ ____\__|  |   ____          |__| _________  ___
//  |     ___/\_  __ \/  _ \   __\|  |  | _/ __ \         |  |/  ___/\  \/  /
//  |    |     |  | \(  <_> )  |  |  |  |_\  ___/         |  |\___ \  >    < 
//  |____|     |__|   \____/|__|  |__|____/\___  > /\ /\__|  /____  >/__/\_ \
//                                             \/  \/ \______|    \/       \/

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
        <section className="profile-actions">
        <h2>Actions</h2>
        <div className="profile-buttons">
          <a href="/dashboard" className="profile-button">Go to Dashboard</a>
          <a href="/welcome" className="profile-button">Go to Welcome</a>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Profile;
