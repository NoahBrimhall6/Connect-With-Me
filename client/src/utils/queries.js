import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      title
      body
      username
      createdAt
      likes
      dislikes
      comments
      commentCount
    }
  }
`;