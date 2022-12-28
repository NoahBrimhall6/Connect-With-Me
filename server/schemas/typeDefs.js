const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    profileType: String
    availableToWork: Boolean
    posts: [Post]
    comments: [Comment]
    jobPostings: [JobPosting]
    resume: String
  }

  type Post {
    _id: ID
    title: String
    body: String
    username: String
    likes: [User]
    dislikes: [User]
    comments: [Comment]
  }

  type Comment {
    _id: ID
    body: String
    username: String
  }

  type JobPosting {
    _id: ID
    title: String
    body: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    posts: [Post]
    comments: [Comment]
    jobPostings: [JobPosting]
  }

type Mutation {
  addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
  login(email: String!, password: String!): Auth
}
`


module.exports = typeDefs;