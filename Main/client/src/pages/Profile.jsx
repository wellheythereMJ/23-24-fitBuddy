import React from 'react';
import { users } from '../utils/users';
import './Profile.css';

// __________                _____.__.__                   __                
// \______   \_______  _____/ ____\__|  |   ____          |__| _________  ___
//  |     ___/\_  __ \/  _ \   __\|  |  | _/ __ \         |  |/  ___/\  \/  /
//  |    |     |  | \(  <_> )  |  |  |  |_\  ___/         |  |\___ \  >    < 
//  |____|     |__|   \____/|__|  |__|____/\___  > /\ /\__|  /____  >/__/\_ \
//                                             \/  \/ \______|    \/       \/

const Profile = () => {
  // const { username } = 'user1';
  const user = users[0];
  if (!user) {
    return <h1>User not found</h1>;
  }
  return (
    <div className="profile-container">
      <div className="settings">
        <button></button>
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