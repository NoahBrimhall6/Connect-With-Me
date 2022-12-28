import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      title
      body
      username
      createdAt
      comments
      commentCount
      likesCount
      dislikesCount
    }
  }
`;

export const QUERY_CONNECTIONS = gql`
  
`;