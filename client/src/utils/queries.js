import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      body
      username
      createdAt
      comments {
        _id
        comment
        author
        createdAt
      }
      commentCount
      likesCount
      dislikesCount
    }
  }
`;


//Queries a single user by username and returns all fields in ID value.
export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    firstName
    lastName
    email
    password
    resume {
      _id
      education
      email
      location
      prevJ1Company
      prevJ1Length
      prevJ1Responsibilities
      prevJ1Title
      prevJ2Company
      prevJ2Length
      prevJ2Responsibilities
      prevJ2Title
      prevJ3Company
      prevJ3Length
      prevJ3Responsibilities
      prevJ3Title
      skills
    }
    posts {
      _id
    }
    jobPostings {
      _id
    }
    comments {
      _id
    }
  }
}`


export const QUERY_MYUSER = gql`
query myUser($id: ID) {
  myUser(_id: $id) {
    _id
    username
    firstName
    lastName
    email
    password
    resume {
      _id
      fullName
      education
      educationType
      educationLength
      summary
      email
      phone
      location
      prevJ1Company
      prevJ1Length
      prevJ1Responsibilities
      prevJ1Title
      prevJ2Company
      prevJ2Length
      prevJ2Responsibilities
      prevJ2Title
      prevJ3Company
      prevJ3Length
      prevJ3Responsibilities
      prevJ3Title
      skills
    }
    posts {
      _id
    }
    jobPostings {
      _id
    }
    comments {
      _id
    }
  }
}`


// export const QUERY_CONNECTIONS = gql`
  
// `;