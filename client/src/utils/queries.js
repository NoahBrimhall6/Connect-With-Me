import { gql } from '@apollo/client';

// Queries all posts for the homepage
export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      body
      createdAt
      likesCount
      dislikesCount
      commentCount
      author {
        _id
        username
        firstName
        lastName
        resume {
          prevJ1Title
        }
      }
      comments {
        _id
        body
        createdAt
        author {
          _id
          username
          firstName
          lastName
        }
      }
    }
  }
`;

// myUser(_id: $id) {
//   _id
//   username
//   firstName
//   lastName
//   resume {
//     prevJ1Title
//   }
// }



// Queries a single users connections
export const QUERY_CONNECTIONS = gql`
query connections($id: ID!) {
  myUser(_id: $id) {
    username
    _id
    connections {
      _id
      username
      firstName
      lastName
    }
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
query myUser($id: ID!) {
  myUser(_id: $id) {
    _id
    email
    firstName
    lastName
    password
    resume {
      _id
      fullName
      email
      location
      summary
      phone
      skills
      education
      educationType
      educationLength
      prevJ1Title
      prevJ1Company
      prevJ1Length
      prevJ1Responsibilities
      prevJ2Title
      prevJ2Company
      prevJ2Length
      prevJ2Responsibilities
      prevJ3Title
      prevJ3Company
      prevJ3Length
      prevJ3Responsibilities
    }
    username
  }
}`

//Query all users for search -Manamana
export const QUERY_SEARCHUSERS = gql`
query Users {
  users {
    firstName
    lastName
    username
    email
  }
}`

// Queries all posts for the homepage
export const QUERY_NEW_POSTS = gql`
  query getPosts {
    posts {
      _id
      title
      body
      createdAt
      likesCount
      dislikesCount
      commentCount
      author {
        _id
        username
        firstName
        lastName
        resume {
          prevJ1Title
        }
      }
      comments {
        _id
        body
        createdAt
        author {
          _id
          username
          firstName
          lastName
        }
      }
    }
  }
`;
