import React from "react";
import Auth from '../utils/auth';
import PostList from '../components/PostList';
import CreatePost from '../components/CreatePost';
import ConnectionList from '../components/ConnectionList';

export default function Home() {
  const userID = Auth.getProfile().data._id;

  return (
    <>
      <CreatePost userID={userID}/>

      {/* Feed section starts here */}
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 grid grid-cols-8 grid-rows-6 gap-3 rounded-md text-white p-4 gridFeed">
        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-7 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-1 sm:row-end-5 col-start-1 col-end-9 row-start-1 row-end-5">
          <PostList userID={userID}/>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-7 md:col-start-7 md:col-end-9 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-5 sm:row-end-7 col-start-1 col-end-9 row-start-5 row-end-7 flex flex-col items-center">
          <h1 className="profileHeaders m-2">Connections</h1>
          <ConnectionList userID={userID}/>
        </div>
      </div>
    </>
  );
}
