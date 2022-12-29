const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    password: String
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
    createdAt: String
    likes: [User]
    dislikes: [User]
    comments: [Comment]
    commentCount: String
    likesCount: String
    dislikesCount: String
  }

  type Comment {
    _id: ID
    comment: String
    author: String
    createdAt: String
    likes: [User]
    dislikes: [User]
  }

  type JobPosting {
    _id: ID
    title: String
    body: String
    username: String
    createdAt: String
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