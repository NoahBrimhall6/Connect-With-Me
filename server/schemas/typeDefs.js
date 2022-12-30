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
    resume: Resume
  }

  type resumeUpdate {
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

  type Resume {
    _id: ID
    fullName: String
    email: String
    location: String
    summary: String
    phone: String
    skills: String
    education: String
    educationType: String
    educationLength:String
    prevJ1Title: String
    prevJ1Company: String
    prevJ1Length: String
    prevJ1Responsibilities: String
    prevJ2Title: String
    prevJ2Company: String
    prevJ2Length: String
    prevJ2Responsibilities: String
    prevJ3Title: String
    prevJ3Company: String
    prevJ3Length: String
    prevJ3Responsibilities: String
  }



  type Query {
    users: [User]
    posts: [Post]
    user(username: String!): User
    myUser(_id: ID): User
    comments: [Comment]
    jobPostings: [JobPosting]
  }

type Mutation {
  addUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): Auth
  login(email: String!, password: String!): Auth
  updateResume(fullName: String, email: String, summary: String, phone: String, location: String, skills: String, education: String, educationType: String, educationLength: String, prevJ1Title: String, prevJ1Company: String, prevJ1Length: String, prevJ1Responsibilities: String, prevJ2Title: String, prevJ2Company: String, prevJ2Length: String, prevJ2Responsibilities: String, prevJ3Title: String, prevJ3Company: String, prevJ3Length: String, prevJ3Responsibilities: String):resumeUpdate
}
`


module.exports = typeDefs;