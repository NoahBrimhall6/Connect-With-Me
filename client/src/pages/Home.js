import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import PostList from '../components/PostList';

import { QUERY_POSTS } from '../utils/queries';

// posting to the page, but it is not saving on refresh, need database


export default function Home() {
  // Query Posts
  const { loading, data } = useQuery(QUERY_POSTS);
  const postData = data?.posts || [];

  // Comments section use state to show and hide comments
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Get current Date
  const current = new Date();
  const date = `${current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  // Logic to show the modal when creating a post
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Post button -- when user creates a clicks submit, will appear on feed
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new post to the posts array
    setPosts([...posts, formData]);
    // Clear form data
    setFormData({});
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <header className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5">
        <div className="flex flex-col justify-center items-center m-10 bg-gray-900 p-6 rounded-lg">
          <h3 className="bold text-2xl mb-2 text-white">Create a Post</h3>
          <div>
            <button
              className="createPost px-6 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 "
              placeholder="Start your post here"
              onClick={toggleModal}
            >Start</button>
            {isOpen && (
              <div
                className="modal-overlay"
                onClick={toggleModal}
                role="button"
                tabIndex={0}
              >
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <form onSubmit={handleSubmit}>
                    <h3 className="heading text-center font-bold text-2xl m-5 text-gray-800">
                      New Post
                    </h3>
                    <div className="bg-gray-800 editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl rounded-lg">
                      <input
                        className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                        spellcheck="false"
                        placeholder="Title"
                        type="text"
                        name="title"
                        onChange={handleChange}
                      />
                      <textarea
                        className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                        spellcheck="false"
                        placeholder="Describe everything about this post here"
                        name="content"
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                    <div className="buttons mx-2 my-3 col-start-5 col-span-1 mr-10">
                      <button
                        className="btn border border-teal-500 p-1 px-4 font-semibold cursor-pointer text-white ml-2 bg-teal-600 rounded-lg m-1 hover:bg-teal-500"
                        type="submit"
                      >
                        Post
                      </button>
                      <button
                        onClick={toggleModal}
                        className="btn border border-gray-800 p-1 px-4 font-semibold cursor-pointer bg-gray-900 text-white ml-auto rounded-lg m-1 mr-4 hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Feed section starts here */}
      <div className="xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 grid grid-cols-8 grid-rows-6 gap-3 rounded-md text-white p-4 gridFeed">
        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-7 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-1 sm:row-end-5 col-start-1 col-end-9 row-start-1 row-end-5">

          {/* THIS IS THE TEMPLATE TO USE when mapping through posts -- updated styling to fix bugs */}
            <PostList posts={postData} />
          {/* END OF TESTING HERE !!!  */}

        </div>

        <div className="bg-gray-900 rounded-lg p-4 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-7 md:col-start-7 md:col-end-9 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-9 sm:row-start-5 sm:row-end-7 col-start-1 col-end-9 row-start-5 row-end-7 flex flex-col items-center">
          <h1 className="profileHeaders m-2">Connections</h1>

          {/* start of connection card template -- will map through this? */}
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Sally Sue
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
          {/* end of connection card template */}

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Keke Christen
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Jonny Flicker
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
            <div className="flex flex-col items-center pb-5 pt-5">
              <h5 className="text-xl font-medium text-gray-900 text-center">
                Hannah Parker
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
