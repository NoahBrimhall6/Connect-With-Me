import { gql } from '@apollo/client';

// Queries all posts for the homepage
export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      author {
        _id
        firstName
        lastName
        username
        resume {
          prevJ1Title
        }
        _id
      }
      commentCount
      comments {
        _id
        author {
          _id
          firstName
          lastName
          username
          resume {
            prevJ1Title
          }
        }
        body
        createdAt
      }
      createdAt
      dislikes {
        username
      }
      dislikesCount
      likesCount
      title
      body
      likes {
        username
      }
    }
  }
`;

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

export const QUERY_JOBPOST = gql`
  query jobPost($id: ID!) {
    jobPost(_id: $id) {
      _id
      title
      description
      salary
      contact
      zipcode
      qualifications
      responsibilities
      createdAt
    }
  }
`;

export const QUERY_MYUSER = gql`
query myUser($id: ID!) {
  myUser(_id: $id) {
    _id
    connections {
      _id
    }
    email
    firstName
    lastName
    password
    resume {
      _id
      education
      educationLength
      educationType
      email
      fullName
      location
      phone
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
      summary
    }
    username
  }
}
`

//Query all users for search -Manamana
export const QUERY_SEARCHUSERS = gql`
query Users {
  users {
    _id
    firstName
    lastName
    username
    email
  }
}`

// Queries Job Listings
export const QUERY_JOBPOSTINGS = gql`
  query jobPostings {
    jobPostings {
      _id
      title
      description
      salary
      contact
      zipcode
      qualifications
      responsibilities
      createdAt
    }
  }
`;
