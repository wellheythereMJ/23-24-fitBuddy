import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation signup(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
export const CREATE_USER = gql`
  mutation createUser($_id: String!, $username: String!, $password: String) {
    createUser(_id: $_id, username: $username, password: $password) {
      _id
      username
      password
    }
  }
`;
