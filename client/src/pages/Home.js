import React from "react";
import Auth from '../utils/auth';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import ConnectionList from '../components/ConnectionList';

import { useQuery } from "@apollo/client";
import { useMutation } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';
import { ADD_CONNECTION, LIKE_POST, DISLIKE_POST, CREATE_POST } from '../utils/mutations';

export default function Home() {
  // Force react to update
  const [_, updateState] = React.useState();
  const forceUpdate = () => updateState({});

  // Get users profile
  const userID = Auth.getProfile().data._id;

  // Query Posts
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  // Click the pink heart to add post author to your connections list
  const [addConnection] = useMutation(ADD_CONNECTION);
  const connection = async (connectionID) => {
    try {
      const { data } = await addConnection({
        variables: { id: userID, connections: connectionID }
      })
      forceUpdate();
      window.location.assign('/');
    } catch (err) { console.error(err) };
  };

  // Like posts
  const [likePost] = useMutation(LIKE_POST);
  const like = async (postID) => {
    try {
      const { data } = await likePost({
        variables: { userID, postID }
      });
      forceUpdate();
      window.location.assign('/');
    } catch (err) {
      console.error(err);
    }
  };

  // Dislike posts
  const [dislikePost] = useMutation(DISLIKE_POST);
  const dislike = async (postID) => {
    try {
      const { data } = await dislikePost({
        variables: { userID, postID }
      });
      forceUpdate();
      window.location.assign('/');
    } catch (err) {
      console.error(err);
    }
  };

  // Create Post
  const [createPost] = useMutation(CREATE_POST);
  const newPost = async (post) => {
    try {
      const { data } = await createPost({ variables: { ...post, author: userID } })
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <CreatePost newPost={newPost}/>
      {/* Feed section starts here */}
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 grid grid-cols-8 grid-rows-6 gap-3 rounded-md text-white p-4 gridFeed">
        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-7 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-1 sm:row-end-5 col-start-1 col-end-9 row-start-1 row-end-5">
          {loading ? <h3>Loading...</h3> : <PostList posts={posts} connection={connection} like={like} dislike={dislike} />}
        </div>

        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-7 md:col-start-7 md:col-end-9 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-5 sm:row-end-7 col-start-1 col-end-9 row-start-5 row-end-7 flex flex-col items-center">
          <h1 className="profileHeaders m-2">Connections</h1>
          <ConnectionList userID={userID}/>
        </div>
      </div>
    </>
  );
}
