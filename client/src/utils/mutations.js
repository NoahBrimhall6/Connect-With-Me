import { gql } from '@apollo/client';

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
mutation updateResume($fullName: String, $email: String, $location: String, $skills: String, $education: String, $prevJ1Title: String, $prevJ1Company: String, $prevJ1Length: String, $prevJ1Responsibilities: String, $prevJ2Title: String, $prevJ2Company: String, $prevJ2Length: String, $prevJ2Responsibilities: String, $prevJ3Title: String, $prevJ3Company: String, $prevJ3Length: String, $prevJ3Responsibilities: String) {
  updateResume(fullName: $fullName, email: $email, location: $location, skills: $skills, education: $education, prevJ1Title: $prevJ1Title, prevJ1Company: $prevJ1Company, prevJ1Length: $prevJ1Length, prevJ1Responsibilities: $prevJ1Responsibilities, prevJ2Title: $prevJ2Title, prevJ2Company: $prevJ2Company, prevJ2Length: $prevJ2Length, prevJ2Responsibilities: $prevJ2Responsibilities, prevJ3Title: $prevJ3Title, prevJ3Company: $prevJ3Company, prevJ3Length: $prevJ3Length, prevJ3Responsibilities: $prevJ3Responsibilities) {
    _id
    resume
  }
}
`