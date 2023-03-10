import { gql } from '@apollo/client';

export const ADD_CONNECTION = gql`
  mutation addConnection($id: ID!, $connections: ID!) {
    addConnection(id: $id, connections: $connections) {
      username
      connections {
        _id
      }
    }
  }
`;

export const REMOVE_CONNECTION = gql`
  mutation removeConnection($id: ID!, $connections: ID!) {
    removeConnection(id: $id, connections: $connections) {
      username
      connections {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_RESUME = gql `
mutation updateResume($fullName: String, $email: String, $summary: String, $phone: String, $location: String, $skills: String, $education: String, $educationType: String, $educationLength: String, $prevJ1Title: String, $prevJ1Company: String, $prevJ1Length: String, $prevJ1Responsibilities: String, $prevJ2Title: String, $prevJ2Company: String, $prevJ2Length: String, $prevJ2Responsibilities: String, $prevJ3Title: String, $prevJ3Company: String, $prevJ3Length: String, $prevJ3Responsibilities: String) {
  updateResume(fullName: $fullName, email: $email, summary: $summary, phone: $phone, location: $location, skills: $skills, education: $education, educationType: $educationType, educationLength: $educationLength, prevJ1Title: $prevJ1Title, prevJ1Company: $prevJ1Company, prevJ1Length: $prevJ1Length, prevJ1Responsibilities: $prevJ1Responsibilities, prevJ2Title: $prevJ2Title, prevJ2Company: $prevJ2Company, prevJ2Length: $prevJ2Length, prevJ2Responsibilities: $prevJ2Responsibilities, prevJ3Title: $prevJ3Title, prevJ3Company: $prevJ3Company, prevJ3Length: $prevJ3Length, prevJ3Responsibilities: $prevJ3Responsibilities) {
    _id
    resume
  }
}
`;

// Create a post mutation
export const CREATE_POST = gql `
mutation createPost($title: String!, $body: String!, $author: ID!) {
  createPost(title: $title, body: $body, author: $author) {
    _id
    title
    body
    author {
      _id
      username
    }
  }
}
`;

export const DELETE_POST = gql`
mutation deletePost($id: ID!, $author: ID!) {
  deletePost(id: $id, author: $author) {
    _id
  }
}
`;

export const CREATE_COMMENT = gql `
  mutation createComment($body: String!, $author: ID!, $postId: ID!) {
    createComment(body: $body, author: $author, postId: $postId) {
      _id
      body
      author {
        _id
        username
      }
    }
  }
`;

export const CREATE_JOB = gql`
  mutation createJob($title: String!, $description: String!, $salary: String!, $contact: String!, $zipcode: String!, $qualifications: String, $responsibilities: String) {
    createJob(title: $title, description: $description, salary: $salary, contact: $contact, zipcode: $zipcode, qualifications: $qualifications, responsibilities: $responsibilities) {
      _id
      title
      description
      salary
      contact
      zipcode
      qualifications
      responsibilities
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($userID: ID!, $postID: ID!) {
    likePost(userId: $userID, postId: $postID) {
      _id
      title
      likes {
        _id
      }
      dislikes {
        _id
      }
    }
  }
`;

export const DISLIKE_POST = gql`
  mutation dislikePost($userID: ID!, $postID: ID!) {
    dislikePost(userId: $userID, postId: $postID) {
      _id
      title
      likes {
        _id
      }
      dislikes {
        _id
      }
    }
  }
`;
