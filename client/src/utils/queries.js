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

// export const QUERY_CONNECTIONS = gql`
  
// `;