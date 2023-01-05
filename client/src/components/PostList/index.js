import React from 'react';
import Post from '../Post';

export default function PostList({ posts, connection, like, dislike, newComment }) {
  if (!posts.length) {return <h3>No Posts Yet</h3>};
  return posts.map((post) => <Post key={post._id} post={post} connection={connection} like={like} dislike={dislike} newComment={newComment}/>)    
};

