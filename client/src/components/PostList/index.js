import React from 'react';
import { useQuery } from "@apollo/client";
import Post from '../Post';
import { QUERY_POSTS } from '../../utils/queries';

export default function PostList() {
  // Query Posts
  const { loading, data } = useQuery(QUERY_POSTS);
  if (loading) {return <h3>Loading...</h3>};

  const posts = data?.posts || [];
  if (!posts.length) {return <h3>No Posts Yet</h3>};

  return posts.map((post) => <Post key={post._id} post={post} />)    
};


