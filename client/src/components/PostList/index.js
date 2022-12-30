import React from 'react';
import Post from '../Post';

export default function PostList({ posts }) {
  if (!posts.length) {return <h3>No Posts Yet</h3>};

  return (
    posts.map((post) => {
      return (
        <Post post={post} />
      )
    })    
  )
};


