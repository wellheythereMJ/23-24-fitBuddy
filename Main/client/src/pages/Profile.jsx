import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axiosInstance';
import { AuthContext } from '../AuthContext';
import './Profile.css';

// __________                _____.__.__                   __                
// \______   \_______  _____/ ____\__|  |   ____          |__| _________  ___
//  |     ___/\_  __ \/  _ \   __\|  |  | _/ __ \         |  |/  ___/\  \/  /
//  |    |     |  | \(  <_> )  |  |  |  |_\  ___/         |  |\___ \  >    < 
//  |____|     |__|   \____/|__|  |__|____/\___  > /\ /\__|  /____  >/__/\_ \
//                                             \/  \/ \______|    \/       \/

const Profile = () => {
  const { username } = useParams();
  const { authToken } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/users/profile/${username}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (authToken) {
      fetchUserData();
    }
  }, [authToken, username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>{userData.username}'s Profile</h1>
      </header>
      <main className="profile-main">
        <section className="profile-info">
          <h2>Profile Information</h2>
          <p>Email: {userData.email}</p>
          <img src={userData.profilePicture} alt={`${userData.username}'s profile`} />
        </section>
        <section className="profile-actions">
          <h2>Actions</h2>
          <div className="profile-buttons">
            <a href="/dashboard" className="profile-button">Go to Dashboard</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
