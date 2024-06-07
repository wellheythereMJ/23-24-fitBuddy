import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { AuthContext } from '../AuthContext';
import './Profile.css';

// const GET_USER_PROFILE = gql`
//   query GetUserProfile($id: ID!) {
//     user(id: $id) {
//       id
//       name
//       email
//       profilePicture
//     }
//   }
// `;

const Profile = () => {
  const { id } = useParams();
  const { authToken } = useContext(AuthContext);
  const { loading, error, data } = useQuery(GET_USER_PROFILE, {
    variables: { id },
    context: {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data?.user;

  return (
    <div className="profile">
      <h1>{user.name}'s Profile</h1>
      <img src={user.profilePicture} alt={`${user.name}'s profile`} />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
