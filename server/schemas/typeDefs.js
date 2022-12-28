const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
    profileType: Integer
    availableToWork: Boolean
    posts: [Post]
    comments: [Comment]
    jobPostings: [JobPosting]
    resume: Resume
  }

  type Post {
    _id: ID
    title: String
    body: String
    username: String
    upVotes: [User]
    downVotes: [User]
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
    upVotes: [User]
    downVotes: [User]
    comments: [Comment]
  }

  type Query {
    users: [User]
    posts: [Post]
    comments: [Comment]
    jobPostings: [JobPosting]
  }

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
}
`