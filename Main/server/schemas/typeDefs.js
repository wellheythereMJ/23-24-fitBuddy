const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
    password: String
    
  }

  type Auth {
    token: ID
    user: User
  
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): User
    addUser(username: String!,  email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
