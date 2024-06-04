const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    token: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(username: String!, password: String!): User
    signup(username: String!, password: String!): User
  }
`;

module.exports = typeDefs;
